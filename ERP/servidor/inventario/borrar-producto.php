<?php


    session_start();
    include '../../../controladores/conexion.php';
    $con= $conectando->conexion();

    if (!$con) {
        echo "maaaaal";
    }

    if (!isset($_SESSION['userName'])) {
    header("Location:../../../vistas/modulos/login.php");
    }


    if (isset($_POST["id"])) {
          $id_producto = $_POST["id"];
          $tabla = $_POST["tabla"];
          $sqltraerCodigo= $con->prepare("SELECT codigo FROM $tabla WHERE id LIKE ?");
          $sqltraerCodigo->bind_param('i', $id_producto);
          $sqltraerCodigo->execute();
          $sqltraerCodigo->bind_result($codigo);
          $sqltraerCodigo->fetch();
          $sqltraerCodigo->close();


           //$fecha = $fila["fecha"];

           If (unlink('../../../vistas/dist/img/ERP/productos/'. $codigo .'.jpg')) {
     // file was successfully deleted
             echo "Borrado con exito";
             } else {
              echo "Borrado con exito";
             }


             $borrar_cred = $con->prepare("DELETE FROM $tabla WHERE id = ?");
             $borrar_cred->bind_param('i', $id_producto);
             $borrar_cred->execute();
             $borrar_cred->close();




}


    ?>
