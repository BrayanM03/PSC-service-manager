$.ajax({
    type: "POST",
    url: "./modelo/contarRegistros.php",
    dataType: 'JSON',
    data: {estadisticas: 'estadisticas'},
    
    success: function (response) {
       
        $('#total-ordenes').html(response);
        
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
            $("#porcentaje-ordenes").html("<h3>" +res+  "%"+"</h3>" );
            $("#porcentaje-ordenes").attr("valor", res);
            
            
    var elem = document.getElementById("progress-bar");   
    var width = 0;
    var id = setInterval(frame, 20);
    function frame() {
     
      if (width == 0) {
        elem.style.width = width ; 
        //document.getElementById("label-bar").innerHTML = width * 1  + '%'; 
      }if (width >= res && width != 0) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("label-bar").innerHTML = width * 1  + '%';
      }
    }
            
        }
    });

   

    
  }

  move();

