jQuery(function ($) {

  var $toggle = $('.nav-toggle');
  var $menu = $('.nav-menu');

  $toggle.click(function() {
    $menu.toggleClass('is-active');
  });

  
});
