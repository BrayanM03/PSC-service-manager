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
           $cantidad = $_POST["cantidad"];
           $modelo = $_POST["modelo"];
           $marca = $_POST["marca"];
           $costo = $_POST["costo"];
           $precio = $_POST["precio"];
           $categoria = $_POST["categoria"];
           $clavesat = $_POST["sat"];
           $tabla = $_POST["clase"];
           $codigo = $_POST["codigo"];
           $samecode = $_POST["samecode"];

           $update_product = "UPDATE $tabla SET codigo =?, descripcion =?,
                                                          modelo = ?,
                                                          marca = ?,
                                                          cantidad =?,
                                                          costo =?,
                                                          precio = ?,
                                                          categoria = ?,
                                                          clave_sat = ? WHERE id= ?
                                                          ";
          $resultado = $con->prepare($update_product);
          $resultado->bind_param('ssssiddsii', $codigo, $descripcion, $modelo, $marca, $cantidad, $costo, $precio, $categoria, $clavesat, $id_producto);
          $resultado->execute();
          $resultado->close();

          if($resultado){

            $nombre_fichero = "../../../vistas/dist/img/ERP/productos/". $samecode . ".jpg";

              if (file_exists($nombre_fichero)) {
                rename("../../../vistas/dist/img/ERP/productos/". $samecode . ".jpg", "../../../vistas/dist/img/ERP/productos/" . $codigo . ".jpg");
                print_r(1);
              } else {
                  print_r(1);
              }


          } else {
            print_r(0);
          }
}


    ?>
