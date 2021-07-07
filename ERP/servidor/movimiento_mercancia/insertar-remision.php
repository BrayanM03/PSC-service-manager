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

    

    //Se asignan variables y se inserta remision en lista de remisiones de salida
    $cliente = $_POST["cliente"];
    $tecnico = $_POST["tecnico"];
    $motivo =  $_POST["motivo"];
    $fecha = $_POST["fecha"];
    $usuario = $_SESSION["userName"] . " " . $_SESSION["userLastname"];
    $hora = date("H:i a");

    $insert_salida = "INSERT INTO mercancia_salida(id, motivo, usuario, tecnico, fecha, hora, cliente) VALUES(null,?,?,?,?,?,?)";
    $resultado = $con->prepare($insert_salida);
           if($resultado){
             $resultado->bind_param('ssssss',$motivo, $usuario, $tecnico, $fecha, $hora, $cliente);
             $resultado->execute();
             print_r(1);

           }else{
                $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
                 print_r($arrResultado);
           }
          $resultado->close();

      // $datos = $_POST['data'];
       //$info_producto_individual = $datos;


    ?>
