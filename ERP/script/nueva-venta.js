
const inputs = document.querySelectorAll(".input-group");
const selects = document.querySelectorAll(".select-group");


inputs.forEach( input => {

    input.onfocus = function(){
        input.previousElementSibling.classList.add('top');
        input.previousElementSibling.classList.add('focus');
        input.parentNode.classList.add('focus');
    }


    input.onblur = function(){
        input.value = input.value.trim();
        if (input.value.trim().length == 0) {
            input.previousElementSibling.classList.remove('top');
        }

        input.previousElementSibling.classList.remove('focus');
        input.parentNode.classList.remove('focus');
    }
});


selects.forEach( select => {

    select.onfocus = function(){
        select.previousElementSibling.classList.add('top');
        select.previousElementSibling.classList.add('focus');
        select.parentNode.classList.add('focus');
    }


    select.onblur = function(){

      var indice = select.selectedIndex;

        if (indice == 0) {
            select.previousElementSibling.classList.remove('top');
            select.previousElementSibling.classList.remove('focus');
            select.parentNode.classList.remove('focus');
        }else{
            select.previousElementSibling.classList.remove('focus');
        select.parentNode.classList.remove('focus');

        }
    }


});



    function buscar() {
        var inAncho = $("#search");
            inAncho.keyup(function () {
            var codigo = $(this).val();

            entrada="et"

            inputSearch = $("#search").val();
            $(".tbody").empty();

            $.ajax({
                type: "post",
                url: "../servidor/buscar_productos.php",
                async: true,
                data: {entrada: entrada, codigo: codigo},
                success: function (response) {



                    try {
                        var jsonObject = JSON.parse(response);
                        var Anchos = jsonObject;


                    if(inputSearch.length == 0){
                        $(".tbody").empty();
                        contenedorLista = $(".contenedor-tabla");
                        contenedorLista.addClass("oculto");

                    }else{
                        $.each(Anchos, function(key, value) {

                            contenedorTabla = $(".contenedor-tabla");

                             tablaBusqueda = $(".tbody");

                                tablaBusqueda.append(

                                       "<tr class='producto-individual' "+
                                       "id='"+value.id + "' "+
                                       "cod='"+value.Codigo + "' "+
                                       "descripcion='"+value.Descripcion + "' " +
                                       "modelo='"+value.Modelo + "'"  +
                                       "precio-venta='"+value.precio_Venta + "' " +
                                       "precio-mayoreo='"+value.precio_Mayoreo + "' "  +
                                       "marca='"+value.Marca + "'"  +
                                       "sucursal='"+value.Sucursal + "' "  +
                                       "stock='"+value.Stock +
                                       "'>"+
                                       "<td>" + value.codigo + "</td>" +
                                       "<td>" + value.descripcion + "</td>" +
                                       "<td><img class='logo-marca' marca='"+ value.marca + "' src='../../vistas/dist/img/ERP/marcas/" + value.marca + ".jpg'>" + value.marca + "</td>" +
                                       "<td>$" + value.precio + "</td>" +
                                       "<td>" + value.stock + "</td>" +
                                       "<td class='cont-marca'><img class='logo-marca' marca='"+ value.codigo + "' src='../../vistas/dist/img/ERP/productos/" + value.codigo + ".jpg'>"+
                                       "<td>" + value.subcategoria + "</td>");

                                       contenedorTabla.removeClass("oculto");

                          });

                          //Obtener datos de fila clickeada

                          $(".producto-individual").on("click", function () {

                            id1              = $(this).attr("id");
                            cod1              = $(this).attr("cod");
                            descripcion1     = $(this).attr("descripcion");
                            modelo1          = $(this).attr("modelo");
                            precio_Venta1    = $(this).attr("precio-venta");
                            precio_Mayoreo1  = $(this).attr("precio-mayoreo");
                            marca1           = $(this).attr("marca");
                            sucursal1        = $(this).attr("sucursal");
                            stock1           = $(this).attr("stock");

                            $("#description").focus().val(descripcion1);
                            $("#modelo").focus().val(modelo1);
                            $("#precio").focus().val(precio_Venta1);

                            $("#agregar-producto").attr("idLlanta", id1);
                            $("#agregar-producto").attr("stock", stock1);
                            $("#agregar-producto").attr("codigo", cod1);
                            contenedorTabla.addClass("oculto");


                            if(sucursal1 == "Sendero"){
                                select = $("#sucursal");
                                select.focus().val(1).blur();

                            }else{

                                select = $("#sucursal");
                                select.focus().val(0).blur();
                            }



                            var cuadro = document.getElementsByClassName("logo-marca-grande")[0];

                            cuadro.style.backgroundImage = "url('src/img/logos/"+ marca1 +".jpg')";

                            inAncho.focus().val("");
                            inAncho.blur();
                            $("#modelo").blur();
                            $("#description").blur();
                            $("#precio").blur();
                        });
                    }




                    } catch (error) {
                        $(".tbody").empty();
                        contenedorLista = $(".contenedor-tabla");
                        contenedorLista.addClass("oculto");
                        console.log("No se encontro llanta en el inventario de la Pedro Cardenas");
                    }





                }
            }); //Termina la llamada AJAX para la sucursal 1


        });
      }

      buscar();

      function limpiarTabla(){



        if ( !table.data().any()){

            toastr.warning('La tabla ya esta vaciada', 'Tabla limpia' );
        }else{

            table.clear().draw();
            $("#total").val(0.00);
            toastr.success('Tabla fue vaciada ', 'Listo' );


        }
        //$(".tbody").empty();
      }



      function realizarVenta(){



        if ( !table.data().any()){

            toastr.warning('La tabla no tiene productos', 'Sin productos' );
        }else{
            //Iterando datos de la tabla de venta
            arregloCodigo = [];
            table.column(0).data().each( function ( value, index ) {
                        arregloCodigo.push(value);
                    } );

            arregloDescripcion = [];
            table.column(1).data().each( function ( value, index ) {
                        arregloDescripcion.push(value);
                    } );

            arregloModelo = [];
            table.column(2).data().each( function ( value, index ) {
                        arregloModelo.push(value);
                   } );

           arregloCantidad = [];
           table.column(3).data().each( function ( value, index ) {
                        arregloCantidad.push(value);
                  } );

            console.log(arregloCodigo);
            console.log(arregloDescripcion);
            console.log(arregloModelo);
            console.log(arregloCantidad);
            total = $("#total").val();
            fecha = $("#fecha").val();
            console.log("El total es " + total);


            if(fecha == 0){

                const fecha_sistema = new Date();
                console.log("No se definio una fecha, la fecha del sistema es: " + fecha_sistema);

            }else{
                console.log("Se definio una fecha");
                console.log("El fecha es " + fecha);
            }




            //Enviando data



            $.ajax({
                type: "POST",
                url: "./modelo/ventas/insertar-venta.php",
                data: {'codigos':       JSON.stringify(arregloCodigo),
                       'descripciones': JSON.stringify(arregloDescripcion),
                       'modelos':       JSON.stringify(arregloModelo),
                       'cantidades':    JSON.stringify(arregloCantidad),
                       'fecha': fecha,
                       'total': total},
                dataType: "JSON",
                success: function (response) {
                    console.log(response);
                }
            });



            Swal.fire({
                title: 'Venta realizada',
                html: "<span>La venta se realizo con exito</span>",
                icon: "success",
                cancelButtonColor: '#00e059',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                cancelButtonColor:'#ff764d',
                showDenyButton: true,
                denyButtonText: 'Reporte'
            },

              ).then((result) =>{

                if(result.isConfirmed){
                   //location.reload();

                   table.clear().draw();
                   $("#total").val(0.00);
                }else if(result.isDenied){

                    //window.open('./modelo/generar-reporte-venta.php', '_blank');

                    table.clear().draw();
                    $("#total").val(0.00);

                }

                table.clear().draw();
                    $("#total").val(0.00);
                });


        }
        //$(".tbody").empty();
      }
