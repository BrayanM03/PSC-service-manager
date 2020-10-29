<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="../dist/img/icon.ico" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" rel="stylesheet" href="../dist/css/register.css">
    <link rel="stylesheet" href="../plugins/UI/jquery-ui.theme.css">
    <link rel="stylesheet" href="../plugins/UI/jquery-ui.css">
    <link rel="stylesheet" href="../dist/css/datepicker.css">
    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Concert+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script src="../dist/js/login.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <title>Registro de Usuarios | PSC service manager</title>
</head>

<body>
    <div class="container-fluid">
        <div id="card" class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card" src="../dist/img/logo-psc.png" />
            <p id="profile-name" class="profile-name-card"></p>

            <form id="form_register" method="POST" onsubmit="return enviarDatosRegistro()" class="form-signin" autocomplete="off">
                <span id="reauth-email" class="reauth-email"><b>Registrarse</b></span>
                <div class="credentials">
                    <div class="form-group">

                        <div id="icon-3" class="icon">
                            <img id="input-icon3" class="input-icon" src="../dist/img/user.svg" alt="">
                        </div>
                        <input type="text" id="inputName" name="inputName" class="form-control inputUser" placeholder="Nombre" required>
                    </div>

                    <div class="form-group">
                        <div id="icon-4" class="icon">
                            <img id="input-icon4" class="input-icon" src="../dist/img/name.svg" alt="">
                        </div>
                        <input type="text" id="inputLastName" name="inputLastName" class="form-control inputPassword" placeholder="Apellidos" required>
                    </div>

                    <div class="form-group">
                        <div id="icon" class="icon">
                            <img id="input-icon1" class="input-icon" src="../dist/img/lastname.svg" alt="">
                        </div>
                        <input type="text" id="inputUser" name="inputUser" class="form-control inputPassword" placeholder="Usuario" autocomplete="perro" required>
                    </div>

                    <div class="form-group">
                        <div id="icon-2" class="icon">
                            <img id="input-icon2" class="input-icon" src="../dist/img/password.svg" alt="">
                        </div>
                        <input type="password" id="inputPassword" name="inputPassword" class="form-control inputPassword" autocomplete="new-password" placeholder="Contraseña" required>
                    </div>

                    <div class="form-group" style="display: flex; flex-direction:column;">
                        <span style="color:rgb(104, 145, 162); font-size:14px;">Fecha de nacimiento</span>
                        <div style="display:flex">
                            <div id="icon-5" class="icon">
                                <img id="input-icon5" class="input-icon" src="../dist/img/pastel.svg" alt="">
                            </div>
                            <input id="inputDate" style="background-color: white;" name="inputDate" class="form-control inputPassword" placeholder="Fecha" readonly>
                        </div>

                    </div>

                </div>


                <div class="form-group-b">

                    <button class="btn btn-lg btn-primary btn-block btn-signin">Registrarse</button>
                    
                    <a href="../../index.php" class="forgot-password m-2">
                        Volver al login
                    </a>

                </div>
            </form><!-- /form -->

        </div><!-- /card-container -->
    </div><!-- /container -->

    <script>
        $('#inputUser').val(''); 
        $('#inputPassword').val('');

        $(function() {

            var fechaA = new Date();
            var yyyy = fechaA.getFullYear();

            $('#inputDate').datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: '1900:' + yyyy,
                dateFormat: "dd-mm-yy",
                dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            });
        });


        function enviarDatosRegistro() {
          
            $.ajax({
                method: "POST",
                url: "../../controladores/recibir_usuarios.php",
                data: $('#form_register').serialize(),

                success: function(response) {

                    response = response.trim();

                    if (response == 1) {
                        $('#form_register').trigger("reset");
                        swal(":D", "¡Registrado correctamente!", "success");
                    } else if (response == 2) {
                        swal("D:", "¡Ese usuario ya existe!", "warning");
                    } else {
                        swal("):", "¡Error!", "error");
                    }

                },


            });

            return false;
        }
    </script>
</body>

</html>