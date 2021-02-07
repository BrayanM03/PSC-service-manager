function MostrarNuevaOrden() {

  $('#titulo-categoria').html("");

  $.ajax({
    type: "POST",
    url: "./vistas/modulos/formularios/nueva-orden.php",
    data: "data",

    success: function (response) {
      $("#contenido-panel").html(response);

      $("#cr-input-modal").on("keyup", function () {
        var inputCR = $(this).val();
        var action = "mostrar tienda";

        //Peticion que muestra de forma async las existencia de las tiendas

        $.ajax({
          type: "post",
          url: "./controladores/mostrarTiendas.php",
          async: true,
          data: { action: action, entrada: inputCR },

          success: function (response) {
            $("#tienda-span").html(response);
          },

          error: function (error) {
            alert("malo");
            console.log(error);
          },
        });

        //Mostrar busqueda de cr o tienda en ventana flotante

        $.ajax({
          type: "post",
          url: "./controladores/mostrarTiendaVentana.php",
          async: true,
          data: { actions: action, entrada: inputCR },

          success: function (response2) {
            $("#select-mostrar-tienda").empty();

            try {
              jsonObject2 = JSON.parse(response2);
              var crArreglo = jsonObject2;
              if ($("#cr-input-modal").val().length == 0) {
                $("#select-mostrar-tienda").empty();
                $("#search-cr-container")
                  .removeClass() 
                  .addClass("search-cr-container-hide");
              } else {
                $.each(crArreglo, function (key, value) {
                  var resultadoResponse =
                    "<li class='estilos-li' cr='" +
                    value.cr +
                    "' tienda='" +
                    value.tienda +
                    "'><span style='margin-right:15px'><b>CR: </b> " +
                    value.cr +
                    "</span><span><b>TIENDA: </b>" +
                    value.tienda +
                    "</span></li>";
                  $("#select-mostrar-tienda").append(resultadoResponse);
                  $("#search-cr-container")
                    .removeClass()
                    .addClass("search-cr-container");
                });
              }
            } catch (error) {
              $("#select-mostrar-tienda").empty();
              $("#search-cr-container").removeClass();
            }

            //Colar el valor del cr seleccionado de la ventana en el input del cr

            $(".estilos-li").on("click", function () {
              ponerCR = $(this).attr("cr");
              ponerTienda = $(this).attr("tienda");

              $("#tienda-cliente").val("OXXO " + ponerTienda);
              $("#cr-input-modal").val(ponerCR);
              $("#select-mostrar-tienda").empty();
              $("#search-cr-container")
                .removeClass()
                .addClass("search-cr-container-hide");
            });
          },

          error: function (error) {
            alert("malo");
            $("#search-cr-container").removeClass().fadeOut(),
              addClass("search-cr-container-hide");
            console.log(error);
          },
        });
      }); //Fin de la peticion

      //Auto sugerencias de las tiendas

      i = 0;
      $(document).keyup(function (e) {
        switch (e.which) {
          case 37: // left
            break;

          case 38: // up
            break;

          case 39: // right
            break;

          case 40: // down
            hijos = Array($("#select-mostrar-tienda").children());

            cantidad = hijos[0].length;
            cantidad2 = hijos[0].length - 1;
            total = cantidad - cantidad2;

            i++;

            console.log(i);
            $(".estilos-li").each(function (index) {
              switch (index) {
                case 0:
                  $(this).addClass("estilos-li-keydown");

                  break;

                default:
                  break;
              }
              //console.log(index);
            });

            break;

          default:
            return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
      });

      //Implementando nice select
      $("select").niceSelect();

      //Creando subcategorias
      var subcategoriaCol1 = $("#col-1");
      var subcategoriaCol2 = $("#col-2");

      var textareaNuevo =
        "<textarea class='form-control' name='solucion-nueva-orden' id='textareaNueva-orden' placeholder='Escriba la solución'></textarea>";
      var areaSoluc = $("#area-solucion");

      datos = [
        "<input type='radio' name='chboxNuevaOrden' value='cpu' class='mr-2 ml-2'>CPU<br>",
        "<input type='radio' name='chboxNuevaOrden' value='scaner' class='mr-2 ml-2'>Scanner<br>",
        "<input type='radio' name='chboxNuevaOrden' value='teclado' class='mr-2 ml-2'>Teclado<br>",
        "<input type='radio' name='chboxNuevaOrden' value='pinpad' class='mr-2 ml-2'>Pinpad",
      ];

      datos2 = [
        "<input type='radio' name='chboxNuevaOrden' value='pos' class='mr-2 ml-2'>POS<br>",
        "<input type='radio' name='chboxNuevaOrden' value='xpos' class='mr-2 ml-2'>XPOS<br>",
        "<input type='radio' name='chboxNuevaOrden' value='monitor' class='mr-2 ml-2'>Monitor<br>",
        "<input type='radio' name='chboxNuevaOrden' value='servicio' class='mr-2 ml-2'>Servicio<br>",
      ];

      subcategoriaCol1.append(datos);
      subcategoriaCol2.append(datos2);

      $("#optionsNuevaOrden").change(function () {
        var opcion = $("#optionsNuevaOrden option:selected").val();

        switch (opcion) {
          case "Computadora":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();
            subcategoriaCol1.append(datos);
            subcategoriaCol2.append(datos2);

            if ($("#textareaNueva-orden").length) {
              //alert('Existe el elemento texarea');
            } else {
              //alert('No existe el elemento textarea');
              areaSoluc.append(textareaNuevo);
            }

            break;

          case "Voz y Datos":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            VyD1 = [
              "<input type='radio'  name='chboxNuevaOrden' value='Enlace' class='mr-2 ml-2'>Enlace<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='3G' class='mr-2 ml-2'>3G<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='4G' class='mr-2 ml-2'>4G<br>",
            ];

            VyD2 = [
              "<input type='radio'  name='chboxNuevaOrden' value='Telefono' class='mr-2 ml-2'>Telefono<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Modem' class='mr-2 ml-2'>Modem<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Servicio' class='mr-2 ml-2'>Servicio<br>",
            ];

            subcategoriaCol1.append(VyD1);
            subcategoriaCol2.append(VyD2);

            if ($("#textareaNueva-orden").length) {
              //alert('Existe el elemento texarea');
            } else {
              //alert('No existe el elemento textarea');
              areaSoluc.append(textareaNuevo);
            }

            break;

          case "CCTV":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            var CCTV1 = [
              "<input type='radio'  name='chboxNuevaOrden' value='Camaras' class='mr-2 ml-2'>Camaras<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='DVR' class='mr-2 ml-2'>DVR<br>",
            ];

            var CCTV2 = [
              "<input type='radio'  name='chboxNuevaOrden' value='Nas' class='mr-2 ml-2'>Nas<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Servicio' class='mr-2 ml-2'>Servicio<br>",
            ];

            subcategoriaCol1.append(CCTV1);
            subcategoriaCol2.append(CCTV2);

            if ($("#textareaNueva-orden").length) {
              //alert('Existe el elemento texarea');
            } else {
              //alert('No existe el elemento textarea');
              areaSoluc.append(textareaNuevo);
            }

            break;

          case "Mantenimiento":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();
            $("#textareaNueva-orden").detach();

            var mt1 =
              "<input type='radio' id='chboxMembrana' name='chboxMembrana' value='Membrana' class='mr-2 ml-2'>Se cambio membrana<br>";
           // var mt2 =
              //"<input type='checkbox' id='chboxMto' name='chboxMto' value='Mantenimiento POS' class='mr-2 ml-2'>Incluir mantenimiento a equipos<br>";
            //var mt3 =
            //  "<input type='checkbox' id='chboxCctv' name='chboxCctv' value='Mantenimiento CCTV' class='mr-2 ml-2'>Incluir mantenimiento a CCTV<br>";

            subcategoriaCol1.append(mt1);
            

            /*var chequeo = $("#chboxMembrana");    //----Esta porcion de codigo solo activar cuando se decida incluir numero de membranas
            chequeo.change(function () {
              if ($("#numeroMembrana").length) {
                $("#numeroMembrana").detach();
              } else {
                var pregunta =
                  "<input type='number' placeholder='Cuantas?' width='50' name='numeroMembrana' id='numeroMembrana' class='mr-2 mt-2 form-control ml-2'><br>";
                subcategoriaCol1.append(pregunta);
              }
            });*/

            break;

          case "Impresoras":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            impr1 = [
              "<input type='radio'  name='chboxNuevaOrden' value='Targeta logica' class='mr-2 ml-2'>Targeta logica<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Cabezal' class='mr-2 ml-2'>Cabezal<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Servicio' class='mr-2 ml-2'>Servicio<br>",
            ];

            subcategoriaCol1.append(impr1);

            if ($("#textareaNueva-orden").length) {
              //alert('Existe el elemento texarea');
            } else {
              //alert('No existe el elemento textarea');
              areaSoluc.append(textareaNuevo);
            }

            break;

          case "Accesorios":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            acc1 = [
              "<input type='radio'  name='chboxNuevaOrden' value='Disco Duro' class='chckbox-acc mr-2 ml-2'>Disco Duro<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Cable LTP1/USB' class='chckbox-acc mr-2 ml-2'>Cable LTP1/USB<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Cable Espiral' class='chckbox-acc mr-2 ml-2'>Cable Espiral<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Patchord' class='chckbox-acc mr-2 ml-2'>Patchord<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Teclado' class='chckbox-acc mr-2 ml-2'>Teclado<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Modem' class='chckbox-acc mr-2 ml-2'>Modem",
            ];

            acc2 = [
              "<input type='radio'  name='chboxNuevaOrden' value='Switch' class='chckbox-acc mr-2 ml-2'>Switch<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Memoria' class='chckbox-acc mr-2 ml-2'>Memoria<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Membrana' class='chckbox-acc mr-2 ml-2'>Membrana<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Energia' class='chckbox-acc mr-2 ml-2'>Energia<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Otros' class='chckbox-acc mr-2 ml-2'>Otros",
            ];

            subcategoriaCol1.append(acc1);
            subcategoriaCol2.append(acc2);

             var chequeo = $(".chckbox-acc");    //----Esta porcion de codigo solo activar cuando se decida incluir numero de membranas
             flag=0;
            chequeo.change(function () {
              
              if(flag ==0){
                
                var pregunta =
                "<input type='number' placeholder='Cantidad' width='50' name='cantAcc' id='numeroacc' class='mr-2 mt-2 form-control ml-2'>";
                subcategoriaCol1.append(pregunta);
                flag =1;
                
              }if(flag == 1){
                $('#numeroacc').remove();
                var pregunta =
                "<input type='number' placeholder='Cantidad' width='50' name='cantAcc' id='numeroacc' class='mr-2 mt-2 form-control ml-2'>";
                subcategoriaCol1.append(pregunta);
                flag=1;


              }
             
                  
            

            });

            if ($("#textareaNueva-orden").length) {
              //alert('Existe el elemento texarea');
            } else {
              //alert('No existe el elemento textarea');
              areaSoluc.append(textareaNuevo);
            }

            break;

          case "IMAC":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            imac = [
              "<input type='radio'  name='chboxNuevaOrden' value='Instalación' class='mr-2 ml-2'>Instalación<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Redes' class='mr-2 ml-2'>Redes<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='CCTV' class='mr-2 ml-2'>CCTV<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='CFE' class='mr-2 ml-2'>CFE",
            ];

            imac2 = [
              "<input type='radio'  name='chboxNuevaOrden' value='TI' class='mr-2 ml-2'>TI<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Renovación tecnologica' class='mr-2 ml-2'>Renovación tecnologica<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Servicios' class='mr-2 ml-2'>Servicios<br>",
            ];

            subcategoriaCol1.append(imac);
            subcategoriaCol2.append(imac2);

            

            break;

          case "Refacciones":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            refac = [
              "<input type='radio'  name='chboxNuevaOrden' value='Refacción para computadora' class='mr-2 ml-2'>Refacción para computadora<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Refacción para impresora' class='mr-2 ml-2'>Refacción para impresora<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Accesorios' class='mr-2 ml-2'>Accesorios<br>",
            ];

            subcategoriaCol1.append(refac);

            if ($("#textareaNueva-orden").length) {
              //alert('Existe el elemento texarea');
            } else {
              //alert('No existe el elemento textarea');
              areaSoluc.append(textareaNuevo);
            }

            break;

            case "Renovacion":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            refac = [
              "<input type='radio'  name='chboxNuevaOrden' value='CPU' class='chckbox-ren mr-2 ml-2'>CPU<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Impresora' class='chckbox-ren mr-2 ml-2'>Impresora<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Escáner' class='chckbox-ren mr-2 ml-2'>Escáner<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Router' class='chckbox-ren mr-2 ml-2'>Router<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Switch' class='chckbox-ren mr-2 ml-2'>Switch<br>",
              "<input type='radio'  name='chboxNuevaOrden' value='Otros' class='chckbox-ren mr-2 ml-2'>Otros<br>",
            ];

            subcategoriaCol1.append(refac);

            
            var chequeo = $(".chckbox-ren");    //----Esta porcion de codigo solo activar cuando se decida incluir numero de membranas
            flag=0;
           chequeo.change(function () {
             
             if(flag ==0){
               
               var pregunta =
               "<input type='number' placeholder='Cantidad' width='50' name='cantRen' id='cantRen' class='mr-2 mt-2 form-control ml-2'>";
               subcategoriaCol1.append(pregunta);
               flag =1;
               
             }if(flag == 1){
               $('#cantRen').remove();
               var pregunta =
               "<input type='number' placeholder='Cantidad' width='50' name='cantRen' id='cantRen' class='mr-2 mt-2 form-control ml-2'>";
               subcategoriaCol1.append(pregunta);
               flag=1;


             }
            
                 
           

           });

            

            if ($("#textareaNueva-orden").length) {
              //alert('Existe el elemento texarea');
            } else {
              //alert('No existe el elemento textarea');
              areaSoluc.append(textareaNuevo);
            }

            break;


          default:
            subcategoriaCol1.empty(datos);
            subcategoriaCol2.empty(datos2);

            break;
        }

        console.log(opcion);
      });
    },
  });
}

//Esta funcion enviara la información del formulario por ajax a un php que procesara y hara la consulta a la base de datos.

function insertarNuevaOrden() {
  $.ajax({
    method: "POST",
    url: "./modelo/insertarNuevaOrden.php",
    data: $("#formulario-nueva-orden").serialize(),

    success: function (response) {
      response = response.trim();

      if (response == 1) {
        $("#form_register").trigger("reset");
        Swal.fire(":D", "¡Registrado correctamente!", "success");
      } else if (response == 2) {
        Swal.fire("D:", "¡Algo salio mal!", "warning");
      } else if (response == 3) {
        Swal.fire(":u", "Introduce el CR de la tienda", "warning");
      }else if (response == 5) {
        Swal.fire(":c", "Selecciona una subcategoria", "warning");
      }else {
        Swal.fire("):", "¡Error!", "error");
      }
    },
  });
}
