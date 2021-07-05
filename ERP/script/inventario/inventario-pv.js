$(document).ready(function() {
    tabla = "pv_inv";
    table = $('#productos-inv').DataTable({




        ajax: {
            method: "POST",
            url: "../servidor/inventario/traer-inventario.php",
            data: {"tabla" : tabla},
            dataType: "json"
        },

      columns: [
        { title: "#", data: null },
        { title: "Imagen",         data: "codigo", render: function(data,type,row) {

          return '<img src="../../vistas/dist/img/ERP/productos/'+ data +'.jpg" id="'+row.id+'" codigo="'+data+'" onclick="mostrarImagen('+row.id+');" style="width: 60px; border-radius: 8px; cursor: pointer;">'}
          },
        //{ title: "Codigo",         data: "id"             },
        { title: "Codigo",        data: "codigo"},
        { title: "Descripcion",   data: "descripcion"},
        { title: "Modelo",        data: "modelo"},
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
        { title: "Costo",         data: "costo"},
        { title: "Precio",        data: "precio"},
        {title: "Categoria",      data: "categoria"},
        {title: "Clave Sat",      data: "clave_sat"},
        {
          data: null,
          className: "celda-acciones",
          render: function (row) {

            return '<div style="display: flex; flex-direction: column;"><button type="button" onclick="editarProducto('+row.id+');" id="'+ row.id +'" '+
            'class="buttonEditar btn btn-warning"><i class="fa fa-edit"></i>'+
            '</button><br><button type="button"  style="margin-top:-18px; margin-bottom:7px"   onclick="borrarProducto('+row.id+');" style="margin: 8px 0px" class="buttonBorrar btn btn-danger">'+
            '<i class="fa fa-trash"></i><br></button>'+
            '<button type="button" onclick="sacarEtiqueta('+row.id+');" class="buttonBorrar btn btn-success">'+
            '<span class="fa fa-print"></span></button></div>';
          },
        },
      ],

      paging: true,
      searching: true,
      scrollY: "500px",
      info: true,
      responsive: false,
      order: [2, "desc"]

    });

    $("table.dataTable thead").addClass("table-success")

     //Enumerar las filas "index column"
     table.on( 'order.dt search.dt', function () {
        table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;

      } );
    } ).draw();



});

