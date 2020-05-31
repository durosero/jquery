$(document).ready(function() {

    console.log("Documenot cargado");

    $('h1').addClass('text-warning');

    $('h1').removeClass('display-3');

    $('.container').append('<p class="text-info">Texto al final</p>');
    $('.container').prepend('<p class="text-info">Texto al inicio</p>');

    $('h1').css({
        'background-color': 'blue',
        'font-size': '80px',
    });

    // $('#parrafo').remove(); // para eliminar el elemento seleccionado

    $('#parrafo').hide();



});