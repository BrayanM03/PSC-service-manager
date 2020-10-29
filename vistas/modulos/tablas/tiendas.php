<?php
    if(isset($_POST)){
        print_r ('
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">DataTable with default features</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>CR</th>
                    <th>Tienda</th>
                    <th>Datos</th>
                    </tr>
                    
                </thead>    
                <tbody>
                    <tr>
                        <td>5UMI</td>
                        <td>EBANO</td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <!-- /.card-body -->
        </div>
    ');
    }
?>




