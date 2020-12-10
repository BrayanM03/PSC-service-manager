$.ajax({
    type: "POST",
    url: "./modelo/contarRegistros.php",
    data: {estadisticas: 'estadisticas'},
    
    success: function (response) {
        alert(response);
    }
});