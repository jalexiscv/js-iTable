<?php
$root=(!isset($root))?"../../../../":$root;
require_once($root."modulos/solicitudes/librerias/Configuracion.cnf.php");
$sesion = new Sesion();
$modulos = new Modulos();
$automatizaciones = new Automatizaciones();
$usuarios = new Usuarios();
$cadenas = new Cadenas();
$validaciones=new Validaciones();
/** Variables Recibidas * */
$transaccion = $validaciones->recibir('transaccion');
$estado = $validaciones->recibir('estado');
$buscar = $validaciones->recibir('buscar');
$herencia=$validaciones->recibir('herencia');
/* * Variables Definidas * */
$tabla = "aplicacion_modulos_componentes";

$page = 1;
$perpage = 50;
$n = 0;
$pagination = false;

if (isset($_REQUEST["page"])) {
  $pagination = true;
  $page = intval($_REQUEST["page"]);
  $perpage = intval($_REQUEST["perpage"]);
  $n = ( $page - 1 ) * $perpage;
}

if (!empty($buscar)) {
  $buscar = "WHERE(" . $automatizaciones->like($tabla, $buscar) . ")";
} elseif (!empty($estado)) {
  $buscar = "WHERE(`estado`='" . strtoupper($estado) . "' AND `herencia`='" .$herencia. "')";
} else {
  $buscar ="WHERE(`herencia`='" .$herencia. "')";
}
$db = new MySQL();
$sql['sql'] = "SELECT * FROM `" . $tabla . "` " . $buscar . " ;";
//echo($sql['sql']);
$consulta = $db->sql_query($sql['sql']);
$fila = $db->sql_fetchrow($consulta);
$total = $db->sql_numrows();

$limit = "";

if ($pagination) {
  $limit = "LIMIT $n, $perpage";
}
$sql = ("SELECT * FROM `" . $tabla . "` " . $buscar . " ORDER BY `peso` ASC " . $limit);
$consulta = $db->sql_query($sql);
$json= array();
$dato= array();
while ($fila = $db->sql_fetchrow($consulta)) {
  $dato["componente"]=  $fila['componente'];
  $dato["detalles"]="<b>".$fila['titulo']."</b>: ".$fila['descripcion']." <i>Función</i>: ";
  $dato["permiso"]=$fila["permiso"];
  $dato["fecha"]=$fila["fecha"];
  $dato["hora"]=$fila["hora"];
  array_push($json, $dato);
}
$db->sql_close();
echo json_encode(array("page" => $page, "total" => $total, "data" => $json));
?>