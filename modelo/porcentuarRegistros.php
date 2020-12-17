<?php
include '../controladores/conexion.php';
$con = $conectando->conexion();

if ($_POST['porcentaje']) {
      

$query_porcentaje ="SELECT COUNT(*) FROM cr WHERE mantenimiento= 'realizado'"; 
$result=  $con->prepare($query_porcentaje);
$result->execute();
$result->bind_result($totalP);
$result->fetch();
$result->close();

$query_total ="SELECT COUNT(*) FROM cr"; 
$results=  $con->prepare($query_total);
$results->execute();
$results->bind_result($totalR);
$results->fetch();

$results->close();

$porcentaje = ($totalP / $totalR)*100;
$porc = substr($porcentaje, 0,5);

//$porcentaje = $totalP;


print_r($porc);




 }

?>