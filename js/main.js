


$(document).ready(function(){
    $('header .header_in .all_btn').click(function(){
        $('nav').animate({left: 0});
    });

    $('nav button').click(function(){
        $('nav').animate({left: -300});
    });

    $(window).resize(function(){
        $('nav').removeAttr('style');
    });
});