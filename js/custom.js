$(document).ready(function( ) {
    $(window).scroll(function( ){
        if ( $(this).scrollTop( ) < 80) {
            $('#hd1').css('margin-top','0px');
            $('#hd2').css('margin-top','-150px').css('display','block');
        }else {
            $('#hd1').css('margin-top','-150px');
            $('#hd2').css('margin-top','0px');
        }
    });
    
    $('nav > ul > li').hover(function( ){
        $(this).find('#sub-menu').stop( ).slideDown( ); 
    }, function( ){
        $(this).find('#sub-menu').stop( ).slideUp( ); 
    });
    
    $('.fhd-main').on('mouseout', function( ){
        var vid = $(this).find('video').get(0);
        vid.pause( );
        
        $(this).stop( ).animate({"width":"15%"},700);
        $(this).find('video').animate({"opacity":"0"},2000);
        $(this).find('h3').stop( ).animate({"right":"-310px"},200);
        $(this).find('p').stop( ).animate({"right":"-310px"},500);
    });
    
    $('.fhd-main').on('mouseover', function( ){
        var vid = $(this).find('video').get(0);

        vid.currentTime = 0;
        vid.play( );
        $(this).stop( ).animate({"width":"35%"},1000, function( ){
            $(this).find('h3').stop( ).animate({"right":"20px"},400);
            $(this).find('p').stop( ).animate({"right":"20px"},800);
    });
    $(this).find('video').animate({"opacity":"1.0"},1200);
    });
 });