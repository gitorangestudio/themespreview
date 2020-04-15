$( document ).ready(function() {
    // Sidebar Toggle
    $('#layout-swr .icon-cog').on('click', function(){
        $(this).toggleClass("open-swr");
        $('#layout-swr .box-layout').toggleClass("open-swr");
    });

    // Aplly Background Color On Theme
    $('#layout-swr .block-switcher.Background-color-swr button').on('click', function(){
        var $selectedColor = $(this).attr('data-value');
        $(this).parents('.Background-color-swr').find('button.active').removeClass('active');
        $(this).addClass('active');
        $('body').removeClassRegEx('theme-');
        $('body').addClass('theme-' + $selectedColor);
        $('.bg-swr-el').css('background-color', '#' + $selectedColor);
    });

    // Aplly Background Color On Components
    $('#layout-swr .block-switcher.components-color-swr button').on('click', function(){
        var $selectedColor = $(this).attr('data-value');
        $(this).parents('.components-color-swr').find('button.active').removeClass('active');
        $(this).addClass('active');
        $('body').removeClassRegEx('selected-');
        $('body').addClass('selected-' + $selectedColor);
        $('.bg-swr-el-com').css('background-color', '#' + $selectedColor);
    });

    // Aplly font On Theme
    $('#layout-swr .block-switcher.fonts-family-swr button').on('click', function(){
        var $selectedFont = $(this).attr('data-font');
        $(this).parents('.fonts-family-swr').find('button.active').removeClass('active');
        $(this).addClass('active');
        $('body').removeClassRegEx('font-');
        $('body').addClass('font-' + $selectedFont);
    });

    // remove class regex expression function
    $.fn.removeClassRegEx = function(regex) {
        var classes = $(this).attr('class');
        if (!classes || !regex) return false;
        var classArray = [];
        classes = classes.split(' ');
        for (var i = 0, len = classes.length; i < len; i++)
        if (!classes[i].match(regex)) classArray.push(classes[i]);
        $(this).attr('class', classArray.join(' '));
    };
});