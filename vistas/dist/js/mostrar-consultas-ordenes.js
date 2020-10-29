//Funciones para mostrar

function MostrarTiendas() {
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/tiendas.php",
    data: "data",

    success: function (response) {
      $("#contenido-panel").html(response);
    },
  });
}

function MostrarMtos() {
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/prueba.php",
    data: "data",

    success: function (response) {
      console.log(response);

      $("#contenido-panel").html(response);
      //$('#contenido-panel').html(response);

      $("#tabla-mantenimientos")
        .DataTable({
          ajax: {
            method: "POST",
            url: "./modelo/categorias/mantenimientos.php",
          },
          columns: [
            { data: "cr" },
            { data: "tienda" },
            { data: "descripcion" },
            { data: "fecha" },
          ],
          responsive: true,
          lengthChange: false,
          autoWidth: false,
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
        })
        .buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");
    },
  });
}

function mostrarUsuarios() {
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/Mostrar-usuarios.php",
    data: "data",

    success: function (data) {
      console.log(data);
      jsonObject = JSON.parse(data);
      var datosUsuarios = jsonObject;

      $("#contenido-panel").html(
        "<div class='row' id='contenedores-targetas'></div>"
      );

      $.each(datosUsuarios, function (key, value) {
        $("#contenedores-targetas").append(
          "<div class='col-md-4' id='targeta-Usuarios'><div class='card m-2 rounded text-center' style='border-radius:20px;'><div class='card-header bg-info card-title'>" +
            value.Nombre +
            "</div><div class='card-body bg-white'><div class='user-img-card'><img style='width:60%; clip-path: circle(40% at 50% 50%);'  src='./vistas/dist/img/userB.jpg'></div><b>Nombre: </b>" +
            value.Nombre +
            " " +
            value.Apellido +"</br>"+
            "<b>Usuario: </b>"+
            value.user +"</br>"+
            "<b>Cumpleaños: </b>"+
            value.fecha +"</div></div></div>"
        );
      });

      /*datosUsuarios.each(element => {
       
     

      */
    },
  });
}
