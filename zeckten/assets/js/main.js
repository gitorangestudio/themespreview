/* global $ , alert, console */

    // when scroll add this class to navbar
    $(window).scroll(function () {
        // will appear
        if ($(window).scrollTop() >= 50) {
            $('.nav').addClass('navbar-scroll')
        }
        // disappear
        else{
            $('.nav').removeClass('navbar-scroll')
        }
    });
   


    //link to section
  
    $('.side-menu ul li a').click(function (e) {
        e.preventDefault();
        datascroll=   $(this).data('scroll')
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
        }, 1000,(function () {
            if ($(document).width() <= 768) {
                $('.side-menu ul li ').slideUp('slow');
                
            } 
    }));
});



    // scroll of arrow in header 
    $('#header .arrow span').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 100
        });
    });
    

    //li add active class
    $(function(){
            $('#header .nav .middle ul li a').on('click', function(){
                $(this).addClass('active').siblings().removeClass('active');
                $('.side-menu ul li a').addClass('active').siblings().removeClass('active');
            });
            $('.full-nav .middle ul li a').on('click', function(){
                 $(this).addClass('active').siblings().removeClass('active');
                 $('.side-menu ul li a').addClass('active').siblings().removeClass('active');

            });
            $('.side-menu ul li a').on('click', function(){
                $(this).addClass('active').siblings().removeClass('active');
           });
    });




    // close icon and menu icon
    $(function () {
        $('.menu-icon').on('click', function() {
            $('.close').css('display','block');
            $('.menu-icon').css('display','none');
            $('#header .nav .middle').addClass('open');
            $('.full-nav .full-navbar .middle').addClass('open');
            
        });

        $('.close').on('click', function() {
            $('.menu-icon').css('display','block');
            $('.close').css('display','none');
            $('#header .nav .middle').removeClass('open');
            $('.full-nav .full-navbar .middle').removeClass('open');
       
         });

            $('#header .nav .middle li').on('click', function() {
                $(this).toggleClass('op');
                var subMenuHeight=$(this).find('.second-menu').outerHeight();       
                $(this).find('.second-menu').slideToggle();
                if($(this).hasClass('op')){
                    $(this).css('margin-bottom','0');
                }else{
                    $(this).css('margin-bottom',subMenuHeight+'px');
            }
          });
    
            $('.full-nav .full-navbar .middle li').on('click', function() {
                $(this).toggleClass('op');
                var subMenuHeight=$(this).find('.second-menu').outerHeight();       
                $(this).find('.second-menu').slideToggle();
                if($(this).hasClass('op')){
                    $(this).css('margin-bottom','0');
                }else{
                    $(this).css('margin-bottom',subMenuHeight+'px');
                }
            });

       


});
