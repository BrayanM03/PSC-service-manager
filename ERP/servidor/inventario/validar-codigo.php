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


    if (isset($_POST["code"])) {
           $mismocode = $_POST["mismocode"];
           $cod_producto = $_POST["code"];
           $tabla = $_POST["tabla"];
           

           if($mismocode == $cod_producto){
             print_r(2);
           }else{

                       $validar_codigo = "SELECT COUNT(*) total FROM $tabla WHERE codigo LIKE ?";
                       $resultado = $con->prepare($validar_codigo);
                       $resultado->bind_param('s', $cod_producto);
                       $resultado->execute();
                       $resultado->bind_result($total);
                       $resultado->fetch();
                       $resultado->close();

                       if($total == 1){

                         print_r(0);
                       } else if($total == 0) {
                         print_r(1);
                       }

           }

}


    ?>
