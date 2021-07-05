$(document).ready(function() {
    tabla = "servicios_inv";
    table = $('#proveedores-lista').DataTable({




        ajax: {
            method: "POST",
            url: "../servidor/proveedores/traer-lista-proveedores.php",
            data: {"tabla" : tabla},
            dataType: "json"
        },

      columns: [
        { title: "#", data: null },
        /*{ title: "Imagen",         data: "codigo", render: function(data,type,row) {

          return '<img src="../../vistas/dist/img/ERP/productos/'+ data +'.jpg" id="'+row.id+'" codigo="'+data+'" onclick="mostrarImagen('+row.id+');" style="width: 60px; border-radius: 8px; cursor: pointer;">'}
        },*/

        { title: "Nombre",        data: "nombre"},
        { title: "Direccion",   data: "direccion"},
        { title: "RFC",        data: "rfc"},
        {title: "Telefono",      data: "telefono"},
        {title: "Correo",      data: "correo"},
        {
          data: null,
          className: "celda-acciones",
          render: function (row) {

            return '<div style="display: flex; flex-direction: column;"><button type="button" onclick="editarProveedor('+row.id+');" id="'+ row.id +'" '+
            'class="buttonEditar btn btn-warning"><i class="fa fa-edit"></i>'+
            '</button><br><button type="button"  style="margin-top:-18px; margin-bottom:7px"   onclick="borrarProveedor('+row.id+');" style="margin: 8px 0px" class="buttonBorrar btn btn-danger">'+
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

function agregarProveedor() {

  Swal.fire({
    title: "Agregar proveedor nuevo",
    html: '<form class="mt-4" id="agregar-proveedor">'+


        '<div class="col-12">'+
        '<div class="form-group">'+
        '<label><b>Nombre o razon social</b></label>'+
        '<input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre">'+
        '</div>'+
        '</div>'+


    '</div>'+

    '<div class="row">'+

        '<div class="col-6">'+
        '<div class="form-group">'+
        '<label><b>Telefono</b></label>'+
        '<input type="number" class="form-control" name="telefono" id="telefono" placeholder="+52 ...">'+
    '</div>'+
  '</div>'+
  '<div class="col-6">'+
        '<div class="form-group">'+
        '<label><b>RFC</b></label>'+
          '<input type="text" class="form-control" name="rfc" id="rfc" placeholder="RFC">'+
    '</div>'+
  '</div>'+
  '<div class="col-12">'+
        '<div class="form-group">'+
        '<label><b>Correo</b></label>'+
        '<input type="text" class="form-control m-auto" name="correo" id="correo" placeholder="Correo">'+
    '</div>'+
  '</div>'+

        '</div>'+
    '</div>'+

    '<div class="row  mt-1">'+
    '<div class="col-12">'+
    '<div class="form-group" id="area-solucion">'+
    '<label><b>Dirección</b></label>'+
    '<textarea class="form-control" style="height:100px" name="direccion" id="direccion" form="formulario-editar-registro" placeholder="Escriba la dirección del producto"></textarea>'+
    '</div>'+
    '</div>'+
    '</div>'+
            '</div>'+
'</form>',
    showCancelButton: true,
    cancelButtonText: 'Cerrar',
    cancelButtonColor: '#00e059',
    showConfirmButton: true,
    confirmButtonText: 'Agregar',
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
     descripcion = $("#direccion").val();
     datos.append("direccion", descripcion);


    $.ajax({
      type: "POST",
      url: "../servidor/proveedores/agregar-proveedor.php",
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
