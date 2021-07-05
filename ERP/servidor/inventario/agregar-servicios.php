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


    if ($_POST) {
           $descripcion = $_POST["descripcion"];
           $precio = $_POST["precio"];
           $categoria = $_POST["categoria"];
           $clavesat = $_POST["sat"];
           $clave_unidad = $_POST["unidad"];
           $tabla = $_POST["clase"];
           //$fecha = $fila["fecha"];

           $cod_name = "PSCSERV";


    $sql = "SELECT codigo FROM $tabla ORDER BY id DESC LIMIT 1";
    $resultado = mysqli_query($con, $sql);

    if(!$resultado){
      echo "no se pudo realizar la consulta";

    }else{
      $dato =  mysqli_fetch_array($resultado, MYSQLI_ASSOC);

        $cod = $dato["codigo"];
        $substring = substr($cod, 7);
        $num_nuevo = intval($substring) + 1;
        $codigo_nuevo = $cod_name . $num_nuevo;




        $insert_product = "INSERT INTO $tabla(id, codigo, descripcion, precio, categoria, clave_sat, clave_unidad) VALUES(null,?,?,?,?,?,?)";
        $resultado = $con->prepare($insert_product);
        $resultado->bind_param('ssdsis',$codigo_nuevo, $descripcion, $precio, $categoria, $clavesat, $clave_unidad);
        $resultado->execute();
        $resultado->close();

        if($resultado){
          print_r(1);
        } else {
          print_r(0);
        }
      }


}


    ?>
