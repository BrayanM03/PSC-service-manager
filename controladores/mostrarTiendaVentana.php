<?php
include 'conexion.php';
$con= $conectando->conexion(); 
if ($_POST['actions'] == 'mostrar tienda'){

    
    $total=0;
    $input= $_POST['entrada'];
    $parametro = "%$input%";
    $query_mostrar = $con->prepare("SELECT COUNT(*) total FROM cr WHERE cr LIKE ? OR tienda LIKE ? ");
    
    $query_mostrar->bind_param('ss', $parametro, $parametro);
    $query_mostrar->execute();
    $query_mostrar->bind_result($total);
    $query_mostrar->fetch(); 
    $query_mostrar->close();
    
    
    
    
    if ($total > 0) {
        
    
        $sqlTienda="SELECT * FROM cr WHERE cr LIKE '%$input%' OR tienda LIKE '%$input%'";
        $result = mysqli_query($con, $sqlTienda);
        while ($datas=mysqli_fetch_array($result)){

            $arrayDatos[] =  $datas;

           

            //echo "<li class='estilos-li' id='li-" . $datas['cr'] . "'> " . $datas['cr']. " - OXXO " . $datas['tienda']; "</li>";
        }

        echo json_encode($arrayDatos);
    
    }else{ 
        
        echo '';
    }
    
    
    }

?>