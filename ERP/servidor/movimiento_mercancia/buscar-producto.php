<?php

    include '../../../controladores/conexion.php';
    $con= $conectando->conexion();

    if (!$con) {
        echo "maaaaal";
    }

    if (isset($_POST["searchTerm"])) {
        $term = $_POST["searchTerm"];
        $parametro = "%$term%";

       $validar_comp = $con->prepare("SELECT COUNT(*) total FROM computadoras_inv inv WHERE inv.codigo LIKE ? OR inv.descripcion LIKE ? OR inv.modelo LIKE ? OR inv.cantidad LIKE ? OR inv.costo LIKE ? OR inv.precio LIKE ? OR inv.categoria LIKE ? OR inv.clave_sat LIKE ?");
       $validar_comp->bind_param('ssssssss', $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro);
       $validar_comp->execute();
       $validar_comp->bind_result($total_comp);
       $validar_comp->fetch();
       $validar_comp->close();

       $validar_imp = $con->prepare("SELECT COUNT(*) total FROM consumibles_inv inv WHERE inv.codigo LIKE ? OR inv.descripcion LIKE ? OR inv.modelo LIKE ? OR inv.cantidad LIKE ? OR inv.costo LIKE ? OR inv.precio LIKE ? OR inv.categoria LIKE ? OR inv.clave_sat LIKE ?");
       $validar_imp->bind_param('ssssssss', $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro);
       $validar_imp->execute();
       $validar_imp->bind_result($total_imp);
       $validar_imp->fetch();
       $validar_imp->close();

       $validar_enla = $con->prepare("SELECT COUNT(*) total FROM enlace_inv inv WHERE inv.codigo LIKE ? OR inv.descripcion LIKE ? OR inv.modelo LIKE ? OR inv.cantidad LIKE ? OR inv.costo LIKE ? OR inv.precio LIKE ? OR inv.categoria LIKE ? OR inv.clave_sat LIKE ?");
       $validar_enla->bind_param('ssssssss', $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro);
       $validar_enla->execute();
       $validar_enla->bind_result($total_enlace);
       $validar_enla->fetch();
       $validar_enla->close();

       $validar_cctv = $con->prepare("SELECT COUNT(*) total FROM cctv_inv inv WHERE inv.codigo LIKE ? OR inv.descripcion LIKE ? OR inv.modelo LIKE ? OR inv.cantidad LIKE ? OR inv.costo LIKE ? OR inv.precio LIKE ? OR inv.categoria LIKE ? OR inv.clave_sat LIKE ?");
       $validar_cctv->bind_param('ssssssss', $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro);
       $validar_cctv->execute();
       $validar_cctv->bind_result($total_cctv);
       $validar_cctv->fetch();
       $validar_cctv->close();

       $validar_pv = $con->prepare("SELECT COUNT(*) total FROM pv_inv inv WHERE inv.codigo LIKE ? OR inv.descripcion LIKE ? OR inv.modelo LIKE ? OR inv.cantidad LIKE ? OR inv.costo LIKE ? OR inv.precio LIKE ? OR inv.categoria LIKE ? OR inv.clave_sat LIKE ?");
       $validar_pv->bind_param('ssssssss', $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro, $parametro);
       $validar_pv->execute();
       $validar_pv->bind_result($total_pv);
       $validar_pv->fetch();
       $validar_pv->close();

      //print_r("Compu: ". $total_comp . " Enlace: " . $total_enlace . " CCTV: " . $total_cctv . " IMP:" . $total_imp . " PV: " . $total_imp);

      //Traer la información del inventario de la base de datos:

      if ($total_comp > 0) {

          $traerProducto="SELECT * FROM computadoras_inv inv  WHERE inv.codigo LIKE '%$term%'
                                                                  OR inv.descripcion LIKE '%$term%'
                                                                  OR inv.modelo LIKE '%$term%'
                                                                  OR inv.marca LIKE '%$term%'
                                                                  OR inv.cantidad LIKE '%$term%'
                                                                  OR inv.costo LIKE '%$term%'
                                                                  OR inv.precio LIKE '%$term%'
                                                                  OR inv.categoria LIKE '%$term%'
                                                                  OR inv.clave_sat LIKE '%$term%'
                                                                  OR inv.upc LIKE '%$term%'";
          $result = mysqli_query($con, $traerProducto);
          while ($datas=mysqli_fetch_array($result)){

              $productosComp[]  = $datas;

          }
      }else{
        $productosComp = array();
      }

      if ($total_imp > 0) {

          $traerConsumibles="SELECT * FROM consumibles_inv inv WHERE inv.codigo LIKE '%$term%'
                                                                  OR inv.descripcion LIKE '%$term%'
                                                                  OR inv.modelo LIKE '%$term%'
                                                                  OR inv.marca LIKE '%$term%'
                                                                  OR inv.cantidad LIKE '%$term%'
                                                                  OR inv.costo LIKE '%$term%'
                                                                  OR inv.precio LIKE '%$term%'
                                                                  OR inv.categoria LIKE '%$term%'
                                                                  OR inv.clave_sat LIKE '%$term%'
                                                                  OR inv.upc LIKE '%$term%'";
          $result = mysqli_query($con, $traerConsumibles);
          while ($datas=mysqli_fetch_array($result)){

              $productosImpr[]  = $datas;

          }
      }else{
        $productosImpr = array();
      }

      if ($total_cctv > 0) {

          $traerCCTV="SELECT * FROM cctv_inv inv WHERE inv.codigo LIKE '%$term%'
                                                                  OR inv.descripcion LIKE '%$term%'
                                                                  OR inv.modelo LIKE '%$term%'
                                                                  OR inv.marca LIKE '%$term%'
                                                                  OR inv.cantidad LIKE '%$term%'
                                                                  OR inv.costo LIKE '%$term%'
                                                                  OR inv.precio LIKE '%$term%'
                                                                  OR inv.categoria LIKE '%$term%'
                                                                  OR inv.clave_sat LIKE '%$term%'
                                                                  OR inv.upc LIKE '%$term%'";
          $result = mysqli_query($con, $traerCCTV);
          while ($datas=mysqli_fetch_array($result)){

              $productosCctv[]  = $datas;

          }
      }else{
        $productosCctv= array();
      }


      if ($total_enlace > 0) {

          $traerEnlace="SELECT * FROM enlace_inv inv WHERE inv.codigo LIKE '%$term%'
                                                                  OR inv.descripcion LIKE '%$term%'
                                                                  OR inv.modelo LIKE '%$term%'
                                                                  OR inv.marca LIKE '%$term%'
                                                                  OR inv.cantidad LIKE '%$term%'
                                                                  OR inv.costo LIKE '%$term%'
                                                                  OR inv.precio LIKE '%$term%'
                                                                  OR inv.categoria LIKE '%$term%'
                                                                  OR inv.clave_sat LIKE '%$term%'
                                                                  OR inv.upc LIKE '%$term%'";
          $result = mysqli_query($con, $traerEnlace);
          while ($datas=mysqli_fetch_array($result)){

              $productosEnlace[]  = $datas;

          }
      }else{
        $productosEnlace = array();
      }


      if ($total_pv > 0) {

          $traerPV="SELECT * FROM computadoras_inv inv WHERE inv.codigo LIKE '%$term%'
                                                                  OR inv.descripcion LIKE '%$term%'
                                                                  OR inv.modelo LIKE '%$term%'
                                                                  OR inv.marca LIKE '%$term%'
                                                                  OR inv.cantidad LIKE '%$term%'
                                                                  OR inv.costo LIKE '%$term%'
                                                                  OR inv.precio LIKE '%$term%'
                                                                  OR inv.categoria LIKE '%$term%'
                                                                  OR inv.clave_sat LIKE '%$term%'
                                                                  OR inv.upc LIKE '%$term%'";
          $result = mysqli_query($con, $traerPV);
          while ($datas=mysqli_fetch_array($result)){

              $productosPV[]  = $datas;

          }
      }else{
        $productosPV = array();
      }

          $inventario_total = array();
          $inventario_total = array_merge($productosComp, $productosCctv, $productosImpr, $productosEnlace, $productosPV);
           echo json_encode($inventario_total, JSON_UNESCAPED_UNICODE);
  }
    ?>
