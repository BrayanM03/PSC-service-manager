<?php

include '../controladores/conexion.php';
$con = $conectando->conexion();

   // $usuario = $_POST['inputUser'];
    
   // $contraseña = sha1($_POST['inputPassword']);
   if ($_POST) {
      
    
    $validar ="SELECT (SELECT COUNT(*) FROM computadorascat) + (SELECT COUNT(*) FROM imaccat) AS total";

   // $result = mysqli_query($con, $validar);

$result=  $con->prepare($validar);
//$result->bind_param('ss', $usuario, $contraseña);
$result->execute();
$result->bind_result($total);
$result->fetch();
$result->close();

if ($total== 0) {
print_r("No hay registros");

}else{
print_r("Hay un total de ".$total. " registros");
}


   }

   


?>