<?php

    include '../../../controladores/conexion.php';
    $con= $conectando->conexion();

    if (!$con) {
        echo "maaaaal";
    }

    if (isset($_POST["searchTerm"])) {
        $term = $_POST["searchTerm"];
        $parametro = "%$term%";

       $validar_comp = $con->prepare("SELECT COUNT(*) total FROM clientes WHERE nombre LIKE ? OR id LIKE ? OR direccion LIKE ? OR rfc LIKE ? OR telefono LIKE ? OR correo LIKE ? OR fecha LIKE ? OR tipo_cliente LIKE ?");
       $validar_comp->bind_param('ssssssss', $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro);
       $validar_comp->execute();
       $validar_comp->bind_result($total_comp);
       $validar_comp->fetch();
       $validar_comp->close();



      if ($total_comp > 0) {

          $traerClientes="SELECT * FROM clientes  WHERE nombre LIKE '%$term%'
                                                                  OR direccion LIKE '%$term%'
                                                                  OR rfc LIKE '%$term%'
                                                                  OR telefono LIKE '%$term%'
                                                                  OR correo LIKE '%$term%'
                                                                  OR fecha LIKE '%$term%'
                                                                  OR tipo_cliente LIKE '%$term%'
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
