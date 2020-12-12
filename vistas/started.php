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
  <link rel="shortcut icon" href="vistas/dist/img/icon.ico" />

  <title>PSC | Service manager</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="vistas/plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="vistas/dist/css/adminlte.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

  <!-- DataTables -->
  <link rel="stylesheet" href="vistas/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="vistas/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="vistas/plugins/datatables-buttons/css/buttons.bootstrap4.min.css"> 
  <link rel="stylesheet" href="vistas/dist/css/nuevaOrden.css">
  <link rel="stylesheet" href="vistas/dist/css/tablas-ordenes.css">
  <link rel="stylesheet" href="vistas/dist/css/index.css">
  <link rel="stylesheet" href="vistas/plugins/nice-select/css/nice-select.css">
  

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
          <a href="" class="nav-link">Inicio</a>
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
        
          <a href="#" onclick="MostrarNuevaOrden();" class="btn btn-success">Nueva orden</a>
        </li>

        <li class="nav-item">
        <a href="#" onclick="MostrarCotizador();" class="btn btn-info ml-2 ">Nueva cotización</a>
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
        <img src="vistas/dist/img/logo-2.png" alt="PSC Logo" class="brand-image elevation-3" style="opacity: .9;">
        <span class="brand-text font-weight-light" style="font-size:15px; margin-right:0px;">Service M</span>

      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="vistas/dist/img/userB.jpg" style="height:40px;" class="img-circle elevation-2" alt="User Image">
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
                <i class="nav-icon fas fa-calendar-check"></i>
                <p>
                  Ver ordenes
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="#v-pills-comp" id="nav-computadoras" onclick="MostrarCompu();" data-toggle="pill" class="nav-link">
                    <i class="fas fa-desktop nav-icon"></i>
                    <p>Computadoras</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-vozydat" onclick="MostrarVozydat();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-phone-volume nav-icon"></i>
                    <p>Voz y Datos</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-cctv" onclick="MostrarCctv();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-video nav-icon"></i>
                    <p>CCTV</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-mantenimiento" onclick="MostrarMtos();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-tools nav-icon"></i>
                    <p>Mantenimientos</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-printers" onclick="MostrarPrinters();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-print nav-icon"></i>
                    <p>Impresoras</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-accesorios" onclick="MostrarAcc();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-keyboard nav-icon"></i>
                    <p>Accesorios</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-imac" onclick="MostrarImac();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-wifi nav-icon"></i>
                    <p>IMAC</p>

                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-refacciones" onclick="MostrarRefacci();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-cogs nav-icon"></i>
                    <p>Refacciones</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#v-pill-mto" id="nav-refacciones" onclick="MostrarRenovacion();" class="nav-link" data-toggle="pill">
                    <i class="fas fa-history nav-icon"></i>
                    <p>Renovacion Tec</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item bg-warning rounded mt-3">
              <a href="#" class="nav-link" onclick="mostrarUsuarios();">
                <i class="nav-icon fas fa-user"></i>
                <p>
                  Usuarios
                  <!-- <span class="right badge badge-danger">New</span>-->
                </p>
              </a>
            </li>

            <li class="nav-item bg-danger rounded mt-3">
              <a href="#" class="nav-link" onclick="MostrarTiendas();">
                <i class="nav-icon fas fa-store"></i>
                <p>
                 Tiendas
                 
                </p>
              </a>
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
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-10 titulo-categoria">
                <h1 class="m-0" id="titulo-categoria">Bienvenido al panel de control <?php echo $_SESSION['userName']; echo " "; echo $_SESSION["userLastname"]; ?> </h1>
              </div><!-- /.col -->
              <div class="col-sm-2">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item" id="titulo-cate"><a href="#">Computadoras</a></li>
                  <li class="breadcrumb-item active">Ordenes</li>
                </ol>
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->


        <!-- Main content -->
        <div class="content">

          <!-- Contenido dinamico traido con AJAX -->

          <div id="contenido-panel" class="container-fluid" style="width: 80vw;" >
            <div class="card">
              <div class="card-header text-center">
                <h3 class="card-title title-cards">Estadisticas</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                    <div id="my-progress">
                    <div id="progress-bar">
                      <div id="label-bar">10%</div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-6">
                      <!-- small box -->
                      <div class="small-box bg-info">
                        <div class="inner">
                          <h3 id="total-ordenes"></h3>

                          <p>Ordenes totales</p>
                        </div>
                        <div class="icon">
                          <i class="ion ion-wrench"></i>
                        </div>
                        <a href="#" class="small-box-footer">Mas info <i class="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                      <!-- small box -->
                      <div class="small-box bg-success">
                        <div class="inner">
                          <h3 id="porcentaje-ordenes"><sup style="font-size: 20px">%</sup></h3>

                          <p>Mantenimientos completos<br>este semestre</p>
                        </div>
                        <div class="icon">
                          <i class="ion ion-android-checkbox"></i>
                        </div>
                        <a href="#" class="small-box-footer">Mas info <i class="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                      <!-- small box -->
                      <div class="small-box bg-warning">
                        <div class="inner">
                          <h3>44</h3>

                          <p>Mantenimientos pendientes</p>
                        </div>
                        <div class="icon">
                          <i class="ion ion-ios-stopwatch"></i>
                        </div>
                        <a href="#" class="small-box-footer">Mas info <i class="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                      <!-- small box -->
                      <div class="small-box bg-danger">
                        <div class="inner">
                          <h3>65</h3>

                          <p>Mantenimientos incompletos</p>
                        </div>
                        <div class="icon">
                          <i class="ion ion-alert-circled"></i>
                        </div>
                        <a href="#" class="small-box-footer">Mas info <i class="fas fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                    <!-- ./col -->
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </div>


            <!-- /Grafica de Barras -->
            <div class="row">
              <div class="col-md-6">

                <div id="card-graficos-barras" class="card card-info">
                  <div class="card-header">
                    <h3 class="card-title">Mantenimientos 2020</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                      <button type="button" class="btn btn-tool" data-card-widget="remove">
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <canvas id="barChart" width="912" height="450" class="chartjs-render-monitor"></canvas>
                    <style>
                      #card-graficos-barras {
                        width: 100%;

                      }

                      #card-mto-mes-actual {
                        width: 100%;

                      }
                    </style>
                  </div>
                  <!-- /.card-body -->
                </div>

              </div>

              <div class="col-md-6">

                <div id="card-mto-mes-actual" class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Mantenimientos del mes</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                      <button type="button" class="btn btn-tool" data-card-widget="remove">
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <div id="tabla-mto-mes">
                      <?php include 'controladores/mto-mes-actual.php' ?>
                    </div>
                  </div>
                  <!-- /.card-body -->
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
  <script src="vistas/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="vistas/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- ChartJS -->
  <script src="vistas/plugins/chart.js/Chart.min.js"></script>
  <script src="vistas/dist/js/graficas.js"></script>

  <!-- DataTables  & Plugins-->
  <script src="vistas/plugins/datatables/jquery.dataTables.min.js"></script>
  <script src="vistas/plugins/datatables/defaults.js"></script>
  <script src="vistas/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
  <script src="vistas/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
  <script src="vistas/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
  <script src="vistas/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
  <script src="vistas/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script> 
  <script src="vistas/plugins/jszip/jszip.min.js"></script>
  <script src="vistas/plugins/pdfmake/pdfmake.min.js"></script>
  <script src="vistas/plugins/pdfmake/vfs_fonts.js"></script>
  <script src="vistas/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
  <script src="vistas/plugins/datatables-buttons/js/buttons.print.min.js"></script>
  <script src="vistas/plugins/datatables-buttons/js/buttons.colVis.min.js"></script> 
  <script src="vistas/plugins/nice-select/js/jquery.nice-select.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>


 

  <!-- AdminLTE App -->
  <script src="vistas/dist/js/adminlte.min.js"></script>

  <!-- Scripts para mostrar información en el panel -->

  <script src="vistas/dist/js/mostrar-consultas-ordenes.js"></script>
  <script src="vistas/dist/js/cotizador.js"></script>
  <script src="vistas/dist/js/mostrarTablasDatatable.js"></script>
  <script src="vistas/dist/js/nuevaOrden.js"></script>
  <script src="vistas/dist/js/editarRegistros.js"></script>
  <script src="vistas/dist/js/editar-usuarios.js"></script>
  <script src="vistas/dist/js/targetasInicio.js"></script>
  <script src="vistas/dist/js/tiendas.js"></script>
  

  <script>
    var ctx = $('#barChart').get(0).getContext('2d')
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Mantenimiento',
          data: [10, 32, 20, 10, 32, 20, 10, 32, 20, 10, 32, 20],
          backgroundColor: [
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )'
          ]
        }]
      },

      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });



    //Tabla mantenimientos actuales

  
  </script>

</body>

</html>