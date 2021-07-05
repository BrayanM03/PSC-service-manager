<?php

header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

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
      $tabla = $_POST["tabla"];

      if(isset($_POST["pre_id"])){
      $id = $_POST["pre_id"];
      $carpeta = "temp";
    }else{
      $id = $_POST["post_id"];
      $carpeta = "productos";
      $files = glob('../../../vistas/dist/img/ERP/temp/*'); //obtenemos todos los nombres de los ficheros
      foreach($files as $file){
      if(is_file($file))
      unlink($file); //elimino el fichero
     }
    }

      $traer_codigo = $con->prepare("SELECT codigo FROM $tabla WHERE id = ?");
      $traer_codigo->bind_param("i", $id);
      $traer_codigo->execute();
      $traer_codigo->bind_result($code);
      $traer_codigo->fetch();
      $traer_codigo->close();



      if ($_FILES["update-image"]["type"] == "image/jpeg") {
         if (move_uploaded_file($_FILES["update-image"]["tmp_name"], "../../../vistas/dist/img/ERP/". $carpeta ."/".$code.".jpg")) {
         //more code here...
            print_r($code);

                     } else {
                         echo "cuack";
                     }
                 } else {
                     echo "lol";
                 }
}


    ?>
