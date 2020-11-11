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

//Muestra las ordenes de los mantenimientos
function MostrarMtos() {
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/prueba.php",
    data: "data",

    success: function (response) {
      console.log(response);

      $("#contenido-panel").html(response);
      //$('#contenido-panel').html(response);

       table= $("#tabla-mantenimientos")
        .DataTable({
          ajax: {
            method: "POST",
            url: "./modelo/categorias/mantenimientos.php",
          },
          select: true,
          columns: [
            { data: "id" },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "mes" },
            { data: "usuario" },
            {
              data: null,
              className: "celda-acciones",
              render: function () {
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="ButtonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[0, "desc"]],
        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
        obtenerData('#tabla-mantenimientos tbody', table);

        editarData('#tabla-mantenimientos tbody', table);

        //PARTE DEL CODIUGO IMPORTANTE

        $('#tabla-mantenimientos tbody').on( 'click', 'tr', function () {
          console.log( table.row( this ).data() );
      } );
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarmtos()

var obtenerData = function (tbody, table ) { 
  $(tbody).on("click", "button.ButtonBorrar", function(){
    fila= $(this).closest("tr");
    id= parseInt(fila.find("td:eq(0)").text());
    alert(id);

  });
 }

 var editarData = function (tbody, table ) { 
  $(tbody).on("click", "button.buttonEditar", function(){
    fila            = $(this).closest("tr");
    id              = parseInt(fila.find("td:eq(0)").text());
    cr              = fila.find("td:eq(1)").text();
    tienda          = fila.find("td:eq(2)").text();
    fecha           = fila.find("td:eq(3)").text();
    folio           = parseInt(fila.find("td:eq(4)").text());
    categoria       = fila.find("td:eq(5)").text();
    estatus         = fila.find("td:eq(6)").text();
    solucion        = fila.find("td:eq(7)").text();
    mes             = fila.find("td:eq(8)").text();
    usuario         = fila.find("td:eq(9)").text();

    regMovil            = $(this).closest("tr");
    id2              = parseInt(regMovil.siblings("tr").find("td:eq(0)").text());
    alert(id2);
    

    Swal.fire({
      title: "Editar registro",
      html: '<form class="mt-4" id="formulario-nueva-orden">'+
      '<div class="row">'+
          '<div class="col-6">'+
          '<div class="form-group">'+
          '<label for="exampleInputEmail1"><b>CR:</b></label></br>'+
          '<input type="text" class="form-control" id="cr-input-modal" value="'+ cr +'" name="cr-input-nuevaOrden" aria-describedby="emailHelp" placeholder="CR" autocomplete="off">'+
  
          '<div class="search-cr-container-hide" id="search-cr-container">'+
          '<ul id="select-mostrar-tienda" class="card lista-tiendas-busqueda" name="select-mostrar-tienda"></ul>'+
          '</div>'+
  
     ' </div>'+
      '</div>'+
      
      
     '<div class="col-6">'+
      '<div class="form-group">'+
      '<label><b>Fecha:</b></label></br>'+
      '<input type="date" value="'+ fecha +'" name="date-nuevaOrden" class="form-control">'+
      '</div>'+
      '</div>'+
  
      
          '<div class="col-12">'+
          '<div class="form-group">'+
          '<label><b>Cliente</b></label>'+
          '<input type="text" class="tienda-span-modal-mto form-control" value="'+ tienda +'"  id="tienda-cliente" name="tienda-span-modal-mto" placeholder="tienda">'+
      '</div>'+
          '</div>'+

         
          '<div class="col-6">'+
          '<div class="form-group">'+
          '<label><b>Estatus</b></label>'+
          '<select class="form-control" id="select-status" value="'+ estatus +'" name="status-new-orden">'+
          '<option value="Abierto">Abierto</option>'+
          '<option value="Cerrado">Cerrado</option>'+
          '</select>'+
      '</div>'+
          '</div>'+

          '<div class="col-6">'+
          '<div class="form-group">'+
          '<label><b>Usuario</b></label>'+
          '<input type="text" class="form-control" value="'+ usuario +'"  id="usuario-editar" name="usuario-editar" placeholder="usuario-edit">'+
          '</div>'+
          '</div>'+
         
  
  
      '</div>'+
  
      '<div class="row">'+
          '<div class="col-5">'+
              '<div class="form-group">'+
                  '<label><b>Folio</b></label>'+
                  '<input type="number" class="form-control" value="'+ folio +'"name="folio-nueva-orden" placeholder="Escribe el folio">'+
              '</div>'+
          '</div>'+
          '<div class="col-7">'+
              '<div class="form-group nice-select-group">'+
                  '<label><b>Categoria</b></label>'+
                  '<select class="form-control" name="select-cat-nueva-orden" id="optionsNuevaOrden">'+
                      '<option id="optionComputer" value="Computadora">Computadora</option>'+
                      '<option id="optionVozyDat" value="Voz y Datos">Voz y datos</option>'+
                      '<option id="optionCCTV" value="CCTV">CCTV</option>'+
                      '<option id="optionMto" value="Mantenimiento">Mantenimiento</option>'+
                      '<option id="optionPrints" value="Impresoras">Impresoras</option>'+
                      '<option id="optionAccesorios" value="Accesorios">Accesorios</option>'+
                      '<option id="optionIMAC" value="IMAC">IMAC</option>'+
                      '<option id="optionRefaccion" value="Refacciones">Refacciones</option>'+
                  '</select>'+
  '</div>'+
          '</div>'+
      '</div>'+
  
      '<div class="sub-categorias mb-5" id="subcategorias">'+
          '<div class="row">'+
              '<div id="col-1" class="col-6"></div>'+
              '<div id="col-2" class="col-6"></div>'+
          '</div>'+
      '</div>'+
  
      '<div class="row  mt-1">'+
      '<div class="col-12">'+
      '<div class="form-group" id="area-solucion">'+
      '<label><b>Solución</b></label>'+
      '<textarea class="form-control" name="solucion-nueva-orden" style="height:100px" id="textareaNueva-orden" form="formulario-nueva-orden" placeholder="Escriba la solución">'+ solucion +'</textarea>'+
      '</div>'+
      '</div>'+
      '</div>'+
              '</div>'+
  '</form>',
      showCancelButton: true,
      cancelButtonText: 'Cerrar',
      cancelButtonColor: '#00e059',
      showConfirmButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonColor:'#ff764d',
    });

  });
 }


 //Mostrar usuarios
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
            value.Apellido +
            "</br>" +
            "<b>Usuario: </b>" +
            value.user +
            "</br>" +
            "<b>Cumpleaños: </b>" +
            value.fecha +
            "</div></div></div>"
        );
      });

      /*datosUsuarios.each(element => {
       
     

      */
    },
  });
}
