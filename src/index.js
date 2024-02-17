import $ from 'jquery';

const functions = (function () {

    // Slideshow tabs
    const tabs = function () {
        $('#tabs-nav .tabs__item:first-child .tabs__link').addClass('active');
        $('.tabs__content').hide();
        $('.tabs__content:first').show();

        $('#tabs-nav .tabs__link').click(function(){
            $('#tabs-nav .tabs__link').removeClass('active');
            $(this).addClass('active');
            $('.tabs__content').hide();
            
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });
    };

    // inViewport 
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight() / 2;
        var viewportTop = $(window).scrollTop();
        var viewportHalf = viewportTop + $(window).height() / 2;
        return elementBottom > viewportTop && elementTop < viewportHalf;
    };

    // Section pagination
    const sectionPagination = function() {
        $(window).on('load resize scroll', function() {
            $('#section-pagination .pagination__bullet').each(function() {
                var href = $(this).attr('href');
                var target = $(href);
        
                if (target.isInViewport()) {
                    $('#section-pagination .pagination__bullet').removeClass('active');
                    $(this).addClass('active');
                } 
            });
        });
    }

    // Hero video
    const heroVideo = function() {
        $('.play-hero-btn').on('click', function() {
            $('#hero-video').fadeIn('slow');
            $('#hero-video').play();
        })

        $(window).on('scroll', function() {
            // Check if the window has been scrolled down
            if ($(this).scrollTop() > 0) {
                $('#hero-video').fadeOut().pause(); // Hide the video
                $('#hero-video').currentTime = 0;
            } 
        });
    }

    function initialize() {
        tabs();
        sectionPagination();
        heroVideo();
    }

    return {
        init: initialize()
    };

})();

$(document).ready(function () {
    functions.init;
});