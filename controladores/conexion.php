<?php



class Conectar
{
    public function conexion()
    {
        $host = "174.136.52.208";
        $user = "powerpsc";
        $password = "power1697*";
        $db = "powerpsc_servicemanager";

        $con = mysqli_connect($host, $user, $password, $db);

        return $con;
    }
}

$conectando = new Conectar;


?>