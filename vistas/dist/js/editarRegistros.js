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
      categoria       = fila.subcat;
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
      categoria       = filaM.subcat;
      estatus         = filaM.estatus
      solucion        = filaM.solucion;
      mes             = filaM.mes;
      usuario         = filaM.usuario;
  
      }
        
  
      Swal.fire({
        title: "Editar registro",
        html: '<form class="mt-4" id="formulario-editar-registro">'+
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
                    '<select class="form-control" name="select-cat-nueva-orden" id="optionsNuevaOrden">'+
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
                '<input type="text" class="form-control" value="'+ categoria +'"name="cat-editar-orden" placeholder="Escribe subcat">'+
            '</div>'+
        '</div>'+
        
        '<div class="col-6">'+
            '<div class="form-group">'+
                '<label><b>Mes</b></label>'+
                '<input type="text" class="form-control" value="'+ mes +'"name="mes-editar-orden" placeholder="Escribe el mes">'+
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
  