<?php
session_start();

unset($_SESSION["userName"]);
header('location:../index.php');
?>