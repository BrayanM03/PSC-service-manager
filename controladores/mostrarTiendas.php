<?php
include 'conexion.php';
$con= $conectando->conexion(); 
if ($_POST['action'] == 'mostrar tienda'){

    
    $total=0;
    $input= $_POST['entrada'];
    $query_mostrar = $con->prepare("SELECT COUNT(*) total FROM cr WHERE cr=?");
    
    $query_mostrar->bind_param('s', $input);
    $query_mostrar->execute();
    $query_mostrar->bind_result($total);
    $query_mostrar->fetch();
    $query_mostrar->close();
    
    
    
    
    if ($total > 0) {
        
    
        $sqlTienda="SELECT * FROM cr WHERE cr='$input'";
        $result = mysqli_query($con, $sqlTienda);
        while ($datas=mysqli_fetch_array($result)){
            echo "<strong> OXXO ".$datas['tienda'];"<strong>";
        }
    
    }else{ 
        
        echo 'Ninguna tienda coincide con ese CR';
    }
    
    
    }

?>