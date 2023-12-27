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

    if ($(window).width() > 1199) {
        $('.partner_slider').slick({
            slidesToShow: 4,
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

    if($('.counter').length) {
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
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        prevArrow: $('.main_prev'),
        nextArrow: $('.main_next')
    });

    $('.main_block_left_slider').on('afterChange', function(event, slick, currentSlide) {
        var currentSlide = slick.slickCurrentSlide() + 1;
        var slidesCount = slick.slideCount;
        $(".main_counter p").text(currentSlide + '/' + slidesCount);
        $(".main_block_right_wrap_item").removeClass("active");
        $(".main_block_right_wrap").find("[data-index='" + currentSlide + "']").addClass("active");
    });

    $(".contacts_address ul li a").click(function(e) {
        e.preventDefault();
        var id = $(this).parent().attr("data-target");
        $(".contacts_address ul li").removeClass("active");
        $(this).parent().addClass("active");
        $(".contacts_address_item").removeClass("active");
        $(`#${id}`).addClass("active");
    });

    $(".partners_page_filter_list_item span").click(function() {
        var attr = $(this).attr("data-target");
        $(".partners_page_filter_list_item span").removeClass("active");
        $(this).addClass("active");
        $(".partners_col").addClass("hidden");
        if($(this).hasClass("num_filter")) {
            $(".partners_col").each(function() {
                var attrNum = $(this).attr("data-target");
                var checkAttrNum = parseInt(attrNum);
                if(!isNaN(checkAttrNum)) {
                    console.log();
                    $(this).removeClass("hidden");
                }
            });
        } else {
            $(".partners_page .row").find("[data-target='" + attr + "']").each(function() {
                $(this).removeClass("hidden");
            });
        }
        $(".partners_page_filter_remove").addClass("active");
    });

    $(".partners_page_filter_remove button").click(function() {
        $(this).parent().removeClass("active");
        $(".partners_page_filter_list_item span").removeClass("active");
        $(".partners_col").removeClass("hidden");
    });

    $('input[type="tel"]').inputmask("+7(999)999-99-99");

    // $('.modal-file_result input').change(function() {
        
    //     // $('#selected_filename').text($('#fileinput')[0].files[0].name);
    // });

    $(document).on('change', '#fileChange', function() {
        $(".modal-file_result").text($(this)[0].files[0].name);
    });

    // $('').on("change", function(){ 
    //     console.log($(this)[0].files[0].name);
    // });

});