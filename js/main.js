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

    $(".solution_block_item").on( "mouseenter", function() {
        var id = $(this).attr("id"); 
        $(".solution_block").find("[data-target='" + id + "']").addClass("active");
    });

    $(".solution_block_item").on( "mouseleave", function() {
        $(".solution_block img").removeClass("active");
    });

    var startCountMain = $(".main_block_left_slider_item").length;
    $(".main_counter p").text('1/' + startCountMain);

    $('.main_block_left_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        prevArrow: $('.main_prev'),
        nextArrow: $('.main_next')
    });

    $('.main_block_left_slider').on('afterChange', function(event, slick, currentSlide) {
        var currentSlide = slick.slickCurrentSlide() + 1;
        var slidesCount = slick.slideCount;
        $(".main_counter p").text(currentSlide + '/' + slidesCount)
    });

});