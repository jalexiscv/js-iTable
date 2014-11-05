# iTable - Insside Framewok®

El componente iTable se inspira en tres componentes similares: [Omnigrid](http://www.omnisdata.com/) desarrolado por Marko Šantić, abandonado en el año 2012 ya que la empresa [OmnisData](http://www.omnisdata.com/) se dedicó totalmente a los Sistemas de Información Geografica [GIS](http://en.wikipedia.org/wiki/Geographic_information_system), [FlexGrid](http://flexigrid.info/) desarrollado por Paulo P. Marinas para el Framework [jQuery](http://www.jquery.com/) y [Phatfusion ortableTable](http://www.phatfusion.net/sortabletable/) escrito en [Mootools](http://mootools.net/) por Samuel Birch. Esta clase escrita en [AJAX](http://es.wikipedia.org/wiki/AJAX) se crea debido a la necesidad de un [DataGrid](http://msdn.microsoft.com/es-es/library/system.web.ui.webcontrols.datagrid(v=vs.110).aspx) refinado para la biblioteca [MooTools](http://mootools.net/), es decir un "Control de lista enlazado a datos" que visualice los elementos del origen de datos en un modelo o componente grafico tipo tabla, permitiendo seleccionar, ordenar y editar estos elementos. La idea y adaptación original para la plataforma [Mootools](http://mootools.net/) es de Marko Šantić de empresa Omnisdata Ltd quien proveía este código bajo una licencia MIT.  El texto de la licencia no tiene copyright, lo que permite su modificación. No obstante el autor se vio obligado a usar esta licencia por la similitud estructural de la clase con el FlexGrid de jQuery(Versiones Antiguas), como si se tratara una modificación, y no una versión original. La licencia MIT es muy parecida a la licencia BSD en cuanto a efectos. Y más que adicionar nuevas características, mi propósito ha sido realizar una reingeniería del código para estandarizar y optimizar sus procesos creando una versión original con remembranza de sus ancestros, que se adapte a mis necesidades y sea compatible con la plataforma Mootools en su versión 1.5.x para el uso en el mis proyectos y el Framework Insside, como si se tratase de de un Pluggin del mismo. Este repositorio sufría constantes actualizaciones durante el último trimestre del año 2014 y limitara su dependencia a [Mootools-Core](http://mootools.net/download) y el modulo Drag [Mootools-More](http://mootools.net/more/f7005197184c1ad698fa1b435a9aecc0) por adapatabilidad de sus procedimientos y compatibilidad avanzada con la mayoria de los navegadores.

### Opciones

Aquí está la lista total de opciones que se pueden configurar ya los valores por defecto pueden sobre escribirse en el código fuente:

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


### Métodos

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

### Eventos
 * click - on row click
 * dblclick - on row double click

### Datos

Response from dynamic scripts (php, asp, ...) that returns data from database must be in JSON format like this:
{"page":"1","total":"101","data":[{object},{object},{object},{object},...]}

