<?php
if (isset($_POST)) {
    include "../controladores/conexion.php";
    $con= $conectando->conexion();

    if (isset($_POST["inv-categorias"])) {

        $cr = $_POST["cr-input-inv"];
        
        $select_cat_inv = $_POST["inv-categorias"];

        switch ($select_cat_inv) {

            case 'procesos':
                
               
                $sqlUpdatePRO = "UPDATE inventario_cajas_proceso SET  PRO_MODELO_CPU  = ?,
                                                                      PRO_SERIE_CPU   = ?, 
                                                                      PRO_OXXO_CPU    = ?,
                                                                      PRO_MODELO_IMP  = ?,
                                                                      PRO_SERIE_IMP   = ?,
                                                                      PRO_OXXO_IMP    = ?,
                                                                      PRO_MODELO_ESC  = ?,
                                                                      PRO_SERIE_ESC   = ?,
                                                                      PRO_OXXO_ESC    = ?,
                                                                      PRO_MODELO_MON  = ?,
                                                                      PRO_SERIE_MON   = ? WHERE CR= '$cr'";
                $resultado = $con->prepare($sqlUpdatePRO);
                $resultado->bind_param(
                    'sssssssssss',
                    $_POST['modelo-cpu-pro'],
                    $_POST['serie-cpu-pro'],
                    $_POST['oxxo-cpu-pro'],
                    $_POST['modelo-print-pro'],
                    $_POST['serie-print-pro'],
                    $_POST['oxxo-print-pro'],
                    $_POST['modelo-scan-pro'],
                    $_POST['serie-scan-pro'],
                    $_POST['oxxo-scan-pro'],
                    $_POST['modelo-mon-pro'],
                    $_POST['serie-mon-pro']
                );
    
                $resultado->execute();
                $resultado->close(); 

                print_r("Actualizado con exito");


                break;

                case 'ventas1':
                
                    $sqlUpdateVT1 = "UPDATE inventario_cajas_venta1 SET  VT1_MODELO_CPU  = ?,
                    VT1_SERIE_CPU   = ?, 
                    VT1_OXXO_CPU    = ?,
                    VT1_MODELO_IMP  = ?,
                    VT1_SERIE_IMP   = ?,
                    VT1_OXXO_IMP    = ?,
                    VT1_MODELO_ESC  = ?,
                    VT1_SERIE_ESC   = ?,
                    VT1_OXXO_ESC    = ?,
                    VT1_MODELO_MON  = ?,
                    VT1_SERIE_MON   = ? WHERE CR= '$cr'";

                        $resultado = $con->prepare($sqlUpdateVT1);
                        $resultado->bind_param(
                        'sssssssssss',
                        $_POST['modelo-cpu-vt1'],
                        $_POST['serie-cpu-vt1'],
                        $_POST['oxxo-cpu-vt1'],
                        $_POST['modelo-print-vt1'],
                        $_POST['serie-print-vt1'],
                        $_POST['oxxo-print-vt1'],
                        $_POST['modelo-scan-vt1'],
                        $_POST['serie-scan-vt1'],
                        $_POST['oxxo-scan-vt1'],
                        $_POST['modelo-mon-vt1'],
                        $_POST['serie-mon-vt1']
                        );

                        $resultado->execute();
                        $resultado->close(); 

                        print_r("Actualizado con exito");

                
    
                    break;

                    case 'ventas2':
                
                        $sqlUpdateVT1 = "UPDATE inventario_cajas_venta2 SET  
                        VT2_MODELO_CPU  = ?,
                        VT2_SERIE_CPU   = ?, 
                        VT2_OXXO_CPU    = ?,
                        VT2_MODELO_IMP  = ?,
                        VT2_SERIE_IMP   = ?,
                        VT2_OXXO_IMP    = ?,
                        VT2_MODELO_ESC  = ?,
                        VT2_SERIE_ESC   = ?,
                        VT2_OXXO_ESC    = ?,
                        VT2_MODELO_MON  = ?,
                        VT2_SERIE_MON   = ? WHERE CR= '$cr'";
    
                            $resultado = $con->prepare($sqlUpdateVT1);
                            $resultado->bind_param(
                            'sssssssssss',
                            $_POST['modelo-cpu-vt2'],
                            $_POST['serie-cpu-vt2'],
                            $_POST['oxxo-cpu-vt2'],
                            $_POST['modelo-print-vt2'],
                            $_POST['serie-print-vt2'],
                            $_POST['oxxo-print-vt2'],
                            $_POST['modelo-scan-vt2'],
                            $_POST['serie-scan-vt2'],
                            $_POST['oxxo-scan-vt2'],
                            $_POST['modelo-mon-vt2'],
                            $_POST['serie-mon-vt2']
                            );
    
                            $resultado->execute();
                            $resultado->close(); 
    
                            print_r("Actualizado con exito");
        
                        break;

                        case 'ventas3':
                
                            print_r("En mantenimiento");
            
                            break;

                            case 'enlace':
                
                                $sqlUpdateEN = "UPDATE inventario_tiendas_voz_y_datos SET  
                                                    EN_MODELO_TEL =?,
                                                    EN_SERIE_TEL =?,
                                                    EN_OXXO_TEL =?,
                                                    EN_MODELO_SWITCH =?,
                                                    EN_SERIE_SWITCH =?,
                                                    EN_OXXO_SWITCH =?,
                                                    EN_MODELO_ROUT =?,
                                                    EN_SERIE_ROUT =?,
                                                    EN_OXXO_ROUT =?,
                                                    EN_PRINCIPAL =?,
                                                    EN_REDUNDANTE =?,
                                                    EN_GATEWAY =?, 
                                                    VLAN = ?
                                                    WHERE CR= '$cr'";
            
                                    $resultado = $con->prepare($sqlUpdateEN);
                                    $resultado->bind_param(
                                    'sssssssssssss',
                                    $_POST['modelo-tel-enlace'],
                                    $_POST['serie-tel-enlace'],
                                    $_POST['oxxo-tel-enlace'],
                                    $_POST['modelo-switch-enlace'],
                                    $_POST['serie-switch-enlace'],
                                    $_POST['oxxo-switch-enlace'],
                                    $_POST['modelo-router-enlace'],
                                    $_POST['serie-router-enlace'],
                                    $_POST['oxxo-router-enlace'],
                                    $_POST['principal-enlace-enlace'],
                                    $_POST['rebundante-enlace-enlace'],
                                    $_POST['gateway-enlace-enlace'],
                                    $_POST['enlace-vlan-enlace']
                                    );
            
                                    $resultado->execute();
                                    $resultado->close(); 
            
                                    print_r("Actualizado con exito");

            
                
                                break;

                                case 'cctv':

                                    $sqlUpdateEN = "UPDATE inventario_tiendas_cctv SET  
                                                    CCTV_MODELO_DVR = ?, 
                                                    CCTV_SERIE_DVR = ?, 
                                                    CCTV_OXXO_DVR = ?,
                                                    CCTV_MODELO_CAM_ACCP = ?,
                                                    CCTV_SERIE_CAM_ACCP = ?,
                                                    CCTV_OXXO_CAM_ACCP = ?,
                                                    CCTV_MODELO_CAM_CHECKOUT = ?,
                                                    CCTV_SERIE_CAM_CHECKOUT = ?,
                                                    CCTV_OXXO_CAM_CHECKOUT = ?,
                                                    CCTV_MODELO_CAM_PVENTA = ?,
                                                    CCTV_SERIE_CAM_PVENTA = ?,
                                                    CCTV_OXXO_CAM_PVENTA = ?,
                                                    CCTV_MODELO_CAM_BODEGA = ?,
                                                    CCTV_SERIE_CAM_BODEGA = ?,
                                                    CCTV_OXXO_CAM_BODEGA = ? WHERE CR= '$cr'";

                                    $resultado = $con->prepare($sqlUpdateEN);
                                    $resultado->bind_param(
                                    'sssssssssssssss',
                                    $_POST['modelo-dvr-cctv'],
                                    $_POST['serie-dvr-cctv'],
                                    $_POST['oxxo-dvr-cctv'],
                                    $_POST['modelo-cam1-cctv'],
                                    $_POST['serie-cam1-cctv'],
                                    $_POST['oxxo-cam1-cctv '],
                                    $_POST['modelo-cam2-cctv'],
                                    $_POST['serie-cam2-cctv'],
                                    $_POST['oxxo-cam2-cctv '],
                                    $_POST['modelo-cam3-cctv'],
                                    $_POST['serie-cam3-cctv'],
                                    $_POST['oxxo-cam3-cctv'],
                                    $_POST['modelo-cam4-cctv'],
                                    $_POST['serie-cam4-cctv'],
                                    $_POST['oxxo-cam4-cctv']
                                    );

                                    $resultado->execute();
                                    $resultado->close(); 

                                    print_r("Actualizado con exito");

                


                                break;
            
            default:
               print_r("error");
                break;
        }

    }


   
}

/*





VENTA 3
modelo-cpu-vt3 
serie-cpu-vt3
oxxo-cpu-vt3
modelo-print-vt3
serie-print-vt3
oxxo-print-vt3 
modelo-scan-vt3
serie-scan-vt3 
oxxo-scan-vt3
modelo-mon-vt3 
serie-mon-vt3
oxxo-mon-vt3




*/ 

?>