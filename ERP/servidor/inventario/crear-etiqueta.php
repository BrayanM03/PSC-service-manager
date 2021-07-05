

<?php
session_start();
include '../../../controladores/conexion.php';
$con = $conectando->conexion();
global $con;
require('../../../vistas/plugins/fpdf/fpdf.php');
require('../../../vistas/plugins/php-barcode-master/barcode.php');

$idproduct = $_GET["id"];
$tabla = $_GET["tabla"];

/*$formatterES = new NumberFormatter("es-ES", NumberFormatter::SPELLOUT);
$izquierda = intval(floor($total));
$derecha = intval(($total - floor($total)) * 100);
$formatTotal = $formatterES->format($izquierda) . " con " . $formatterES->format($derecha) . " centavos";
// ciento veintitrés coma cuarenta y cinco*/

$data = $con->prepare("SELECT codigo, descripcion, modelo, marca FROM $tabla WHERE id = ?");
$data->bind_param('i', $idproduct);
$data->execute();
$data->bind_result($code, $descripcion, $modelo, $marca);
$data->fetch();
$data->close();

global $tabla;
global $code;
global $descripcion;
global $marca;
global $modelo;





if (!isset($_SESSION['userID'])) {
    header("Location:../../login.php");
}



class PDF extends FPDF
{


// Cabecera de página
function Header()



{

    // Logo
    //$this->Image('../../../vistas/dist/img/logor.jpg',20,10,25);
    // Arial bold 1


    // Salto de línea

}

// Pie de página
function Footer()
{

    // Posición: a 1,5 cm del final

    // Número de página;
}


 //Aqui justifico





}

// Creación del objeto de la clase heredada

function cuerpoTabla(){
    $pdf = new PDF('L', 'mm', array(90,29));
    $pdf->AddPage();
    $pdf->SetFont('Times','B',8);
    $pdf->Cell(100,-15,$GLOBALS['descripcion'],0,0,'L');
    $pdf->Ln(1);
    $pdf->Cell(100,-10,$GLOBALS['marca'],0,0,'L');
    $pdf->Ln(1);
    $modelo = "Mo: " . $GLOBALS['modelo'];
    $pdf->Cell(100,-5,$modelo,0,0,'L');

    $pdf->Image('../../../vistas/dist/img/logor.png',6,15,11);

    barcode('../../../vistas/dist/img/ERP/codigos/'. $GLOBALS['code'] .'.png', $GLOBALS['code'], 30, 'horizontal', 'code39', true);
		$pdf->Image('../../../vistas/dist/img/ERP/codigos/'. $GLOBALS['code'] .'.png',20,13,60);
  //    $pdf->Image('../../../vistas/dist/img/codigo.jpg',30,4,56);


    $pdf->Output("Code.pdf", "I");
}

cuerpoTabla();




?>
