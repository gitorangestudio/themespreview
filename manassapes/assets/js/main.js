
let ele = document.querySelector('#header .menu__wrapper .menu__toggle');
let nav = document.querySelector('#header .menu__wrapper  .menu');
let arrow = document.getElementById('arrowIcon');
let ref_con = document.getElementById('ref_content');

function toggle_menu () {
  if ( nav.classList.contains('visible') ){
    nav.classList.remove('visible');
    nav.classList.add('hidden');
    nav.parentElement.style.backgroundColor='transparent';
    document.getElementById('hamburger').classList.remove('action');
    document.getElementById('titleMenu').classList.add('action');
    document.getElementById('titleClose').classList.remove('action');
  }else {
    nav.classList.remove('hidden');
    nav.classList.add('visible');
    nav.parentElement.style.backgroundColor='#f1f1f1';
    document.getElementById('hamburger').classList.add('action');
    document.getElementById('titleMenu').classList.remove('action');
    document.getElementById('titleClose').classList.add('action');
  }
}


function openRef () {
    if ( arrow.classList.contains('open') ){
      arrow.classList.remove('open');
      ref_con.classList.remove('open');
    }else {
        arrow.classList.add('open');
        ref_con.classList.add('open');
    }
}






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

  // Sticky header (Add class on scroll)
  stickyDiv = "fixed";
  heightHeader = $('#header').height();
  header = $('#header');
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      header.addClass(stickyDiv);
    } else {
      header.removeClass(stickyDiv);
    }
  });

//scroll arrow up
    $('#toTop').click(function() {
        window.scrollTo(0,0);
    });


});


