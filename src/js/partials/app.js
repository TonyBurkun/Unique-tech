
$(document).ready(function(){


    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#header').animate({'padding-top': '20px'},500);
        }
    });

    $('#menu-btn').click(function(){
        if($('#nav-menu').hasClass('active')){
            $('#nav-menu').removeClass('active');
        }
        else{
            $('#nav-menu').addClass('active');
        }
    });


    $('.single-slide').slick({
        dots:true,
        autoplay: false,
        draggable: false,
        arrows: false

    });

    $('.single-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.button').stop().css('opacity','0');
    });

    $('.single-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.button').stop().animate({opacity:'1'}, 500);
    });

});