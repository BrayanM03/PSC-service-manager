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

   $arrResultado=array();

    if ($_POST) {
           $nombre = $_POST["nombre"];
           $numero = $_POST["telefono"];
           $correo = $_POST["correo"];
           $rfc = $_POST["rfc"];
           $direccion = $_POST["direccion"];
           $fecha = date("d:m:Y hi a");
           //$fecha = $fila["fecha"];

           $insert_customer = "INSERT INTO proveedores(id, nombre, direccion, rfc, telefono, correo, fecha) VALUES(null,?,?,?,?,?,?)";
           $resultado = $con->prepare($insert_customer);
           if($resultado){
             $resultado->bind_param('ssssss',$nombre, $direccion, $rfc, $numero, $correo, $fecha);
             $resultado->execute();
             print_r(1);

           }else{
                $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
                 print_r($arrResultado);
           }
          $resultado->close();





}


    ?>
