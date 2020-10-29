function MostrarCotizador() { 
         
    $.ajax({
        type: "POST",
        url: "./vistas/modulos/cotizador/cotizador.php",
        data: "data",
        
        success: function (response) {
           
            $('#contenido-panel').html(response);
            
        }
    });


}



