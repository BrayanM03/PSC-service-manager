<?php
    if(isset($_POST)){
        print_r ('
        <div class="card contenedor-card-tablas-ordenes">
        <div class="card-header">
            <h3 class="card-title">Ordenes de: </h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <table id="tabla-mantenimientos" class="table table-bordered table-hover table-striped">
            <thead class="table-danger">
                <tr>
                <th>#</th>
                <th>CR</th>
                <th>Tienda</th>
                <th>Mtto</th>
                <th>Acción</th>
                </tr>
                
            </thead>      
    ');
    }
?>




