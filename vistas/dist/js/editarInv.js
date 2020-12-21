var editarInv = function (tbody, table ) { 
    

    $(tbody).on("click", "button.buttonEditarTiendas", function(){
      
      roww             = $(this).closest("tr");
      fila             = table.row(roww).data();  //Computadora 
      
      filaM            = table.row(this).data();  //Tablet, movil, etc
  
      if(fila !== undefined){
      id              = fila.id;
      cr              = fila.cr;
      tienda          = fila.tienda;
      fecha           = fila.fecha;
      folio           = fila.folio;
      subcategoria       = fila.subcat;
      estatus         = fila.estatus
      solucion        = fila.solucion;
      mes             = fila.mes;
      usuario         = fila.usuario;
      }else{
      
      id              = filaM.id;
      cr              = filaM.cr;
      tienda          = filaM.tienda;
      fecha           = filaM.fecha;
      folio           = filaM.folio;
      subcategoria       = filaM.subcat;
      estatus         = filaM.estatus
      solucion        = filaM.solucion;
      mes             = filaM.mes;
      usuario         = filaM.usuario;
  
      }

      cate =  $('#titulo-categoria').attr("categoria");
        
      
    

      Swal.fire({
        title: "Editar Inventario",
        width:"76rem",
        html: '<form class="mt-4" id="formulario-editar-registro">'+

        '<div class="row">'+
        '<div class="col-3">'+
        '<div class="form-group">'+
        '<label><b>ID:</b></label></br>'+
        '<input class="form-control " value="'+id+'" name="id-input-inv" readonly>'+
           '</div>'+
           '</div>'+
           '<div class="col-3">'+
           '<div class="form-group">'+
           '<label><b>CR:</b></label></br>'+
           '<input class="form-control " value="'+cr+'" name="cr-input-inv" readonly>'+
              '</div>'+
              '</div>'+
              '<div class="col-6">'+
           '<div class="form-group">'+
           '<label><b>Tienda:</b></label></br>'+
           '<input class="form-control " value="'+tienda+'" name="tienda-input-inv" readonly>'+
              '</div>'+
              '</div>'+
           '</div>'+


           '<div class="col-6" style="margin-left:25%; ">'+
           '<select class="form-control" name="inv-categorias" id="inv-categorias">'+
           '<option id="op_procesos" value="procesos">Caja Procesos</option>'+
           '<option id="op_ventas1" value="ventas1">Caja Ventas 1</option>'+
           '<option id="op_ventas2" value="ventas2">Caja Ventas 2</option>'+
           '<option id="op_ventas3" value="ventas3">Caja Ventas 3</option>'+
           '<option id="op_enlace" value="enlace">Telefono y Site</option>'+
           '<option id="op_cctv" value="cctv">CCTV</option>'+
           '</select>'+
           '</div>'+



           //Formularios de inventario
           '<div class="row">'+
           
           //Card 1
           
           '<div class="card " style="margin: 2vh;">'+
           '<div class="card-header" style="background: #f8f32b;"><h5>CPU</h5></div>'+
           '<div class="card-body" style="background: #fcf75e;">'+
           
           //Titulo card

          

        

           '<div class="row">'+
           '<div class="col-11">'+
           '<p>Modelo:<p>'+
           '<input class="form-control w-2" value="" name="modelo-cpu-pro" placeholder="Modelo">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Serie:<p>'+
           '<input class="form-control w-2" value="" name="serie-cpu-pro" placeholder="Serie">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Oxxo:</p>'+
           '<input class="form-control w-2" value="" name="oxxo-cpu-pro" placeholder="No. Oxxo"></br>'+
           '</div>'+
           '</div>'+


           '</div>'+
            '</div>'+ //row


            //Card 2 

            //Formularios de inventario
           '<div class="row">'+
           
           
           
           '<div class="card"  style="margin: 2vh;">'+
           '<div class="card-header text-white" style="background: #ff5a52;"><h5>Impresora</h5></div>'+
           '<div class="card-body" style="background: #ff8570;">'+
           
           //Titulo card

           '<div class="row">'+
           '<div class="col-11">'+
           '<p>Modelo:<p>'+
           '<input class="form-control w-2" value="" name="modelo-print-pro" placeholder="Modelo">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Serie:<p>'+
           '<input class="form-control w-2" value="" name="serie-print-pro" placeholder="Serie">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Oxxo:</p>'+
           '<input class="form-control w-2" value="" name="oxxo-print-pro" placeholder="No. Oxxo"></br>'+
           '</div>'+
           '</div>'+


           '</div>'+
            '</div>'+ //row

            
            //Card 3 

            //Formularios de inventario
           '<div class="row">'+
           
           
           '<div class="card"  style="margin: 2vh;">'+
           '<div class="card-header text-white" style="background: #25d700;"><h5>Escaner</h5></div>'+
           '<div class="card-body" style="background: #46ff9a;">'+
           
           //Titulo card

           '<div class="row">'+
           '<div class="col-11">'+
           '<p>Modelo:<p>'+
           '<input class="form-control w-2" value="" name="modelo-scan-pro" placeholder="Modelo">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Serie:<p>'+
           '<input class="form-control w-2" value="" name="serie-scan-pro" placeholder="Serie">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Oxxo:</p>'+
           '<input class="form-control w-2" value="" name="oxxo-scan-pro" placeholder="No. Oxxo"></br>'+
           '</div>'+
           '</div>'+


           '</div>'+
            '</div>'+ //row


             //Card 3 

            //Formularios de inventario
           '<div class="row">'+
           
           
           '<div class="card"  style="margin: 2vh;">'+
           '<div class="card-header text-white" style="background: #2188e9;"><h5>Monitor</h5></div>'+
           '<div class="card-body" style="background: #6baef0;">'+
           
           //Titulo card

           '<div class="row">'+
           '<div class="col-11">'+
           '<p>Modelo:<p>'+
           '<input class="form-control w-2" value="" name="modelo-mon-pro" placeholder="Modelo">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Serie:<p>'+
           '<input class="form-control w-2" value="" name="serie-mon-pro" placeholder="Serie">'+
           '</div>'+
           '</div>'+
           '<div class="row">'+
           '<div class="col-11">'+
           '<p>No. Oxxo:</p>'+
           '<input class="form-control w-2" value="" name="oxxo-mon-pro" placeholder="No. Oxxo"></br>'+
           '</div>'+
           '</div>'+


           '</div>'+
            '</div>'+ //row
            
            
               
            
        
    '</form>',
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        cancelButtonColor: '#00e059',
        showConfirmButton: true,
        confirmButtonText: 'Actualizar', 
        cancelButtonColor:'#ff764d',
      }).then((result) => {
          if(result.isConfirmed){

            $.ajax({
                method: "POST",
                url: "./modelo/actualizarRegistros.php",
                data: $("#formulario-editar-registro").serialize(),
               
            
                success: function (response) {
                  response = response.trim();

                  

                  if (response == 1) {
                    $("#form_register").trigger("reset");
                    Swal.fire(":D", "¡Actualizado correctamente!", "success");
                    MostrarCompu();
                  } else if (response == 2) {
                    Swal.fire(":D", "¡Actualizado correctamente!", "success");
                    MostrarVozydat();
                  } else if (response == 3) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarCctv();
                  }else if (response == 4) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success")
                    MostrarMtos();
                  }else if (response == 5) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarPrinters();
                  }else if (response == 6) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarAcc();
                  }else if (response == 7) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarImac();
                  }else if (response == 8) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarRefacci();
                  }else if (response == 9) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarRenovacion();
                  }else {
                    Swal.fire("):", "¡Error!", "error");
                  }
                },
              });
          }
      }); 

      //Zona programable del sweet alert
      $("#inv-categorias").change(function () {
        var opcion = $("#inv-categorias option:selected").val();
        console.log(opcion);

     });
  
    });
   }
  
   var borrarData = function (tbody, table ) { 
    $(tbody).on("click", "button.buttonBorrar", function(){

      roww             = $(this).closest("tr");
      fila             = table.row(roww).data();  //Computadora 
      
      filaM            = table.row(this).data();  //Tablet, movil, etc
  
      if(fila !== undefined){
      id              = fila.id;
     
      }else{
      
      id              = filaM.id;
     
  
      }

      cate =  $('#titulo-categoria').attr("categoria");


        Swal.fire({
            title: '¿Estas seguro de borrar esta orden?',
            text: "¡Ya no podras revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrala',
            backdrop: `
            rgba(0,0,0,0.4)
            no-repeat
          `
          }).then((result) => {
            if (result.isConfirmed) {
              

                  $.ajax({
                    method: "POST",
                    url: "./modelo/eliminarReg.php",
                    data: {codigo: id, cate : cate},
                   
                
                    success: function (response) {
                      response = response.trim();
    
                      
    
                     
                  if (response == 1) {
                    $("#form_register").trigger("reset");
                    Swal.fire(":D", "¡Actualizado correctamente!", "success");
                    MostrarCompu();
                  } else if (response == 2) {
                    Swal.fire(":D", "¡Actualizado correctamente!", "success");
                    MostrarVozydat();
                  } else if (response == 3) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarCctv();
                  }else if (response == 4) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success")
                    MostrarMtos();
                  }else if (response == 5) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarPrinters();
                  }else if (response == 6) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarAcc();
                  }else if (response == 7) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarImac();
                  }else if (response == 8) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarRefacci();
                  }else if (response == 9) {
                    Swal.fire(":u", "¡Actualizado correctamente!", "success");
                    MostrarRenovacion();
                  }else {
                    Swal.fire("):", "¡Error!", "error");
                  }

                    },
                  });

                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Borrado con exito',
                    showConfirmButton: false,
                    timer: 850
                  })
            }
          })
    });

   };



   
  

