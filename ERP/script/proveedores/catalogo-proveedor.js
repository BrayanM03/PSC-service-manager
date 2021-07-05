


    function traerProducto(){

      codigo = $("#codigo-prov").val();
      metodo = $("#metodo-busqueda").val();
      tipo = typeof(metodo);
      console.log(tipo);

      switch (metodo) {
        case "0":

        $.ajax({
            method: "GET",
            url: "https://www.grupocva.com/catalogo_clientes_xml/lista_precios.xml?cliente=37442&marca=%25&grupo=%25&clave="+ codigo +"&TipoCompra=1&tc=1&MonedaPesos=1",
            data: "data",
            success: function (response) {
                elements = response.getElementsByTagName("item").length;
                if(elements >=1){

                  $("#testing").remove();
                  $("#father-test").append('<div id="testing"></div>')
                  //$("#testing").removeClass();

                  $(response).find('articulos').each(function(){
                        $(this).find("item").each(function(){

                            var descripcion =  $(this).find("descripcion").text();
                            var clave =  $(this).find("clave").text();
                            var cod_fabricante =  $(this).find("codigo_fabricante").text();
                            var grupo =  $(this).find("grupo").text();
                            var marca =  $(this).find("marca").text();
                            var disponible_cd =  $(this).find("disponibleCD").text();
                            var precio =  $(this).find("precio").text();
                            var imagen =  $(this).find("imagen").text();
                           var moneda =  $(this).find("moneda").text();

                             $("#cod_fab").text(cod_fabricante);
                             $("#descripcion").text(descripcion);
                             $("#grupo").text(grupo);
                             $("#clave").text(clave);
                             $("#marca").text(marca);
                             $("#disponible").text(disponible_cd);
                             $("#badge-precio").text("$"+ precio + " MXN");




                           $.ajax({
                             method: "GET",
                             url: "http://www.grupocva.com/catalogo_clientes_xml/imagenes_alta.xml?cliente=37442&clave="+ codigo +"",
                             data: "data",
                             success: function (response) {
                               $(response).find('producto').each(function(){
                                     $(this).find("imagen").each(function(){
                                       imagenes = $(this).text();

                                       //$(".targeta-producto").append('<img class="img-product" src="'+ imagenes +'"></img>');
                                      $("#testing").append('<div class="item"><img class="d-block w-100" src="'+ imagenes +'" alt="Second slide"></div>');


                                     })
                                  });

                                      $("#testing").addClass("owl-carousel");
                                      $("#testing").addClass("owl-theme");

                                      $("#testing").owlCarousel({
                                      loop:true,
                                      margin:10,
                                      nav:true,
                                      center: true,
                                      autoWidth:true,
                                      responsive:{
                                      0:{
                                          items:1
                                      },
                                      600:{
                                          items:3
                                      },
                                      1000:{
                                          items:1
                                      }
                                      }
                                });




                             }

                           });//Fin llamada ajax de img de alta calidad

                        });
                    });
                }else {
                  Swal.fire(
                  "¡No se encontro el producto!",
                  "No pude encontrar tu producto, revisa que la clave del proveedor este bien escrita",
                  "error")
                }

            }

          });
        break;

        case "1":

         $.ajax({
            method: "GET",
            url: "https://www.grupocva.com/catalogo_clientes_xml/lista_precios.xml?cliente=37442&marca=%25&grupo=%25&codigo="+ codigo +"&TipoCompra=1&tc=1&MonedaPesos=1",
            data: "data",
            success: function (response) {

              elements = response.getElementsByTagName("item").length;
              if(elements >= 1){
                $("#testing").remove();
                $("#father-test").append('<div id="testing"></div>')
                //$("#testing").removeClass();

                $(response).find('articulos').each(function(){
                      $(this).find("item").each(function(){

                          var descripcion =  $(this).find("descripcion").text();
                          var clave =  $(this).find("clave").text();
                          var cod_fabricante =  $(this).find("codigo_fabricante").text();
                          var grupo =  $(this).find("grupo").text();
                          var marca =  $(this).find("marca").text();
                          var disponible_cd =  $(this).find("disponibleCD").text();
                          var precio =  $(this).find("precio").text();
                          var imagen =  $(this).find("imagen").text();
                         var moneda =  $(this).find("moneda").text();

                           $("#cod_fab").text(cod_fabricante);
                           $("#descripcion").text(descripcion);
                           $("#grupo").text(grupo);
                           $("#clave").text(clave);
                           $("#marca").text(marca);
                           $("#disponible").text(disponible_cd);
                           $("#badge-precio").text("$"+ precio + " MXN");




                         $.ajax({
                           method: "GET",
                           url: "http://www.grupocva.com/catalogo_clientes_xml/imagenes_alta.xml?cliente=37442&clave="+ clave +"",
                           data: "data",
                           success: function (response) {
                             $(response).find('producto').each(function(){
                                   $(this).find("imagen").each(function(){
                                     imagenes = $(this).text();

                                     //$(".targeta-producto").append('<img class="img-product" src="'+ imagenes +'"></img>');
                                    $("#testing").append('<div class="item"><img class="d-block w-100" src="'+ imagenes +'" alt="Second slide"></div>');


                                   })
                                });

                                    $("#testing").addClass("owl-carousel");
                                    $("#testing").addClass("owl-theme");

                                    $("#testing").owlCarousel({
                                    loop:true,
                                    margin:10,
                                    nav:true,
                                    center: true,
                                    autoWidth:true,
                                    responsive:{
                                    0:{
                                        items:1
                                    },
                                    600:{
                                        items:3
                                    },
                                    1000:{
                                        items:1
                                    }
                                    }
                              });
                           }
                         });//Fin llamada ajax de img de alta calidad
                      });
                  });

              }else{
                Swal.fire(
                "¡No se encontro el producto!",
                "No pude encontrar tu producto, revisa que el codigo del fabricante este bien escrito",
                "error"
              );
              }

              }

            });
        break;

        case "2":
        $.ajax({
           method: "GET",
           url: "https://www.grupocva.com/catalogo_clientes_xml/lista_precios.xml?cliente=37442&marca=%25&grupo=%25&marca="+ codigo +"&TipoCompra=1&tc=1&MonedaPesos=1",
           data: "data",
           success: function (response) {

             elements = response.getElementsByTagName("item").length;
             if(elements >= 1){
               $("#targeta-producto").empty();
               $("#targeta-producto").html('<table id="tabla-result-marca" class="table table-bordered">'+
               '<thead class="thead-dark"><tr>'+
               '<td>Clave</td>'+
               '<td>Descripcion</td>'+
               '<td>Precio</td>'+
               '</tr>'+
               '</thead>'+
               '<tbody id="body-marcas" style="background: white;"></tbody>'+
               '</table>'
            );
               /*$("#testing").remove();
               $("#father-test").append('<div id="testing"></div>');*/

               //$("#testing").removeClass();

               $(response).find('articulos').each(function(){
                     $(this).find("item").each(function(){

                         var descripcion =  $(this).find("descripcion").text();
                         var clave =  $(this).find("clave").text();
                         var cod_fabricante =  $(this).find("codigo_fabricante").text();
                         var grupo =  $(this).find("grupo").text();
                         var marca =  $(this).find("marca").text();
                         var disponible_cd =  $(this).find("disponibleCD").text();
                         var precio =  $(this).find("precio").text();
                         var imagen =  $(this).find("imagen").text();
                         var moneda =  $(this).find("moneda").text();

                        $("#body-marcas").append("<tr>"+
                        "<td>"+clave+"</td>"+
                        "<td>"+descripcion+"</td>"+
                        "<td>"+precio+"</td></tr>");




                      /*  $.ajax({
                          method: "GET",
                          url: "http://www.grupocva.com/catalogo_clientes_xml/imagenes_alta.xml?cliente=37442&clave="+ clave +"",
                          data: "data",
                          success: function (response) {
                            $(response).find('producto').each(function(){
                                  $(this).find("imagen").each(function(){
                                    imagenes = $(this).text();

                                    //$(".targeta-producto").append('<img class="img-product" src="'+ imagenes +'"></img>');
                                   $("#testing").append('<div class="item"><img class="d-block w-100" src="'+ imagenes +'" alt="Second slide"></div>');


                                  })
                               });

                                   $("#testing").addClass("owl-carousel");
                                   $("#testing").addClass("owl-theme");

                                   $("#testing").owlCarousel({
                                   loop:true,
                                   margin:10,
                                   nav:true,
                                   center: true,
                                   autoWidth:true,
                                   responsive:{
                                   0:{
                                       items:1
                                   },
                                   600:{
                                       items:3
                                   },
                                   1000:{
                                       items:1
                                   }
                                   }
                             });
                          }
                        });*/
                     });
                 });

                 $("#tabla-result-marca").DataTable({
                   paging: true,
                   searching: true,
                   scrollY: "600px",
                   info: true,
                   responsive: true,
                 });

             }else{
               Swal.fire(
               "¡No se encontro el producto!",
               "No pude encontrar tu producto, revisa que el codigo del fabricante este bien escrito",
               "error"
             );
             }

             }

           });
        break;
        default:

      }





    }
