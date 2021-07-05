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


    if (isset($_POST["id"])) {
            $id = $_POST["id"];
            $nombre = $_POST["nombre"];
            $telefono = $_POST["telefono"];
            $correo = $_POST["correo"];
            $rfc = $_POST["rfc"];
            $direccion = $_POST["direccion"];
            $fecha = date("d:m:Y hi a");
            $tipo_cliente = $_POST["tipo_cliente"];

           $update_product = "UPDATE clientes SET nombre =?, direccion =?,
                                                          rfc = ?,
                                                          telefono = ?,
                                                          correo = ?,
                                                          fecha = ?,
                                                          tipo_cliente = ? WHERE id= ?";
          $resultado = $con->prepare($update_product);
          $resultado->bind_param('ssdsissi', $nombre, $direccion, $rfc, $telefono, $correo,$fecha, $tipo_cliente, $id);
          $resultado->execute();
          $resultado->close();
          print_r(1);

}


    ?>
