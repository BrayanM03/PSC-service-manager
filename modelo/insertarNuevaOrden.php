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
        "estatus" => $_POST['status-new-orden'],
        "mes" => $mesActual,
        "usuario" => $_SESSION["userName"],
        "subcat" => $_POST["select-cat-nueva-orden"]
        
      
    );

    if(isset($_POST['solucion-nueva-orden'])){

         $descripcion = $_POST['solucion-nueva-orden'];
        
    }

    //Validando cantidad de renovaciones tecnlogicas
    if(isset($_POST['cantRen'])){

        $cantidadRen = $_POST['cantRen'];
       
   }

    //Validando cantidad de accesorios
    if(isset($_POST['cantAcc'])){

        $cantidadAcc = $_POST['cantAcc'];
       
   }

    //Procesando los datos del lado del servidor

    switch ($datos['subcat']) {
         
         //PROCESANDO DATOS DE MANTENIMIENTO-------:d
        case 'Mantenimiento':
            

            if ($datos['cr'] != "") {

                $chboxcctv="Mantenimiento CCTV";
                $chboxmto1 = "Mantenimiento POS";
    
              
    
                if (isset($_POST['chboxMembrana']) && $_POST['chboxMembrana'] == "Membrana") {
                    $chboxmem=$_POST["chboxMembrana"];
                   
                //llenado automatico
                $mantenimientoSol= "Se realiza mantenimiento preventivo a equipo de computo de caja 1 y 2.
                Se realiza mantenimiento a equipo site de comunicaciones.
                Se hacen pruebas y se deja funcionando.";
                $CCTVSol="Se realiza mantenimiento preventivo a equipo CCTV, se revisan camaras marca AXIS se deja todo en orden.";
                $membranaSol = "Se realiza cambio de membrana a teclado NEC por daño";
    
    
                $chboxmto1 = "Mantenimiento POS";
                //Insertado sql de mto
                $sqlInsertMto = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertMto);
                $resultado->bind_param(
                    'sssissssss',
                    $_POST['cr-input-nuevaOrden'],
                    $_POST['tienda-span-modal-mto'],
                    $_POST['date-nuevaOrden'],
                    $_POST['folio-nueva-orden'],
                    $chboxmto1,
                    $_POST['status-new-orden'],
                    $mantenimientoSol,
                    $mesActual,
                    $_SESSION["userName"],
                    $_POST["select-cat-nueva-orden"]

                     /*
                      "cr" => $_POST['cr-input-nuevaOrden'],
        "tienda" => $_POST['tienda-span-modal-mto'],
        "fecha" => $_POST['date-nuevaOrden'],
                     "folio" => $_POST['folio-nueva-orden'],
        "estatus" => $_POST['status-new-orden'],
        "mes" => $mesActual,
        "usuario" => $_SESSION["userName"],
        "subcat" => $_POST["select-cat-nueva-orden"]
                    */ 
                );
    
                $resultado->execute();
               
    
                //Insertado sql de mto
                $sqlInsertCCTV = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado2 = $con->prepare($sqlInsertCCTV);
                $resultado2->bind_param(
                    'sssissssss',
                    $_POST['cr-input-nuevaOrden'],
                    $_POST['tienda-span-modal-mto'],
                    $_POST['date-nuevaOrden'],
                    $_POST['folio-nueva-orden'],
                    $chboxcctv,
                    $_POST['status-new-orden'],
                    $CCTVSol,
                    $mesActual,
                    $_SESSION["userName"],
                    $_POST["select-cat-nueva-orden"]

                );
    
                $resultado2->execute();
               
                //Insertado sql de membrana accesorio
                $statMem= "Cerrado";
                $cantMem = 2;
                $catmtoconMem= 'Accesorios'; 
                $sqlInsertMem = "INSERT INTO accesorioscat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, cant, categoria) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                $resultado3 = $con->prepare($sqlInsertMem);
                $resultado3->bind_param(
                    'sssisssssis',
                    $_POST['cr-input-nuevaOrden'],
                    $_POST['tienda-span-modal-mto'],
                    $_POST['date-nuevaOrden'],
                    $_POST['folio-nueva-orden'],
                    $chboxmem,
                    $statMem,
                    $membranaSol,
                    $mesActual,
                    $_SESSION["userName"],
                    $cantMem,
                    $catmtoconMem
                );
    
                $resultado3->execute();
                


                $tiendaCR= $datos['cr'];
                $stats = 'realizado';

                $sqlTiendasStatus = "UPDATE cr SET mantenimiento= ? WHERE cr= '$tiendaCR'";
                $resultad = $con->prepare($sqlTiendasStatus);
                $resultad->bind_param(
                    's',
                    $stats
                );
    
                $resultad->execute();
                 
               
               print_r(1);
    
                }else{
    
    
                    //llenado automatico
                $mantenimientoSol= "Se realiza mantenimiento preventivo a equipo de computo de caja 1 y 2.
                Se realiza mantenimiento a equipo site de comunicaciones.
                Se hacen pruebas y se deja funcionando.";
                $CCTVSol="Se realiza mantenimiento preventivo a equipo CCTV, se revisan camaras marca AXIS se deja todo en orden.";
                $membranaSol = "Se realiza cambio de membrana a teclado NEC por daño";
    
    
                
                //Insertado sql de mto
                $sqlInsertMto = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertMto);
                $resultado->bind_param(
                    'sssissssss',
                    $_POST['cr-input-nuevaOrden'],
                    $_POST['tienda-span-modal-mto'],
                    $_POST['date-nuevaOrden'],
                    $_POST['folio-nueva-orden'],
                    $chboxmto1,
                    $_POST['status-new-orden'],
                    $mantenimientoSol,
                    $mesActual,
                    $_SESSION["userName"],
                    $_POST["select-cat-nueva-orden"]
                );
    
                $resultado->execute();
               
    
                //Insertado sql de cctv
                $sqlInsertCCTV = "INSERT INTO mantenimientocat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado2 = $con->prepare($sqlInsertCCTV);
                $resultado2->bind_param(
                    'sssissssss',
                    $_POST['cr-input-nuevaOrden'],
                    $_POST['tienda-span-modal-mto'],
                    $_POST['date-nuevaOrden'],
                    $_POST['folio-nueva-orden'],
                    $chboxcctv,
                    $_POST['status-new-orden'],
                    $CCTVSol,
                    $mesActual,
                    $_SESSION["userName"],
                    $_POST["select-cat-nueva-orden"]

                );

                $resultado2->execute();
               

                $tiendaCR= $datos['cr'];
                $stats = 'realizado';

                $sqlTiendasStatus = "UPDATE cr SET mantenimiento= ? WHERE cr= '$tiendaCR'";
                $res = $con->prepare($sqlTiendasStatus);
                $res->bind_param(
                    's',
                    $stats
                );
    
                $res->execute();
                
    
               
                print_r(1);
                }
              
            }else{
                print_r(3);
            }

             //FIN PROCESAMIENTO DE DATOS DE MANTENIMIENTO

            case 'Computadora':

                if ($datos['cr'] != "" && $datos['subcat']== "Computadora" ) {
                  
                  //$solucion= $_POST['solucion-nueva-orden'];  
                if (isset($_POST['chboxNuevaOrden'])) {
                   
                $subcategoria= $_POST['chboxNuevaOrden'];  
   
                //Insertado sql de computadora
                $sqlInsertComp = "INSERT INTO computadorascat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $_POST['cr-input-nuevaOrden'],
                    $_POST['tienda-span-modal-mto'],
                    $_POST['date-nuevaOrden'], 
                    $_POST['folio-nueva-orden'],
                    $subcategoria,
                    $_POST['status-new-orden'],
                    $descripcion,
                    $mesActual,
                    $_SESSION["userName"],
                    $_POST["select-cat-nueva-orden"]

                   
                );
    
                $resultado->execute();
                
                if($resultado == false){
                    print_r($con->error);
                }
                print_r(1);

                  }elseif(empty($_POST['chboxNuevaOrden'])){
                      print_r(5);
                  }
                

                }

            break;

            case 'Voz y Datos':
                
                if ($datos['cr'] != "" && $datos['subcat']== "Voz y Datos" ) {
                  
                    //$solucion= $_POST['solucion-nueva-orden'];  
                  if (isset($_POST['chboxNuevaOrden'])) {
                     
                  $subcategoria= $_POST['chboxNuevaOrden'];  
     
                  //Insertado sql de voz y datos
                  $sqlInsertVoz = "INSERT INTO vozydatoscat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                  $resultado = $con->prepare($sqlInsertVoz);
                  $resultado->bind_param(
                      'sssissssss',
                    $_POST['cr-input-nuevaOrden'],// $datos['cr'],
                    $_POST['tienda-span-modal-mto'],//$datos['tienda'],
                    $_POST['date-nuevaOrden'], //$datos['fecha'],
                    $_POST['folio-nueva-orden'],//$datos['folio'],
                    $subcategoria,
                    $_POST['status-new-orden'],//$datos['estatus'],
                    $descripcion,
                    $mesActual,//$datos['mes'],
                    $_SESSION["userName"],//$datos['usuario'],
                    $_POST["select-cat-nueva-orden"]// $datos['subcat']

                  );
      
                  $resultado->execute();
                  if($resultado == false){
                    print_r(1);
                }
                 
                  print_r($_POST['cr-input-nuevaOrden']);
  
                    }elseif(empty($_POST['chboxNuevaOrden'])){
                        print_r(5);
                    }
                  
  
                  }

            break;

            case 'CCTV':
                
                if ($datos['cr'] != "" && $datos['subcat']== "CCTV" ) {
                  
                    //$solucion= $_POST['solucion-nueva-orden'];  
                  if (isset($_POST['chboxNuevaOrden'])) {
                     
                  $subcategoria= $_POST['chboxNuevaOrden'];  
     
                  //Insertado sql de computadora
                  $sqlInsertCctv = "INSERT INTO cctvcat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                  $resultado = $con->prepare($sqlInsertCctv);
                  $resultado->bind_param(
                      'sssissssss',
                      $_POST['cr-input-nuevaOrden'],// $datos['cr'],
                    $_POST['tienda-span-modal-mto'],//$datos['tienda'],
                    $_POST['date-nuevaOrden'], //$datos['fecha'],
                    $_POST['folio-nueva-orden'],//$datos['folio'],
                    $subcategoria,
                    $_POST['status-new-orden'],//$datos['estatus'],
                    $descripcion,
                    $mesActual,//$datos['mes'],
                    $_SESSION["userName"],//$datos['usuario'],
                    $_POST["select-cat-nueva-orden"]// $datos['subcat']

                  );
      
                  $resultado->execute();
                  //$resultado->close();
                  

                  print_r(1);
  
                    }elseif(empty($_POST['chboxNuevaOrden'])){
                        print_r(5);
                    }
                  
  
                  }
            break;

            case 'Impresoras':
                
                if ($datos['cr'] != "" && $datos['subcat']== "Impresoras" ) {
                  
                    //$solucion= $_POST['solucion-nueva-orden'];  
                  if (isset($_POST['chboxNuevaOrden'])) {
                     
                  $subcategoria= $_POST['chboxNuevaOrden'];  
     
                  //Insertado sql de computadora
                  $sqlInsertImp = "INSERT INTO impresorascat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                  $resultado = $con->prepare($sqlInsertImp);
                  $resultado->bind_param(
                      'sssissssss',
                      $_POST['cr-input-nuevaOrden'],// $datos['cr'],
                      $_POST['tienda-span-modal-mto'],//$datos['tienda'],
                      $_POST['date-nuevaOrden'], //$datos['fecha'],
                      $_POST['folio-nueva-orden'],//$datos['folio'],
                      $subcategoria,
                      $_POST['status-new-orden'],//$datos['estatus'],
                      $descripcion,
                      $mesActual,//$datos['mes'],
                      $_SESSION["userName"],//$datos['usuario'],
                      $_POST["select-cat-nueva-orden"]// $datos['subcat']
  
                  );
      
                  $resultado->execute();
                  
                  print_r(1);
  
                    }elseif(empty($_POST['chboxNuevaOrden'])){
                        print_r(5);
                    }
                  
  
                  }

            break;

            case 'Accesorios':
                
                if ($datos['cr'] != "" && $datos['subcat']== "Accesorios" ) {
                  
                    //$solucion= $_POST['solucion-nueva-orden'];  
                  if (isset($_POST['chboxNuevaOrden'])) {
                     
                  $subcategoria= $_POST['chboxNuevaOrden'];  
     
                  //Insertado sql de computadora
                  $sqlInsertAcc = "INSERT INTO accesorioscat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, cant, categoria) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                  $resultado = $con->prepare($sqlInsertAcc);
                  $resultado->bind_param(
                      'sssisssssis',
                      $_POST['cr-input-nuevaOrden'],// $datos['cr'],
                      $_POST['tienda-span-modal-mto'],//$datos['tienda'],
                      $_POST['date-nuevaOrden'], //$datos['fecha'],
                      $_POST['folio-nueva-orden'],//$datos['folio'],
                      $subcategoria,
                      $_POST['status-new-orden'],//$datos['estatus'],
                      $descripcion,
                      $mesActual,//$datos['mes'],
                      $_SESSION["userName"],//$datos['usuario'],
                      $cantidadAcc,
                      $_POST["select-cat-nueva-orden"]// $datos['subcat']
  
                  );
      
                  $resultado->execute();
                  
                  print_r(1);
  
                    }elseif(empty($_POST['chboxNuevaOrden'])){
                        print_r(5);
                    }
                  
  
                  }

            break;

            case 'IMAC':
                
                if ($datos['cr'] != "" && $datos['subcat']== "IMAC" ) {
                  
                    //$solucion= $_POST['solucion-nueva-orden'];  
                  if (isset($_POST['chboxNuevaOrden'])) {
                     
                  $subcategoria= $_POST['chboxNuevaOrden'];  
     
                  //Insertado sql de computadora
                  $sqlInsertImac = "INSERT INTO imaccat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                  $resultado = $con->prepare($sqlInsertImac);
                  $resultado->bind_param(
                      'sssissssss',
                      $_POST['cr-input-nuevaOrden'],// $datos['cr'],
                    $_POST['tienda-span-modal-mto'],//$datos['tienda'],
                    $_POST['date-nuevaOrden'], //$datos['fecha'],
                    $_POST['folio-nueva-orden'],//$datos['folio'],
                    $subcategoria,
                    $_POST['status-new-orden'],//$datos['estatus'],
                    $descripcion,
                    $mesActual,//$datos['mes'],
                    $_SESSION["userName"],//$datos['usuario'],
                    $_POST["select-cat-nueva-orden"]// $datos['subcat']

                  );
      
                  $resultado->execute();
                  
                  print_r(1);
  
                    }elseif(empty($_POST['chboxNuevaOrden'])){
                        print_r(5);
                    }
                  
  
                  }

            break;

            case 'Refacciones':
                
               if ($datos['cr'] != "" && $datos['subcat']== "Refacciones" ) {
                  
                  //$solucion= $_POST['solucion-nueva-orden'];  
                if (isset($_POST['chboxNuevaOrden'])) {
                   
                $subcategoria= $_POST['chboxNuevaOrden'];  
   
                //Insertado sql de computadora
                $sqlInsertRef = "INSERT INTO refaccionescat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertRef);
                $resultado->bind_param(
                    'sssissssss',
                    $_POST['cr-input-nuevaOrden'],// $datos['cr'],
                    $_POST['tienda-span-modal-mto'],//$datos['tienda'],
                    $_POST['date-nuevaOrden'], //$datos['fecha'],
                    $_POST['folio-nueva-orden'],//$datos['folio'],
                    $subcategoria,
                    $_POST['status-new-orden'],//$datos['estatus'],
                    $descripcion,
                    $mesActual,//$datos['mes'],
                    $_SESSION["userName"],//$datos['usuario'],
                    $_POST["select-cat-nueva-orden"]// $datos['subcat']

                );
    
                $resultado->execute();
                
                print_r(1);

                  }elseif(empty($_POST['chboxNuevaOrden'])){
                      print_r(5);
                  }
                

                }

            break;

            case 'Renovacion':
                
                if ($datos['cr'] != "" && $datos['subcat']== "Renovacion" ) {
                   
                   //$solucion= $_POST['solucion-nueva-orden'];  
                 if (isset($_POST['chboxNuevaOrden'])) {
                    
                 $subcategoria= $_POST['chboxNuevaOrden'];  
    
                 //Insertado sql de computadora
                 $sqlInsertRef = "INSERT INTO renovacioncat(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, cant, categoria) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                 $resultado = $con->prepare($sqlInsertRef);
                 $resultado->bind_param(
                     'sssisssssis',
                     $_POST['cr-input-nuevaOrden'],// $datos['cr'],
                     $_POST['tienda-span-modal-mto'],//$datos['tienda'],
                     $_POST['date-nuevaOrden'], //$datos['fecha'],
                     $_POST['folio-nueva-orden'],//$datos['folio'],
                     $subcategoria,
                     $_POST['status-new-orden'],//$datos['estatus'],
                     $descripcion,
                     $mesActual,//$datos['mes'],
                     $_SESSION["userName"],//$datos['usuario'],
                     $cantidadRen,
                     $_POST["select-cat-nueva-orden"]// $datos['subcat']
 
                 );
     
                 $resultado->execute();
                
                 print_r(1);
 
                   }elseif(empty($_POST['chboxNuevaOrden'])){
                       print_r(5);
                   }
                 
 
                 }
 
             break;
        
        default:
        print_r(3);
            break;
    }
   
   

  /*  

   
       
    } else {
        print_r(2);
    }*/
}
