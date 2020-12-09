<?php
include 'conexion.php';
$con = $conectando->conexion();

    $usuario = $_POST['inputUser'];
    
    $contraseña = sha1($_POST['inputPassword']);

    $validar ="SELECT COUNT(*) total FROM usuarios WHERE user = ? AND password = ?";
    $result=  $con->prepare($validar);
    $result->bind_param('ss', $usuario, $contraseña);
    $result->execute();
    $result->bind_result($total);
    $result->fetch();
    $result->close();
    
    if ($total == 1) {
        $validarID ="SELECT Nombre , Apellido, user FROM usuarios WHERE user = ?";
        $results=  $con->prepare($validarID);
        $results->bind_param('s', $usuario);
        $results->execute();
        $results->bind_result($nombre, $apellido, $user);

       while ($results->fetch()) {
           session_start();
           $_SESSION["userName"] = $nombre;
           $_SESSION["userLastname"] = $apellido; 
           $_SESSION["userUser"] = $user; 
           
           print_r(1);
       }
        $results->close();
        
    }else{
        print_r(0);
    }
   



?>