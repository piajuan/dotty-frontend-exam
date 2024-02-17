import $ from 'jquery';

const functions = (function () {

    // Slideshow tabs
    const tabs = function () {
        // Show the first tab and hide the rest
        $('#tabs-nav .tabs__item:first-child .tabs__link').addClass('active');
        $('.tabs__content').hide();
        $('.tabs__content:first').show();

        // handle click
        $('#tabs-nav .tabs__link').click(function(){
            $('#tabs-nav .tabs__link').removeClass('active');
            $(this).addClass('active');
            $('.tabs__content').hide();
            
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });
    };

    function initialize() {
        tabs();
    }

    return {
        init: initialize()
    };

})();

$(document).ready(function () {
    functions.init;
});