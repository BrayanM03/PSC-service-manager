$(document).ready(function() {
    tabla = "servicios_inv";
    table = $('#productos-inv').DataTable({




        ajax: {
            method: "POST",
            url: "../servidor/inventario/traer-inventario-servicios.php",
            data: {"tabla" : tabla},
            dataType: "json"
        },

      columns: [
        { title: "#", data: null }, 
        /*{ title: "Imagen",         data: "codigo", render: function(data,type,row) {

          return '<img src="../../vistas/dist/img/ERP/productos/'+ data +'.jpg" id="'+row.id+'" codigo="'+data+'" onclick="mostrarImagen('+row.id+');" style="width: 60px; border-radius: 8px; cursor: pointer;">'}
        },*/

        { title: "Codigo",        data: "codigo"},
        { title: "Descripcion",   data: "descripcion"},
      /*  { title: "Modelo",        data: "modelo"},
        { title: "Marca",         data: "marca", render: function(data,type,row) {

          return '<img src="../../vistas/dist/img/ERP/marcas/'+ data +'.jpg" style="width: 60px; border-radius: 8px"><span>'+ data +'</span>'}},
        { title: "Cantidad",      data: "cantidad", render: function(data,row) {

            if (data == "0") {
              //$(this).parents().addClass("fila-sin-stock");
               return '<span class="badge badge-warning">Agotado</span>';    ;
            }else{
              return '<span>'+ data +'</span>';
            }
        }},
        { title: "Costo",         data: "costo"},*/
        { title: "Precio",        data: "precio"},
        {title: "Categoria",      data: "categoria"},
        {title: "Clave Sat",      data: "clave_sat"},
          {title: "Clave unidad",      data: "clave_unidad"},
        {
          data: null,
          className: "celda-acciones",
          render: function (row) {

            return '<div style="display: flex; flex-direction: column;"><button type="button" onclick="editarProducto('+row.id+');" id="'+ row.id +'" '+
            'class="buttonEditar btn btn-warning"><i class="fa fa-edit"></i>'+
            '</button><br><button type="button"  style="margin-top:-18px; margin-bottom:7px"   onclick="borrarProducto('+row.id+');" style="margin: 8px 0px" class="buttonBorrar btn btn-danger">'+
            '<i class="fa fa-trash"></i><br></button>'
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

function agregarServicio() {

  Swal.fire({
    title: "Agregar servicio nuevo",
    html: '<form class="mt-4" id="agregar-producto">'+


        '<div class="col-6">'+
        '<div class="form-group">'+
        '<label><b>Categoria</b></label>'+
        '<input type="text" class="form-control" id="categoria" name="categoria" placeholder="Categoria">'+
        '</div>'+
        '</div>'+


    '</div>'+

    '<div class="row">'+

        '<div class="col-4">'+
        '<div class="form-group">'+
        '<label><b>Precio</b></label>'+
        '<input type="number" class="form-control" name="precio" id="precio" placeholder="0.00">'+
    '</div>'+
  '</div>'+
  '<div class="col-4">'+
        '<div class="form-group">'+
        '<label><b>Clave Sat</b></label>'+
        '<input type="number" class="form-control" name="sat" id="sat" placeholder="sat">'+
    '</div>'+
  '</div>'+
  '<div class="col-4">'+
        '<div class="form-group">'+
        '<label><b>Clave Unidad</b></label>'+
        '<input type="text" class="form-control" name="unidad" id="unidad" placeholder="unidad">'+
    '</div>'+
  '</div>'+

        '</div>'+
    '</div>'+

    '<div class="row  mt-1">'+
    '<div class="col-12">'+
    '<div class="form-group" id="area-solucion">'+
    '<label><b>Descripción</b></label>'+
    '<textarea class="form-control" style="height:100px" name="descripcion" id="descripcion" form="formulario-editar-registro" placeholder="Escriba la descripcion del producto"></textarea>'+
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

        "categoria":      $("#categoria").val(),
        "precio":         $("#precio").val(),
        "clavesat":       $("#sat").val(),
        "claveunidad":    $("#claveunidad").val(),
        "descripcion":    $("#descripcion").val()
      };

      if(data["marca"] == "Selecciona una marca"){

        $(".datoVacio").removeClass("datoVacio");
        $(".select2-container").addClass("datoVacio");
        Swal.showValidationMessage(
          `Selecciona una marca`
        )
      }else if( data["categoria"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#categoria").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece una categoria`
        )
      }else if( data["precio"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#precio").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece un precio`
        )
      }else if(data["sat"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#sat").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece una clave sat`
        )
      }else if( data["descripcion"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#descripcion").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece una descripcion`
        )
      }
    }
    //Si el resultado es OK tons:
  }).then((result) => {

   if(result.isConfirmed){

     var form = $("#agregar-producto")[0];
     var datos = new FormData(form);
     datos.append("clase", tabla);
     descripcion = $("#descripcion").val(),
     unidad = $("#unidad").val(),
     datos.append("unidad", unidad);
     datos.append("descripcion", descripcion);


    $.ajax({
      type: "POST",
      url: "../servidor/inventario/agregar-servicios.php",
      data:datos,
      processData: false,  // tell jQuery not to process the data
      contentType: false,   // tell jQuery not to set contentType
      success: function(response) {
        if (response==1) {
          Swal.fire(
            "¡Correcto!",
            "Se agrego el producto",
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


function editarProducto(id){

  $.ajax({
          type: "post",
          url: "../servidor/inventario/traer-servicio.php",
          data: {"id": id, "tabla": tabla},
          dataType: "JSON",
          success: function (response) {
            Swal.fire({
              title: "Editar producto",
              html: '<form class="mt-4" id="editar-producto" novalidate>'+



              '<div class="row">'+

                  '<div class="col-6">'+
                  '<div class="form-group">'+
                  '<label><b>Categoria</b></label>'+
                  '<input type="text" value="'+ response.categoria+'" class="form-control" id="categoria" name="categoria" placeholder="Categoria">'+
                  '</div>'+
                  '</div>'+




              '</div>'+

              '<div class="row">'+

                  '<div class="col-4">'+
                  '<div class="form-group">'+
                  '<label><b>Precio</b></label>'+
                  '<input type="number" class="form-control" value="'+ response.precio +'" name="precio" id="precio" placeholder="0.00">'+
              '</div>'+
          '</div>'+
          '<div class="col-4">'+
                  '<div class="form-group">'+
                  '<label><b>Clave Sat</b></label>'+
                  '<input type="number" class="form-control" value="'+ response.clavesat +'" name="sat" id="sat" placeholder="Clave SAT">'+
              '</div>'+
          '</div>'+
          '<div class="col-4">'+
                '<div class="form-group">'+
                '<label><b>Clave Unidad</b></label>'+
                '<input type="text" class="form-control" value="'+ response.unidad +'" name="unidad" id="unidad" placeholder="unidad">'+
            '</div>'+
          '</div>'+
                  '</div>'+
              '</div>'+

              '<div class="row  mt-1">'+
              '<div class="col-12">'+
              '<div class="form-group" id="area-solucion">'+
              '<label><b>Código</b></label>'+
              '<input type="text" valido="si" class="form-control" value="'+response.codigo +'" mismocode="'+response.codigo +'" name="codigo" id="codigo" placeholder="Código">'+
              '<div class="invalid-feedback" id="feedback">¡Todo correcto!</div>'+
              '</div>'+
              //'<div class="alerta-code"> Este codigo ya esta registrado </div>'+
              '</div>'+
              '</div>'+


              '<div class="row  mt-1">'+
              '<div class="col-12">'+
              '<div class="form-group" id="area-solucion">'+
              '<label><b>Descripción</b></label>'+
              '<textarea class="form-control" style="height:100px" name="descripcion" id="descripcion" form="formulario-editar-registro" placeholder="Escriba la descripcion del producto">'+response.descripcion +'</textarea>'+
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
              didOpen: function () {

                  $(document).ready(function() {

                        mismocode = $("#codigo").attr("mismocode");
                        //Comprobar code
                        $("#codigo").keyup(function(event){
                          tecla_presionada = String.fromCharCode(event.which);
                          codigo_tecla = event.which;

                          code = $(this).val();

                          if(codigo_tecla !== 16 && codigo_tecla !== 13 && codigo_tecla !== 37 && codigo_tecla !== 39 && codigo_tecla !== 17 && codigo_tecla !== 18 && codigo_tecla !== 91 && codigo_tecla !== 20){
                        //  tabla = "computadoras_inv";

                            $.ajax({
                              type: "POST",
                              url: "../servidor/inventario/validar-codigo.php",
                              data:{"code":code, "tabla": tabla, "mismocode": mismocode},
                              success: function(response) {
                                if (response == 0) {

                                  input_codigo = $("#codigo");
                                  validar_clase_valida = input_codigo.hasClass("is-valid");
                                  validar_clase_invalida = input_codigo.hasClass("is-invalid");

                                  if(validar_clase_invalida == true){
                                    input_codigo.removeClass("is-invalid");
                                    input_codigo.addClass("is-invalid");
                                  }else if(validar_clase_invalida == false){
                                    input_codigo.removeClass("is-valid");
                                    input_codigo.addClass("is-invalid");
                                  }else if(validar_clase_valida == true){
                                    input_codigo.removeClass("is-valid");
                                    input_codigo.addClass("is-invalid");
                                  }

                                  $('#feedback').removeClass();
                                  $('#feedback').addClass("invalid-feedback");
                                  $('#feedback').text("Ya hay un producto con ese código");
                                  validad_code_area = $("#codigo").attr("valido", "no");


                                }else if(response == 1){

                                  input_codigo = $("#codigo");
                                  validar_clase_valida = input_codigo.hasClass("is-valid");
                                  validar_clase_invalida = input_codigo.hasClass("is-invalid");

                                  if(validar_clase_invalida == true){
                                    input_codigo.removeClass("is-invalid");
                                    input_codigo.addClass("is-valid");
                                  }else if(validar_clase_invalida == false){
                                    input_codigo.addClass("is-valid");
                                  }else if(validar_clase_valida == true){
                                    input_codigo.removeClass("is-valid");
                                    input_codigo.addClass("is-valid");
                                  }

                                  $('#feedback').removeClass();
                                  $('#feedback').addClass("valid-feedback");
                                  $('#feedback').text("El código esta disponible");
                                  validad_code_area = $("#codigo").attr("valido", "si");

                                }else if(response == 2){

                                  input_codigo = $("#codigo");
                                  validar_clase_valida = input_codigo.hasClass("is-valid");
                                  validar_clase_invalida = input_codigo.hasClass("is-invalid");

                                  if(validar_clase_invalida == true){
                                    input_codigo.removeClass("is-invalid");
                                    input_codigo.addClass("is-valid");
                                  }else if(validar_clase_invalida == false){
                                    input_codigo.addClass("is-valid");
                                  }else if(validar_clase_valida == true){
                                    input_codigo.removeClass("is-valid");
                                    input_codigo.addClass("is-valid");
                                  }

                                  $('#feedback').removeClass();
                                  $('#feedback').addClass("valid-feedback");
                                  $('#feedback').text("Este es el mismo codigo");
                                    validad_code_area = $("#codigo").attr("valido", "si");
                                }
                              }
                            });
                          }




                        });


                  });
              } ,
              showLoaderOnConfirm: true,
              preConfirm: (respuesta) =>{

                data = {

                  "precio":         $("#precio").val(),
                  "categoria":      $("#categoria").val(),
                  "descripcion":    $("#descripcion").val(),
                  "clavesat":       $("#sat").val()

                };

                 if( $("#codigo").attr("valido") == "no"){

                  Swal.showValidationMessage(
                    `El codigo esta ocupado`
                  )
                }else if( data["precio"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#precio").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece un precio`
                  )
                }else if(data["clavesat"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#mayorista").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece una clave sat para el producto`
                  )
                }else if( data["descripcion"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#descripcion").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece una descripcion`
                  )
                }
              }
              //Si el resultado es OK tons:
            }).then((result) => {

             if(result.isConfirmed){

               //var files = $('#imagen')[0].files[0];
               var form = $("#editar-producto")[0];
               var datos = new FormData(form);
               datos.append("clase", tabla);
               samecode = $("#codigo").attr("mismocode");
               datos.append("samecode", samecode);
               descripcion = $("#descripcion").val(),
               datos.append("descripcion", descripcion);
               unidad = $("#unidad").val(),
               datos.append("unidad", unidad);
               datos.append("id", id);



              $.ajax({
                type: "POST",
                url: "../servidor/inventario/actualizar-servicio.php",
                data:datos,
                processData: false,  // tell jQuery not to process the data
                contentType: false,   // tell jQuery not to set contentType
                success: function(response) {
                  if (response==1) {
                    Swal.fire(
                      "¡Correcto!",
                      "Se actualizo el producto",
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
                    "EL producto no se agregó.", // had a missing comma
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




function  borrarProducto(id){


      Swal.fire({
        icon: 'warning',
        title: "¿Estas seguro de eliminar esta producto?",
        html: '<span>El producto se eliminara del inventario junto a su información.</span>',
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
                url: "../servidor/inventario/borrar-servicio.php",
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
                      "¡Erro!",
                      "Se borro el producto",
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

function sacarEtiqueta(id){
   window.open('../servidor/inventario/crear-etiqueta.php?tabla='+tabla+'&id='+ id, '_blank');
}
