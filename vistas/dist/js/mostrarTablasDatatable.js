$(function () {
    $("#tabla-mto-mes-actual").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#tabla-mto-mes-actual_wrapper .col-md-6:eq(0)');
    
   
  });

