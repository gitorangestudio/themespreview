$( document ).ready(function() {
  // Add class Active to main menu items
  jQuery(function($) {
      var path = window.location.href; 
      $('#navbarSupportedContent ul a').each(function() {
        if (this.href === path) {
          $(this).addClass('active');
          $(this).parents('li').addClass('active');
        }
      });

    // Go to href when click event
    $('#navbarSupportedContent ul li a.dropdown-toggle').on('click', function(){
      var $href = $(this).attr('href');
      window.location = $href;
    });

    // when you hover a toggle show its dropdown menu
    $(".navbar .dropdown-toggle").hover(function () {
      $(this).parent().toggleClass("show");
      $(this).parent().find(".dropdown-menu").toggleClass("show"); 
    });

      // hide the menu when the mouse leaves the dropdown
    $( ".navbar .dropdown-menu" ).mouseleave(function() {
      $(this).removeClass("show");  
    });
     
  });

  // Sticky Navbar (Add class on scroll)
  var yourNavigation = $("#navbarSupportedContent");
  stickyDiv = "sticky";
  heightHeader = $('#header').height();
  header = $('#header');

  $(window).scroll(function() {
    if ($(this).scrollTop() > heightHeader) {
      yourNavigation.addClass(stickyDiv);
      header.addClass(stickyDiv);
    } else {
      yourNavigation.removeClass(stickyDiv);
      header.removeClass(stickyDiv);
    }
  });

});