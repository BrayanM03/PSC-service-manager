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
           $iduser = $_SESSION["userID"];
           $id = $_POST["id"];


             $delete = "DELETE FROM pre_salida$iduser WHERE id = ?";
             $resultado = $con->prepare($delete);
             $resultado->bind_param('i', $id);
             $resultado->execute();
             $resultado->close();
             print_r(1);


}


    ?>
