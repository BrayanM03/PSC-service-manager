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
    date_default_timezone_set("America/Matamoros");
    

    //Se asignan variables y se inserta remision en lista de remisiones de salida
    $cliente = $_POST["cliente"];
    $tecnico = $_POST["tecnico"];
    $motivo =  $_POST["motivo"];
    $fecha = $_POST["fecha"];
    $usuario = $_SESSION["userName"] . " " . $_SESSION["userLastname"];
    $hora = date("H:i a");

    $insert_salida = "INSERT INTO mercancia_salida(id, motivo, usuario, tecnico, fecha, hora, cliente) VALUES(null,?,?,?,?,?,?)";
    $resultado = $con->prepare($insert_salida);
           if($resultado){
             $resultado->bind_param('ssssss',$motivo, $usuario, $tecnico, $fecha, $hora, $cliente);
             $resultado->execute();
            

           }else{
                $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
                 print_r($arrResultado); 
           }
    $resultado->close();

    $datos_productos = $_POST["data"];
     
    $traer_codigo = "SELECT MAX(id) AS id FROM mercancia_salida";
    $resultado = $con->prepare($traer_codigo);
    $resultado->execute();
    $resultado->bind_result($id_Salida);
    $resultado->fetch();
    $resultado->close();



      //Empezamos a recorrer el array de datos del objeto que le pasamos al script 
      
      foreach ($datos_productos as $key => $value) {

        $validacion = is_numeric($key);

            $codigo = $value["codigo"];
            $descripcion = $value["descripcion"];
            $modelo = $value["modelo"];
            $cantidad = $value["cantidad"];
           
            $subcadena = substr($codigo, 0, 7);

            switch($subcadena){
              case 'PSCCOMP':
                $tabla = "computadoras_inv";

                break;
              case "PSCCCTV":
                $tabla = "cctv_inv";
                break;
              case "PSCENLA":
                $tabla = 'enlace_inv';
                break;
              case "PSCIMPR":
                $tabla = 'consumibles_inv';
              case "PSCOTRO":
                $tabla = "pv_inv";
              break;
              default:
              echo "Error en el matcheo de la subcadena.";
              break;
            }

            //Contamos el stock y lo guardamos
            $contar_stock = $con->prepare("SELECT cantidad FROM $tabla WHERE codigo LIKE ?");
            $contar_stock->bind_param('s', $codigo);
            $contar_stock->execute();
            $contar_stock->bind_result($stock_actual);
            $contar_stock->fetch();
            $contar_stock->close();
            //Restamos 
            $total_stock = intval($stock_actual) - intval($cantidad);
            //Y actualizamos
            $actualizar_stock = $con->prepare("UPDATE $tabla SET cantidad = ? WHERE codigo LIKE ?");
            if($actualizar_stock){
              $actualizar_stock->bind_param('is',$total_stock, $codigo);
              $actualizar_stock->execute();
              $actualizar_stock->close();
            }else{
              echo "Consulta con error.";
            }
            //Insetramos la info en el detalle de salida
            $insertar_detalle_salida = $con->prepare("INSERT INTO detalle_productos_salida (id, cantidad, codigo, descripcion, modelo, id_salida) VALUES(null,?,?,?,?,?)");
            $insertar_detalle_salida->bind_param('isssi', $cantidad, $codigo, $descripcion, $modelo, $id_Salida);
            $insertar_detalle_salida->execute();
            $insertar_detalle_salida->close();
            
            print_r(1);

      }



    ?>
