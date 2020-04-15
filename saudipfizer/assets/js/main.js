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