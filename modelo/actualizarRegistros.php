<?php
include '../controladores/conexion.php';
$con = $conectando->conexion();
session_start();

if (isset($_POST)) {

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
        


    );

    /* Computadora
Voz y Datos
CCTV">CCTV<
Mantenimien
Impresoras"
Accesorios"
IMAC">IMAC<
Refacciones  */

    switch ($datos["cat"]) {

        case 'Computadora':

           
               $sqlInsertComp = "UPDATE computadorascat SET cr= ?, tienda= ?, fecha= ?, folio=?, subcat= ?, estatus= ?, solucion=?, mes= ?, usuario=? WHERE id= $ID";
                $resultado = $con->prepare($sqlInsertComp);
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

            
           


            break;

        case 'Voz y Datos':

            print_r(2);


            break;

        case 'CCTV':

            print_r(2);


            break;


        case 'Mantenimiento':

            print_r(2);

            break;


        case 'Impresoras':

            print_r(2);

            break;


        case 'Accesorios':

            print_r(2);

            break;


        case 'IMAC':

            print_r(2);

            break;


        case 'Refacciones':

            print_r(2);

            break;


        case 'Renovacion':

            print_r(2);

            break;

        default:

            print_r(2);


            break;
    }
}
