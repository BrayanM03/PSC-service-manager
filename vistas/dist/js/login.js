$(document).ready(function() {

    //Cuando tiene el foco

    $('#inputUser').focus(function() {
        $('#icon').removeClass().addClass("icon-focus");
        $('#input-icon1').show();

        // $('#inputPassword').removeClass("inputPassword-focus").addClass("inputPasword");

        $(this).removeClass("inputUser").addClass("inputUser-focus");
       

    });

    $('#inputPassword').focus(function() {

        $('#icon-2').removeClass().addClass("icon-focus");
        // $('#inputUser').removeClass("inputUser-focus").addClass("inputUser");
        $('#input-icon2').show();


        $(this).removeClass("inputPassword").addClass("inputPassword-focus");
       


    });

    //----------------------------

    $('#inputName').focus(function() {
        $('#icon-3').removeClass().addClass("icon-focus");
        $('#input-icon3').show();

        // $('#inputPassword').removeClass("inputPassword-focus").addClass("inputPasword");

        $(this).removeClass("inputUser").addClass("inputUser-focus");
       

    });

    $('#inputLastName').focus(function() {

        $('#icon-4').removeClass().addClass("icon-focus");
        // $('#inputUser').removeClass("inputUser-focus").addClass("inputUser");
        $('#input-icon4').show();


        $(this).removeClass("inputPassword").addClass("inputPassword-focus");
       


    });

    $('#inputDate').focus(function() {

        $('#icon-5').removeClass().addClass("icon-focus");
        // $('#inputUser').removeClass("inputUser-focus").addClass("inputUser");
        $('#input-icon5').show();


        $(this).removeClass("inputPassword").addClass("inputPassword-focus");
       


    });

    //Cuando pierde el foco

    

    $('#inputUser').blur(function() {
        $('#icon').removeClass().addClass("icon-focus-2");

        $('#inputUser').removeClass("inputUser-focus").addClass("inputUser");
        $('#input-icon1').fadeOut("fast");
    });

    $('#inputPassword').blur(function() {

        $('#icon-2').removeClass().addClass("icon-focus-2");
        $('#inputPassword').removeClass("inputPassword-focus").addClass("inputPassword");
        $('#input-icon2').fadeOut("fast");
    });
//----------------------------
    $('#inputName').blur(function() {
        $('#icon-3').removeClass().addClass("icon-focus-2");

        $(this).removeClass("inputUser-focus").addClass("inputUser");
        $('#input-icon3').fadeOut("fast");
    });

    $('#inputLastName').blur(function() {

        $('#icon-4').removeClass().addClass("icon-focus-2");
        $(this).removeClass("inputPassword-focus").addClass("inputPassword");
        $('#input-icon4').fadeOut("fast");
    });


$('#inputDate').blur(function() {

    $('#icon-5').removeClass().addClass("icon-focus-2");
    $(this).removeClass("inputPassword-focus").addClass("inputPassword");
    $('#input-icon5').fadeOut("fast");
});

});