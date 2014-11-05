# iTable for Mootools

El componente iTable se inspira en tres componentes similares: [Omnigrid](http://www.omnisdata.com/) Omnigrid desarrolado por Marko Šantić, abandonado en el año 2012 ya que la empresa [OmnisData](http://www.omnisdata.com/) se dedicó totalmente a los Sistemas de Información Geografica [GIS](http://en.wikipedia.org/wiki/Geographic_information_system), [FlexGrid](http://flexigrid.info/) desarrollado por Paulo P. Marinas para el Framework [jQuery](http://www.jquery.com/) y [Phatfusion ortableTable](http://www.phatfusion.net/sortabletable/) escrito en [Mootools](http://mootools.net/) por Samuel Birch. Esta clase escrita en [AJAX](http://es.wikipedia.org/wiki/AJAX) se crea debido a la necesidad de un [DataGrid](http://msdn.microsoft.com/es-es/library/system.web.ui.webcontrols.datagrid(v=vs.110).aspx) refinado para la biblioteca [MooTools](http://mootools.net/), es decir un "Control de lista enlazado a datos" que visualice los elementos del origen de datos en un modelo o componente grafico tipo tabla, permitiendo seleccionar, ordenar y editar estos elementos. La idea y adaptación original para la plataforma [Mootools](http://mootools.net/) es de Marko Šantić de empresa Omnisdata Ltd quien proveía este código bajo una licencia MIT.  El texto de la licencia no tiene copyright, lo que permite su modificación. No obstante el autor se vio obligado a usar esta licencia por la similitud estructural de la clase con el FlexGrid de jQuery(Versiones Antiguas), como si se tratara una modificación, y no una versión original. La licencia MIT es muy parecida a la licencia BSD en cuanto a efectos. Y más que adicionar nuevas características, mi propósito ha sido realizar una reingeniería del código para estandarizar y optimizar sus procesos creando una versión original con remembranza de sus ancestros, que se adapte a mis necesidades y sea compatible con la plataforma Mootools en su versión 1.5.x para el uso en el mis proyectos y el Framework Insside, como si se tratase de de un Pluggin del mismo. Este repositorio sufría constantes actualizaciones durante el último trimestre del año 2014 y limitara su dependencia a [Mootools-Core](http://mootools.net/download) y el modulo Drag [Mootools-More](http://mootools.net/more/f7005197184c1ad698fa1b435a9aecc0) por adapatabilidad de sus procedimientos y compatibilidad avanzada con la mayoria de los navegadores.

### Options

Here are the total list of options you can set both in javascript way of directly into the html (showHeader -> data-show-header) and defaults values
Options set in HTML overides thus set in JS

 * alternaterows: true
 * showHeader: true
 * sortHeader: false
 * resizeColumns: true
 * selectable: true
 * serverSort: true
 * sortOn: null
 * sortBy: 'ASC'
 * filterHide: true
 * filterHideCls: 'hide'
 * filterSelectedCls: 'filter'
 * multipleSelection: true
 * editable: false
 * editondblclick: false
 * accordion: false
 * accordionRenderer: null
 * autoSectionToggle: true
 * showtoggleicon: true
 * openAccordionOnDblClick: false
 * url: null
 * pagination: false
 * page: 1
 * perPageOptions: [10,20,50,100,200]
 * perPage: 10
 * filterInput: false
 * dataProvider: null
 * height: null
 * width: null


### Methods

 * constructor(el, options:Object):Object - el HTML element or string (element id) or element collection, options (see Usage section)
 * refresh():Nothing
 * loadData(url:String):Nothing
 * setData(data:Array):Nothing
 * setColumnModel(columnModel:Object):Nothing
 * getDataByRow():Object
 * setDataByRow(index:Number, data:Object):Nothing
 * getSelectedIndices():Array
 * removeAll():Nothing
 * filter(key:String):Nothing
 * clearFilter():Nothing
 * gotoPage(page:Number):Nothing
 * setPerPage(perpage:Number):Nothing

### Events
 * click - on row click
 * dblclick - on row double click

### Database response from server-script to Omnigrid

Response from dynamic scripts (php, asp, ...) that returns data from database must be in JSON format like this:
{"page":"1","total":"101","data":[{object},{object},{object},{object},...]}

### Database request from Omnigrid to server-script

Omnigrid will send following variables via POST method: \[page, perpage, \[sorton,sortby] (only if serverSort option is true) ]

### Column model

The column model can be set up by Javascript or in an automated way.

By javascript, define an array as this :

	var cmu = [
	{
		header: "Column name",
		dataIndex: 'database_attribut_name',
		dataType:'number|string|date|link',
		hidden:true|false,
		width:Number // column default width
align: 'left|center|right'

	},
	{Object},
	{Object},
	...
	]

Automatically defining an normal html table and data attributes (not working on IE)

These options are also available and all are optional :

 * data-type
 * data-index (data-index is set up automatically based on the th content, but if you do internationalization, you should define it anyway)
 * data-content-index
 * data-column-width
 * data-column-hidden
 * data-column-editable

```html
<table class="table-striped span5 text-center omnigrid" id="stats_users_payments">
  <thead>
    <tr>
      <th data-type="date" data-index="date">Date</th>
      <th data-index="email" data-column-width="200">Email</th>
      <th data-type="number">Number</th>
      <th>Amount</th>
      <th data-type="link">Ref</th>
    </tr>
  </thead>
  <!-- You can put here your fallback content in case of javascript is not active -->
</table>
```


## Usage

### Client side

```html
<link rel="stylesheet" media="screen" href="omnigrid.css" type="text/css" />
<script type="text/javascript" src="mootools/mootools-1.2.js"></script>
<script type="text/javascript" src="mootools/mootools-1.2-more.js"></script>
<script type="text/javascript" src="omnigrid.js"></script>

<script type="text/javascript">

    function onGridSelect(evt)
    {
         var str = 'row: '+evt.row+' indices: '+evt.indices;
         str += ' id: '+evt.target.getDataByRow(evt.row).id;

         alert( str );
    }

    function gridButtonClick(button, grid)
    {
         alert(button);
    }

    var cmu = [
            {
               header: "ID",
               dataIndex: 'help_category_id',
               dataType:'number'
            },
            {
               header: "Parent ID",
               dataIndex: 'parent_category_id',
               dataType:'number',
               width:50
            },
            {
               header: "Name",
               dataIndex: 'name',
               dataType:'string',
               width:200
            }];

    window.addEvent("domready", function(){

	    datagrid = new omniGrid('mygrid', {
	        columnModel: cmu,
	        buttons : [
	          {name: 'Add', bclass: 'add', onclick : gridButtonClick},
	          {name: 'Delete', bclass: 'delete', onclick : gridButtonClick},
	          {separator: true},
	          {name: 'Duplicate', bclass: 'duplicate', onclick : gridButtonClick}
	        ],
	        url:"data.php",
	        perPageOptions: [10,20,50,100,200],
	        perPage:10,
	        page:1,
	        pagination:true,
	        serverSort:true,
	        showHeader: true,
	        alternaterows: true,
	        showHeader:true,
	        sortHeader:false,
	        resizeColumns:true,
	        multipleSelection:true,

	        // uncomment this if you want accordion behavior for every row
	        /*
	        accordion:true,
	        accordionRenderer:accordionFunction,
	        autoSectionToggle:false,
	        */

	        width:600,
	        height: 400
	    });

	    datagrid.addEvent('click', onGridSelect);

     });

</script>

<div id="mygrid" ></div>
```

### Server Side

```php
// *********************** data.php ********************
<?php

	$pagination = false;
	if ( isset($_REQUEST["page"]) )
	{
		$pagination = true;

		$page = intval($_REQUEST["page"]);
		$perpage = intval($_REQUEST["perpage"]);
	}

	// this variables Omnigrid will send only if serverSort option is true
	$sorton = $_REQUEST["sorton"];
	$sortby = $_REQUEST["sortby"];

	mysql_connect("localhost", "root", "");
	mysql_select_db("mysql");

	$n = ( $page -1 ) * $perpage;



	$result = mysql_query("SELECT COUNT(*) AS count FROM help_category");
	$row = mysql_fetch_object($result);
	$total = $row->count;

	$limit = "";

	if ( $pagination )
		$limit = "LIMIT $n, $perpage";

	$result = mysql_query("SELECT * FROM help_category $limit");

	$ret = array();
	while ($row = mysql_fetch_object($result)) {
		array_push($ret, $row);
	}

	$ret = array("page"=>$page, "total"=>$total, "data"=>$ret);

	echo json_encode($ret);

	mysql_free_result($result);

?>
```
It is quasi compliant. I personally use these complementary CSS rules to make it full compliant :

``` css
.omnigrid div.pDiv span{
  line-height: 10px;
}
.omnigrid div.pDiv select
{
  padding: 1px;
  height: 18px;
}
.omnigrid div.pDiv .pPageStat, .omnigrid div.pDiv .pcontrol
{
  top: 0;
}
.omnigrid div.pDiv .pPageStat, .omnigrid div.pDiv .pcontrol input
{
  height: 17px;
  padding: 0;
  width: 30px;
}

.omnigrid div.pDiv div.pDiv2{
  width: auto;
}
```
