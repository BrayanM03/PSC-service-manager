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

    if (isset($_POST)) {

      $tabla = $_POST["tabla"];

     $query_mostrar = $con->prepare("SELECT COUNT(*) total FROM $tabla");

     //-----------------------------------------------------------------------------------------------------//
     //-----------------------------------------------------------------------------------------------------/
     $query_mostrar->execute();
     $query_mostrar->bind_result($total);
     $query_mostrar->fetch();
     $query_mostrar->close();


     if ($total > 0) {

        $sqlTraerLlanta="SELECT * FROM $tabla";
        $resultado = mysqli_query($con, $sqlTraerLlanta);

        while($fila= $resultado->fetch_assoc()){

            $id = $fila["id"];

            $codigo = $fila["codigo"];
            $descripcion = $fila["descripcion"];
            $modelo = $fila["modelo"];
            $marca = $fila["marca"];
            $cantidad = $fila["cantidad"];
            $costo = $fila["costo"];
            $precio = $fila["precio"];
            $categoria = $fila["categoria"];

            $upc = $fila["upc"];
            $clave_sat = $fila["clave_sat"];
            $clave_unidad = $fila["clave_unidad"];

            $data['data'][] = array("id" => $id, "codigo" => $codigo,"descripcion" => $descripcion,"modelo" => $modelo, "marca"=>$marca,
                                    "marca"=> $marca, "cantidad"=> $cantidad, "costo"=> $costo, "precio"=>$precio,
                                    "categoria"=>$categoria, "upc"=>$upc, "clave_sat"=>$clave_sat, "clave_unidad"  =>$clave_unidad);



             //print_r(" la segunda iteracion de la llanta ID " . $id . " tiene de stock ". $TotalStock);
        }

        echo json_encode($data, JSON_UNESCAPED_UNICODE);


    }else{

        echo 'Ninguna llanta coincide con ese ancho';
    }

    }else{
        print_r("Error al conectar");
    }


    ?>
