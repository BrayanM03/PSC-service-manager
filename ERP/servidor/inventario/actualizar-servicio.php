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
           $descripcion = $_POST["descripcion"];
           $precio = $_POST["precio"];
           $categoria = $_POST["categoria"];
           $clavesat = $_POST["sat"];
           $tabla = $_POST["clase"];
           $unidad = $_POST["unidad"];
           $codigo = $_POST["codigo"];
           //$samecode = $_POST["samecode"];

           $update_product = "UPDATE $tabla SET codigo =?, descripcion =?,
                                                          precio = ?,
                                                          categoria = ?,
                                                          clave_sat = ?,
                                                          clave_unidad = ? WHERE id= ?
                                                          ";
          $resultado = $con->prepare($update_product);
          $resultado->bind_param('ssdsisi', $codigo, $descripcion, $precio, $categoria, $clavesat,$unidad, $id_producto);
          $resultado->execute();
          $resultado->close();
          print_r(1);

}


    ?>
