function MostrarNuevaOrden() {
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

              $("#tienda-cliente").text("OXXO " + ponerTienda);
              $("#cr-input-modal").val(ponerCR);
              $("#select-mostrar-tienda").empty();
              $("#search-cr-container")
                .removeClass()
                .addClass("search-cr-container-hide");
            });
          },

          error: function (error) {
            alert("malo");
            $("#search-cr-container").removeClass(),
              addClass("search-cr-container-hide");
            console.log(error);
          },
        });
      }); //Fin de la peticion

    //Auto sugerencias de las tiendass

      i=0;
      $(document).keyup(function (e) {
        switch (e.which) {
          case 37: // left
            break;

          case 38: // up
            break;

          case 39: // right
            break;

          case 40: // down
            //hijos=Array($("#select-mostrar-tienda > li"));
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

      //Creando subcategorias
      var subcategoriaCol1 = $("#col-1");
      var subcategoriaCol2 = $("#col-2");

      var textareaNuevo =
        "<textarea class='form-control' id='textareaNueva-orden' placeholder='Escriba la solución'></textarea>";
      var areaSoluc = $("#area-solucion");

      datos = [
        "<input type='checkbox' class='mr-2 ml-2'>CPU<br>",
        "<input type='checkbox' class='mr-2 ml-2'>Scanner<br>",
        "<input type='checkbox' class='mr-2 ml-2'>Teclado<br>",
        "<input type='checkbox' class='mr-2 ml-2'>Pinpad",
      ];

      datos2 = [
        "<input type='checkbox' class='mr-2 ml-2'>POS<br>",
        "<input type='checkbox' class='mr-2 ml-2'>XPOS<br>",
        "<input type='checkbox' class='mr-2 ml-2'>Monitor<br>",
        "<input type='checkbox' class='mr-2 ml-2'>Servicio<br>",
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
              "<input type='checkbox' class='mr-2 ml-2'>Enlace<br>",
              "<input type='checkbox' class='mr-2 ml-2'>3G<br>",
              "<input type='checkbox' class='mr-2 ml-2'>4G<br>",
            ];

            VyD2 = [
              "<input type='checkbox' class='mr-2 ml-2'>Telefono<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Modem<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Servicio<br>",
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
              "<input type='checkbox' class='mr-2 ml-2'>Camaras<br>",
              "<input type='checkbox' class='mr-2 ml-2'>DVR<br>",
            ];

            var CCTV2 = [
              "<input type='checkbox' class='mr-2 ml-2'>Nas<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Servicio<br>",
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
              "<input type='checkbox' id='chboxMembrana' class='mr-2 ml-2'>Cambie membrana<br>";
            subcategoriaCol1.append(mt1);

            var chequeo = $("#chboxMembrana");
            chequeo.change(function () {
              if ($("#numeroMembrana").length) {
                $("#numeroMembrana").detach();
              } else {
                var pregunta =
                  "<input type='number' placeholder='Cuantas?' width='50' name='numeroMembrana' id='numeroMembrana' class='mr-2 mt-2 form-control ml-2'><br>";
                subcategoriaCol1.append(pregunta);
              }
            });

            break;

          case "Impresoras":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            impr1 = [
              "<input type='checkbox' class='mr-2 ml-2'>Targeta logica<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Cabezal<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Servicio<br>",
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
              "<input type='checkbox' class='mr-2 ml-2'>Dsico Duro<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Cable LTP1/USB<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Cable Espiral<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Patchord<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Teclado<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Modem",
            ];

            acc2 = [
              "<input type='checkbox' class='mr-2 ml-2'>Switch<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Memoria<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Membrana<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Energia<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Otros",
            ];

            subcategoriaCol1.append(acc1);
            subcategoriaCol2.append(acc2);

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
              "<input type='checkbox' class='mr-2 ml-2'>Instalación<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Redes<br>",
              "<input type='checkbox' class='mr-2 ml-2'>CCTV<br>",
              "<input type='checkbox' class='mr-2 ml-2'>CFE",
            ];

            imac2 = [
              "<input type='checkbox' class='mr-2 ml-2'>TI<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Renovación tecnologica<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Servicios<br>",
            ];

            subcategoriaCol1.append(imac);
            subcategoriaCol2.append(imac2);

            break;

          case "Refacciones":
            subcategoriaCol1.empty();
            subcategoriaCol2.empty();

            refac = [
              "<input type='checkbox' class='mr-2 ml-2'>Refacción para computadora<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Refaccioón para impresora<br>",
              "<input type='checkbox' class='mr-2 ml-2'>Accesorios<br>",
            ];

            subcategoriaCol1.append(refac);

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
