<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="index.php" class="brand-link" style="display:flex; justify-content:space-around; padding-left:20px">
    <img src="../vistas/dist/img/logo-2.png" alt="PSC Logo" class="brand-image elevation-3" style="opacity: .9;">
    <span class="brand-text font-weight-light" style="font-size:15px; margin-right:0px;">Service M</span>

  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="../vistas/dist/img/users/<?php echo $_SESSION['userUser']; ?>.jpg" style="height:40px;" class="img-circle elevation-2" alt="User Image">
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
        <li class="nav-item menu-closed">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-store"></i>
            <p>
              Punto de Venta
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="modulos/nueva-venta.php" id=""  class="nav-link">
                <i class="fas fa-cash-register nav-icon"></i>
                <p>Nueva venta</p>
              </a>
            </li>
            <li  class="nav-item">
              <a href="modulos/nueva-cotizacion.php" id="nav-vozydat" class="nav-link">
                <i class="fas fa-comment-dollar nav-icon"></i>
                <p>Nueva Cotización</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="modulos/historial-ventas.php" id="nav-cctv" class="nav-link">
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
                <a href="modulos/computadoras_inv.php" id="nav-refacciones" class="nav-link">
                  <i class="fas fa-keyboard nav-icon"></i>
                  <p>Computadoras</p>
                </a>
              </li>

              <li class="nav-item">
                  <a href="modulos/cctv_inv.php" id="nav-refacciones" class="nav-link">
                    <i class="fas fa-video nav-icon"></i>
                    <p>CCTV</p>
                  </a>
                </li>

                <li class="nav-item">
                    <a href="modulos/consumibles_inv.php" id="nav-refacciones" class="nav-link">
                      <i class="fas fa-print nav-icon"></i>
                      <p>Consumibles</p>
                    </a>
                  </li>

                  <li class="nav-item">
                      <a href="modulos/enlace_inv.php" id="nav-refacciones" class="nav-link">
                        <i class="fas fa-wifi nav-icon"></i>
                        <p>Enlace</p>
                      </a>
                    </li>

                    <li class="nav-item">
                        <a href="modulos/pv_inv.php" id="nav-refacciones" class="nav-link">
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
              <a href="modulos/mercancia-saliente.php" id="nav-refacciones"  class="nav-link">
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
              <a href="modulos/mis-clientes.php" id="nav-refacciones" class="nav-link">
                <i class="fas fa-user-tag nav-icon"></i>
                <p>Clientes</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="modulos/mis-creditos.php" id="nav-refacciones" class="nav-link">
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
              <a href="modulos/mis-proveedores.php" id="nav-refacciones" class="nav-link">
                <i class="fas fa-user-tag nav-icon"></i>
                <p>Proveedores</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="modulos/catalogo-proveedor.php" id="nav-refacciones"  class="nav-link">
                <i class="fas fa-folder nav-icon"></i>
                <p>Catalogo de Proveedores</p>
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
              <a href="modulos/reparacion.php" id="nav-refacciones" class="nav-link">
                <i class="fas fa-screwdriver nav-icon"></i>
                <p>En reparación</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="modulos/reparadas.php" id="nav-refacciones" class="nav-link">
                <i class="fas fa-check-circle nav-icon"></i>
                <p>Reparadas</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="modulos/manual.php" id="nav-refacciones" class="nav-link">
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
