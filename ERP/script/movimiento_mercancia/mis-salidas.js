$(document).ready(function() {
    tabla = "mercancia_salida";
    table = $('#salidas-lista').DataTable({




        ajax: {
            method: "POST",
            url: "../servidor/movimiento_mercancia/traer-lista-mercancia-saliente.php",
            data: {"tabla" : tabla},
            dataType: "json"
        },

      columns: [
        { title: "#", data: null },
        /*{ title: "Imagen",         data: "codigo", render: function(data,type,row) {

          return '<img src="../../vistas/dist/img/ERP/productos/'+ data +'.jpg" id="'+row.id+'" codigo="'+data+'" onclick="mostrarImagen('+row.id+');" style="width: 60px; border-radius: 8px; cursor: pointer;">'}
        },*/

        { title: "Codigo",data:null,
        render: function (row) {

          return '<span>PSCRSAL'+ row.id +'</span>'
        },
      },
        { title: "Motivo",   data: "motivo"},
        { title: "Usuario",        data: "usuario"},
        {title: "Tecnico",      data: "tecnico"},
        {title: "Fecha",      data: "fecha"},
        {title: "Cliente",      data: "cliente"},
        {
          data: null,
          className: "celda-acciones",
          render: function (row) {

            return '<div style="display: flex;"><button type="button"  style="margin:4px" onclick="editarRemision('+row.id+');" id="'+ row.id +'" '+
            'class="buttonEditar btn btn-info"><i class="fa fa-edit"></i>'+
            '</button><br><button type="button"  style="margin:4px"   onclick="borrarRemision('+row.id+');" class="buttonBorrar btn btn-warning">'+
            '<i class="fa fa-trash"></i><br></button>'+
            '<button type="button"   onclick="borrarRemision('+row.id+');" style="margin: 4px " class="buttonBorrar btn btn-danger">'+
            '<i class="fa fa-file-pdf"></i><br></button>'
          },
        },
      ],

      paging: true,
      searching: true,
      scrollY: "500px",
      info: true,
      responsive: false,
      order: [1, "desc"]

    });

    $("table.dataTable thead").addClass("table-success")

     //Enumerar las filas "index column"
     table.on( 'order.dt search.dt', function () {
        table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;

      } );
    } ).draw();



});

