<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<?php
session_start();
if (empty($_SESSION["userName"])) {
  header('location: vistas/modulos/login.php');
}
?>

<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="../../vistas/dist/img/icon.ico" />

  <title>PSC | ERP manager</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../../vistas/plugins/fontawesome-free/css/all.min.css">

  <link rel="stylesheet" href="https://nightly.datatables.net/colreorder/css/colReorder.dataTables.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../../vistas/dist/css/adminlte.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

  <link rel="stylesheet" href="../estilos/nueva-venta.css">


</head>

<body class="hold-transition sidebar-mini">
  <div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-dark navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>

        <li class="nav-item d-none d-sm-inline-block">
          <a href="../../modulos/ERP/erp.php" class="nav-link btn-warning" style="border-radius: 5px; color: black;">Inicio</a>
        </li>
      </ul>

      <!-- SEARCH FORM
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>-->

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">

        <!-- Notifications Dropdown Menu -->

        <li class="nav-item">

          <a href="#" class="btn btn-success">Nueva orden</a>
        </li>

        <li class="nav-item">
        <a href="#" class="btn btn-info ml-2 ">ERP</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <i class="fas fa-th-large"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="controladores/cerrar_sesion.php" role="button">
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index.php" class="brand-link" style="display:flex; justify-content:space-around; padding-left:20px">
        <img src="../../vistas/dist/img/logo-2.png" alt="PSC Logo" class="brand-image elevation-3" style="opacity: .9;">
        <span class="brand-text font-weight-light" style="font-size:15px; margin-right:0px;">Service M</span>

      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="../../vistas/dist/img/users/<?php echo $_SESSION['userUser']; ?>.jpg" style="height:40px;" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block"><?php echo $_SESSION['userName']; echo " "; echo $_SESSION["userLastname"]; ?></a>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" id="v-pills-tab" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item menu-open">
              <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-store"></i>
                <p>
                  Punto de Venta
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="nueva-venta.php" id=""  class="nav-link active">
                    <i class="fas fa-cash-register nav-icon"></i>
                    <p>Nueva venta</p>
                  </a>
                </li>
                <li  class="nav-item">
                  <a href="nueva-cotizacion.php" id="nav-vozydat" class="nav-link">
                    <i class="fas fa-comment-dollar nav-icon"></i>
                    <p>Nueva Cotización</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="historial-ventas.php" id="nav-cctv" class="nav-link">
                    <i class="fas fa-history nav-icon"></i>
                    <p>Historial</p>
                  </a>
                </li>

              </ul>
            </li>


            <li class="nav-item menu-closed mt-3">
              <a href="#" class="bg-info nav-link active">
                <i class="nav-icon fas fa-clipboard-check"></i>
                <p>
                  Inventario
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">

                <li class="nav-item">
                    <a href="computadoras_inv.php" id="nav-refacciones" class="nav-link">
                      <i class="fas fa-keyboard nav-icon"></i>
                      <p>Computadoras</p>
                    </a>
                  </li>

                  <li class="nav-item">
                      <a href="cctv_inv.php" id="nav-refacciones" class="nav-link">
                        <i class="fas fa-video nav-icon"></i>
                        <p>CCTV</p>
                      </a>
                    </li>

                    <li class="nav-item">
                        <a href="consumibles_inv.php" id="nav-refacciones" class="nav-link">
                          <i class="fas fa-print nav-icon"></i>
                          <p>Consumibles</p>
                        </a>
                      </li>

                      <li class="nav-item">
                          <a href="enlace_inv.php" id="nav-refacciones" class="nav-link">
                            <i class="fas fa-wifi nav-icon"></i>
                            <p>Enlace</p>
                          </a>
                        </li>

                        <li class="nav-item">
                            <a href="pv_inv.php" id="nav-refacciones" class="nav-link">
                              <i class="fas fa-money-bill-wave nav-icon"></i>
                              <p>Punto de venta</p>
                            </a>
                          </li>

                <li class="nav-item">
                  <a href="servicios.php" id="nav-refacciones"  class="nav-link">
                    <i class="fas fa-database nav-icon"></i>
                    <p>Servicios</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="mercancia-entrante.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-sign-in-alt nav-icon"></i>
                    <p>Mercancia entrante</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="mercancia-saliente.php" id="nav-refacciones"  class="nav-link">
                    <i class="fas fa-sign-out-alt nav-icon"></i>
                    <p>Mercancia saliente</p>
                  </a>
                </li>

              </ul>
            </li>

            <li class="nav-item menu-closed mt-3">
              <a href="#" class="bg-warning nav-link active">
                <i class="nav-icon fas fa-users"></i>
                <p>
                Mis Clientes
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">

              <li class="nav-item">
                  <a href="mis-clientes.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-user-tag nav-icon"></i>
                    <p>Clientes</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="mis-creditos.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-user-clock nav-icon"></i>
                    <p>Creditos</p>
                  </a>
                </li>


              </ul>
            </li>

            <li class="nav-item menu-closed mt-3">
              <a href="#" class="bg-success nav-link active">
                <i class="nav-icon fas fa-truck"></i>
                <p>
                Mis proveedores
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">

              <li class="nav-item">
                  <a href="mis-proveedores.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-user-tag nav-icon"></i>
                    <p>Proveedores</p>
                  </a>
                </li>

              </ul>
            </li>



            <li class="nav-item menu-closed mt-3">
              <a href="#" class="bg-danger nav-link active">
                <i class="nav-icon fas fa-wrench"></i>
                <p>
                  Taller
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">

              <li class="nav-item">
                  <a href="reparacion.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-screwdriver nav-icon"></i>
                    <p>En reparación</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="reparadas.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-check-circle nav-icon"></i>
                    <p>Reparadas</p>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="manual.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-question-circle nav-icon"></i>
                    <p>Manual de reparación</p>
                  </a>
                </li>
              </ul>
            </li>


          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>


    <div class="tab-content" >

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper" id="v-pills-comp" style="background-color: #E0E0E0;">
        <!-- Content Header (Page header) -->



        <!-- Main content -->
        <div class="content">




          <!-- Contenido Nueva venta -->

                <div class="card" style="margin-bottom: 7vh; padding-bottom: 5vh;">
                    <div class="card-header bg-primary text-white">
                        <span>Nueva venta</span>
                    </div>
                    <div class="card-body">
                       <div class="row">

                       <div class="grupo-1" >

                                           <div class="logo-marca-grande">

                                           </div>

                                           <!--Fila 1-->
                                           <form id="form-punto-venta">
                                           <div class="fila1">
                                                   <label class="input-largo">
                                                       <span for="search">Busqueda</span>
                                                       <input type="text" id="search" name="search" class="input-group">
                                                   </label>
                                                   <div class="contenedor-tabla oculto">
                                                           <table class="table">
                                                           <thead class="table-info">
                                                           <tr>
                                                               <th>Codigo</th>
                                                               <th>Descripción</th>
                                                               <th>Marca</th>
                                                               <th>Precio</th>
                                                               <th>Stock</th>
                                                               <th>Foto</th>
                                                               <th>Subcategoria</th>
                                                           </tr>
                                                           </thead>
                                                           <tbody class="tbody">
                                                           </tbody>
                                                           </table>
                                                   </div>

                                                   <label class="input-largo">
                                                       <span for="description">Descripción</span>
                                                       <input type="text" id="description" name="description" class="input-group" disabled>
                                                   </label>
                                           </div>

                                           <!--Fila 1-->

                                           <div class="fila2 row">

                                               <label class="input-corto">
                                                   <span for="modelo">Modelo</span>
                                                   <input type="text" id="modelo" name="modelo" class="input-group" disabled>
                                               </label>

                                               <label class="input-corto">
                                                    <span for="sucursal">Sucursal</span>
                                                    <select  id="sucursal" name="sucursal" class="select-group form-select" disabled>
                                                           <option disabled selected value></option>
                                                           <option value="0">Pedro Cardenas</option>
                                                           <option value="1">Sendero</option>
                                                    </select>
                                               </label>

                                               <label class="input-corto">
                                                   <span for="cantidad">Cantidad</span>
                                                   <input type="number" id="cantidad" name="cantidad" class="input-group" required>
                                               </label>

                                               <label class="input-corto precio-pointer" id="precio-tok" onclick="generarToken();">
                                                   <span for="precio" class="precio-pointer">$ Precio</span>
                                                   <input type="number" id="precio" name="precio" class="input-group precio-pointer" disabled>
                                               </label>

                                               <label style="border-color: transparent;">
                                                   <div class="btn btn-info" id="agregar-producto" onclick="agregarInfo()" >Agregar</div>
                                               </label>

                                           </div>

                                           </form>

                           </div>


                       <div class="grupo-2">

                           <div class="fila3">
                                       <div class="folio-fecha">
                                           <label>
                                               <span for="folio">Folio:</span>
                                               <input class="form-control" value="00" type="text" id="folio" name="folio" disabled>
                                           </label>
                                           <label>
                                               <span for="fecha">Fecha</span>
                                               <input class="form-control"  type="date" id="fecha" name="fecha" style="width: 150px;">
                                           </label>
                                       </div>
                           </div>


                               <div class="fila4 row">

                                           <table id="pre-venta" class="table table-striped table-bordered table-hover">

                                           </table>



                                           <div class="row" style="width: 100%; display: flex; justify-content: center; align-items: center; margin-top:25px">
                                               <div class="form-group" style="display: flex; align-items: center; justify-content: space-around; width: 25%;" >
                                                   <span for="total" >Total: $</span>
                                                   <input type="number" value="0" class="form-control" id="total" name="total" style="width:120px; margin-left:5px; display:flex; justify-content:center;" disabled>

                                               </div>
                                               </div>
                                           <div class="botones-de-venta">
                                               <div class="btn btn-warning" onclick="limpiarTabla();" style="color: rgb(31, 28, 28); margin-right: 2vh;" id="limpiar-venta">Limpiar</div>
                                               <div class="btn btn-success" onclick="realizarVenta();" id="realizar-venta">Realizar venta</div>
                                           </div>


                               </div>
                           </div>

                       </div>





                    </div>
                </div>




              <!-- /Mantenimientos del mes -->


            </div>



          </div><!-- /.container-fluid  C/Contenido dinamico-->
        </div>
        <!-- /.content -->


      </div>
      <!-- /.content-wrapper -->





    </div>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
      <div class="p-3">
        <h5>Title</h5>
        <p>Contenido del side bar</p>
      </div>
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer">


      <strong>Copyright &copy; 2020 Ediciones e integracion por <a href="https://www.facebook.com/BrayanM03/" target="_blank"> Brayan Maldonado Morgado</a>.</strong><br>
      <strong>Copyright &copy; 2014-2020 <a href="https://adminlte.io"> AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
  </div>
  <!-- ./wrapper -->

  <!-- REQUIRED SCRIPTS -->

  <!-- jQuery -->
  <script src="../../vistas/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="../../vistas/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- ChartJS -->
  <script src="../../vistas/plugins/chart.js/Chart.min.js"></script>
  <script src="../../vistas/dist/js/graficas.js"></script>

  <!-- DataTables  & Plugins-->
  <script src="../../vistas/plugins/datatables/jquery.dataTables.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>




  <!-- AdminLTE App -->
  <script src="../../vistas/dist/js/adminlte.min.js"></script>
  <script src="../script/nueva-venta.js"></script>

  <!-- Scripts para mostrar información en el panel -->



  <script>




    //Tabla mantenimientos actuales




  </script>

</body>

</html>