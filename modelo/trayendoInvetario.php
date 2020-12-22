<?php

if(isset($_POST)){
    $arr["saludo"] = "Holaaaaa";
   json_encode($arr);
    print_r($arr);
}

?>