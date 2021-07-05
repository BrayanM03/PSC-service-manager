<?php

require_once '../../vistas/plugins/nusoap/lib/nusoap.php';
$cliente = new nusoap_client("https://www.grupocva.com/pedidos_web/pedidos_ws_cva.php", false);

 ?>
