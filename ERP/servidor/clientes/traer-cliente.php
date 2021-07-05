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
      $id = $_POST["id"];
      $tabla = $_POST["tabla"];

     $query_mostrar = $con->prepare("SELECT COUNT(*) total FROM clientes");

     //-----------------------------------------------------------------------------------------------------//
     //-----------------------------------------------------------------------------------------------------/
     $query_mostrar->execute();
     $query_mostrar->bind_result($total);
     $query_mostrar->fetch();
     $query_mostrar->close();


     if ($total > 0) {

        $sqlTraerLlanta="SELECT * FROM clientes WHERE id LIKE $id";
        $resultado = mysqli_query($con, $sqlTraerLlanta);

        while($fila= $resultado->fetch_assoc()){

            $id = $fila["id"];
            $nombre = $fila["nombre"];
            $direccion = $fila["direccion"];
            $rfc = $fila["rfc"];
            $telefono = $fila["telefono"];
            $correo = $fila["correo"];
            $tipo = $fila["tipo_cliente"];


            $data = array("id" => $id, "nombre" => $nombre,"direccion" => $direccion,"rfc" => $rfc, "telefono"=>$telefono,
                                    "correo"=> $correo, "tipo_cliente"=>$tipo);

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
