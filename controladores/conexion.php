<?php



class Conectar
{
    public function conexion()
    {
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