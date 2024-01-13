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

    if ($(window).width() > 1199) {
        $('.career_culture_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            speed: 500,
            fade: false,
            prevArrow: $('.career_culture_title_arrows_prev'),
            nextArrow: $('.career_culture_title_arrows_next')
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

    $(document).on('change', '#fileChange', function() {
        $(".modal-file_result").text($(this)[0].files[0].name);
    });

    $(".career_offices_btns_item").click(function() {
        var id = $(this).attr("id");
        $(".career_offices_btns_item").removeClass("active");
        $(this).addClass("active");
        $(".career_offices_text").removeClass("active");
        $(".career_offices_img").removeClass("active");
        $(".career_offices").find("[data-target='" + id + "']").each(function() {
            $(this).addClass("active");
        });
    });

    $(".career_hero").click(function() {
        $(this).toggleClass("active");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".career_hero").offset().top
        }, 700);
    });

    $(".cybersecurity_info_item_title").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".cybersecurity_info_item_body").slideToggle();
    });

    $(".cybersecurity_implementation_item_title").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".cybersecurity_implementation_item_body").slideToggle();
    });

    $('.cybersecurity_slider_block').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        fade: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.post_slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.post_slider_nav_slider'
    });

    $('.post_slider_nav_slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.post_slider_for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.about_timeline_block_for').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        cssEase: 'linear',
        speed: 300,
        infinite: false,
        centerMode:true,
        prevArrow: $('.about_timeline_block_nav_arrows_prev'),
        nextArrow: $('.about_timeline_block_nav_arrows_next'),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    var transform = 0;
    $(".about_timeline_block_for .slick-slide").each(function() {
        $(this).find(".about_timeline_block_for_item").css('transform', 'translate(0px, -' + transform + 'px)');
        if ($(window).width() < 767) {
            transform += 68;
        } else if ($(window).width() > 767 && $(window).width() < 991) {
            transform += 73;
        } else if ($(window).width() > 991 && $(window).width() < 1199) {
            transform += 64;
        } else if ($(window).width() > 1199 && $(window).width() < 1399) {
            transform += 76;
        } else if ($(window).width() > 1399 && $(window).width() < 1600) {
            transform += 89;
        } else {
            transform += 99;
        }
    });
    
    $('.about_timeline_block_for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if ($(window).width() < 767) {
            var num = 68;
        } else if ($(window).width() > 767 && $(window).width() < 991) {
            var num = 73;
        } else if ($(window).width() > 991 && $(window).width() < 1199) {
            var num = 64;
        } else if ($(window).width() > 1199 && $(window).width() < 1399) {
            var num = 76;
        } else if ($(window).width() > 1399 && $(window).width() < 1600) {
            var num = 89;
        } else {
            var num = 99;
        }
        var result = num*nextSlide;
        $(".slick-slide").css('transform', 'translate(0px,' + result + 'px)');
        $(".about_timeline_block_nav_slider_item").removeClass("active");
        $(".about_timeline_block_nav_slider_item").eq(nextSlide).addClass("active");
    });

    $(".about_timeline_block_nav_slider_item").click(function() {
        $(".about_timeline_block_nav_slider_item").removeClass("active");
        $(this).addClass("active");
        var index = $('.about_timeline_block_nav_slider_item').index(this);
        $('.about_timeline_block_for').slick('slickGoTo', index);
    });

    $(".cybersecurity").addClass("animation");

});