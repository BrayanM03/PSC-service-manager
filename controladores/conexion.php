<?php



class Conectar
{
    public function conexion()
    {
        /*$host = "174.136.52.208";
        $user = "powerpsc_brayan";
        $password = "power1697*";
        $db = "powerpsc_servicemanager";*/

        $host = "localhost";
        $user = "root";
        $password = "";
        $db = "psc";

        $con = mysqli_connect($host, $user, $password, $db);

        return $con;
    }
}

$conectando = new Conectar;


?>