
$.ajax({
  type: "POST",
  url: "url./modelo/grafica_mto.php",
  data: "data",
  dataType: "dataType",
  success: function (response) {
    
  }
});

var ctx = $('#barChart').get(0).getContext('2d')
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Mantenimiento',
          data: [10, 32, 20, 10, 32, 20, 10, 32, 20, 10, 32, 20],
          backgroundColor: [
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )',
            'rgb(37, 214, 223 )'
          ]
        }]
      },

      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });