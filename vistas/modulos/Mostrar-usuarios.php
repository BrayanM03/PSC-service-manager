<?php

if($_POST){
    include "../../controladores/conexion.php";
        $con= $conectando->conexion();
        $sql = "SELECT * FROM usuarios";
        $result = mysqli_query($con, $sql);

        if(!$result){
            echo 'Error';
        }else{
          
            while ($datas=mysqli_fetch_assoc($result)) {
                $arreglo[] = $datas;

            }

            echo json_encode($arreglo);
           
        }

        mysqli_free_result($result);
        mysqli_close($con);
}

?>