function generarRemision() {

  $.ajax({
    type: "POST",
    url: "../servidor/movimiento_mercancia/vaciar-tabla-presalida.php",
    data: "data",
    success: function (response) {
      
    }
  });

  Swal.fire({
    title: "Remision de salida",
    html: '<div class="row">'+
    '<div class="col-12 col-sm-5">'+
    '<form class="mt-4" id="remision">'+



        '<div class="row">'+
        '<div class="col-12 col-md-8">'+
        '<div class="form-group">'+
          '<label><b>Cliente:</b></label>'+
          '<select class="form-control" id="cliente" name="cliente"></select>'+
        '</div>'+
        '</div>'+
        '<div class="col-12 col-md-4">'+
        '<div class="form-group">'+
           '<label><b>Fecha</b></label>'+
           '<input type="date" class="form-control" name="fecha" id="fecha">'+
        '</div>'+
        '</div>'+

        '<div class="col-12 col-md-12">'+
        '<div class="form-group">'+
            '<label><b>Tecnico</b></label>'+
              '<select class="form-control" id="tecnico" name="tecnico"></select>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '<div class="col-12">'+
        '<div class="form-group" id="area-solucion">'+
        '<label><b>Motivo</b></label>'+
        '<textarea class="form-control" style="height:100px" name="motivo" id="motivo" placeholder="Escriba el motivo de la remisión"></textarea>'+
        '</div>'+
        '</div>'+


'</form>'+
'</div>'+


'<div class="col-12 col-sm-7 mt-4">'+
'<div class="row">'+
'<div class="col-12 col-md-7">'+
'<div class="form-group">'+
'<label><b>Agregar producto</b></label>'+
'<select class="form-control is-valid" id="buscar" name="buscar" placeholder="Nombre"></select>'+
'</div>'+
'</div>'+
'<div class="col-12 col-md-3">'+
'<div class="form-group">'+
    '<label><b>Cantidad</b></label>'+
    '<input type="number" class="form-control m-auto" name="cantidad" id="cantidad" placeholder="0">'+
    '<div class="invalid-feedback">Sobrepasaste el stock.</div>'+
'</div>'+
'</div>'+
'<buttom class="btn btn-info" onclick="agregarProdPreSalida();" style="height:40px; margin-top:27px" name="agregar-prod" id="agregar-prod">Agregar</buttom>'+
'<div class="col-12 col-md-12">'+
'<span><table id="pre-salida-productos" class="table table-primary table-hover table-striped table-bordered"></table></span>'+
'</div>'+
'</div>'+
'</div>'+
'</div>',
    showCancelButton: true,
    cancelButtonText: 'Cerrar',
    cancelButtonColor: '#00e059',
    showConfirmButton: true,
    width:"1400px",
    confirmButtonText: 'Generar',
    cancelButtonColor:'#ff764d',
    focusConfirm: false,
    iconColor : "#36b9cc",
    showLoaderOnConfirm: true,
    didOpen: function () {

      //Funciones select2 para buscar productos en el inventario.
      $("#buscar").select2({

                        placeholder: "Busca una producto...",
                        theme: "bootstrap",
                        minimumInputLength: 1,
                        ajax: {
                            url: "../servidor/movimiento_mercancia/buscar-producto.php",
                            type: "post",
                            dataType: 'json',
                            delay: 250,

                            data: function (params) {
                             return {
                               searchTerm: params.term // search term

                             };
                            },
                            processResults: function (data) {
                                return {
                                   results: data
                                };
                              },

                            cache: true

                        },
                        language:  {

                            inputTooShort: function () {
                                return "Busca un producto para agregarlo a la tabla...";
                              },

                            noResults: function() {

                              return "Sin resultados";
                            },
                            searching: function() {

                              return "Buscando..";
                            }
                          },

                          templateResult: formatRepo,
                          templateSelection: formatRepoSelection
      });

      function formatRepo (repo) {

                     if (repo.loading) {
                       return repo.text;
                     }


            var $container = $(
                "<div style='' class='select2-result-repository clearfix' desc='"+repo.descripcion+" marca='"+repo.Marca +
                "' costo='"+repo.precio_Inicial +" id='tyre"+repo.id+"' precio='"+repo.precio_Venta+" idcode='"+repo.id+"'>" +
                "<div class='select2-contenedor-principal row' syle='display:flex;'>" +
                "<div class='col-md-2 justify-content-center'><img class='' style='width: 50px; border-radius: 6px;' src='../../vistas/dist/img/ERP/productos/" + repo.codigo + ".jpg' /></div>" +
                  "<div class='col-md-8 text-start'>" +
                  "<div class='select2_modelo' style='font-size:14px;'>Modelo: "+ repo.modelo +"</div>" +
                  "<div class='select2_description' style='font-size:15px;'>" + repo.descripcion + "</div>" +
                  "<span><i class='fa fa-search-location'></i><strong> "+ repo.codigo +"</strong></span>"+
                  "<div class='select2_precio_venta'><i class='fa fa-flag'></i> "+ repo.categoria +"</div>" +
                  "</div>" +
                    "<div class='col-md-2 justify-content-center'><img class='' style='width: 50px; border-radius: 6px;' src='../../vistas/dist/img/ERP/marcas/" + repo.marca + ".jpg' /></div>" +
                  "</div>" +


                  "<div class='select2_statistics' style='display:flex; border-top: 1px solid whitesmoke; padding-top:8px; justify-content:space-around; margin-top:5px;'>" +
                  "<div class='select2_marca'><i class='fa fa-star'></i> "+ repo.marca+"</div>" +
                    "<div class='select2_precio_venta'><i class='fa fa-dollar-sign'></i> "+ repo.precio +" (precio)</div>" +
                    "<div class='select2_precio_venta'><i class='fa fa-bullseye'></i> "+ repo.cantidad +"</div>" +
                  "</div>" +
                "</div>" +
              "</div>"
            );



              $container.find(".select2_marca").text(repo.nombre);



                       return $container;
                     }

      function formatRepoSelection (repo) {
        if(repo.cantidad <= 0){

             Swal.fire({
                title: 'Producto agotado',
                html: "<span>El producto ya no tiene stock </span>",
                icon: "warning",
                cancelButtonColor: '#00e059',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                cancelButtonColor:'#ff764d'
            });

            return repo.text;



          }else{

            btn_agregar = $("#agregar-prod");
            cant = $("#cantidad").val();
            btn_agregar.attr("codigo", repo.codigo);
            btn_agregar.attr("descripcion", repo.descripcion);
            btn_agregar.attr("modelo", repo.modelo);
            btn_agregar.attr("cantidad", repo.cantidad);
            btn_agregar.attr("tabla", repo.tabla);

            return repo.text || repo.descripcion;

          }

                     }

      //Funciones select2 para buscar mis clientes

      $("#cliente").select2({

                        placeholder: "Busca un cliente...",
                        theme: "bootstrap",
                        minimumInputLength: 1,
                        ajax: {
                            url: "../servidor/movimiento_mercancia/buscar-clientes.php",
                            type: "post",
                            dataType: 'json',
                            delay: 250,

                            data: function (params) {
                             return {
                               searchTerm: params.term // search term

                             };
                            },
                            processResults: function (data) {
                                return {
                                   results: data
                                };
                              },

                            cache: true

                        },
                        language:  {

                            inputTooShort: function () {
                                return "Busca un cliente...";
                              },

                            noResults: function() {

                              return "Sin resultados";
                            },
                            searching: function() {

                              return "Buscando..";
                            }
                          },

                          templateResult: formatRepoS,
                          templateSelection: formatRepoSelectionS
      });

      function formatRepoS (repo) {

                     if (repo.loading) {
                       return repo.text;
                     }

            if(repo.tipo_cliente == "empresa"){
              icon_tag = '<i class="fas fa-building"></i>';
            }else if(repo.tipo_cliente == "Persona"){
              icon_tag = '<i class="fas fa-user"></i>';
            }

            var $container = $(
                "<div style='' class='select2-result-repository clearfix'>" +
                "<div>"+ icon_tag  +"  " + repo.nombre +" </div>"+
                "</div>"
            );



                       return $container;
                     }

      function formatRepoSelectionS  (repo) {
                       return repo.text || repo.nombre;
                     }

      //Funciones select2 para buscar usuarios

      $("#tecnico").select2({

                        placeholder: "Busca un usuario...",
                        theme: "bootstrap",
                        ajax: {
                            url: "../servidor/movimiento_mercancia/buscar-usuarios.php",
                            type: "post",
                            dataType: 'json',
                            delay: 250,

                            data: function (params) {
                             return {
                               searchTerm: params.term // search term

                             };
                            },
                            processResults: function (data) {
                                return {
                                   results: data
                                };
                              },

                            cache: true

                        },
                        language:  {

                            inputTooShort: function () {
                                return "Busca un usuario agregado...";
                              },

                            noResults: function() {

                              return "Sin resultados";
                            },
                            searching: function() {

                              return "Buscando..";
                            }
                          },

                          templateResult: formatRepoT,
                          templateSelection: formatRepoSelectionT
      });

      function formatRepoT (repo) {

                     if (repo.loading) {
                       return repo.text;
                     }


            var $container = $(
                "<div style='' class='select2-result-repository clearfix'>" +
                "<div>"+ repo.Nombre  +"  " + repo.Apellido +" </div>"+
                "</div>"
            );



                       return $container;
                     }

      function formatRepoSelectionT  (repo) {


                       return repo.text || repo.Nombre + " " + repo.Apellido;
                     }

      //Datables para pre salida de $productosPV
      tabla = "pre_salida";
      $.fn.dataTable.ext.errMode = 'none';

      tabla_presalida = $('#pre-salida-productos').DataTable({

          ajax: {
              method: "POST",
              url: "../servidor/movimiento_mercancia/traer-productos-presalida.php",
              data: {"tabla" : tabla},
              dataType: "json"
          },

        columns: [
          { title: "#", data: null },
          /*{ title: "Imagen",         data: "codigo", render: function(data,type,row) {

            return '<img src="../../vistas/dist/img/ERP/productos/'+ data +'.jpg" id="'+row.id+'" codigo="'+data+'" onclick="mostrarImagen('+row.id+');" style="width: 60px; border-radius: 8px; cursor: pointer;">'}
          },*/

          { title: "Codigo",   data:"codigo"},
          { title: "Descripcion",   data: "descripcion"},
          { title: "Modelo",  data: "modelo"},
          {title: "Cantidad",   data: "cantidad"},
          {
            data: null,
            className: "celda-acciones",
            render: function (row) {

              return '<div style="display: flex;"><button type="button"  style="margin:4px" rowid="'+row.id+'" class="buttonBorrar btn btn-warning">'+ //onclick="borrarPresalida('+row.id+');"
              '<i class="fa fa-trash"></i><br></button></div>';
            },
          },
        ],
        destroy: true,
        paging: false,
        searching: false,
        scrollY: "300px",
        info: false,
        responsive: false,
        order: [1, "desc"],
        language: {
       "emptyTable":     "Sin productos"
   },
        error: function(){  // error handling
            numRows = tabla_presalida.column( 0 ).data().length;

        if (numRows == 0) {
         /*  $(".pre-venta-error").html("");*/
          $('#pre-salida-productos > tbody').empty();
          $("#pre-salida-productos tbody").append('<tr><th id="empty-table" style="text-align: center;" colspan="8">Sin productos</th></tr>');
          $("#pre-salida-productos_processing").css("display","none");
        }


          }

      });

      //Pintando tabla
      $(".dataTables_empty").text("Sin productos");
      $(".dataTables_empty").css("background-color", "whitesmoke");
      $("#pre-salida-productos tbody").css("background-color", "whitesmoke");
      //Ordenar tabla por numeros
      tabla_presalida.on( 'order.dt search.dt', function () {
         tabla_presalida.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
             cell.innerHTML = i+1;

         } );
     } );

     //Validar por medio de keyup el $stockInventario

      $( "#cantidad" ).keyup(function() {
        codigo =  btn_agregar.attr("codigo");
        cantidadAEvaluar = $("#cantidad").val();
        tabla = btn_agregar.attr("tabla");
        $.ajax({
          type: "POST",
          url: "../servidor/movimiento_mercancia/validar-stock.php",
          data:{"cantidad": cantidadAEvaluar, "codigo": codigo, "tabla": tabla},
          success: function(response) {
            if(response == 1){
              flag = $("#cantidad").hasClass("is-invalid");
              if(flag == true){

               $("#cantidad").removeClass("is-invalid");
                $("#cantidad").addClass("is-valid");
              }else{
                  $("#cantidad").addClass("is-valid");
              }

            }else if(response == 2){
                $("#cantidad").addClass("is-invalid");
                $(".invalid-feedback").text("Sobrepasaste el stock");

            }else if(response == 3){
              flag = $("#cantidad").hasClass("is-valid");
              if(flag == true){
                $("#cantidad").removeClass("is-valid");
                $("#cantidad").addClass("is-invalid");
                $(".invalid-feedback").text("No se puede cantidad en 0");
              }else{
                  $("#cantidad").addClass("is-invalid");
                  $(".invalid-feedback").text("No se puede cantidad en 0")
              }
            }else if(response == 4){
              flag = $("#cantidad").hasClass("is-valid");
              if(flag == true){
                $("#cantidad").removeClass("is-valid");
                $("#cantidad").addClass("is-invalid");
                $(".invalid-feedback").text("No se puede cantidad negativa")
              }else{
                  $(".invalid-feedback").text("No se puede cantidad negativa")
              }
            }

          }

        });

      });


     // Borrar registro
     tabla_presalida.on('click', '.buttonBorrar', function() {
       let $tr = $(this).closest('tr');
       let $id = $(this).attr("rowid");
       $.ajax({
         type: "POST",
         url: "../servidor/movimiento_mercancia/borrar-prod-presalida.php", 
         data:{"id": $id},
         success: function(response) {
           if(response == 1){
               //tabla_presalida.ajax.reload(null, false);
               // Le pedimos al DataTable que borre la fila
               tabla_presalida.row($tr).remove().draw(false);
           }

         }

       });


     });





    },
    preConfirm: (respuesta) =>{

      data = {

        "cliente":          $('#select2-cliente-container').text(),
        "tecnico":       $("#select2-tecnico-container").text(),
        "motivo":         $("#motivo").val(),
        "fecha":            $("#fecha").val()
      };
     
      if( data["cliente"] == "Busca un cliente..."){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#cliente").addClass("border-danger");
        Swal.showValidationMessage(
          `Elige un cliente.`
        )
      }else if( data["tecnico"] == "Busca un usuario..."){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#tecnico").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece un tecnico.`
        )
      }else if( data["motivo"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#motivo").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece un motivo.`
        )
      }else if( data["fecha"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#fecha").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece una fecha.`
        )
      }else if(! tabla_presalida.data().any() ){
       
        Swal.showValidationMessage(
          `Elige por lo menos un producto para agregar en la remisión.`
        )
      }
    }
    //Si el resultado es OK tons:
  }).then((result) => {

   if(result.isConfirmed){
      
     let cliente =    data["cliente"];
     let tecnico =    data["tecnico"];
     let fecha =      data["fecha"];
     let motivo =     data["motivo"];
     datosPresalida = $('#pre-salida-productos').dataTable().fnGetData();

    
     $.ajax({
      type: "POST",
      url: "../servidor/movimiento_mercancia/insertar-remision.php",
      data:{"cliente": cliente, "tecnico": tecnico, "motivo": motivo, "cliente": cliente, "fecha":fecha,"data": datosPresalida },
    //  processData: false,  // tell jQuery not to process the data
    //  contentType: false,   // tell jQuery not to set contentType
      success: function(response) {
        console.log(response);
         if (response==1) {
          Swal.fire(
            "¡Correcto!",
            "Remision generada correctamente.",
            "success"
            ).then((result) =>{

              if(result.isConfirmed){
                 table.ajax.reload(null, false);
              }else if(result.isDenied){
               table.ajax.reload(null, false);
              }
              });

        }else{
          Swal.fire(
            "¡Error!",
            "No se agrego el producto",
            "error"
            )
            console.log(response);
           table.ajax.reload(null, false);
        } 
      },
      failure: function (response) {
          Swal.fire(
          "Error",
          "El producto no fue agregado.", // had a missing comma
          "error"
          )
      }
  });
/* 
     var form = $("#agregar-proveedor")[0];
     var datos = new FormData(form);
     //datos.append("clase", tabla);
     descripcion = $("#direccion").val();
     datos.append("direccion", descripcion);


     */


   }

},
function (dismiss) {
  if (dismiss === "cancel") {
    swal.fire(
      "Cancelled",
        "Se cancelo la operacion",
      "error"
    )
  };
})



}


