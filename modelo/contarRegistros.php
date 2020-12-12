<?php

include '../controladores/conexion.php';
$con = $conectando->conexion();

   // $usuario = $_POST['inputUser'];
    
   // $contraseña = sha1($_POST['inputPassword']);
   if ($_POST['estadisticas']) {

$añoenCurso = date("Y");      
    
$validar ="SELECT (SELECT COUNT(YEAR(fecha)) FROM computadorascat WHERE YEAR(fecha)= $añoenCurso) + (SELECT COUNT(YEAR(fecha)) FROM imaccat WHERE YEAR(fecha)= $añoenCurso)
                                                             + (SELECT COUNT(YEAR(fecha)) FROM vozydatoscat WHERE YEAR(fecha)= $añoenCurso) 
                                                             + (SELECT COUNT(YEAR(fecha)) FROM mantenimientocat WHERE YEAR(fecha)= $añoenCurso)
                                                             + (SELECT COUNT(YEAR(fecha)) FROM accesorioscat WHERE YEAR(fecha)= $añoenCurso)
                                                             + (SELECT COUNT(YEAR(fecha)) FROM cctvcat WHERE YEAR(fecha)= $añoenCurso)
                                                             + (SELECT COUNT(YEAR(fecha)) FROM refaccionescat WHERE YEAR(fecha)= $añoenCurso)
                                                             + (SELECT COUNT(YEAR(fecha)) FROM impresorascat WHERE YEAR(fecha)= $añoenCurso)
                                                             + (SELECT COUNT(YEAR(fecha)) FROM renovacioncat WHERE YEAR(fecha)= $añoenCurso)
                                                              AS total"; 

   
$result=  $con->prepare($validar);

$result->execute();
$result->bind_result($total);
$result->fetch();
$result->close();

if ($total== 0) {
json_encode($total);
print_r($total);

}else{
print_r($total);
}


   }
   
   

