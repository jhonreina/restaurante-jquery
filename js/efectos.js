$(document).ready(function () { 
    //efecto menu
    $('.menu a').each(function (index, element) {
        $(this).css({
           'top': '-200px'  
        });

        $(this).animate({top:'0'}, 1500 + (index *500));  

    });

    //efecto header
    if ( $(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

         $("header .textos").animate({
           opacity: 1,
           marginTop: '-52px'
         }, 1500);
    }

    //scroll elementos menu

    var acercaDe = $("#acerca_de").offset().top,
        menu = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top;

    $('#btn_acerca_de').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe -60 
        }, 500)
    });

    $('#btn_menu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500)
    });
    
    $('#btn_galeria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500)
    });

    $('#btn_ubicacion').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500)
    });
});