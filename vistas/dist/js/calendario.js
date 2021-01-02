function MostrarCalendar() {

    //Taryendo la categoria jeje
    
      
 
       $('#titulo-categoria').html("Calendario Mantenimientos");
     
      
 
     
 
   //Trayendo tabla
   $.ajax({
     type: "POST",
     url: "./vistas/modulos/tablas/calendar.php",
     data: "data",
 
     success: function (response) {
       
 
       $("#contenido-panel").html(response);
       
 
        table= $("#tabla-mantenimientos")
         .DataTable({   /*
           ajax: {
             method: "POST",
             url: "./modelo/traerTiendas.php",
           },
           
           select: true,

           
           columns: [
             
             { data: "id" },
             { data: "cr" },
             { data: "tienda", width: "20%" },
             { data: "mantenimiento" },
             {
               data: null,
               className: "celda-acciones",
               render: function () {
                 return '<button type="button" class="buttonEditarTiendas btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
               },
             },
           ],
           createdRow: function( row, data){
            if( data.mantenimiento ==  'pendiente'){
                $(row).removeClass();
                $(row).addClass('table-warning');
            }else{
              $(row).removeClass();
              $(row).addClass('table-success');
            }
        },
           scrollY: "50vh",
           scrollCollapse: true,
           paging: true,
           responsive: true,
 
           dom: "Bfrtip",
           buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
 
           order: [[0, "asc"]],
           language: {
             
             emptyTable: "No hay registros",
             infoEmpty: "Ups!, no hay registros aun en esta categoria."
           }
           */
         });
 
         table.buttons()
         .container()
         .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");
 
         //Funciones del crud
       
         editarData('#tabla-mantenimientos tbody', table);
         editarInv('#tabla-mantenimientos tbody', table);
         borrarData('#tabla-mantenimientos tbody', table);
 
         table2= $(".tabla-calendar")
         .DataTable({ 
         });
        

         $('.carta-exp').CardWidget('collapse');
        
     } //Fin de respuesta ajax   
 
    
 
   }); //Fin de funcion async ajax
  
 }//Fin mostrarrefacc()