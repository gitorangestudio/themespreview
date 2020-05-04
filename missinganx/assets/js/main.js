/*owl carousel config*/
$owl = $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    dotsEach: 1,
    center: true,
});
$owl.trigger('refresh.owl.carousel');


/*modal hide listener to pause video*/
$('#modalVideo').on('hide.bs.modal', function() {
    console.log('hide')
    $('iframe').attr('src', $('iframe').attr('src'));
});
/*dropdown image toggle */
$('.dropdown').on('show.bs.dropdown', function() {
    $('header .navbar .dropdown .toggle-icon').css("background-image", "url(assets/images/hamburger-menu-close-removebg-preview.png)")
})
$('.dropdown').on('hide.bs.dropdown', function() {
    $('header .navbar .dropdown .toggle-icon').css("background-image", "url(assets/images/hamburger-menu-removebg-preview.png)")
})


/* menu links scroll animation*/
$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
});
document.querySelectorAll('a[href^="#"]').forEach($anchor => {
    $anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/* buttons scroll animation*/
$("#scrollHolder .scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-q").offset().top
    }, 1000);
});

$("#scrollHolder-2 .scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contentHolder-2").offset().top
    }, 1000);
});

$("#scrollHolder-3 .scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#videoHolder").offset().top
    }, 1000);
});