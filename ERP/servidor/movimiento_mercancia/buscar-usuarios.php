<?php

    include '../../../controladores/conexion.php';
    $con= $conectando->conexion();

    if (!$con) {
        echo "maaaaal";
    }

    if (isset($_POST["searchTerm"])) {
        $term = $_POST["searchTerm"];
        $parametro = "%$term%";

       $validar_comp = $con->prepare("SELECT COUNT(*) total FROM usuarios WHERE Nombre LIKE ? OR Apellido LIKE ? OR id LIKE ? OR Apellido LIKE ? OR user LIKE ?");
       $validar_comp->bind_param('sssss', $parametro, $parametro, $parametro, $parametro, $parametro);
       $validar_comp->execute();
       $validar_comp->bind_result($total_comp);
       $validar_comp->fetch();
       $validar_comp->close();



      if ($total_comp > 0) {

          $traerClientes="SELECT * FROM usuarios WHERE Nombre LIKE '%$term%'
                                                                  OR Apellido LIKE '%$term%'
                                                                  OR user LIKE '%$term%'
                                                                  OR rol LIKE '%$term%'
                                                                  OR id LIKE '%$term%'";
          $result = mysqli_query($con, $traerClientes);
          while ($datas=mysqli_fetch_array($result)){

              $clientes_encontrados[]  = $datas;

          }
      }else{
        print_r("No se encontro nada");
      }


           echo json_encode($clientes_encontrados, JSON_UNESCAPED_UNICODE);
  }
    ?>
