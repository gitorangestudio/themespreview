(function() {

    /*------------------------------
        @PAGE-LOAD
    -------------------------------*/
    if ($(".page-load").length > 0) {
        $('.page-load').fadeOut(1000);
    }


    /*------------------------------
        @HAMBURGER-MENU
    -------------------------------*/
    if ($(".menu-wrapper").length > 0) {
        $('.menu-wrapper').on('click', function() {
            $('.hamburger-menu').toggleClass('animate');
            $(this).before().toggleClass("bg-color-hightlight");
            $(".navigation-content").toggleClass("open");
            return false;
        })
    }

    if ($(".cookie-btn").length > 0) {

        $(".cookie-btn").on("click", function() {
            $(".cookie-accept").fadeOut();
        });
    }


    /*------------------------------
        @CUSTOM SCROLLBAR
    -------------------------------*/
    if ($(".max-height-content").length > 0) {
        $(".max-height-content").mCustomScrollbar();
    }

})();


/* FIXED-NAVIGATION */
/*var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");
window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        header.classList.remove("slideDown");
        header.classList.add("slideUp");
    } else if (new_scroll_position > last_scroll_position) {
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
    }
    new_scroll_position = last_scroll_position;
}); */


//EXTERNAL LINKS ALERT
$('a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
}).click(function(e) {
    var external = $(this).data("external");
    console.log(external);
    if (external != 'no') {
        if (!confirm("U verlaat nu TBEwijzer.nl. Links naar sites buiten Pfizer worden alleen voorgesteld als bron van informatie voor de gebruiker. Pfizer draagt geen verantwoordelijkheid voor de inhoud van de gelinkte sites.")) {
            e.preventDefault();
        };
    }
});


//TOP TO PAGE
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $(".top-to-page").addClass("visible");
    } else {
        $(".top-to-page").removeClass("visible");
    }
});

$(".auto-scroll-to-top").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1400);
});

$(document).on('scroll', function(e) {
    $('div').each(function() {
        if ($(this).offset().top < window.pageYOffset + 10 &&
            $(this).offset().top +
            $(this).height() > window.pageYOffset + 10
        ) {
            var data = $(this).data('id');
            var title = $(this).data('title');
            if (data != undefined && "#" + data != window.location.hash) {
                //window.location.hash = data;
                history.pushState(null, null, '#' + data);
                document.title = title + " | TBE WIJZER";
            }
        }
    });
});


//Click anywhere to close the menu
$(window).on('click', function() {
    if ($(".navigation-content").hasClass("open")) {
        $('.hamburger-menu').toggleClass('animate');
        $('.menu-wrapper').before().toggleClass("bg-color-hightlight");
        $(".navigation-content").toggleClass("open");
    }
})