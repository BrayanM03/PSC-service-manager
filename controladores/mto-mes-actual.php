<table id="tabla-mto-mes-actual" class="table table-bordered table-hover">
<thead class="bg-info text-light">
	<th class="text-center">CR</th>
	<th class="text-center">Tienda</th>	
	<th class="text-center">Fecha</th>	
	
</thead>

<tbody>
<?php
include "controladores/conexion.php";
$con= $conectando->conexion(); 

$sqlMesActual="SELECT * FROM mttos WHERE mes='julio'";
$result = mysqli_query($con, $sqlMesActual);
while ($datas=mysqli_fetch_array($result)):
	
?>
	
<tr class="table-success">

	<td class="text-center"><?php echo $datas['cr']; ?></td>
    <td class="text-center"><?php echo $datas['tienda']; ?></td>
    <td class="text-center"><?php echo $datas['fecha']; ?></td>
	
</tr>

<?php endwhile;


?>
</tbody>
</table>