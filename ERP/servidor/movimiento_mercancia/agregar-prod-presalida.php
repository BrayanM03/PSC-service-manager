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
           $iduser = $_SESSION["userID"];
           $codigo = $_POST["codigo"];
           $descripcion = $_POST["descripcion"];
           $modelo = $_POST["modelo"];
           $cantidad = $_POST["cantidad"];
           $tabla_db = $_POST["tabla"];

           //Primero validamos que el mismo producto no este en la tabla presalida
           $contar = "SELECT COUNT(*) total FROM pre_salida$iduser WHERE codigo = ?";
           $resultado = $con->prepare($contar);
           $resultado->bind_param('s', $codigo);
           $resultado->execute();
           $resultado->bind_result($total);
           $resultado->fetch();
           $resultado->close();

           //Contamos el stock actual de producto en la base de datos del inventario
           $contar = "SELECT cantidad FROM $tabla_db WHERE codigo = ?";
           $resultado = $con->prepare($contar);
           $resultado->bind_param('s', $codigo);
           $resultado->execute();
           $resultado->bind_result($stockInventario);
           $resultado->fetch();
           $resultado->close();

        //Una vez que tengamos el sotck y validamos la existencia del producto en la tabla, procedes a validar,
        //Si el producto no esta lo agregamos y si esta actualizamos la cantidad

           if($total == 0){

             $insertar = "INSERT INTO pre_salida$iduser(id, codigo, descripcion, modelo, cantidad) VALUES(null,?,?,?,?)";
             $resultado = $con->prepare($insertar);
             $resultado->bind_param('sssi', $codigo, $descripcion, $modelo, $cantidad);
             $resultado->execute();
             $resultado->close();
               print_r(1);

           }else if($total > 0){

             $contarCant = "SELECT cantidad FROM pre_salida$iduser WHERE codigo = ?";
             $resultado = $con->prepare($contarCant);
             $resultado->bind_param('s', $codigo);
             $resultado->execute();
             $resultado->bind_result($actualCant);
             $resultado->fetch();
             $resultado->close();
             $nuevo_stock = intval($actualCant) + intval($cantidad);

             //Validamos que el la suma de las cantidades a actualizar no sobrepase el stock actual de producto.
             if($nuevo_stock <= $stockInventario){
               $update = "UPDATE pre_salida$iduser SET cantidad = ? WHERE codigo = ?";
               $resultado = $con->prepare($update);
               $resultado->bind_param('is',$nuevo_stock, $codigo);
               $resultado->execute();
               $resultado->close();
                print_r(1); //Devolvemos 1 indicando todo correcto
             } else{
               print_r(2); //Devolvemos 2 indicando que se sobrepaso al sotck actual del producto
             }



           }







}


    ?>
