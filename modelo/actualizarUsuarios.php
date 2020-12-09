<?php
include '../controladores/conexion.php';

$con = $conectando->conexion();
session_start();
$user = $_SESSION["userUser"];

if($_POST){
  

    //ACTUAIZADO DE INFORMACION DEL USUARIO --- TEXTO PLANO
    $id = $_POST["id-input-modal"];
    $data = array(
        
        "nombre" => $_POST["name-input-editaruser"],
        "apellido" => $_POST["lastname-input-editaruser"],
        "usuario" => $_POST["user-input-editaruser"],
        "fecha_nac" => $_POST["date-input-editaruser"],
        "edad" => $_POST["edad-input-editaruser"]

    );

    if($user == $data["usuario"]){

    $sqlUpdateUser = "UPDATE usuarios SET Nombre= ?, Apellido= ?, user= ?, fecha= ? WHERE id= $id";
    $resultado = $con->prepare($sqlUpdateUser);
    $resultado->bind_param(
        'ssss',
        $data['nombre'],
        $data['apellido'],
        $data['usuario'],
        $data['fecha_nac'],
        
       
    );

    $resultado->execute();
    $resultado->close(); 

   
    //ACTUAIZADO DE FOTO DE PERFIL DEL USUARIO --- 
    $dir = '../vistas/dist/img/users/';
    if($_FILES){

        $fileName = $_FILES["file-input-modal"]["name"];
        $fileType = $_FILES["file-input-modal"]["type"];
        $fileSize = $_FILES["file-input-modal"]["size"];
        $fileTmpName = $_FILES["file-input-modal"]["tmp_name"]; 
        $fileErr = $_FILES["file-input-modal"]["error"];
        

        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));

   
    
        $dir = '../vistas/dist/img/users/';
    
        $fileUpload = $dir.$fileName; 
    
        move_uploaded_file($fileTmpName, $fileUpload);

        if ($fileName) {
            $newfileName = rename($fileUpload, $dir.$id.$user.".jpg"); 
        }
     

    }
    

        
          
        print_r(1);
    
    }else{
        print_r(2);
    }
   
}
