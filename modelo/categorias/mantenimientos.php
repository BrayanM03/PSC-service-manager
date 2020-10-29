<?php
    if (isset($_POST)) {
        include "../../controladores/conexion.php";
        $con= $conectando->conexion();
        $sqlMtos="SELECT * FROM mttos";
        $result = mysqli_query($con, $sqlMtos);
        if(!$result){
            echo 'Error';
        }else{
          
            while ($datas=mysqli_fetch_assoc($result)) {
                $arreglo['data'][] = $datas;

            }

            echo json_encode($arreglo);
           
        }

        mysqli_free_result($result);
        mysqli_close($con);

    } 
                    
                     
?>