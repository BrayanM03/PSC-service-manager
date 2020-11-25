<?php
    if(isset($_POST)){
        if(isset($_POST["categoria"])){
            
        include "../controladores/conexion.php";
        $con= $conectando->conexion();
        $sqlcat="SELECT categoria FROM computadorascat";
        $result = mysqli_query($con, $sqlcat);
        if(!$result){
            echo 'Error';
            
        }else{
          
            while ($datas=mysqli_fetch_assoc($result)) {
                $arreglo2['data'][] = $datas;

            }

            if(empty($arreglo2)){
                $arreglo2 = array(
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

            echo json_encode($arreglo2);
           
        }

        
        mysqli_close($con);
        }
    }
?>