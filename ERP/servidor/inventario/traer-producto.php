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
           $query="SELECT * FROM $tabla WHERE id = $id_producto";
           $resultado = mysqli_query($con, $query);

           while($fila = $resultado->fetch_assoc()){
           $id = $fila["id"];
           $codigo = $fila["codigo"];
           $descripcion = $fila["descripcion"];
           $cantidad = $fila["cantidad"];
           $modelo = $fila["modelo"];
           $marca = $fila["marca"];
           $costo = $fila["costo"];
           $precio = $fila["precio"];
           $categoria = $fila["categoria"];

           $clavesat = $fila["clave_sat"];
           //$fecha = $fila["fecha"];


           $data = array("id" => $id,"codigo"=>$codigo, "descripcion"=>$descripcion, "cantidad"=>$cantidad, "modelo"=>$modelo, "marca" => $marca,
                           "costo" => $costo, "precio"=>$precio, "categoria"=>$categoria, "clavesat"=>$clavesat);


       }
       print_r($fila);
       echo json_encode($data, JSON_UNESCAPED_UNICODE);
       }


    ?>
