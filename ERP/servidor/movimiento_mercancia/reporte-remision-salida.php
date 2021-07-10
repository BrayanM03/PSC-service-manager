
<?php
session_start();
include '../../../controladores/conexion.php';
$con = $conectando->conexion(); 
global $con;

$folio = "PSCRSAL" . $_GET["id"]; 
$idSalida = $_GET["id"];
global $folio;

/*  detalle_productos_salida.cantidad,
                            detalle_productos_salida.codigo,
                            detalle_productos_salida.descripcion,
                            detalle_productos_salida.id_salida, */

$ID = $con->prepare("SELECT motivo,
                            usuario, 
                            tecnico, 
                            fecha, 
                            hora, 
                            cliente FROM mercancia_salida WHERE id = ?");
$ID->bind_param('i', $idSalida);
$ID->execute();
$ID->bind_result($motivo, $usuario, $tecnico, $fecha, $hora, $cliente);
$ID->fetch();
$ID->close();

global $motivo;
global $usuario;
global $tecnico;
global $fecha;
global $hora;
global $cliente;
global $idSalida;

/* 
$formatterES = new NumberFormatter("es-ES", NumberFormatter::SPELLOUT);
$izquierda = intval(floor($total));
$derecha = intval(($total - floor($total)) * 100);
$formatTotal = $formatterES->format($izquierda) . " con " . $formatterES->format($derecha) . " centavos";
// ciento veintitrés coma cuarenta y cinco

global $formatTotal; */
/*
$detalle = $con->prepare("SELECT detalle_venta.Cantidad,llantas.Descripcion, llantas.Marca, detalle_venta.precio_Unitario, detalle_venta.Importe FROM detalle_venta INNER JOIN llantas ON detalle_venta.id_llanta = llantas.id WHERE id_Venta = ?");
$detalle->bind_param('i', $id_venta);
$detalle->execute();
$resultado = $detalle->get_result(); 
global $resultado;*/

require('../../../vistas/plugins/fpdf/fpdf.php');



if (!isset($_SESSION['userID'])) {
    header("Location:../../../vistas/modulos/login.php");
}



class PDF extends FPDF
{

    
// Cabecera de página
function Header()

{
  
        $direccion = "Calle 16 #582A";
        $colonia = "Colonia Buena Vista";
        $telefono = "8688179502";
        $rfc = "HEHJ740317KX5";


   

    // Logo
    $this->Image('../../../vistas/dist/img/logor.png',20,10,25);
    // Arial bold 15
   
    
    $this->SetDrawColor(135, 134, 134);
    $this->SetTextColor(36, 35, 28);
    
    
    // Movernos a la derecha
    
    // Título

    $this->SetFont('Arial','B',12);
    $this->Cell(30,10,"'",0,0, 'C');
    $this->Cell(100,10,"PSC Sistemas y Servicios",0,0, 'C');
    $this->SetFont('Arial','B',20);
    $this->Cell(60,10,utf8_decode('Remisión de salida'),0,0,'C');
    $this->Ln(5);
   
    $estatus = "Salida completa";
    $this->SetFont('Arial','',9);
    $this->Cell(25,15,'',0,0,'C');
    $this->Cell(115,10,utf8_decode($direccion),0,0,'C', false);
    $this->SetFont('Arial','',12);
    $this->SetTextColor(0, 32, 77);
    $this->Cell(50,15,$estatus,0,0,'C');
    $this->SetTextColor(36, 35, 28);
    $this->SetFont('Arial','',9);
    $this->Ln(4);
    $this->Cell(160,10,utf8_decode($colonia),0,0,'C', false);
    $this->Ln(4);
    $this->Cell(160,10,utf8_decode("H. Matamoros Tam"),0,0,'C', false);
    $this->Ln(4);
    $this->Cell(160,10,utf8_decode("RFC: " .$rfc),0,0,'C', false);
    $this->Ln(4);
    $this->Cell(160,10,utf8_decode("Telefono: " .$telefono),0,0,'C', false);
    $this->Ln(17);

    $this->Cell(100,7,'',0,0,'R', false);
    $this->SetFont('Arial','B',12);
    $this->SetTextColor(0, 32, 77);
    $this->Cell(30,7,'Hora: ',0,0,'R', false);
    $this->SetFont('Times','',12);
    $this->SetTextColor(36, 35, 28);
    $this->Cell(20,7,utf8_decode($GLOBALS["hora"]),0,0,'', false);

    $this->SetFont('Arial','B',12);
    $this->SetTextColor(0, 32, 77);
    $this->Cell(20,7,utf8_decode("Fecha:"),0,0, false);
    $this->SetFont('Times','',12);
    $this->SetTextColor(36, 35, 28);
    $this->Cell(50,7,utf8_decode($GLOBALS["fecha"]),0,0,'', false);

    $this->Ln(10);

    //$this->Rect(133, 58, 20, 7, 'F');
    //$this->Rect(133, 65, 20, 7, 'F');
    $this->SetTextColor(255, 255, 255);
    $this->SetFillColor(0,106,182);
    $this->SetFont('Times','B',12);
    $this->Cell(24,10,utf8_decode("Cliente:"),0,0,'L', 1);
    $this->SetTextColor(10, 10, 10);
    $this->SetFont('Times','',12);
    $this->SetFillColor(236, 236, 236);
    $this->Cell(165,10,utf8_decode($GLOBALS["cliente"]),0,0, 'L',1);
    $this->Ln(10);
    $this->SetTextColor(255, 255, 255);
    $this->SetFillColor(0,106,182);
    $this->SetFont('Times','B',12);
    $this->Cell(15,7,utf8_decode("Folio:"),0,0,'L', 1);
    $this->SetFont('Times','',12);
    $this->SetTextColor(36, 35, 28);
    $this->SetFillColor(236, 236, 236);
    $this->Cell(40,7,utf8_decode($GLOBALS["folio"]),0,0,'L', 1);

   

    $this->SetTextColor(255, 255, 255);
    $this->SetFont('Times','B',12);
    $this->SetFillColor(0, 106, 182);
    $this->Cell(24,7,utf8_decode("Tecnico:"),0,0,'L', 1);
    $this->SetTextColor(10, 10, 10);
    $this->SetFont('Times','',12);
    $this->SetFillColor(236, 236, 236);
    $this->Cell(50,7,utf8_decode($GLOBALS["tecnico"]),0,0, 'L',1);
    $this->SetTextColor(255, 255, 255);
    $this->SetFillColor(0,106,182);
    $this->SetFont('Times','B',12);
    $this->Cell(20,7,utf8_decode("Usuario:"),0,0,'L', 1);
    $this->SetTextColor(10, 10, 10);
    $this->SetFont('Times','',12);
    $this->SetTextColor(36, 35, 28);
    $this->SetFillColor(236, 236, 236);
    $this->Cell(40,7,utf8_decode($GLOBALS["usuario"]), 0,0,'L', 1);
 

    // Salto de línea
    $this->Ln(18);
}

// Pie de página
function Footer()
{
    
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    //$this->Image('../src/img/logo-reporte.png',60,142,80);
    $this->Ln(3);
    // Arial italic 8
    $this->SetFont('Arial','',8);
    $this->SetTextColor(1, 1, 1);
    // Número de página
   $año = date("Y");
   $title_footer = "PSC Service Manager " . $año;
    $this->Cell(0,10, $title_footer, 0,0,'C');
}


 //Aqui justifico


 


}

// Creación del objeto de la clase heredada

function cuerpoTabla(){
    $pdf = new PDF();
    $pdf->AddPage();
    $pdf->SetFont('Times','B',12);
    
    $pdf->SetDrawColor(135, 134, 134);
    $pdf->SetTextColor(36, 35, 28);
    
    
    
    //$pdf->Rect(10, 80, 189, 8, 'F');
    $pdf->SetDrawColor(0, 32, 77);
    $pdf->SetLineWidth(1);
    //$pdf->Line(11,95,192,95);
    
    $pdf->Cell(19,8,utf8_decode("Cantidad"),0,0);  
    $pdf->Cell(30,8,utf8_decode("Codigo"),0,0, 'C');
    $pdf->Cell(98,8,utf8_decode("Concepto"),0,0, 'C');
    $pdf->Cell(30,8,utf8_decode("Modelo"),0,0, 'C');
    $pdf->Ln(0);
    $pdf->Line(11,81,196,81);

    $pdf->Ln(13);
    
    
    
    $pdf->SetDrawColor(1, 1, 1);
    $pdf->SetLineWidth(0);

    $pdf->SetFillColor(236, 236, 236);
    
    $pdf->SetFont('Times','',12);

    $conexion = $GLOBALS["con"];

    $total = 0;
    $idSalida = $GLOBALS["idSalida"];
    $stmt=$conexion->prepare("SELECT COUNT(*) total FROM detalle_productos_salida WHERE id_salida = ?");
    $stmt->bind_param('i',$idSalida);
    $stmt->execute();
    $stmt->bind_result($total);
    $stmt->fetch();
    $stmt->close();

    if($total == 0){
    
        


    }else if($total > 0){ 

    

        $detalle = $conexion->prepare("SELECT * FROM detalle_productos_salida WHERE id_salida = ?");
        $detalle->bind_param('i', $idSalida);
        $detalle->execute();
        $resultado = $detalle->get_result(); 
        $detalle->close(); 

        $ejeY = 99;
       // $k=1;

        while($fila = $resultado->fetch_assoc()) {
    
            $cantidad = $fila["cantidad"];
            $codigo = $fila["codigo"];
            $descripcion = $fila["descripcion"];
            $modelo = $fila["modelo"];
            $caracteres = mb_strlen($descripcion);

            if($caracteres > 90){
                $pdf->Cell(14,18,$cantidad,0,0,'C',1);
                $pdf->Cell(50,18, utf8_decode($codigo),0,0,'C',1);
                $pdf->MultiCell(80,6, utf8_decode($descripcion),0,'L',1);
                $pdf->SetY($ejeY);
                $ejeY = $ejeY + 15;
                $pdf->SetX(154);
                $pdf->Cell(40,18, utf8_decode($modelo),0,0,'C',1);
                $pdf->Ln(15);
            }else if($caracteres > 40 && $caracteres < 90){
                $pdf->Cell(14,12,$cantidad,0,0,'C',1);
                $pdf->Cell(50,12, utf8_decode($codigo),0,0,'C',1);
                $pdf->MultiCell(80,6, utf8_decode($descripcion),0,'L',1);
                $pdf->SetY($ejeY);
                $ejeY = $ejeY + 15;
                $pdf->SetX(154);
                $pdf->Cell(40,12, utf8_decode($modelo),0,0,'C',1);
                $pdf->Ln(15);
            }else if($caracteres < 40){
                $pdf->Cell(14,12,$cantidad,0,0,'C',1);
                $pdf->Cell(50,12, utf8_decode($codigo),0,0,'C',1);
                $pdf->MultiCell(80,12, utf8_decode($descripcion),0,'L',1);
                $pdf->SetY($ejeY);
                $ejeY = $ejeY + 15;
                $pdf->SetX(154);
                $pdf->Cell(40,12, utf8_decode($modelo),0,0,'C',1);
                $pdf->Ln(15);

            }

           
 
        }
    }


    
  
    
    
    $pdf->Ln(15);
    /*$pdf->SetFont('Arial','B',10);
    $pdf->SetTextColor(0, 32, 77);
    //Subtotal
    $pdf->Cell(129,6,'',0,0);
    $pdf->Cell(30,6,'Subtotal',0,0, 'R');
    $pdf->SetTextColor(1, 1, 1);
    $pdf->SetFont('Courier','',10);
    $pdf->Cell(30,6,'$15102,00',0,0, 'C',1);
    $pdf->Ln(7);

    
    $pdf->Cell(129,6,'',0,0);
    $pdf->SetFont('Arial','B',10);
    $pdf->SetTextColor(0, 32, 77);
    $pdf->Cell(30,6,'IVA',0,0, 'R');
    $pdf->SetTextColor(1, 1, 1);
    $pdf->SetFont('Courier','',10);
    $pdf->Cell(30,6,'$1510,00',0,0, 'C',1);
    $pdf->Ln(7);*/

    /* $pdf->Cell(129,6,'',0,0);
    $pdf->SetFont('Arial','B',12);
    $pdf->SetTextColor(0, 32, 77);
    $pdf->Cell(30,8,'Total',0,0, 'R');
    $pdf->SetTextColor(1, 1, 1);
    $pdf->SetFont('Courier','',12);
    $pdf->Cell(30,8,"0",0,0, 'C',1);
    $pdf->Ln(20); */


    //Importe y observaciones
    /* $pdf->SetFont('Times','B',12);
    $pdf->Cell(189,6,'Importe total con letra: ',0,0);
    $pdf->Ln(8);
    $pdf->SetFont('Courier','',12);
    $formatTotal = $GLOBALS["formatTotal"];
    $pdf->Cell(180,8,utf8_decode($formatTotal),0,0,'L',1);
    $pdf->Ln(15); */

    $pdf->SetFont('Times','B',12);
    $pdf->Cell(189,6,'Oservaciones: ',0,0);
    if(isset($GLOBALS["motivo"])){
        $observacion = $GLOBALS["motivo"];
    }else{
        $observacion ="";
    }
    $pdf->Ln(8);
    $pdf->SetFont('Courier','',12);
    $pdf->Cell(140,60,$observacion,0,0,'L',1);
    $pdf->Ln(52);

  /*   $pdf->SetTextColor(0, 32, 77);
    $pdf->SetFont('Arial','B',5);
    $text = 'GARANTÍA DE UN AÑO CONTRA DEFECTO DE FABRICA A PARTIR DE ESTA FECHA';
    $text2 = 'FAVOR DE PRESENTAR ESTE COMPROBANTE DE VENTA PARA HACER VALIDO LA GARANTÍA';
    $pdf->Cell(189,6,utf8_decode($text),0,0,'L');
    $pdf->Ln(2);
    $pdf->Cell(189,6,utf8_decode($text2),0,0,'L'); */
   
    
    $pdf->Ln(10);

    $pdf->SetTextColor(1, 1, 1);
    $pdf->SetFont('Arial','B',10);
   // $pdf->Cell(185,6,utf8_decode("Gracias por su compra"),0,0,'C');
    $pdf->Ln(18);
    $pdf->Line(78,268,130,268);
    $pdf->SetTextColor(1, 1, 1);
    $pdf->SetFont('Arial','B',10);
    $pdf->Cell(193,6,utf8_decode("Recibido"),0,0,'C');

    $pdf->SetDrawColor(0, 32, 77);
    $pdf->SetLineWidth(1);
    $pdf->Line(10,285,200,285);

    $pdf->Output("Folio RAY" . $_GET["id"] .".pdf", "I");
}

cuerpoTabla();




?>


