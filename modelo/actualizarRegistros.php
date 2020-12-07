<?php
include '../controladores/conexion.php';
$con = $conectando->conexion();
session_start();

if (isset($_POST["swal-solucion"])) {

    $mesActual = strftime("%B");
    $descripcion = $_POST["swal-solucion"];
    $ID = $_POST['id-input-modal'];
    $datos = array(
        "cr" => $_POST['cr-input-nuevaOrden'],
        "tienda" => $_POST['tienda-span-modal-mto'],
        "fecha" => $_POST['date-nuevaOrden'],
        "folio" => $_POST['folio-nueva-orden'],
        "estatus" => $_POST['status-new-orden'],
        "mes" => $mesActual,
        "usuario" => $_SESSION["userName"],
        "cat" => $_POST["select-cat-editar-orden"],
        "solucion" => $descripcion,
        "subcat" => $_POST["subcat-editar-orden"],
        
        "this_cate" => $_POST["cate-input-modal"]


    );

    
   
    $cadena = strtolower(str_replace(' ', '', $datos["cat"]));

    switch ($datos["this_cate"]) {

        case 'Computadora':
               
            if ($datos["cat"] == $datos["this_cate"]) {

                $sqlUpdateComp = "UPDATE computadorascat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(1);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM computadorascat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(1);
            }
           
           


            break;

        case 'Voz y Datos':

            if ($datos["cat"] == $datos["this_cate"]) {

                $sqlUpdateComp = "UPDATE vozydatoscat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(2);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM vozydatoscat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(2);
            }


            break;

        case 'CCTV':

            if ($datos["cat"] == $datos["this_cate"]) {

                $sqlUpdateComp = "UPDATE cctvcat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(3);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM cctvcat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(3);
            }


            break;


        case 'Mantenimiento':

            if ($datos["cat"] == $datos["this_cate"]) {

                $sqlUpdateComp = "UPDATE mantenimientocat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(4);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM mantenimientocat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(4);
            }

            break;


        case 'Impresoras':

            if ($datos["cat"] == $datos["this_cate"]) {

                $sqlUpdateComp = "UPDATE impresorascat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(5);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM impresorascat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(5);
            }

            break;


        case 'Accesorios':

            if ($datos["cat"] == $datos["this_cate"]) {

                if(isset($POST["cant-editar-orden"])){
                    $cant = $POST["cant-editar-orden"];
                }

                $sqlUpdateComp = "UPDATE accesorioscat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=?, cant=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssssi',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $cant
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(6);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM accesorioscat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(6);
            }

            break;


        case 'IMAC':

            if ($datos["cat"] == $datos["this_cate"]) {

                $sqlUpdateComp = "UPDATE imaccat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(7);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM imaccat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(7);
            }

            break;


        case 'Refacciones':

            if ($datos["cat"] == $datos["this_cate"]) {

                $sqlUpdateComp = "UPDATE refaccionescat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(8);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }
                
                $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                $resultado = $con->prepare($sqlInsertComp);
                $resultado->bind_param(
                    'sssissssss',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $datos["cat"]
                );
    
                $resultado->execute();
                $resultado->close();
                
                $borrado = "DELETE FROM refaccionescat WHERE id = $ID";
                mysqli_query($con, $borrado);
                
                print_r(8);
            }

            break;


        case 'Renovacion':

          
            if ($datos["cat"] == $datos["this_cate"]) {

                if(isset($POST["cant-editar-orden"])){
                    $cant = $POST["cant-editar-orden"];
                }
    

                $sqlUpdateComp = "UPDATE renovacioncat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=?, cant=? WHERE id= $ID";
                $resultado = $con->prepare($sqlUpdateComp);
                $resultado->bind_param(
                    'sssisssssi',
                    $datos['cr'],
                    $datos['tienda'],
                    $datos['fecha'],
                    $datos['folio'],
                    $datos['subcat'],
                    $datos['estatus'],
                    $descripcion,
                    $datos['mes'],
                    $datos['usuario'],
                    $cant
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r(9);

            }else{

                if($cadena == 'computadora'){
                    $cadenaF = $cadena . "scat";
                }else{
                    $cadenaF = $cadena . "cat";
                }

                if($datos['cat'] == "Accesorios"){

                    if(isset($POST["cant-editar-orden"])){
                        $cant = $POST["cant-editar-orden"];
                    }

                    $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, cant, categoria) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                    $resultado = $con->prepare($sqlInsertComp);
                    $resultado->bind_param(
                        'sssisssssis',
                        $datos['cr'],
                        $datos['tienda'],
                        $datos['fecha'],
                        $datos['folio'],
                        $datos['subcat'],
                        $datos['estatus'],
                        $descripcion,
                        $datos['mes'],
                        $datos['usuario'],
                        $cant,
                        $datos["cat"]
                    );
        
                    $resultado->execute();
                    $resultado->close();
                    
                    $borrado = "DELETE FROM renovacioncat WHERE id = $ID";
                    mysqli_query($con, $borrado);
                    
                    print_r(9);


                }else{

                    $sqlInsertComp = "INSERT INTO $cadenaF(cr, tienda, fecha, folio, subcat, estatus, solucion, mes, usuario, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)";
                    $resultado = $con->prepare($sqlInsertComp);
                    $resultado->bind_param(
                        'sssissssss',
                        $datos['cr'],
                        $datos['tienda'],
                        $datos['fecha'],
                        $datos['folio'],
                        $datos['subcat'],
                        $datos['estatus'],
                        $descripcion,
                        $datos['mes'],
                        $datos['usuario'],
                        $datos["cat"]
                    );
        
                    $resultado->execute();
                    $resultado->close();
                    
                    $borrado = "DELETE FROM renovacioncat WHERE id = $ID";
                    mysqli_query($con, $borrado);
                    
                    print_r(9);
                }
                
               
            }

            break;

        default:

            print_r(2);


            break;
    }
}
