<?php

include '../controladores/conexion.php';
$con = $conectando->conexion();

if (isset($_POST["codigo"])) {

     $cod = $_POST["codigo"];
     $categoE = $_POST["cate"];

     $caden = strtolower(str_replace(' ', '', $_POST["cate"]));

     if($caden == 'computadora'){
         $cadena = $caden . "scat";
     }else{
         $cadena = $caden . "cat";
     }
     
     $borrado = "DELETE FROM $cadena WHERE id = $cod";
     mysqli_query($con, $borrado);

     switch ($cadena) {
         case 'computadorascat':
            print_r(1);
         break;

            case 'vozydatoscat':
             print_r(2);
         break;

             case 'cctvcat':
                 print_r(3);
             break;

                 case 'mantenimientocat':
                     print_r(4);
                 break;

                         case 'impresorascat':
                             print_r(5);
                         break;

                             case 'accesorioscat':
                                 print_r(6);
                             break;

                                 case 'imaccat':
                                     print_r(7);
                                 break;

                                     case 'refaccionescat':
                                         print_r(8);
                                     break;

                                         case 'renovacioncat':
                                             print_r(9);
                                         break;

             break;
         
         default:
            print_r("Error");
             break;
     } 

   


 }
 


?>