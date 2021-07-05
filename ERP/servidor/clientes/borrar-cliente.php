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
             $id_cliente =$_POST["id"];
             $borrar_cred = $con->prepare("DELETE FROM clientes WHERE id = ?");
             $borrar_cred->bind_param('i', $id_cliente);
             $borrar_cred->execute();
             $borrar_cred->close();

             print_r("Borrado correctamente");


}


    ?>