function editarProveedor(id){

  $.ajax({
          type: "post",
          url: "../servidor/proveedores/traer-proveedor.php",
          data: {"id": id, "tabla": tabla},
          dataType: "JSON",
          success: function (response) {
            Swal.fire({
              title: "Editar proveedor",
              html: '<form class="mt-4" id="agregar-proveedor">'+


                  '<div class="col-12">'+
                  '<div class="form-group">'+
                  '<label><b>Nombre o razon social</b></label>'+
                  '<input type="text" class="form-control" value="'+ response.nombre +'" id="nombre" name="nombre" placeholder="Nombre">'+
                  '</div>'+
                  '</div>'+


              '</div>'+

              '<div class="row">'+

                  '<div class="col-6">'+
                  '<div class="form-group">'+
                  '<label><b>Telefono</b></label>'+
                  '<input type="number" class="form-control" value="'+ response.telefono +'" name="telefono" id="telefono" placeholder="+52 ...">'+
              '</div>'+
            '</div>'+
            '<div class="col-6">'+
                  '<div class="form-group">'+
                  '<label><b>RFC</b></label>'+
                    '<input type="text" value="'+ response.rfc +'" class="form-control" name="rfc" id="rfc" placeholder="RFC">'+
              '</div>'+
            '</div>'+
            '<div class="col-12">'+
                  '<div class="form-group">'+
                  '<label><b>Correo</b></label>'+
                  '<input type="text" value="'+ response.correo +'" class="form-control m-auto" name="correo" id="correo" placeholder="Correo">'+
              '</div>'+
            '</div>'+

                  '</div>'+
              '</div>'+

              '<div class="row  mt-1">'+
              '<div class="col-12">'+
              '<div class="form-group" id="area-solucion">'+
              '<label><b>Dirección</b></label>'+
              '<textarea class="form-control" style="height:100px" name="direccion" id="direccion" form="formulario-editar-registro" placeholder="Escriba la dirección del producto">'+ response.direccion +'</textarea>'+
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
              focusConfirm: false,
              iconColor : "#36b9cc",
              showLoaderOnConfirm: true,
              preConfirm: (respuesta) =>{

                data = {

                  "nombre":         $("#nombre").val(),
                  "telefono":       $("#telefono").val(),
                  "correo":         $("#correo").val(),
                  "rfc":            $("#rfc").val(),
                  "descripcion":    $("#descripcion").val()
                };

                if( data["nombre"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#nombre").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece un nombre`
                  )
                }else if( data["telefono"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#telefono").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece un telefono`
                  )
                }

              }
              //Si el resultado es OK tons:
            }).then((result) => {

             if(result.isConfirmed){

               var form = $("#agregar-proveedor")[0];
               var datos = new FormData(form);
               //datos.append("clase", tabla);
               direccion = $("#direccion").val();
               datos.append("direccion", direccion);
               datos.append("id", id);


              $.ajax({
                type: "POST",
                url: "../servidor/proveedores/actualizar-proveedor.php",
                data:datos,
                processData: false,  // tell jQuery not to process the data
                contentType: false,   // tell jQuery not to set contentType
                success: function(response) {
                  if (response==1) {
                    Swal.fire(
                      "¡Correcto!",
                      "Se actualizo el proveedor",
                      "success"
                      ).then((result) =>{
                     table.ajax.reload(null, false);
                        if(result.isConfirmed){
                           table.ajax.reload(null, false);
                        }else if(result.isDenied){
                           table.ajax.reload(null, false);
                        }
                        });

                  }else{
                    Swal.fire(
                      "¡Erro!",
                      "No se agrego el proveedor",
                      "error"
                      )
                      console.log(response);
                     table.ajax.reload(null, false);
                  }



                },
                failure: function (response) {
                    Swal.fire(
                    "Error",
                    "EL proveedor no se agregó.", // had a missing comma
                    "error"
                    )
                     table.ajax.reload(false);
                }
            });



             }

          },




          function (dismiss) {
            if (dismiss === "cancel") {
              swal.fire(
                "Cancelled",
                  "Se cancelo la operacion",
                "error"
              )
            };
          })
          }
        });
}

