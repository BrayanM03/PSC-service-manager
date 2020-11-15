<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="../dist/img/icon.ico"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" rel="stylesheet" href="../dist/css/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Concert+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="../dist/js/login.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <title>Iniciar sesión | PSC service manager</title>
</head>

<body> 

<video autoplay muted loop id="myVideo">
  <source src="../dist/img/mar.mp4" type="video/mp4">
</video>

    <div class="container-fluid">
        <div id="cardlogin" class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card" src="../dist/img/logor.png" />
           
            <form class="form-signin" id="form-signin" method="POST" onsubmit="return login();">
                <span id="reauth-email" class="reauth-email"></span>
                <div class="credentials">
                    <div class="form-group">
                        <div id="icon" class="icon">
                            <img id="input-icon1" class="input-icon" src="../dist/img/lastname.svg" alt="">
                        </div>
                        <input type="text" id="inputUser" name="inputUser" class="form-control inputUser" placeholder="Usuario" required>
                    </div>

                    <div class="form-group">
                        <div id="icon-2" class="icon">
                            <img id="input-icon2" class="input-icon" src="../dist/img/password.svg" alt="">
                        </div>
                        <input type="password" id="inputPassword" name="inputPassword" class="form-control inputPassword" placeholder="Contraseña" required>
                    </div>

                </div>


                <div class="form-group-b">
                    <div id="remember" class="checkbox">
                        <label>
                            <input type="checkbox" class="forgot-password mt-1" value="remember-me"> 
                            <span class="forgot-password mt-1">Guardar datos</span> 
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Iniciar sesion</button>
                    <a href="register.php" class="forgot-password m-2">
                        Registrarse
                    </a>
                    <a href="#" class="forgot-password mt-1">
                        ¿Olvidaste la contraseña?
                    </a>
                </div>
            </form><!-- /form -->

        </div><!-- /card-container -->
    </div><!-- /container -->
    <script>
        function login() {
            $.ajax({
                method: "POST",
                url: "../../controladores/validar_usuarios.php",
                data: $('#form-signin').serialize(),
                success: function (response) {
                   
                    if(response == 1){
                        console.log(response);
                        window.location = "../../index.php";
                     
                    }else{
                        console.log(response);
                        swal('D:' ,'Credenciales incorrectas', 'error');
                    }
                }
            });

            return false;
        }
    </script>
</body>

</html>