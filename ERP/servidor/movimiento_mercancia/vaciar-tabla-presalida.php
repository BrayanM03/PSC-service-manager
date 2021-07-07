<?php
session_start();
include '../../../controladores/conexion.php';
$con= $conectando->conexion(); 

if (!isset($_SESSION['userID'])) {
    header("Location:../../login.php"); 
}

$iduser = $_SESSION["userID"];

if (!$con) {
    echo "maaaaal";
}

if (isset($_POST["data"])) {

    $consultar = "SELECT COUNT(*) total FROM pre_salida$iduser";
    $resultado = mysqli_query($con, $consultar);

    while($fila = $resultado->fetch_assoc()){
            $validacion = $fila["total"];

            if ($validacion == 0) {
                print_r(0);
            }else{
                $vaciarTabla = "TRUNCATE TABLE pre_salida$iduser";

                $consulta = mysqli_query($con, $vaciarTabla);
            
            
            if ($consulta) {
                print_r(1);
                
            }else{
                print_r(0);
            }
            }
    }

   


}

?>