function MostrarTiendas() {

    //Taryendo la categoria jeje
    
      
 
       $('#titulo-categoria').html("Tiendas Oxxo");
     
      
 
     
 
   //Trayendo tabla
   $.ajax({
     type: "POST",
     url: "./vistas/modulos/tablas/tiendas.php",
     data: "data",
 
     success: function (response) {
       
 
       $("#contenido-panel").html(response);
       //$('#contenido-panel').html(response);
 
        table= $("#tabla-mantenimientos")
         .DataTable({
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
                 return '<button type="button" class="buttonEditar btn btn-warning"><span class="fa fa-edit"></span><span class="hidden-xs"></span></button><br><button type="button" class="buttonBorrar btn btn-danger"><span class="fa fa-trash"></span><span class="hidden-xs"></span></button>';
               },
             },
           ],
           scrollY: "50vh",
           scrollCollapse: true,
           paging: true,
           responsive: true,
 
           dom: "Bfrtip",
           buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
 
           order: [[3, "desc"],  [0, "desc"]],
           language: {
             
             emptyTable: "No hay registros",
             infoEmpty: "Ups!, no hay registros aun en esta categoria."
           }
 
         });
 
         table.buttons()
         .container()
         .appendTo("#tabla-mantenimientos_wrapper .col-md-6:eq(0)");
 
         //Funciones del crud
       
         editarData('#tabla-mantenimientos tbody', table);
         borrarData('#tabla-mantenimientos tbody', table);
 
         
        
     } //Fin de respuesta ajax
 
    
 
   }); //Fin de funcion async ajax
  
 }//Fin mostrarrefacc()