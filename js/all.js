$(document).ready(function () {

    // header color change
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 90) {
            $(".gototop").fadeIn(1000);
        }
        else {
            $(".gototop").fadeOut();
        }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 350) {
                $(".news_text").addClass("news_text_animate");
                $(".news_box").addClass("news_box_animation");
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 1000) {
                $(".about_skew_animation").addClass("about_skew_animationadd");
                $(".about_title").addClass("about_title_animation");
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 2000) {
                $(".skew_animate").addClass("skew_animateadd");
                $(".service_pic .pic").addClass("service_pic_animate");
                $(".service_tilte").addClass("service_tilte_animaton");
                
            }
        var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 2500) {
                $(".contect_animate").addClass("contect_animateadd");
                $(".title").addClass("container_title_animation");
                $(".container_text").addClass("container_text_animation");

            }
    });
    
    $('.gototop').click(function () {
        $('html,body').animate({
            scrollTop: $('html').offset().top
        });

    });


})
