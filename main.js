$(document).ready(function(){
    $('#esconder').click(function(){

    $('h2').hide();

    });


    $('#azul').click(function(){
        
        $('p').css('color', 'blue');
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
        $('#confirm').text('Cor alterada com sucesso!');
        $('#confirm').fadeOut(2000);
        $('#azul').addClass('Azul');

    });

    $('#vermelho').click(function(){
        /*ENCADEAMENTO EM BLOCO*/
        /*FORMA MAIS MODERNA DE MODIFICAR O CSS*/
        $('p').css({color: 'red', fontFamily: 'Arial'})
        .fadeOut()
        .delay(1000)
        .fadeIn()
        .text('Cor alterada com sucesso!')
        .fadeOut(2000);
        $('#vermelho').removeClass('Vermelho');

    });
       
    $('#l1').click(function(){

        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    });

    $('#l2').click(function(){

        $('#img1').hide();
        $('#img2').show();
        $('#img3').hide();
        $('#img4').hide();
    });
    
    $('#l3').click(function(){

        $('#img1').hide();
        $('#img2').hide();
        $('#img3').show();
        $('#img4').hide();
    });
    
    $('#l4').click(function(){

        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').show();
    });


});

