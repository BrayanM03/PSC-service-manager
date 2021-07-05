<?php


    session_start();
    include '../../../controladores/conexion.php';
    $con= $conectando->conexion();
     date_default_timezone_set("America/Matamoros");

    if (!$con) {
        echo "maaaaal";
    }

    if (!isset($_SESSION['userName'])) {
    header("Location:../../../vistas/modulos/login.php");
    }

   $arrResultado=array();

    if ($_POST) {
           $nombre = $_POST["nombre"];
           $numero = $_POST["telefono"];
           $correo = $_POST["correo"];
           $rfc = $_POST["rfc"];
           $direccion = $_POST["direccion"];
           $fecha = date("d:m:Y hi a");
           $tipo_cliente = $_POST["tipo_cliente"];

           $insert_customer = "INSERT INTO clientes(id, nombre, direccion, rfc, telefono, correo, fecha, tipo_cliente) VALUES(null,?,?,?,?,?,?,?)";
           $resultado = $con->prepare($insert_customer);
           if($resultado){
             $resultado->bind_param('sssssss',$nombre, $direccion, $rfc, $numero, $correo, $fecha, $tipo_cliente);
             $resultado->execute();
             print_r(1);

           }else{
                $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
                 print_r($arrResultado);
           }
          $resultado->close();





}


    ?>
