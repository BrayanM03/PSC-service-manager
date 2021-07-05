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

           $codigo = $_POST["codigo"];
           $cantidad = $_POST["cantidad"];
           $tabla_db = $_POST["tabla"];

           if($cantidad == 0){
             print_r(3);
           }else if($cantidad < 0){
             print_r(4);
           }else{
             //Contamos el stock actual de producto en la base de datos del inventario
             $contar = "SELECT cantidad FROM $tabla_db WHERE codigo = ?";
             $resultado = $con->prepare($contar);
             $resultado->bind_param('s', $codigo);
             $resultado->execute();
             $resultado->bind_result($stockInventario);
             $resultado->fetch();
             $resultado->close();


             if($cantidad <= $stockInventario){
                print_r(1); //Devolvemos 1 indicando todo correcto
             } else{
               print_r(2); //Devolvemos 2 indicando que se sobrepaso al sotck actual del producto
             }
           }










}


    ?>
