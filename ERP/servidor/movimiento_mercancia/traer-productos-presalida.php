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

      $userid = $_SESSION["userID"];

     $query_mostrar = $con->prepare("SELECT COUNT(*) total FROM pre_salida$userid");

    if($query_mostrar){//Si hay una tabla llamada asi

       $query_mostrar->execute();
       $query_mostrar->bind_result($total);
       $query_mostrar->fetch();
       $query_mostrar->close();

     }else{// Si no la hay, se debera crear
       $crear = "CREATE TABLE pre_salida$userid (
            id INT NOT NULL AUTO_INCREMENT,
            codigo VARCHAR(255) NOT NULL,
            descripcion VARCHAR(255),
            modelo VARCHAR(255),
            cantidad INT,
            PRIMARY KEY (id)
        );";
        $result2 = $con->query($crear);

        if ($result2) {

            $consultar= "SELECT COUNT(*) total FROM pre_salida$userid";
            $resultado = $con->prepare($consultar);
            $query_mostrar->execute();
            $query_mostrar->bind_result($total);
            $query_mostrar->fetch();
            $query_mostrar->close();

        }else{
            echo "Se creo puro chile";
        }
     }
     //-----------------------------------------------------------------------------------------------------//
     //-----------------------------------------------------------------------------------------------------/





     if ($total > 0) {

        $sqlTraerLlanta="SELECT * FROM pre_salida$userid";
        $resultado = mysqli_query($con, $sqlTraerLlanta);

        while($fila= $resultado->fetch_assoc()){

            $id = $fila["id"];
            $codigo = $fila["codigo"];
            $descripcion = $fila["descripcion"];
            $modelo = $fila["modelo"];
            $cantidad = $fila["cantidad"];


            $data['data'][] = array("id" => $id, "codigo" => $codigo,"descripcion" => $descripcion,"modelo" => $modelo, "cantidad"=>$cantidad);

             //print_r(" la segunda iteracion de la llanta ID " . $id . " tiene de stock ". $TotalStock);
        }

        echo json_encode($data, JSON_UNESCAPED_UNICODE);


    }else{

        echo 'Sin datos';
    }

    }else{
        print_r("Error al conectar");
    }


    ?>