function agregarProducto() {

  Swal.fire({
    title: "Agregar producto nuevo",
    html: '<form class="mt-4" id="agregar-producto">'+
    '<div class="row">'+

       '<div class="col-6">'+
       '<div class="form-group">'+
       '<label><b>Marca:</b></label></br>'+
       '<select class="form-control" id="marca" name="marca"></select>'+
          '</div>'+
          '</div>'+


       '<div class="col-6">'+
       '<div class="form-group">'+
       '<label><b>Modelo:</b></label></br>'+
       '<input type="text" class="form-control" id="modelo" name="modelo" placeholder="Modelo">'+
          '</div>'+
          '</div>'+
       '</div>'+

    '<div class="row">'+

        '<div class="col-6">'+
        '<div class="form-group">'+
        '<label><b>Categoria</b></label>'+
        '<input type="text" class="form-control" id="categoria" name="categoria" placeholder="Categoria">'+
        '</div>'+
        '</div>'+


    '<div class="col-6">'+
        '<div class="form-group">'+
            '<label><b>Cantidad</b></label>'+
            '<input type="number" class="form-control" placeholder="cantidad" name="cantidad" id="cantidad" >'+
        '</div>'+
    '</div>'+






    '</div>'+

    '<div class="row">'+
        '<div class="col-4">'+
            '<div class="form-group">'+
                '<label><b>Costo</b></label>'+
                '<input type="number" class="form-control" id="costo" name="costo" placeholder="0.00">'+
            '</div>'+
        '</div>'+
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
  '<div class="col-12">'+
        '<div class="form-group">'+
        '<label><b>Imagen del producto</b></label>'+
        '<div class="custom-file">'+
         '<input type="hidden" name="MAX_FILE_SIZE" value="2000000" />'+
         '<input style="cursor:pointer;" class="form-control custom-file-input" type="file" name="imagen" id="imagen" />'+
         '<label class="custom-file-label" for="validatedCustomFile">Elegir imagen...</label>'+
       '</div>'+
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
    didOpen: function () {

        $(document).ready(function() {


            $('#marca').select2({
                placeholder: "Selecciona una marca",
                theme: "bootstrap",
                minimumInputLength: 1,
                ajax: {
                    url: "../servidor/inventario/traer-marca.php",
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
                        return "Busca la llanta...";
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
                  "<div class='select2-result-repository clearfix'>" +
                  "<div class='select2-contenedor-principal'>" +
                  "<div class='select2-result-repository__avatar'><img style='width: 50px; border-radius: 6px' src='../../vistas/dist/img/ERP/marcas/" + repo.imagen + ".jpg' /></div>" +
                    "<div class='select2-contenedor'>" +
                    "<div class='select2_marca' marca='"+ repo.imagen +"'></div>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );

                $container.find(".select2_marca").text(repo.nombre);

                return $container;
              }



              function formatRepoSelection (repo) {
                return repo.imagen || repo.text;
              }





        });
    } ,
    showLoaderOnConfirm: true,
    preConfirm: (respuesta) =>{

      data = {
        "marca":          $("#select2-marca-container").text(),
        "categoria":      $("#categoria").val(),
        "cantidad":       $("#cantidad").val(),
        "costo":          $("#costo").val(),
        "precio":         $("#precio").val(),
        "clavesat":       $("#sat").val(),
        "modelo":         $("#modelo").val(),
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
      }else if(data["cantidad"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#cantidad").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece una cantidad`
        )
      }else if( data["cantidad"] <= 0){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#cantidad").addClass("border-danger");
        Swal.showValidationMessage(
          `La cantidad no puede ser 0 o negativa`
        )
      }else if( data["modelo"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#modelo").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece un modelo`
        )
      }else if(data["costo"] == ""){
        $(".datoVacio").removeClass("datoVacio");
        $(".border-danger").removeClass("border-danger");
        $("#costo").addClass("border-danger");
        Swal.showValidationMessage(
          `Establece el precio que te costó la llanta`
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

     var files = $('#imagen')[0].files[0];
     var form = $("#agregar-producto")[0];
     var datos = new FormData(form);
     datos.append("clase", tabla);
     marcas = $("#select2-marca-container").text();
     datos.append("marca", marcas);
     descripcion = $("#descripcion").val(),
     datos.append("descripcion", descripcion);

    /*data = {
      "marca":          $("#select2-marca-container").text(),
      "modelo":         $("#modelo").val(),
      "categoria":      $("#categoria").val(),
      "cantidad":       $("#cantidad").val(),
      "costo":          $("#costo").val(),
      "precio":         $("#precio").val(),
      "clavesat":       $("#sat").val(),
      "descripcion":    $("#descripcion").val(),
      "clase":          "computadoras_inv",
      "imagen":         $('#imagen')[0].files[0]
    };*/



    $.ajax({
      type: "POST",
      url: "../servidor/inventario/agregar-producto.php",
      data:datos,
      processData: false,  // tell jQuery not to process the data
      contentType: false,   // tell jQuery not to set contentType
      success: function(response) {
        if (response==11) {
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
          url: "../servidor/inventario/traer-producto.php",
          data: {"id": id, "tabla": tabla},
          dataType: "JSON",
          success: function (response) {
            Swal.fire({
              title: "Editar producto",
              html: '<form class="mt-4" id="editar-producto" novalidate>'+

              '<div class="row">'+

                 '<div class="col-6">'+
                 '<div class="form-group">'+
                 '<label><b>Marca:</b></label></br>'+
                 '<select class="form-control" id="marca" name="marca"></select>'+
                    '</div>'+
                    '</div>'+


                 '<div class="col-6">'+
                 '<div class="form-group">'+
                 '<label><b>Modelo:</b></label></br>'+
                 '<input type="text" class="form-control" value="'+ response.modelo+'" id="modelo" name="modelo">'+
                    '</div>'+
                    '</div>'+
                 '</div>'+

              '<div class="row">'+

                  '<div class="col-6">'+
                  '<div class="form-group">'+
                  '<label><b>Categoria</b></label>'+
                  '<input type="text" value="'+ response.categoria+'" class="form-control" id="categoria" name="categoria" placeholder="Categoria">'+
                  '</div>'+
                  '</div>'+


              '<div class="col-6">'+
                  '<div class="form-group">'+
                      '<label><b>Cantidad</b></label>'+
                      '<input type="number" class="form-control" value="'+ response.cantidad +'" placeholder="cantidad" name="cantidad" id="cantidad" >'+
                  '</div>'+
              '</div>'+






              '</div>'+

              '<div class="row">'+
                  '<div class="col-4">'+
                      '<div class="form-group">'+
                          '<label><b>Costo</b></label>'+
                          '<input type="number" class="form-control" id="costo" value="'+ response.costo +'" name="costo" placeholder="0.00">'+
                      '</div>'+
                  '</div>'+
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


                      $('#marca').select2({
                          placeholder: response.marca,
                          theme: "bootstrap",
                          minimumInputLength: 1,
                          ajax: {
                              url: "../servidor/inventario/traer-marca.php",
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
                                  return "Busca la llanta...";
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
                              "<div class='select2-result-repository clearfix'>" +
                              "<div class='select2-contenedor-principal'>" +
                              "<div class='select2-result-repository__avatar'><img style='width: 50px; border-radius: 6px' src='../../vistas/dist/img/ERP/marcas/" + repo.imagen + ".jpg' /></div>" +
                                "<div class='select2-contenedor'>" +
                                "<div class='select2_marca' marca='"+ repo.imagen +"'></div>" +
                                "</div>" +
                                "</div>" +
                                "</div>"
                          );

                          $container.find(".select2_marca").text(repo.nombre);



                          return $container;
                        }



                        function formatRepoSelection (repo) {
                          return repo.imagen || repo.text;
                        }

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
                  "marca":          $("#select2-marca-container").text(),
                  "costo":          $("#costo").val(),
                  "precio":         $("#precio").val(),
                  "mayorista":      $("#mayorista").val(),
                  "modelo":         $("#modelo").val(),
                  "categoria":      $("#categoria").val(),
                  "subcategoria":   $("#subcategoria").val(),
                  "descripcion":    $("#descripcion").val(),
                  "cantidad":       $("#cantidad").val(),
                  "clavesat":       $("#sat").val()

                };

                if(data["marca"] == "Selecciona una marca"){
                  /*const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })

                  Toast.fire({
                    icon: 'error',
                    title: 'Falta poner la marca'
                  })*/
                  $(".datoVacio").removeClass("datoVacio");
                  $(".select2-container").addClass("datoVacio");
                  Swal.showValidationMessage(
                    `Selecciona una marca`
                  )
                }else if( data["modelo"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#modelo").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece un modelo`
                  )
                }else if( $("#codigo").attr("valido") == "no"){

                  Swal.showValidationMessage(
                    `El codigo esta ocupado`
                  )
                }else if(data["costo"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#costo").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece el precio que te costó el producto`
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
                }else if(data["fecha"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#fecha").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece una fecha`
                  )
                }else if( data["cantidad"] == ""){
                  $(".datoVacio").removeClass("datoVacio");
                  $(".border-danger").removeClass("border-danger");
                  $("#cantidad").addClass("border-danger");
                  Swal.showValidationMessage(
                    `Establece una descripcion`
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
               marcas = $("#select2-marca-container").text();
               datos.append("marca", marcas);
               samecode = $("#codigo").attr("mismocode");
               datos.append("samecode", samecode);
               descripcion = $("#descripcion").val(),
               datos.append("descripcion", descripcion);
               datos.append("id", id);

              console.log(data["marca"]);

              $.ajax({
                type: "POST",
                url: "../servidor/inventario/actualizar-producto.php",
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
                     table.ajax.reload(null, false);
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
                url: "../servidor/inventario/borrar-producto.php",
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
                     table.ajax.reload(null, false);
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


function mostrarImagen(id){
 codigo = $("#"+id).attr("codigo");

 Swal.fire({
   icon: 'info',
   didOpen: function () {
     $("#change-image-product").on("click", function () {
      //alert("Se clickeo el producto" + id);
      document.getElementById('update-image').click();

    });

    $("#update-image").change(function(){

  if(this.files.lenght == 0){
    console.log("vacio");
  }else{

    var form = $("#update-image-form")[0];
    var datos = new FormData(form);
    datos.append("pre_id", id);
    datos.append("tabla", tabla);

     $.ajax({
       type: "POST",
       url: "../servidor/inventario/update-image-modal.php",
       data:datos,
       processData: false,  // tell jQuery not to process the data
       contentType: false,   // tell jQuery not to set contentType
       success: function(response) {
         $("#modal-img-product").attr("src","../../vistas/dist/img/ERP/temp/"+ response +".jpg"+"?"+Date.now());
       }
     });
  }
});

   },
   title: "Imagen del producto",
   html:'<div style="display:flex; flex-direction:column; justify-content: center; align-items:center;">' +

   '<img id="modal-img-product" src="../../vistas/dist/img/ERP/productos/'+ codigo +'.jpg" style="width: 260px; border-radius: 8px">'+
   '<div style="width:40%;" id="change-image-product" class="btn btn-success">Cambiar imagen '+
   ' <i class="fas ml  -2 fa-folder-open"></i>'+
    '<form id="update-image-form">'+
    '<input type="file" id="update-image" name="update-image" style="display:none;">'+
   '</form></div>'+
   '</div>',
   showCancelButton: true,
   cancelButtonText: 'Cancelar',
   cancelButtonColor: '#00e059',
   showConfirmButton: true,
   confirmButtonText: 'Cambiar',
   cancelButtonColor:'#ff764d',
   focusConfirm: false }).then((result) => {
     if(result.isConfirmed){

       var form = $("#update-image-form")[0];
       var datos = new FormData(form);
       datos.append("post_id", id);
       datos.append("tabla",tabla);

        $.ajax({
          type: "POST",
          url: "../servidor/inventario/update-image-modal.php",
          data:datos,
          processData: false,  // tell jQuery not to process the data
          contentType: false,   // tell jQuery not to set contentType
          success: function(response) {
          table.ajax.reload(null, false);
          }
        });

        //location.reload(null, false);

     }


   });
}

function sacarEtiqueta(id){
   window.open('../servidor/inventario/crear-etiqueta.php?tabla='+tabla+'&id='+ id, '_blank');
}
