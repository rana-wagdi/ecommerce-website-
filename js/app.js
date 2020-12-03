$(document).ready(function(){

    $('.fa-hamburger').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('active');
    });
    $('nav ul li a').click(function(){
        $('.fa-hamburger').removeClass('fa-times');
        $('nav').removeClass('active');

    })
});