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

//Muestra las ordenes de los computadoras
function MostrarCompu() {

  //Taryendo la categoria jeje
  $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'computadorascat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

     var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);

      $('#titulo-cate').html(categoriaTitulo);
      $('#titulo-cate').attr("categoria", categoriaTitulo);
    
      
    }
  });

  //Trayendo tabla
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/prueba.php",
    data: "data",

    success: function (response) {
     

      $("#contenido-panel").html(response);
      //$('#contenido-panel').html(response);

       table= $("#tabla-mantenimientos")
        .DataTable({
          ajax: {
            method: "POST",
            url: "./modelo/categorias/computadoras.php",
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
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"], [0, "desc"]],

          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }
        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarmtos()

//Muestra las ordenes de los voz y datos
function MostrarVozydat() {

    //Taryendo la categoria jeje
    $.ajax({
      type: "post",
      url: "./modelo/trayendoCategoria.php",
      data: {categoria: 'vozydatoscat'},
      dataType: 'json',
    
      success: function (response) {
      
       arreglo = response.data[0]
  
        var categoriaTitulo = arreglo.categoria;
        console.log(categoriaTitulo);
  
        $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
        $('#titulo-categoria').attr("categoria", categoriaTitulo);
      
       
        
      }
    });
  
    //Trayendo tabla
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
            url: "./modelo/categorias/vozydatos.php",
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
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"], [0, "desc"]],

          language: {
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }
        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarvozydat()



//Muestra las ordenes de CCTV


function MostrarCctv() {

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'cctvcat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);
    
     

      
    }
  });

  //Trayendo tabla
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
            url: "./modelo/categorias/cctv.php",
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
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"],  [0, "desc"]],

          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }

        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarcctv()

//Muestra las ordenes de los mantenimientos
function MostrarMtos() {

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'mantenimientocat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);
    
     

      
    }
  });

  //Trayendo tabla
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
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"],  [0, "desc"]],

          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }

        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarmtos()

//Muestra las ordenes de las impresoras
function MostrarPrinters() {

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'impresorascat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);
    
     

      
    }
  });

  //Trayendo tabla
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
            url: "./modelo/categorias/impresoras.php",
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
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"],  [0, "desc"]],
          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }

        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarprinters()

//Muestra las ordenes de accesorios
function MostrarAcc() {

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'accesorioscat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);
    
     

      
    }
  });

  //Trayendo tabla
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/tablas_con_cant.php",
    data: "data",

    success: function (response) {
      

      $("#contenido-panel").html(response);
      //$('#contenido-panel').html(response);

       table= $("#tabla-mantenimientos")
        .DataTable({
          ajax: {
            method: "POST",
            url: "./modelo/categorias/accesorios.php",
          },
          select: true,
          columns: [
            { data: "id" },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "cant" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "mes" },
            { data: "usuario" },
           

            {
              data: null,
              className: "celda-acciones",
              render: function () {
                return '<button type="button" class="buttonEditarCant btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"],  [0, "desc"]],
          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }

        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);
        editarDataconCant('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarmtos()

//Muestra las ordenes de los mantenimientos
function MostrarImac() {

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'imaccat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);
    
     

      
    }
  });

  //Trayendo tabla
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/prueba.php",
    data: "data",

    success: function (response) {
      
      $("#contenido-panel").html(response);
      //$('#contenido-panel').html(response);

       table= $("#tabla-mantenimientos")
        .DataTable({
          ajax: {
            method: "POST",
            url: "./modelo/categorias/imac.php",
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
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"],  [0, "desc"]],
          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }

        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarimac()

//Muestra las ordenes de los mantenimientos
function MostrarRefacci() {

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'refaccionescat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);
    
     

      
    }
  });

  //Trayendo tabla
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/prueba.php",
    data: "data",

    success: function (response) {
      

      $("#contenido-panel").html(response);
      //$('#contenido-panel').html(response);

       table= $("#tabla-mantenimientos")
        .DataTable({
          ajax: {
            method: "POST",
            url: "./modelo/categorias/refacciones.php",
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
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"],  [0, "desc"]],
          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }

        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarrefacc()



//Muestra las ordenes de la renovacion tecnologica
function MostrarRenovacion() {

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'renovacioncat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      console.log(categoriaTitulo);

      $('#titulo-categoria').html("Categoria: "+ categoriaTitulo);
      $('#titulo-categoria').attr("categoria", categoriaTitulo);
    
     

      
    }
  });

  //Trayendo tabla
  $.ajax({
    type: "POST",
    url: "./vistas/modulos/tablas/tablas_con_cant.php",
    data: "data",

    success: function (response) {
      

      $("#contenido-panel").html(response);
      //$('#contenido-panel').html(response);

       table= $("#tabla-mantenimientos")
        .DataTable({
          ajax: {
            method: "POST",
            url: "./modelo/categorias/renovacion_tecno.php",
          },
          select: true,
          columns: [
            { data: "id" },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "cant" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "mes" },
            { data: "usuario" },
            {
              data: null,
              className: "celda-acciones",
              render: function () {
                return '<button type="button" class="buttonEditarCant btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

          order: [[3, "desc"],  [0, "desc"]],
          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }

        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);
        editarDataconCant('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarRenovacion()


 
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
