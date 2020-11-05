<?php
include '../controladores/conexion.php';
$con = $conectando->conexion();


if (isset($_POST)) {


    $mesActual = strftime("%B");

    $datos = array(
        "cr" => $_POST['cr-input-nuevaOrden'],
        "tienda" => $_POST['tienda-span-modal-mto'],
        "fecha" => $_POST['date-nuevaOrden'],
        "folio" => $_POST['folio-nueva-orden'],
        //"subcat" => $_POST['select-subcat-nueva-orden'],
        "estatus" => $_POST['status-new-orden'],
        //"solucion" => $_POST['solucion-nueva-orden'],
        "mes" => $mesActual,
        //"usuario" => $_SESSION["userName"],
        "cat" => $_POST["select-cat-nueva-orden"]
        
      
    );

    if(isset($_POST['solucion-nueva-orden'])){
         $descripcion = $_POST['solucion-nueva-orden'];
        
    }


   


    if ($datos['cat']== 'Mantenimiento') {

            $mantenimientoSol= "Se realiza mantenimiento preventivo a equipo de computo de caja 1 y 2.
            Se realiza mantenimiento a equipo site de comunicaciones.
            Se hacen pruebas y se deja funcionando.";
            $CCTVSol="Se realiza mantenimiento preventivo a equipo CCTV, se revisan camaras marca AXIS se deja todo en orden.";

            $sqlInsertMto = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes) VALUES (?,?,?,?,?,?,?,?)";
            $resultado = $con->prepare($sqlInsertMto);
            $resultado->bind_param(
                'sssissss',
                $datos['cr'],
                $datos['tienda'],
                $datos['fecha'],
                $datos['folio'],
                $datos['cat'],
                $datos['estatus'],
                $mantenimientoSol,
                $datos['mes'],
            );

            $resultado->execute();
            $resultado->close();
           
           print_r(1);


            
        

       
    } else {
        print_r(2);
    }
}
