$(document).ready(function() {

    console.log("Documento cargado");

    // $('#btn1').on('click', function() {
    //     console.log("Click btn1");
    // });

    $('#btn1').click(function() {
        console.log("Click btn1");
        $('#parrafo').addClass('text-center');
    });


    $('#btn2').click(function() {
        console.log("Click btn1");
        $('#parrafo').css('color', 'red');
    });

    $('#btn3').click(function() {
        console.log("Click btn1");
        $('#parrafo').toggleClass('display-4');
    });



    //EVENTOS DEL TECLADO

    $('#texto').keyup(function() {


        var valor = $('#texto').val();

        console.log("Presionando... " + valor);

        $('#descripcion').text(valor);

        if (valor === "") {

            $('#descripcion').text('Estoy esperando...');
        }




    });







});