function  borrarProveedor(id){


      Swal.fire({
        icon: 'warning',
        title: "¿Estas seguro de eliminar este proveedor?",
        html: '<span>El proveedor se eliminara de forma permanente.</span>',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#00e059',
        showConfirmButton: true,
        confirmButtonText: 'Borrar',
        cancelButtonColor:'#ff764d',
        focusConfirm: false }).then((result) => {
            if(result.isConfirmed){
              $.ajax({
                type: "POST",
                url: "../servidor/proveedores/borrar-proveedor.php",
                data:{  "id":id, "tabla": tabla},
                cache: false,
                success: function(response) {
                  if (response) {
                    Swal.fire(
                      "¡Correcto!",
                      "" + response,
                      "success"
                      ).then((result) =>{
                     table.ajax.reload(null, false);
                        if(result.isConfirmed){
                           table.ajax.reload(null, false);
                        }else if(result.isDenied){
                           table.ajax.reload(null, false);
                        }
                        });

                  }else{
                    Swal.fire(
                      "¡Error!",
                      "No borro el producto",
                      "error"
                      )
                      console.log(response);
                     table.ajax.reload(false);
                  }



                },
                failure: function (response) {
                    Swal.fire(
                    "Error",
                    "EL producto no se borró.", // had a missing comma
                    "error"
                    )
                     table.ajax.reload(null, false);
                }
            });

            }
          });



}


