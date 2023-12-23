$(document).ready(function() {
    "use strict";

    $(".footer_right_item_head button").click(function() {
        $(this).parent().parent().toggleClass("active");
        $(this).parent().parent().find("ul").slideToggle();
    });

    if ($(window).width() > 991) {
        $('.partners_slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            speed: 500,
            fade: false,
            prevArrow: $('.partners_prev'),
            nextArrow: $('.partners_next')
        });
    }

    if ($(window).width() > 1199) {
        $('.projects_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            speed: 500,
            fade: false,
            prevArrow: $('.projects_prev'),
            nextArrow: $('.projects_next')
        });
    }
    
    $(".why_list_item_top").click(function() {
        $(this).parent().toggleClass("active");
        $(this).parent().find(".why_list_item_body").slideToggle();
    });

    $(window).scroll(startCounter);

    function startCounter() {
        var hT = $('.counter').offset().top,
            hH = $('.counter').outerHeight(),
            wH = $(window).height();
        if ($(window).scrollTop() > hT+hH-wH) {
            $(window).off("scroll", startCounter);
            $('.counter').each(function () {
                $('.counter').css("opacity", "1");
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

});