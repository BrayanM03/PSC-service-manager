<?php
include '../controladores/conexion.php';
$con = $conectando->conexion();
session_start();

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
        "usuario" => $_SESSION["userName"],
        "subcat" => $_POST["select-cat-nueva-orden"]
        
      
    );

    if(isset($_POST['solucion-nueva-orden'])){

         $descripcion = $_POST['solucion-nueva-orden'];
        
    }

    switch ($datos['subcat']) {
         
         //PROCESANDO DATOS DE MANTENIMIENTO-------:d
        case 'Mantenimiento':
            

            if ($datos['cr'] != "") {

                $chboxcctv="Mantenimiento CCTV";
                $chboxmto1 = "Mantenimiento POS";
    
               // $chboxcctv=$_POST["chboxCctv"];
    
                if (isset($_POST['chboxMembrana']) && $_POST['chboxMembrana'] == "membrana") {
                    $chboxmem=$_POST["chboxMembrana"];
                   
                     //llenado automatico
                $mantenimientoSol= "Se realiza mantenimiento preventivo a equipo de computo de caja 1 y 2.
                Se realiza mantenimiento a equipo site de comunicaciones.
                Se hacen pruebas y se deja funcionando.";
                $CCTVSol="Se realiza mantenimiento preventivo a equipo CCTV, se revisan camaras marca AXIS se deja todo en orden.";
                $membranaSol = "Se realiza cambio de membrana a teclado NEC por daño";
    
    
                $chboxmto1 = "Mantenimiento POS";
                //Insertado sql de mto
                $sqlInsertMto = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario) VALUES (?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertMto);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $chboxmto1,
                    $datos['estatus'],
                    $mantenimientoSol,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close();
    
                //Insertado sql de cctv
                $sqlInsertCCTV = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario) VALUES (?,?,?,?,?,?,?,?,?)";
                $resultado2 = $con->prepare($sqlInsertCCTV);
                $resultado2->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $chboxcctv,
                    $datos['estatus'],
                    $CCTVSol,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado2->execute();
                $resultado2->close();
    
                //Insertado sql de membrana accesorio
                $statMem= "Cerrado";
                $sqlInsertMem = "INSERT INTO accesorioscat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario) VALUES (?,?,?,?,?,?,?,?,?)";
                $resultado3 = $con->prepare($sqlInsertMem);
                $resultado3->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $chboxmem,
                    $statMem,
                    $membranaSol,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado3->execute();
                $resultado3->close();
               
               print_r(1);
    
                }else{
    
    
                    //llenado automatico
                $mantenimientoSol= "Se realiza mantenimiento preventivo a equipo de computo de caja 1 y 2.
                Se realiza mantenimiento a equipo site de comunicaciones.
                Se hacen pruebas y se deja funcionando.";
                $CCTVSol="Se realiza mantenimiento preventivo a equipo CCTV, se revisan camaras marca AXIS se deja todo en orden.";
                $membranaSol = "Se realiza cambio de membrana a teclado NEC por daño";
    
    
                
                //Insertado sql de mto
                $sqlInsertMto = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario) VALUES (?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertMto);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $chboxmto1,
                    $datos['estatus'],
                    $mantenimientoSol,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close();
    
                //Insertado sql de cctv
                $sqlInsertCCTV = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario) VALUES (?,?,?,?,?,?,?,?,?)";
                $resultado2 = $con->prepare($sqlInsertCCTV);
                $resultado2->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $chboxcctv,
                    $datos['estatus'],
                    $CCTVSol,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado2->execute();
                $resultado2->close();
                print_r(1);
                }
              
            }else{
                print_r(3);
            }

            break;
        
        default:
        print_r(3);
            break;
    }
   
   

  /*  

    //FIN PROCESAMIENTO DE DATOS DE MANTENIMIENTO
       
    } else {
        print_r(2);
    }*/
}
