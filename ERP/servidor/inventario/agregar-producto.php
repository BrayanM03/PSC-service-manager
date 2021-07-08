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
           $descripcion = $_POST["descripcion"];
           $cantidad = $_POST["cantidad"];
           $modelo = $_POST["modelo"];
           $marca = $_POST["marca"];
           $costo = $_POST["costo"];
           $precio = $_POST["precio"];
           $categoria = $_POST["categoria"];
           $clavesat = $_POST["sat"];
           $clave_unidad = "H87";
           $tabla = $_POST["clase"];
           //$fecha = $fila["fecha"];

           switch ($tabla) {
               case 'computadoras_inv':
               $cod_name = "PSCCOMP0";
               break;

               case 'cctv_inv':
               $cod_name = "PSCCCTV0";
               break;

               case 'consumibles_inv':
               $cod_name = "PSCIMPR0";
               break;

               case 'enlace_inv':
               $cod_name = "PSCENLA0";
               break;

               case 'pv_inv':
               $cod_name = "PSCOTRO0";
               break;


             default:
               // code...
               break; 
           }

    $sql = "SELECT codigo FROM $tabla ORDER BY codigo DESC LIMIT 1";
    $resultado = mysqli_query($con, $sql);

    if(!$resultado){
      echo "no se pudo realizar la consulta";

    }else{
      $dato =  mysqli_fetch_array($resultado, MYSQLI_ASSOC);

        $cod = $dato["codigo"];
        $substring = substr($cod, 8);
        $num_nuevo = intval($substring) + 1;
        $codigo_nuevo = $cod_name . $num_nuevo;



     if ($_FILES["imagen"]["type"] == "image/jpeg") {
        if (move_uploaded_file($_FILES["imagen"]["tmp_name"], "../../../vistas/dist/img/ERP/productos/".$codigo_nuevo.".jpg")) {
        //more code here...
           print_r(1);

                    } else {
                        echo "cuack";
                    }
                } else {
                    echo "lol";
                }


        $insert_product = "INSERT INTO $tabla(id, codigo, descripcion, modelo, marca, cantidad, costo, precio, categoria, clave_sat, clave_unidad, tabla) VALUES(null,?,?,?,?,?,?,?,?,?,?,?)";
        $resultado = $con->prepare($insert_product);
        $resultado->bind_param('ssssiddsiss',$codigo_nuevo, $descripcion, $modelo, $marca, $cantidad, $costo, $precio, $categoria, $clavesat, $clave_unidad, $tabla);
        $resultado->execute();
        $resultado->close();

        if($resultado){
          print_r(1);
        } else {
          print_r(0);
        }
      }


}


    ?>
