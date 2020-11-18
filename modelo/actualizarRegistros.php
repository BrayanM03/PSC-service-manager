<?php
include '../controladores/conexion.php';
$con = $conectando->conexion();
session_start();

if (isset($_POST)) {

    $mesActual = strftime("%B");
    $descripcion= $_POST["swal-solucion"];

    $datos = array(
        "cr" => $_POST['cr-input-nuevaOrden'],
        "tienda" => $_POST['tienda-span-modal-mto'],
        "fecha" => $_POST['date-nuevaOrden'],
        "folio" => $_POST['folio-nueva-orden'],
        "estatus" => $_POST['status-new-orden'],
        "mes" => $mesActual,
        "usuario" => $_SESSION["userName"],
        "subcat" => $_POST["select-cat-nueva-orden"],
        "solucion" => $descripcion
        
      
    );

    print_r($datos["solucion"]);
}

?>