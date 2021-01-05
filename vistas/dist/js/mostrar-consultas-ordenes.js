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

  $('#titulo-categoria').html("Categoria: Computadoras");
  //Taryendo la categoria jeje
  $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'computadorascat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

     var categoriaTitulo = arreglo.categoria;
      

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
            { data: null},
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha"},
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id"},
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
          colReorder: true,
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
          scrollY: "50vh",
          scrollCollapse: true,
          paging: true,
          responsive: true,

          dom: "Bfrtip",
          buttons: ["copy", "csv", "pdf", "excel", "print", "colvis"],

          order: [[3, "desc"],[8, "desc"]],

          exportOptions: [{
            order: [[3, "asc"],[8, "asc"]]
          }],

          language: {
            
            emptyTable: "No hay registros",
            infoEmpty: "Ups!, no hay registros aun en esta categoria."
          }
        });

        table.buttons()
        .container()
        .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");

        //Enumerar las filas "index column"
        table.on( 'order.dt search.dt', function () {
          table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
              cell.innerHTML = i+1;
             
          } );
      } ).draw(); 

     

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarmtos()

//Muestra las ordenes de los voz y datos
function MostrarVozydat() {

  $('#titulo-categoria').html("Categoria: Voz y datos");
    //Taryendo la categoria jeje
    $.ajax({
      type: "post",
      url: "./modelo/trayendoCategoria.php",
      data: {categoria: 'vozydatoscat'},
      dataType: 'json',
    
      success: function (response) {
      
       arreglo = response.data[0];
  
        var categoriaTitulo = arreglo.categoria;
       
  
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
            url: "./modelo/categorias/vozydatos.php",
          },
          select: true,
          columns: [
            { data: null},
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id" },
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
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarvozydat()



//Muestra las ordenes de CCTV


function MostrarCctv() {
  $('#titulo-categoria').html("Categoria: CCTV");

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'cctvcat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
     

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
            url: "./modelo/categorias/cctv.php",
          },
          select: true,
          columns: [
            { data: null },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "mes" },
            { data: "id" },
            { data: "usuario" },
            {
              data: null,
              className: "celda-acciones",
              render: function () {
                return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
              },
            },
          ],
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarcctv()

//Muestra las ordenes de los mantenimientos
function MostrarMtos() {
  $('#titulo-categoria').html("Categoria: Mantenimientos");

   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'mantenimientocat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
    

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
            url: "./modelo/categorias/mantenimientos.php",
          },
          select: true,
          columns: [
            { data: null },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id" },
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
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarmtos()

//Muestra las ordenes de las impresoras
function MostrarPrinters() {

  $('#titulo-categoria').html("Categoria: Impresoras");
   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'impresorascat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
     

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
            url: "./modelo/categorias/impresoras.php",
          },
          select: true,
          columns: [
            { data: null },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id" },
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
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarprinters()

//Muestra las ordenes de accesorios
function MostrarAcc() {
  $('#titulo-categoria').html("Categoria: Accesorios");
   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'accesorioscat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      

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
            { data: null },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "cant" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id" },
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
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);
        editarDataconCant('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarmtos()

//Muestra las ordenes de los mantenimientos
function MostrarImac() {
  $('#titulo-categoria').html("Categoria: IMAC");
   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'imaccat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
      

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
            { data: null },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id" },
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
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarimac()

//Muestra las ordenes de los mantenimientos
function MostrarRefacci() {
  $('#titulo-categoria').html("Categoria: Refacciones");
   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'refaccionescat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
     

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
            { data: null },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id" },
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
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarrefacc()



//Muestra las ordenes de la renovacion tecnologica
function MostrarRenovacion() {
  $('#titulo-categoria').html("Categoria: Renovación");
   //Taryendo la categoria jeje
   $.ajax({
    type: "post",
    url: "./modelo/trayendoCategoria.php",
    data: {categoria: 'renovacioncat'},
    dataType: 'json',
  
    success: function (response) {
    
     arreglo = response.data[0]

      var categoriaTitulo = arreglo.categoria;
     

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
            { data: null },
            { data: "cr" },
            { data: "tienda", width: "20%" },
            { data: "fecha" },
            { data: "folio" },
            { data: "subcat" },
            { data: "cant" },
            { data: "estatus" },
            { data: "solucion", width: "30%", className: "celda-descripcion" },
            { data: "id" },
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
          columnDefs: [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
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

                //Enumerar las filas "index column"
                table.on( 'order.dt search.dt', function () {
                  table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                      cell.innerHTML = i+1;
                  } );
              } ).draw();

        //Funciones del crud
      
        editarData('#tabla-mantenimientos tbody', table);
        borrarData('#tabla-mantenimientos tbody', table);
        editarDataconCant('#tabla-mantenimientos tbody', table);

        
       
    } //Fin de respuesta ajax

   

  }); //Fin de funcion async ajax
 
}//Fin mostrarRenovacion()


 
 //Mostrar usuarios
function mostrarUsuarios() {
  $('#titulo-categoria').html("Usuarios");
 //Trayendo tabla
 $.ajax({
  type: "POST",
  url: "./vistas/modulos/tablas/tabla-users.php",
  data: "data",

  success: function (response) {
    
    

    $("#contenido-panel").html(response);
    //$('#contenido-panel').html(response);

     table= $("#tabla-mantenimientos")
      .DataTable({
        ajax: {
          method: "POST",
          url: "./vistas/modulos/Mostrar-usuarios.php",
        },
        select: true,
        columns: [
          { data: "id" },
          { data: "Nombre" },
          { data: "Apellido" },
          { data: "user"},
          { data: "fecha" },
          {
            data: null,
            className: "celda-acciones",
            render: function () {
              return '<button type="button" class="buttonEditarUsuarios btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
            },
          },
        ],
       
        scrollY: "50vh",
        scrollCollapse: true,
        paging: true,
        responsive: true,

        dom: "Bfrtip",
        buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],

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
      editarDataUser('#tabla-mantenimientos tbody', table);

      
     
  } //Fin de respuesta ajax

 

}); //Fin de funcion async ajax

}