//Funcion que agrega los productos_processing
function agregarProdPreSalida(){

   codigo =  btn_agregar.attr("codigo");
  descripcion = btn_agregar.attr("descripcion");
  modelo = btn_agregar.attr("modelo");
  tabla = btn_agregar.attr("tabla");
  cant = $("#cantidad").val();
  btn_agregar = $("#agregar-prod");
  datos = {
   "codigo": codigo,
   "descripcion": descripcion,
   "modelo": modelo,
   "cantidad": cant,
   "tabla": tabla };

  if(cant == 0 || cant == null || cant < 0){
    flag = $("#cantidad").hasClass("is-invalid");
    if(flag == true){

      $(".invalid-feedback").text("Ese dato es incorrecto");
    }else{
      $("#cantidad").removeClass("is-valid");
          $("#cantidad").addClass("is-invalid");
      $(".invalid-feedback").text("Ese dato es incorrecto");
    }
  }else if(codigo =="" || codigo == null){
    flag = $("#cantidad").hasClass("is-invalid");
    if(flag == true){

      $(".invalid-feedback").text("Primero selecciona un producto.");
    }else{
      $("#cantidad").removeClass("is-valid");
          $("#cantidad").addClass("is-invalid");
      $(".invalid-feedback").text("Primero selecciona un producto.");
    }
  }else{
    $.ajax({
      type: "POST",
      url: "../servidor/movimiento_mercancia/agregar-prod-presalida.php",
      data:datos,
      success: function(response) {
        if(response ==1){
          flag = $("#cantidad").hasClass("is-invalid");
          if(flag == true){
            $("#cantidad").removeClass("is-invalid");
          }
          tabla_presalida.ajax.reload(null, false);
        }else if(response == 2){
          $("#cantidad").addClass("is-invalid");
            $(".invalid-feedback").text("Sobrepasaste el stock");
        }

      }

    });
  }




};
