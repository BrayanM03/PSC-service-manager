$.ajax({
    type: "POST",
    url: "./modelo/contarRegistros.php",
    data: {estadisticas: 'estadisticas'},
    
    success: function (response) {
       
        $('#total-ordenes').html(response);

        //año
        var fecha = new Date();
        var year = fecha. getFullYear();
        $('.title-cards').html("Estadisticas del año "+year)
        
    }
});