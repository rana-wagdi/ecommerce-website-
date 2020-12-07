$(document).ready(function(){

    $('.fa-hamburger').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('active');
    });
    $('nav ul li a').click(function(){
        $('.fa-hamburger').removeClass('fa-times');
        $('nav').removeClass('active');

    });
    $('.dot1').click(function(){
        $('.vid1').css('display','block');
        $('.vid2').css('display','none');
        $('.vid3').css('display','none');

    });
    $('.dot2').click(function(){
        $('.vid2').css('display','block');
        $('.vid1').css('display','none');
        $('.vid3').css('display','none');

    });
    $('.dot3').click(function(){
        $('.vid3').css('display','block');
        $('.vid2').css('display','none');
        $('.vid1').css('display','none');

    });
    $(window).on('scroll load',function(){
        if($(window).scrollTop() >20){
            $('#header').addClass('header-active');
        }else{
            $('#header').removeClass('header-active');
        }
    })
});