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
            $id = $_POST["id"];
            $nombre = $_POST["nombre"];
            $telefono = $_POST["telefono"];
            $correo = $_POST["correo"];
            $rfc = $_POST["rfc"];
            $direccion = $_POST["direccion"];
            $fecha = date("d:m:Y hi a");
           //$samecode = $_POST["samecode"];

           $update_product = "UPDATE proveedores SET nombre =?, direccion =?,
                                                          rfc = ?,
                                                          telefono = ?,
                                                          correo = ?,
                                                          fecha = ? WHERE id= ?
                                                          ";
          $resultado = $con->prepare($update_product);
          $resultado->bind_param('ssdsisi', $nombre, $direccion, $rfc, $telefono, $correo,$fecha, $id);
          $resultado->execute();
          $resultado->close();
          print_r(1);

}


    ?>
