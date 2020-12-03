var editarData = function (tbody, table ) { 
    

    $(tbody).on("click", "button.buttonEditar", function(){
      
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
        title: "Editar registro",
        html: '<form class="mt-4" id="formulario-editar-registro">'+

        '<div class="row">'+
        '<div class="col-4">'+
        '<div class="form-group">'+
        '<label><b>ID:</b></label></br>'+
        '<input class="form-control " value="'+id+'" name="id-input-modal" readonly>'+
           '</div>'+
           '</div>'+
           '<div class="col-8">'+
           '<div class="form-group">'+
           '<label><b>Cat:</b></label></br>'+
           '<input class="form-control " value="'+cate+'" name="cate-input-modal" readonly>'+
              '</div>'+
              '</div>'+
           '</div>'+

        '<div class="row">'+
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label for="exampleInputEmail1"><b>CR:</b></label></br>'+
            '<input type="text" class="form-control" id="cr-input-modal" value="'+ cr +'" name="cr-input-nuevaOrden" aria-describedby="emailHelp" placeholder="CR" autocomplete="off">'+
    
            '<div class="search-cr-container-hide" id="search-cr-container">'+
            '<ul id="select-mostrar-tienda" class="card lista-tiendas-busqueda" name="select-mostrar-tienda"></ul>'+
            '</div>'+
    
       ' </div>'+
        '</div>'+
        
        
       '<div class="col-6">'+
        '<div class="form-group">'+
        '<label><b>Fecha:</b></label></br>'+
        '<input type="date" value="'+ fecha +'" name="date-nuevaOrden" class="form-control">'+
        '</div>'+
        '</div>'+
    
        
            '<div class="col-12">'+
            '<div class="form-group">'+
            '<label><b>Cliente</b></label>'+
            '<input type="text" class="tienda-span-modal-mto form-control" value="'+ tienda +'"  id="tienda-cliente" name="tienda-span-modal-mto" placeholder="tienda">'+
        '</div>'+
            '</div>'+
  
           
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label><b>Estatus</b></label>'+
            '<select class="form-control" id="select-status" value="'+ estatus +'" name="status-new-orden">'+
            '<option value="Abierto">Abierto</option>'+
            '<option value="Cerrado">Cerrado</option>'+
            '</select>'+
        '</div>'+
            '</div>'+
  
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label><b>Usuario</b></label>'+
            '<input type="text" class="form-control" value="'+ usuario +'"  id="usuario-editar" name="usuario-editar" placeholder="usuario-edit">'+
            '</div>'+
            '</div>'+
           
    
    
        '</div>'+
    
        '<div class="row">'+
            '<div class="col-5">'+
                '<div class="form-group">'+
                    '<label><b>Folio</b></label>'+
                    '<input type="number" class="form-control" value="'+ folio +'"name="folio-nueva-orden" placeholder="Escribe el folio">'+
                '</div>'+
            '</div>'+
            '<div class="col-7">'+
                '<div class="form-group nice-select-group">'+
                    '<label><b>Categoria</b></label>'+
                    '<select class="form-control" name="select-cat-editar-orden" id="optionsCatEditarOrden">'+
                        '<option id="optionComputer" value="Computadora">Computadora</option>'+
                        '<option id="optionVozyDat" value="Voz y Datos">Voz y datos</option>'+
                        '<option id="optionCCTV" value="CCTV">CCTV</option>'+
                        '<option id="optionMto" value="Mantenimiento">Mantenimiento</option>'+
                        '<option id="optionPrints" value="Impresoras">Impresoras</option>'+
                        '<option id="optionAccesorios" value="Accesorios">Accesorios</option>'+
                        '<option id="optionIMAC" value="IMAC" selected>IMAC</option>'+
                        '<option id="optionRefaccion" value="Refacciones">Refacciones</option>'+
                        '<option id="optionRenovacion" value="Renovacion">Renovación Tecnológica</option>'+
                    '</select>'+
    '</div>'+
            '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-6">'+
            '<div class="form-group">'+
                '<label><b>subcategoria</b></label>'+
                '<input type="text" class="form-control" value="'+ subcategoria +'"name="subcat-editar-orden" placeholder="Escribe subcat">'+
            '</div>'+
        '</div>'+
        
        '<div class="col-6">'+
            '<div class="form-group">'+
                '<label><b>Mes</b></label>'+
                '<input type="text" class="form-control" value="'+ mes +'"name="mes-editar-orden" placeholder="Escribe el mes">'+
            '</div>'+
        '</div>'+
        '</div>'+
    
        '<div class="row  mt-1">'+
        '<div class="col-12">'+
        '<div class="form-group" id="area-solucion">'+
        '<label><b>Solución</b></label>'+
        '<textarea class="form-control" name="swal-solucion" style="height:100px" id="textarea-swal-solucion" form="formulario-editar-registro" placeholder="Escriba la solución">'+ solucion +'</textarea>'+
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
                  } else if (response == 2) {
                    Swal.fire("D:", "¡Algo salio mal!", "warning");
                  } else if (response == 3) {
                    Swal.fire(":u", "Actualizado, la categoria es igual", "success");
                    MostrarCompu();
                  }else if (response == 4) {
                    Swal.fire(":D", "Actualizado, No es igual la categoria", "warning");
                  }else {
                    Swal.fire("):", "¡Error!", "error");
                  }
                },
              });

             
            
          /*  Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Actualizado',
                showConfirmButton: false,
                timer: 850
              });   */
          }
      }); 



      var selectCatEditarOrden = $('#optionsCatEditarOrden');
      var categoriaTitulo =  $('#titulo-categoria').attr("categoria");
      console.log(selectCatEditarOrden[0].value = categoriaTitulo);
  
    });
   }
  
   var borrarData = function (tbody, table ) { 
    $(tbody).on("click", "button.buttonBorrar", function(){

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



   var editarDataconCant = function (tbody, table ) { 
    $(tbody).on("click", "button.buttonEditarCant", function(){
      
      roww             = $(this).closest("tr");
      fila             = table.row(roww).data();  //Computadora 
      
      filaM            = table.row(this).data();  //Tablet, movil, etc
      console.log(filaM);
  
      if(fila !== undefined){
      id              = fila.id;
      cr              = fila.cr;
      tienda          = fila.tienda;
      fecha           = fila.fecha;
      folio           = fila.folio;
      subcategoria    = fila.subcat;
      cantidad        = fila.cant;
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
      subcategoria    = filaM.subcat;
      estatus         = filaM.estatus
      solucion        = filaM.solucion;
      mes             = filaM.mes;
      cantidad        = filaM.cant;
      usuario         = filaM.usuario;
  
      }
        
      cate =  $('#titulo-categoria').attr("categoria");
  
      Swal.fire({
        title: "Editar registro",
        html: '<form class="mt-4" id="formulario-editar-registro">'+

        '<div class="row">'+
        '<div class="col-4">'+
        '<div class="form-group">'+
        '<label><b>ID:</b></label></br>'+
        '<input class="form-control " value="'+id+'" name="id-input-modal" readonly>'+
           '</div>'+
           '</div>'+
           '<div class="col-4">'+
        '<div class="form-group">'+
        '<label><b>Cat:</b></label></br>'+
        '<input class="form-control " value="'+cate+'" name="cate-input-modal" readonly>'+
           '</div>'+
           '</div>'+
           '</div>'+


        '<div class="row">'+
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label for="exampleInputEmail1"><b>CR:</b></label></br>'+
            '<input type="text" class="form-control" id="cr-input-modal" value="'+ cr +'" name="cr-input-nuevaOrden" aria-describedby="emailHelp" placeholder="CR" autocomplete="off">'+
    
            '<div class="search-cr-container-hide" id="search-cr-container">'+
            '<ul id="select-mostrar-tienda" class="card lista-tiendas-busqueda" name="select-mostrar-tienda"></ul>'+
            '</div>'+
    
       ' </div>'+
        '</div>'+
        
        
       '<div class="col-6">'+
        '<div class="form-group">'+
        '<label><b>Fecha:</b></label></br>'+
        '<input type="date" value="'+ fecha +'" name="date-nuevaOrden" class="form-control">'+
        '</div>'+
        '</div>'+
    
        
            '<div class="col-12">'+
            '<div class="form-group">'+
            '<label><b>Cliente</b></label>'+
            '<input type="text" class="tienda-span-modal-mto form-control" value="'+ tienda +'"  id="tienda-cliente" name="tienda-span-modal-mto" placeholder="tienda">'+
        '</div>'+
            '</div>'+
  
           
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label><b>Estatus</b></label>'+
            '<select class="form-control" id="select-status" value="'+ estatus +'" name="status-new-orden">'+
            '<option value="Abierto">Abierto</option>'+
            '<option value="Cerrado">Cerrado</option>'+
            '</select>'+
        '</div>'+
            '</div>'+
  
            '<div class="col-6">'+
            '<div class="form-group">'+
            '<label><b>Usuario</b></label>'+
            '<input type="text" class="form-control" value="'+ usuario +'"  id="usuario-editar" name="usuario-editar" placeholder="usuario-edit">'+
            '</div>'+
            '</div>'+
           
    
    
        '</div>'+
    
        '<div class="row">'+
            '<div class="col-5">'+
                '<div class="form-group">'+
                    '<label><b>Folio</b></label>'+
                    '<input type="number" class="form-control" value="'+ folio +'"name="folio-nueva-orden" placeholder="Escribe el folio">'+
                '</div>'+
            '</div>'+
            '<div class="col-7">'+
                '<div class="form-group nice-select-group">'+
                    '<label><b>Categoria</b></label>'+
                    '<select class="form-control" name="select-cat-editar-orden" id="optionsCatEditarOrden">'+
                        '<option id="optionComputer" value="Computadora">Computadora</option>'+
                        '<option id="optionVozyDat" value="Voz y Datos">Voz y datos</option>'+
                        '<option id="optionCCTV" value="CCTV">CCTV</option>'+
                        '<option id="optionMto" value="Mantenimiento">Mantenimiento</option>'+
                        '<option id="optionPrints" value="Impresoras">Impresoras</option>'+
                        '<option id="optionAccesorios" value="Accesorios">Accesorios</option>'+
                        '<option id="optionIMAC" value="IMAC">IMAC</option>'+
                        '<option id="optionRefaccion" value="Refacciones">Refacciones</option>'+
                        '<option id="optionRenovacion" value="Renovacion">Renovación Tecnológica</option>'+
                    '</select>'+
    '</div>'+
            '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-6">'+
            '<div class="form-group">'+
                '<label><b>subcategoria</b></label>'+
                '<input type="text" class="form-control" value="'+ subcategoria +'"name="subcat-editar-orden" placeholder="Escribe subcat">'+
            '</div>'+
        '</div>'+
        
        '<div class="col-6">'+
            '<div class="form-group">'+
                '<label><b>Mes</b></label>'+
                '<input type="text" class="form-control" value="'+ mes +'"name="mes-editar-orden" placeholder="Escribe el mes">'+
            '</div>'+
        '</div>'+
        '</div>'+

        '<div class="row">'+
        '<div class="col-6">'+
            '<div class="form-group">'+
                '<label><b>Cantidad</b></label>'+
                '<input type="number" class="form-control" value="'+ cantidad +'"name="cant-editar-orden" placeholder="cant">'+
            '</div>'+
        '</div>'+
        '</div>'+
    
        '<div class="sub-categorias mb-5" id="subcategorias">'+
            '<div class="row">'+
                '<div id="col-1" class="col-6"></div>'+
                '<div id="col-2" class="col-6"></div>'+
            '</div>'+
        '</div>'+
    
        '<div class="row  mt-1">'+
        '<div class="col-12">'+
        '<div class="form-group" id="area-solucion">'+
        '<label><b>Solución</b></label>'+
        '<textarea class="form-control" name="swal-solucion" style="height:100px" id="textarea-swal-solucion" form="formulario-editar-registro" placeholder="Escriba la solución">'+ solucion +'</textarea>'+
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
                  } else if (response == 2) {
                    Swal.fire("D:", "¡Algo salio mal!", "warning");
                  } else if (response == 3) {
                    Swal.fire(":u", "Todo correcto", "success");
                  }else if (response == 5) {
                    Swal.fire(":c", "Selecciona una subcategoria", "warning");
                  }else {
                    Swal.fire("):", "¡Error!", "error");
                  }
                },
              });

            
          /*  Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Actualizado',
                showConfirmButton: false,
                timer: 850
              });   */
          }
      }); 

      var selectCatEditarOrden = $('#optionsCatEditarOrden');
      var categoriaTitulo =  $('#titulo-categoria').attr("categoria");
      console.log(selectCatEditarOrden[0].value = categoriaTitulo);
  
    });
   }
  