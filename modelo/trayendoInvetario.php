<?php

include "../controladores/conexion.php";
$con= $conectando->conexion();

if(isset($_POST)){
   
    $vista = "CREATE VIEW vistaInventario AS SELECT cr.cr, 
                                                    MODELO_CPU, 
                                                    PRO_SERIE_CPU, 
                                                    PRO_OXXO_CPU,
                                                    PRO_MODELO_IMP,
                                                    PRO_SERIE_IMP,
                                                    PRO_OXXO_IMP,
                                                    PRO_MODELO_ESC,
                                                    PRO_SERIE_ESC,
                                                    PRO_OXXO_ESC,
                                                    PRO_MODELO_MON,
                                                    PRO_SERIE_MON,

                                                    VT1_MODELO_CPU, 
                                                    VT1_SERIE_CPU, 
                                                    VT1_OXXO_CPU,
                                                    VT1_MODELO_IMP,
                                                    VT1_SERIE_IMP,
                                                    VT1_OXXO_IMP,
                                                    VT1_MODELO_ESC,
                                                    VT1_SERIE_ESC,
                                                    VT1_OXXO_ESC,
                                                    VT1_MODELO_MON,
                                                    VT1_SERIE_MON,

                                                    VT2_MODELO_CPU, 
                                                    VT2_SERIE_CPU, 
                                                    VT2_OXXO_CPU,
                                                    VT2_MODELO_IMP,
                                                    VT2_SERIE_IMP,
                                                    VT2_OXXO_IMP,
                                                    VT2_MODELO_ESC,
                                                    VT2_SERIE_ESC,
                                                    VT2_OXXO_ESC,
                                                    VT2_MODELO_MON,
                                                    VT2_SERIE_MON,

                                                    CCTV_MODELO_DVR, 
                                                    CCTV_SERIE_DVR, 
                                                    CCTV_OXXO_DVR,
                                                    CCTV_MODELO_CAM_ACCP,
                                                    CCTV_SERIE_CAM_ACCP,
                                                    CCTV_OXXO_CAM_ACCP,
                                                    CCTV_MODELO_CAM_CHECKOUT,
                                                    CCTV_SERIE_CAM_CHECKOUT,
                                                    CCTV_OXXO_CAM_CHECKOUT,
                                                    CCTV_MODELO_CAM_PVENTA,
                                                    CCTV_SERIE_CAM_PVENTA,
                                                    CCTV_OXXO_CAM_PVENTA,
                                                    CCTV_MODELO_CAM_BODEGA,
                                                    CCTV_SERIE_CAM_BODEGA,
                                                    CCTV_OXXO_CAM_BODEGA,

                                                    EN_MODELO_TEL,
                                                    EN_SERIE_TEL,
                                                    EN_OXXO_TEL,
                                                    EN_MODELO_SWITCH,
                                                    EN_SERIE_SWITCH,
                                                    EN_OXXO_SWITCH,
                                                    EN_MODELO_ROUT,
                                                    EN_SERIE_ROUT,
                                                    EN_OXXO_ROUT,
                                                    EN_PRINCIPAL,
                                                    EN_REDUNDANTE,
                                                    EN_GATEWAY
                                                    FROM cr INNER JOIN inventario_cajas_proceso TO cr.cr = inventario_cajas_proceso.cr";
    $consula = "SELECT * FROM vistaInventario";
    $result = mysqli_query($con, $consula);
    if(!$result){
        echo 'Error';
        
    }else{
      
        while ($datas=mysqli_fetch_assoc($result)) {
            $arreglo['datos'][] = $datas;

        }


        echo json_encode($arreglo);
    }      

}

?>