<?php
    if (isset($_POST)) {
        include "../../controladores/conexion.php";
        $con= $conectando->conexion();
        $sqlMtos="SELECT * FROM vozydatoscat";
        $result = mysqli_query($con, $sqlMtos);
        if(!$result){
            echo 'Error';
            
        }else{
          
            while ($datas=mysqli_fetch_assoc($result)) {
                $arreglo['data'][] = $datas;

            }

            echo json_encode($arreglo);
           
        }

        if(empty($arreglo)){
            $arreglo = array(
             'cr' => "No",
             'estatus' => "hay",
             'fecha' => "nada",
             'folio' => "en",
             'id' => "esta",
             'mes' => "tabla",
             'solucion' => "Porfavor",
             'subcat' => "Ingresa",
             'tienda' => "informacion",
             'usuario' => "JEJE"
            );
         }

        
        mysqli_close($con);

    }   
                    
                     
?>