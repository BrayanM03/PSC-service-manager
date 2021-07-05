<?php

    include '../../controladores/conexion.php';
    $con= $conectando->conexion();

    if (!$con) {
        echo "maaaaal";
    }

    if (isset($_POST['codigo'])) {
     $busqueda = $_POST['codigo'];
     $parametro = "%$busqueda%";
     $query_mostrar = $con->prepare("SELECT COUNT(*) total FROM productos p INNER JOIN suc_buena_vista bv
                                                                          ON bv.id_producto = p.codigo
                                                                          WHERE p.codigo LIKE ?
                                                                          OR p.descripcion LIKE ?
                                                                          OR p.modelo LIKE ?
                                                                          OR p.marca LIKE ?
                                                                          OR p.costo LIKE ?
                                                                          OR p.precio LIKE ?
                                                                          OR p.categoria LIKE ?
                                                                          OR p.subcategoria LIKE ?
                                                                          OR p.upc LIKE ?
                                                                          OR p.clave_sat LIKE ?
                                                                          OR p.clave_unidad LIKE ?");

     //-----------------------------------------------------------------------------------------------------//
     //-----------------------------------------------------------------------------------------------------//

     $query_mostrar->bind_param('ssssddssiis', $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,
                                               $parametro,);
     $query_mostrar->execute();
     $query_mostrar->bind_result($total);
     $query_mostrar->fetch();
     $query_mostrar->close();


     if ($total > 0) {

        $sqlTraerLlanta="SELECT p.codigo,
                                p.descripcion,
                                p.marca,
                                p.precio,
                                p.subcategoria,
                                bv.nombre,
                                bv.stock FROM productos p INNER JOIN suc_buena_vista bv
                                                                ON bv.id_producto = p.codigo
                                                                WHERE p.codigo LIKE '%$busqueda%'
                                                                OR p.descripcion LIKE '%$busqueda%'
                                                                OR p.modelo LIKE '%$busqueda%'
                                                                OR p.marca LIKE '%$busqueda%'
                                                                OR p.costo LIKE '%$busqueda%'
                                                                OR p.precio LIKE '%$busqueda%'
                                                                OR p.categoria LIKE '%$busqueda%'
                                                                OR p.subcategoria LIKE '%$busqueda%'
                                                                OR p.upc LIKE '%$busqueda%'
                                                                OR p.clave_sat LIKE '%$busqueda%'
                                                                OR p.clave_unidad LIKE '%$busqueda%'";
        $result = mysqli_query($con, $sqlTraerLlanta);
        while ($datas=mysqli_fetch_array($result)){

           $arrayAnchos[] = $datas;

        }

        echo json_encode($arrayAnchos, JSON_UNESCAPED_UNICODE);


    }else{

        echo 'Ninguna llanta coincide con ese ancho';
    }

    }else{
        print_r("Error al conectar");
    }
    ?>
