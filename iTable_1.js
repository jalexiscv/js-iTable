var iTable = new Class({accordianOpen:function(li){
var section=this.getSection(li.retrieve('row'));if(this.options.autoSectionToggle){if(this.lastsection){if(this.lastsection!=section){this.lastsection.setStyle('display','none');this.lastsection.getPrevious().getElement('.toggleicon').setStyle('background-position','0 0');}}
if(!this.options.accordionRenderer){section.setStyle('display','block');}}
if(this.options.accordionRenderer){this.toggle(section);}
if(this.options.showtoggleicon){li.getElement('.toggleicon').setStyle('background-position',section.getStyle('display')=='block'?'-16px 0':'0 0');}
this.lastsection=section;},
addRow:function(data, row){
if(row>=0){if(!this.options.data){this.options.data=[];}
this.options.data.splice(row,0,data);this.reset();}},
altRow:function(){
this.elements.each(function(el,i){if(i%2){el.removeClass('erow');}else{el.addClass('erow');}});},
clearFilter:function(){
this.elements.each(function(el,i){el.removeClass(this.options.filterSelectedCls);if(this.options.filterHide){el.removeClass(this.options.filterHideCls);}},this);if(this.options.filterHide){this.altRow();this.filtered=false;}},
clickHeaderColumn:function(evt){
if(this.dragging)
return;var colindex=evt.target.retrieve('column');var columnModel=this.options.columnModel[colindex];this.container.getElements('.th').invoke('removeClass','ASC').invoke('removeClass','DESC');evt.target.removeClass(columnModel.sort);columnModel.sort=(columnModel.sort=='ASC')?'DESC':'ASC';evt.target.addClass(columnModel.sort);this.sort(colindex);},
deleteRow:function(row){
if(row>=0&&row<this.options.data.length){this.options.data.splice(row,1);this.reset();}},
draw:function(){
this.removeAll();this.container.empty();var width=this.options.width-(Browser.ie?2:2);var columnCount=this.options.columnModel?this.options.columnModel.length:0;if(this.options.width){this.container.setStyle('width',this.options.width);}
this.container.addClass('iTable');if(this.options.buttons){var tDiv=new Element('div').addClass('tDiv').setStyles({'width':width,'height':25+(Browser.ie?2:0)}).inject(this.container);var bt=this.options.buttons;for(var i=0;i<bt.length;i++){var fBt=new Element('div').inject(tDiv);if(bt[i].separator){fBt.addClass('btnseparator');continue;}
fBt.addClass('fbutton');var cBt=new Element('div');cBt.addEvent('click',bt[i].onclick.bind(this,[bt[i].bclass,this]));cBt.addEvent('mouseover',function(){this.addClass('fbOver');});cBt.addEvent('mouseout',function(){this.removeClass('fbOver');});fBt.appendChild(cBt);var icono=new Element('div').addClass("icono").inject(cBt);var imagen=new Element('i').addClass(bt[i].bclass).inject(icono);var etiqueta=new Element('div').addClass("etiqueta").inject(cBt);var texto=new Element('div').set('html',bt[i].name).inject(etiqueta);}}
var hDiv=new Element('div',{class:'hDiv',styles:{'width':width}}).inject(this.container);var hDivBox=new Element('div').addClass('hDivBox').inject(hDiv);this.sumWidth=0;this.visibleColumns=0;for(var c=0;c<columnCount;c++){var columnModel=this.options.columnModel[c];var div=new Element('div');if(columnModel.width==null)
this.options.columnModel[c].width=100;columnModel.sort='ASC';if(this.options.sortHeader){div.addEvent('click',this.clickHeaderColumn.bind(this));}
div.store('column',c);div.store('dataType',columnModel.dataType);div.addClass('th');div.setStyle('width',columnModel.width-(Browser.ie?6:6));hDivBox.appendChild(div);if(columnModel.hidden){div.setStyle('display','none');}else{this.sumWidth+=columnModel.width+20;this.visibleColumns++;}
var header=columnModel.header;if(header){div.innerHTML=header;}}
hDivBox.setStyle('width',this.sumWidth+this.visibleColumns*2);if(!this.options.showHeader){hDiv.setStyle('display','none');}
if(this.options.height){var bodyHeight=this.getBodyHeight();this.container.setStyle('height',this.options.height);}
if(this.options.resizeColumns){var cDrag=new Element('div').addClass('cDrag').setStyle('top',this.options.buttons?tDiv.getStyle('height').toInt():0).inject(this.container);var dragTempWidth=0;for(var c=0;c<columnCount;c++){var columnModel=this.options.columnModel[c];var dragSt=new Element('div');var headerHeight=this.options.showHeader?24+2:0;dragSt.setStyles({top:1,left:dragTempWidth+columnModel.width,height:headerHeight,display:'block'});dragSt.store('column',c);cDrag.appendChild(dragSt);dragSt.addEvent('mouseout',this.outDragColumn.bind(this));dragSt.addEvent('mouseover',this.overDragColumn.bind(this));var dragMove=new Drag(dragSt,{snap:0});dragMove.addEvent('drag',this.onColumnDragging.bind(this));dragMove.addEvent('start',this.onColumnDragStart.bind(this));dragMove.addEvent('complete',this.onColumnDragComplete.bind(this));if(columnModel.hidden)
dragSt.setStyle('display','none');else
dragTempWidth+=columnModel.width;}}
var bDiv=new Element('div');bDiv.addClass('bDiv');if(this.options.width){bDiv.setStyle('width',width);}
bDiv.setStyle('height',bodyHeight);this.container.appendChild(bDiv);this.onBodyScrollBind=this.onBodyScroll.bind(this);bDiv.addEvent('scroll',this.onBodyScrollBind);this.ulBody=new Element('ul');this.ulBody.setStyle('width',this.sumWidth+this.visibleColumns*(Browser.ie?1:1));bDiv.appendChild(this.ulBody);if(this.options.pagination&&!this.container.getElement('div.pDiv')){var pDiv=new Element('div').addClass('pDiv').setStyle('width',width).setStyle('height',25).inject(this.container);var pDiv2=new Element('div').addClass('pDiv2').inject(pDiv);var h='<div class="pGroup"><select class="rp input-mini" name="rp">';var optIdx;var setDefaultPerPage=false;for(optIdx=0;optIdx<this.options.perPageOptions.length;optIdx++){if(this.options.perPageOptions[optIdx]!=this.options.perPage)
h+='<option value="'+this.options.perPageOptions[optIdx]+'">'+this.options.perPageOptions[optIdx]+'</option>';else{setDefaultPerPage=true;h+='<option selected="selected" value="'+this.options.perPageOptions[optIdx]+'">'+this.options.perPageOptions[optIdx]+'</option>';}}
h+='</select></div>';h+='<div class="btnseparator"></div><div class="pGroup"><div class="pFirst pButton"></div><div class="pPrev pButton"></div></div>';h+='<div class="btnseparator"></div><div class="pGroup"><span class="pcontrol"><input class="cpage input-mini" type="text" value="1" size="4" style="text-align:center"/> / <span></span></span></div>';h+='<div class="btnseparator"></div><div class="pGroup"><div class="pNext pButton"></div><div class="pLast pButton"></div></div>';h+='<div class="btnseparator"></div><div class="pGroup"><div class="pReload pButton"></div></div>';h+='<div class="btnseparator"></div><div class="pGroup"><span class="pPageStat"></div>';if(this.options.filterInput)
h+='<div class="btnseparator"></div><div class="pGroup"><span class="pcontrol"><input class="cfilter" type="text" value="" style="" /><span></div>';pDiv2.innerHTML=h;var rpObj=pDiv2.getElement('.rp');if(!setDefaultPerPage&&rpObj.options.length>0){this.options.perPage=rpObj.options[0].value;rpObj.options[0].selected=true;}
pDiv2.getElement('.pFirst').addEvent('click',this.firstPage.bind(this));pDiv2.getElement('.pPrev').addEvent('click',this.prevPage.bind(this));pDiv2.getElement('.pNext').addEvent('click',this.nextPage.bind(this));pDiv2.getElement('.pLast').addEvent('click',this.lastPage.bind(this));pDiv2.getElement('.pReload').addEvent('click',this.refresh.bind(this));pDiv2.getElement('.rp').addEvent('change',this.perPageChange.bind(this));pDiv2.getElement('input.cpage').addEvent('keyup',this.pageChange.bind(this));if(this.options.filterInput)
pDiv2.getElement('input.cfilter').addEvent('change',this.firstPage.bind(this));}},
edit:function(options){
var sels=this.getSelectedIndices();if(!sels||sels.length==0||!this.options.editable)
return;this.finishEditing();var li=this.elements[sels[0]];var c=options.columnIndex?options.columnIndex:0;var colmod;if(options.dataIndex){for(;c<this.options.columnModel.length;c++){colmod=this.options.columnModel[c];if(colmod.hidden)
continue;if(colmod.dataIndex==options.dataIndex)
break;}}
if(c==this.options.columnModel.length)
return;colmod=this.options.columnModel[c];if(!colmod.editable){return;}
var td=li.getElements('div.td')[c];var data=this.options.data[sels[0]];var width=td.getStyle('width').toInt()-5;var height=15;var html=data[colmod.dataIndex];td.innerHTML="";var input=new Element('input',{style:"width: "+width+"px; height: "+height+"px;",maxlength:254,value:html});input.addClass('inline');input.addEvent("keyup",this.finishEditing.bind(this));input.addEvent("blur",this.finishEditing.bind(this));input.inject(td);input.focus();this.inlineEditSafe={row:sels[0],columnModel:colmod,td:td,input:input,oldvalue:html};this.inlineeditmode=true;return this.inlineEditSafe;},
filter:function(form){
var col=0;var key='';if(!(form.length>0))
this.clearFilter();key=form;if(key){for(var i=0;i<this.options.data.length;i++){var dat=this.options.data[i];for(var c=0;c<this.options.columnModel.length;c++){var columnModel=this.options.columnModel[c];if(columnModel.type=="checkbox")
continue;var el=this.elements[i];if(this.options.filterHide){el.removeClass('erow');}
if(dat[columnModel.dataIndex]!=null&&dat[columnModel.dataIndex].toLowerCase().indexOf(key)>-1){el.addClass(this.options.filterSelectedCls);if(this.options.filterHide){el.removeClass(this.options.filterHideCls);}
break;}else{el.removeClass(this.options.filterSelectedCls);if(this.options.filterHide){el.addClass(this.options.filterHideCls);}}}}
if(this.options.filterHide){this.filteredAltRow();this.filtered=true;}}},
filteredAltRow:function(){
this.ulBody.getElements('.'+this.options.filterSelectedCls).each(function(el,i){if(i%2){el.removeClass('erow');}else{el.addClass('erow');}});},
finishEditing:function(evt){
if(!this.inlineeditmode){return;}
if(evt&&evt.type=="keyup"&&evt.key!='enter'&&evt.key!='esc')
return;this.inlineeditmode=false;var row=this.inlineEditSafe.row;var data=this.options.data[row];var colmod=this.inlineEditSafe.columnModel;var td=this.inlineEditSafe.td;data[colmod.dataIndex]=(evt&&evt.type=="keyup"&&evt.key=='enter')?this.inlineEditSafe.input.value:this.inlineEditSafe.oldvalue;td.innerHTML=colmod.labelFunction?colmod.labelFunction(data,row,colmod):data[colmod.dataIndex];if(td.innerHTML.length==0)
td.innerHTML="&nbsp;";if(evt&&evt.type=="keyup"&&evt.key=='enter'&&this.inlineEditSafe.oldvalue!=td.innerHTML){this.inlineEditSafe.target=this;this.fireEvent("editcomplete",this.inlineEditSafe);}
this.inlineEditSafe=null;},
firstPage:function(){
this.options.page=1;this.refresh();},
getBodyHeight:function(){
var headerHeight=this.options.showHeader?24+2:0;var toolbarHeight=this.options.buttons?this.container.getElement('.tDiv').getStyle('height').toInt():0;var paginationToolbar=this.options.pagination?26:0;return this.options.height-headerHeight-toolbarHeight-paginationToolbar;},
getData:function(){
return(this.options.data);},
getDataByRow:function(row){
if(row>=0&&row<this.options.data.length)
return this.options.data[row];},
getLiParent:function(target){
target=$(target);while(target&&!target.hasClass('td')){target=target.getParent();}
if(target){return(target.getParent());}},
getOptions:function(){
return{alternaterows:true,showHeader:true,sortHeader:false,resizeColumns:true,selectable:true,serverSort:true,sortOn:true,sortBy:'ASC',filterHide:true,filterHideCls:'hide',filterSelectedCls:'filter',multipleSelection:true,editable:false,editondblclick:false,accordion:false,accordionRenderer:null,autoSectionToggle:true,showtoggleicon:true,openAccordionOnDblClick:false,url:null,pagination:false,page:1,perPageOptions:[10,20,50,100,200],perPage:10,filterInput:false,dataProvider:null};},
getSection:function(row){
return(this.ulBody.getElement('.section-'+row));},
getSelectedIndices:function(){
return(this.selected);},
gotoPage:function(page){
var maxpage=this.options.maxpage;if(page>0&&page<=maxpage){this.options.page=page;this.refresh();}},
hideLoader:function(){
if(!this.loader){return;}
this.hideWhiteOverflow();this.loader.dispose();this.loader=null;},
hideWhiteOverflow:function(i){
if(this.container.getElement('.gBlock'))
this.container.getElement('.gBlock').dispose();var pReload=this.container.getElement('div.pDiv .pReload');if(pReload)
pReload.removeClass('loading');},
initialize:function(container, options){
this.setOptions(this.getOptions(),options);this.container=$(container);if(!this.container){return;}
this.draw();this.reset();this.loadData();},
isHidden:function(i){
return(this.elements[i].hasClass(this.options.filterHideCls));},
lastPage:function(){
this.options.page=this.options.maxpage;this.refresh();},
loadData:function(url){
if(!this.options.url&&!this.options.dataProvider)
return;var param={};if(this.options.pagination)
param={page:this.options.page,perpage:this.options.perPage};if(this.options.serverSort){param.sorton=this.options.sortOn;param.sortby=this.options.sortBy;}
if(this.options.filterInput){var cfilter=this.container.getElement('input.cfilter');if(cfilter)
param.filter=cfilter.value;}
this.showLoader();if(this.options.dataProvider){this.options.dataProvider.loadData(param);}else{var url=(url!=null)?url:this.options.url;var request=new Request.JSON({url:url,data:param});request.addEvent("complete",this.onLoadData.bind(this));request.get();}},
nextPage:function(){
var next=this.options.page+1;var maxpage=this.options.maxpage;if(next>maxpage){return;}
this.options.page=next;this.refresh();},
onBodyClick:function(){},
onBodyMouseOut:function(){},
onBodyMouseOver:function(){},
onBodyScroll:function(){
var hbox=this.container.getElement('.hDivBox');var bbox=this.container.getElement('.bDiv');var xs=bbox.getScroll().x;hbox.setStyle('left',-xs);this.rePosDrag();},
onColumnDragComplete:function(target){
this.dragging=false;var colindex=target.retrieve('column');var cDrag=this.container.getElement('div.cDrag');var dragSt=cDrag.getElements('div')[colindex];var scrollX=this.container.getElement('div.bDiv').getScroll().x;this.sumWidth=0;for(var c=0;c<this.options.columnModel.length;c++){var columnModel=this.options.columnModel[c];if(c==colindex){var pos=dragSt.getStyle('left').toInt()+scrollX-this.sumWidth-(Browser.ie?-1:1);}else if(!columnModel.hidden)
this.sumWidth+=columnModel.width;}
if(pos<30)
pos=30
this.options.columnModel[colindex].width=pos;this.sumWidth+=pos;this.ulBody.setStyle('width',this.sumWidth+this.visibleColumns*(Browser.ie?1:1));var hDivBox=this.container.getElement('div.hDivBox');hDivBox.setStyle('width',this.sumWidth+this.visibleColumns*2);var columns=hDivBox.getElements('div.th');var columnObj=columns[colindex];columnObj.setStyle('width',pos-(Browser.ie?6:6));var visibleColumns=this.visibleColumns;var elements=this.ulBody.getElements('li.tr');elements.each(function(el,i){el.setStyle('width',this.sumWidth+2*visibleColumns);if(!el.hasClass('section')){var columns=el.getElements('div.td');var columnObj=columns[colindex];columnObj.setStyle('width',pos-(Browser.ie?6:6));}},this);this.rePosDrag();},
onColumnDragging:function(target){
target.setStyle('top',1);},
onColumnDragStart:function(target){
this.dragging=true;},
onLoadData:function(data){
this.setData(data);this.fireEvent("loaddata",{target:this,pkey:data.pkey});},
onMouseOver:function(obj){
obj.columnModel.onMouseOver(obj.element,obj.data);},
onRowClick:function(evt){
var li=this.getLiParent(evt.target);if(!li)
return;if(this.options.selectable){var currentindex=li.retrieve('row');var selectedNum=this.selected.length;var dontselect=false;if((!evt.control&&!evt.shift&&!evt.meta)||!this.options.multipleSelection){this.elements.each(function(el,i){el.removeClass('selected')},this);this.selected=new Array();}
if(evt.control||evt.meta){for(var i=0;i<selectedNum;i++){if(currentindex==this.selected[i])
{this.elements[currentindex].removeClass('selected');this.selected.splice(i,1);dontselect=true;}}}
if(evt.shift&&this.options.multipleSelection){var si=0;if(this.selected.length>0)
si=this.selected[selectedNum-1];var endindex=currentindex;startindex=Math.min(si,endindex);endindex=Math.max(si,endindex);for(var i=startindex;i<=endindex;i++){this.elements[i].addClass('selected');this.selected.push(Number(i));}}
if(!dontselect){li.addClass('selected');this.selected.push(Number(li.retrieve('row')));}
this.unique(this.selected,true);}
if(this.options.accordion&&!this.options.openAccordionOnDblClick){this.accordianOpen(li);}
this.fireEvent("click",{indices:this.selected,target:this,row:li.retrieve('row'),element:li});},
onRowDblClick:function(evt){
var li=this.getLiParent(evt.target);if(!li){return;}
var t=evt.target;if(this.options.editable&&this.options.editondblclick&&t.hasClass('td')){var childs=li.getChildren();for(var i=0;i<childs.length;i++){if(childs[i]==t)
break;}
var obj=this.edit({columnIndex:i});if(obj)
obj.input.selectRange(0,obj.input.value.length);}
if(this.options.accordion&&this.options.openAccordionOnDblClick){this.accordianOpen(li);}
this.fireEvent("dblclick",{row:li.retrieve('row'),target:this,element:li});},
onRowMouseOut:function(evt){
var li=this.getLiParent(evt.target);if(!li){return;}
if(!this.dragging){li.removeClass('over');}
this.fireEvent("mouseout",{target:this,row:li.retrieve('row'),element:li});},
onRowMouseOver:function(evt){
var li=this.getLiParent(evt.target);if(!li)
return;if(!this.dragging)
li.addClass('over');this.fireEvent("mouseover",{target:this,row:li.retrieve('row'),element:li});},
outDragColumn:function(evt){
evt.target.removeClass('dragging');},
overDragColumn:function(evt){
evt.target.addClass('dragging');},
pageChange:function(){
var np=this.container.getElement('div.pDiv2 input').value;if(np>0&&np<=this.options.maxpage){if(this.refreshDelayID){$clear(this.refreshDelayID);}
this.options.page=np;this.refreshDelayID=this.refresh.delay(1000,this);}},
perPageChange:function(){
this.options.page=1;this.options.perPage=this.container.getElement('.rp').value;this.refresh();},
prevPage:function(){
var prev=this.options.page-1;if(prev>1){this.options.page=prev;this.refresh();}},
refresh:function(){
this.loadData();},
removeAll:function(){
if(this.ulBody){this.ulBody.empty();}
this.selected=new Array();},
removeHeader:function(){
var obj=this.container.getElement('.hDiv');if(obj){obj.empty();}
this.options.columnModel=null;},
renderData:function(){
this.ulBody.empty();this.inlineEditSafe=null;if(this.options.data&&this.options.data.length){var columnCount=this.options.columnModel.length;var rowCount=this.options.data.length;for(var r=0;r<rowCount;r++){var rowdata=this.options.data[r];var li=new Element('li');li.setStyle('width',this.sumWidth+2*this.visibleColumns);li.store('row',r);li.addClass('tr');this.ulBody.appendChild(li);if(this.options.tooltip){this.options.tooltip.attach(tr);}
var firstvisible=-1;for(var c=0;c<columnCount;c++){var columnModel=this.options.columnModel[c];var div=new Element('div');div.addClass('td');div.setStyle('width',columnModel.width-6);li.appendChild(div);firstvisible=(!columnModel.hidden&&firstvisible==-1)?c:firstvisible;var toggleicon="";if(firstvisible==c&&this.options.accordion&&this.options.showtoggleicon){toggleicon="<div class='toggleicon'></div>";}
if(columnModel.hidden)
div.setStyle('display','none');if(columnModel.onMouseOver){div.onmouseover=this.onMouseOver.bind(this,{element:div,columnModel:columnModel,data:rowdata});}
if(columnModel.title)
div.title=rowdata[columnModel.title];if(columnModel.dataType=="checkbox"){var input=new Element('input',{type:"checkbox"});if(columnModel.onChange){input.onclick=this.onSelect.bind(this,{columnModel:columnModel,row:r,input:input});}
div.appendChild(input);var val=rowdata[columnModel.dataIndex];if(val==1||val=='t'){input.set('checked',true);}}else if(columnModel.type=="image"){}else if(columnModel.type=='custom'){}else if(columnModel.labelFunction!=null){div.innerHTML=columnModel.labelFunction(rowdata,r,columnModel);}else{var str=new String(rowdata[columnModel.dataIndex]);if(str==null||str=='null'||str=='undefined'||str=="")
str='&nbsp;';var trimmed=str.replace(/^\s+|\s+$/g,'');if(trimmed.length==0)
str='&nbsp;';if(columnModel.align){div.setStyles({'text-align':columnModel.align,'padding-left':'0'});}
if(columnModel.clave){div.addClass("clave");}
div.innerHTML=toggleicon+str;if(firstvisible==c&&this.options.accordion&&this.options.showtoggleicon){div.getElement('.toggleicon').addEvent('click',this.toggleIconClick.bind(this));}}}
if(this.options.accordion){var li2=new Element('li');li2.addClass('section');li2.addClass('section-'+r);li2.setStyle('width',this.sumWidth+2*this.visibleColumns);this.ulBody.appendChild(li2);if(this.options.accordionRenderer)
this.options.accordionRenderer({parent:li2,row:r,grid:this,rowdata:rowdata});}}}},
rePosDrag:function(){
if(!this.options.resizeColumns)
return;var dragTempWidth=0;var cDrags=this.container.getElements('.cDrag div');var scrollX=this.container.getElement('div.bDiv').getScroll().x;for(var c=0;c<this.options.columnModel.length;c++){var columnModel=this.options.columnModel[c];var dragSt=cDrags[c];dragSt.setStyle('left',dragTempWidth+columnModel.width+(Browser.ie?1:1)-scrollX);if(!columnModel.hidden)
dragTempWidth+=columnModel.width;}},
reset:function(){
this.renderData();this.refreshDelayID=null;this.dragging=false;this.selected=new Array();if(this.options.accordion){this.elements=this.ulBody.getElements('li:nth-child(2n+1)')}else{this.elements=this.ulBody.getElements('li');}
this.filtered=false;this.lastsection=null;if(this.options.alternaterows){this.altRow();}
this.elements.each(function(el,i){el.addEvent('click',this.onRowClick.bind(this));el.addEvent('dblclick',this.onRowDblClick.bind(this));el.addEvent('mouseover',this.onRowMouseOver.bind(this));el.addEvent('mouseout',this.onRowMouseOut.bind(this));},this);this.container.getElements('.th').each(function(el,i){var dataType=el.retrieve('dataType');if(dataType){el.getdate=function(str){function fixYear(yr){yr=+yr;if(yr<50){yr+=2000;}else if(yr<100){yr+=1900;}
return yr;};var ret;if(str.length>12){strtime=str.substring(str.lastIndexOf(' ')+1);strtime=strtime.substring(0,2)+strtime.substr(-2)}else{strtime='0000';}
if(ret=str.match(/(\d{2,4})-(\d{1,2})-(\d{1,2})/)){return(fixYear(ret[1])*10000)+(ret[2]*100)+(+ret[3])+strtime;}
if(ret=str.match(/(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})/)){return(fixYear(ret[3])*10000)+(ret[2]*100)+(+ret[1])+strtime;}
return 999999990000;};el.findData=function(elem){var child=elem.getFirst();if(child){return el.findData(child);}else{return elem.innerHTML.trim();}};el.compare=function(a,b){var var1=a.getChildren()[i].innerHTML.trim();var var2=b.getChildren()[i].innerHTML.trim();if(dataType=='number'){var1=parseFloat(var1);var2=parseFloat(var2);if(el.sortBy=='ASC'){return var1-var2;}else{return var2-var1;}}else if(dataType=='string'){var1=var1.toUpperCase();var2=var2.toUpperCase();if(var1==var2){return 0};if(el.sortBy=='ASC'){if(var1<var2){return-1};}else{if(var1>var2){return-1};}
return 1;}else if(dataType=='date'){var1=parseFloat(el.getdate(var1));var2=parseFloat(el.getdate(var2));if(el.sortBy=='ASC'){return var1-var2;}else{return var2-var1;}}else if(dataType=='currency'){var1=parseFloat(var1.substr(1).replace(',',''));var2=parseFloat(var2.substr(1).replace(',',''));if(el.sortBy=='ASC'){return var1-var2;}else{return var2-var1;}}}}},this);},
selectAll:function(){
this.elements.each(function(el,i){this.selected.push(el.retrieve('row'));el.addClass('selected');},this);},
setAutoColumnModel:function(){
if(!this.options.data){return;}
var rowCount=this.options.data.length;if(!(rowCount>0)){return;}
this.options.columnModel=[];for(var cn in this.options.data[0]){var dataType=(typeof(this.options.data[0][cn])=="number")?"number":"string";this.options.columnModel.push({header:cn,dataIndex:cn,dataType:dataType,editable:true});}
this.fireEvent("autocolummodel",{target:this,columnModel:this.options.columnModel});this.draw();},
setColumnModel:function(cmu){
if(!cmu){return;}
this.options.columnModel=cmu;this.draw();},
setColumnProperty:function(columnName, property, value){
var cmu=this.options.columnModel;if(!cmu||!columnName||!property){return;}
columnName=columnName.toLowerCase();for(var i=0;i<cmu.length;i++){if(cmu[i].dataIndex.toLowerCase()==columnName){cmu[i][property]=value;return;}}},
setData:function(data, cm){
if(!data){return;}
this.options.data=data.data;if(!this.options.columnModel)
this.setAutoColumnModel();if(this.options.pagination){this.options.page=data.page*1;this.options.total=data.total;this.options.maxpage=Math.ceil(this.options.total/this.options.perPage);this.container.getElement('div.pDiv input').value=data.page;var to=(data.page*this.options.perPage)>data.total?data.total:(data.page*this.options.perPage);this.container.getElement('div.pDiv .pPageStat').set('html',((data.page-1)*this.options.perPage+1)+'..'+to+' / '+data.total);this.container.getElement('div.pDiv .pcontrol span').set('html',this.options.maxpage);}
if(cm){if(this.options.columnModel!=cm){this.options.columnModel=cm;this.draw();}}
this.reset();this.hideLoader();},
setDataByRow:function(row, data){
if(row>=0&&row<this.options.data.length){this.options.data[row]=data;this.reset();}},
setPerPage:function(rows){
if(rows>0){this.options.perPage=rows;this.refresh();}},
setScroll:function(x, y){
var bDiv=this.container.getElement('.bDiv');new Fx.Scroll(bDiv).set(x,y);},
setSelectedIndices:function(arr){
this.selected=arr;for(var i=0;i<arr.length;i++){var li=this.elements[arr[i]];this.onRowClick({target:li.getFirst(),control:false});}},
setSize:function(w, h){
this.options.width=w?w:this.options.width;this.container.setStyle('width',this.options.width);var width=this.options.width-2;if(this.options.buttons){this.container.getElement('.tDiv').setStyle('width',width);}
var hDiv=this.container.getElement('.hDiv');if(this.options.showHeader&&hDiv){hDiv.setStyle('width',width);}
var bodyEl=this.container.getElement('.bDiv');bodyEl.setStyle('width',width);this.container.getElement('.pDiv').setStyle('width',width);this.options.height=h?h:this.options.height;bodyEl.setStyle('height',this.getBodyHeight());this.container.setStyle('height',this.options.height);var gBlock=this.container.getElement('.gBlock');if(gBlock)
gBlock.setStyles({width:this.options.width,height:bodyEl.getSize().y});},
showLoader:function(){
if(this.loader)
return;this.showWhiteOverflow();this.loader=new Element('div');this.loader.addClass('elementloader');this.loader.inject(this.container);this.loader.setStyles({top:this.options.height/2-16,left:this.options.width/2});},
showWhiteOverflow:function(i){
if(this.container.getElement('.gBlock'))
this.container.getElement('.gBlock').dispose();var gBlock=new Element('div',{style:'top: 0px; left: 0px; background: white none repeat scroll 0% 0%;  -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; position: absolute; z-index: 999; opacity: 0.5; filter: alpha(opacity=50'});var bDiv=this.container.getElement('.bDiv');var top=1;top+=this.container.getElement('.tDiv')?this.container.getElement('.tDiv').getSize().y:0;top+=this.container.getElement('.hDiv')?this.container.getElement('.hDiv').getSize().y:0;gBlock.setStyles({width:this.options.width,height:this.options.height-1,top:0});gBlock.addClass('gBlock');this.container.appendChild(gBlock);var pReload=this.container.getElement('div.pDiv .pReload');if(pReload)
pReload.addClass('loading');},
sort:function(index, by){
if(index<0||index>=this.options.columnModel.length){return;}
if(this.options.onStart){this.fireEvent('onStart');}
var header=this.container.getElements('.th');var el=header[index];if(by!=null){el.addClass(by.toLowerCase());}
if(el.hasClass('ASC')){el.sortBy='ASC';}else if(el.hasClass('DESC')){el.sortBy='DESC';}
if(this.options.serverSort){this.options.sortOn=this.options.columnModel[index].dataIndex;this.options.sortBy=el.sortBy;this.refresh();}else{this.elements.sort(el.compare);this.elements.inject(this.ulBody);this.selected=new Array();this.elements.each(function(el,i){if(el.hasClass('selected')){this.selected.push(el.retrieve('row'));}},this);if(this.filtered){this.filteredAltRow();}else{this.altRow();}}},
toggle:function(el){
if(el.getStyle('display')=='block'){el.setStyle('display','none');}else{el.setStyle('display','block');}},
toggleIconClick:function(evt){
var li=this.getLiParent(evt.target);this.accordianOpen(li);},
unique:function(a, asNumber){
function om_sort_number(a,b){return a-b;}
var sf=asNumber?om_sort_number:function(){};a.sort(sf);for(var i=1;i<a.length;i++){if(a[i-1]==a[i]){a.splice(i,1);i--;}}
return a;},
unselectAll:function(){
this.elements.each(function(el,i){el.removeClass('selected');},this);this.selected=[];},
});
