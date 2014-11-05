<?php
$root = (!isset($root)) ? "../../../../" : $root;
require_once($root . "modulos/solicitudes/librerias/Configuracion.cnf.php");
$sesion = new Sesion();
$validaciones = new Validaciones();
$transaccion = $validaciones->recibir('transaccion');
$estado = $validaciones->recibir('estado');
$buscar = $validaciones->recibir('buscar');
$herencia = $validaciones->recibir('herencia');
$ruta = "modulos/aplicacion/consultas/componentes/componentes.json.php";
$datos = "?transaccion=" . $transaccion . "&buscar=" . $buscar . "&estado=" . $estado . "&herencia=" . $herencia;
$url = $ruta . $datos;
$itable="itable_componentes";
?>
<script type="text/javascript">
  function filtrar<?php echo($transaccion); ?>() {<?php echo($itable);?>.filter($('filter').value);}
  function desfiltrar<?php echo($transaccion); ?>() {<?php echo($itable);?>.clearFilter();}
  function seleccion_Click<?php echo($transaccion); ?>(evt) {var str = 'row: ' + evt.row + ' indices: ' + evt.indices;str += ' id: ' + evt.target.getDataByRow(evt.row).id;}
  function buscar_Click<?php echo($transaccion); ?>(button, grid) {MUI.Aplicacion_Componentes_Busqueda();}
  function imprimir_Click<?php echo($transaccion); ?>(button, grid) {}
  function explorar_Click<?php echo($transaccion); ?>(button, grid) {var indices = <?php echo($itable);?>.getSelectedIndices();if (indices.length == 0) {return;}for (var i = 0; i < indices.length; i++) {var componente = <?php echo($itable);?>.getDataByRow(indices[i]).componente;MUI.Aplicacion_Componentes_Consultar(componente);}}
  function editar_Click<?php echo($transaccion); ?>(button, grid) {var indices = <?php echo($itable);?>.getSelectedIndices();if (indices.length == 0) {return;}for (var i = 0; i < indices.length; i++) {var componente = <?php echo($itable);?>.getDataByRow(indices[i]).componente;MUI.Aplicacion_Componentes_Actualizar(componente);}}
  function crear_Click<?php echo($transaccion); ?>(button, grid) {MUI.Aplicacion_Componentes_Crear('<?php echo($herencia); ?>');}
  function eliminar_Click<?php echo($transaccion); ?>(button, grid) {var indices = <?php echo($itable);?>.getSelectedIndices();if (indices.length == 0) {return;}for (var i = 0; i < indices.length; i++) {var componente = <?php echo($itable);?>.getDataByRow(indices[i]).componente;MUI.Aplicacion_Componentes_Eliminar(componente);}}

  var cmu = [
    {header: "Componente", dataIndex: 'componente', dataType: 'string', align: 'center', width: 90},
    {header: "Detalles", dataIndex: 'detalles', dataType: 'string', width: 400},
    {header: "Permiso", dataIndex: 'permiso', dataType: 'string', width: 200},
    {header: "Fecha", dataIndex: 'fecha', dataType: 'date', width: 70},
    {header: "Hora", dataIndex: 'hora', dataType: 'string', width: 55},
  ];
  window.addEvent("domready", function() {
    //$('filterbt').addEvent("click", filterGrid);
    //$('clearfilterbt').addEvent("click", clearFilter);
    <?php echo($itable);?> = new iTable('<?php echo($itable);?><?php echo($transaccion); ?>', {
      columnModel: cmu,
      buttons: [
        {name: 'Agregar', bclass: 'pNuevo', onclick: crear_Click<?php echo($transaccion); ?>},
        {name: 'Editar', bclass: 'pEditar', onclick: editar_Click<?php echo($transaccion); ?>},
        {name: 'Eliminar', bclass: 'pEliminar', onclick: eliminar_Click<?php echo($transaccion); ?>},
        {name: 'Explorar', bclass: 'pExplorar', onclick: explorar_Click<?php echo($transaccion); ?>},
        {name: 'Buscar', bclass: 'pBuscar', onclick:buscar_Click<?php echo($transaccion); ?>}
        //{name: 'Delete', bclass: 'delete', onclick: buscarClick}
        //{separator: true},
        // {name: 'Duplicate', bclass: 'duplicate', onclick: gridButtonClick}
      ],
      url: "<?php echo($url); ?>",
      perPageOptions: [500, 1000, 1500, 2000],
      perPage: 500,
      page: 1,
      pagination: true,
      serverSort: true,
      showHeader: true,
      alternaterows: true,
      sortHeader: false,
      resizeColumns: true,
      multipleSelection: true,
      // uncomment this if you want accordion behavior for every row
      /*
       accordion:true,
       accordionRenderer:accordionFunction,
       autoSectionToggle:false,
       */

      width: $('central').getSize().x,
      height: $('central').getSize().y
    });

    <?php echo($itable);?>.addEvent('click', seleccion_Click<?php echo($transaccion); ?>);
  });
</script>
<div id="<?php echo($itable);?><?php echo($transaccion); ?>" style="width:100%" ></div>