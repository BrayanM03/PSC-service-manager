<?php
include 'conexion.php';
$con = $conectando->conexion();


if (isset($_POST)) {


    $pass = sha1($_POST['inputPassword']); //Cifrado de contraseña
    $datos = array(
        "nombre" => $_POST['inputName'],
        "apellido" => $_POST['inputLastName'],
        "usuario" => $_POST['inputUser'],
        "contraseña" => $pass,
        "fecha" => $_POST['inputDate']
    );



    $usuario = $datos['usuario'];
    $sqlCheck = "SELECT user FROM usuarios WHERE user = '$usuario'"; 
    $result = mysqli_query($con, $sqlCheck);
    $nums = mysqli_num_rows($result);

   


    if ($nums == 0) {

        

            $sqlInsert = "INSERT INTO usuarios(Nombre, Apellido, user, password, fecha) VALUES (?,?,?,?,?)";
            $resultado = $con->prepare($sqlInsert);
            $resultado->bind_param(
                'sssss',
                $datos['nombre'],
                $datos['apellido'],
                $datos['usuario'],
                $datos['contraseña'],
                $datos['fecha']
            );

            $resultado->execute();
            $resultado->close();
            print_r($nums);
            print_r($resultado);
            print_r($datos);

            
        

       
    } else {
        print_r(2);
    }
}
