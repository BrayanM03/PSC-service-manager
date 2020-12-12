$.ajax({
    type: "POST",
    url: "./modelo/contarRegistros.php",
    dataType: 'JSON',
    data: {estadisticas: 'estadisticas'},
    
    success: function (response) {
       
        $('#total-ordenes').html(response);
        console.log(response);

        //año
        var fecha = new Date();
        var year = fecha. getFullYear();
        $('.title-cards').html("Estadisticas del año "+year)
        
    }
});



function move() {

    $.ajax({
        type: "POST",
        url: "./modelo/porcentuarRegistros.php",
        data: {porcentaje: 'porcentaje'},
        
        success: function (res) {
            console.log(res);
            $('#porcentaje-ordenes').html(res);
            
           
            
            
        }
    });

    porcentajeBar =$("#porcentaje-ordenes").innerHTML;
    console.log(porcentajeBar);
    var elem = document.getElementById("progress-bar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 0.05) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("label-bar").innerHTML = width * 1  + '%';
      }
    }
  }

  move();