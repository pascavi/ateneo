//*
(function ($, Drupal) {


  Drupal.behaviors.slideMenu = {
    attach: function (context, settings) {

      $('.js-show-menu').click(function () {
        $('body').addClass('no-scroll');
        $('.slide-menu').show();
        $('.overlay').show();
        setTimeout(function () {
          $('.slide-menu').addClass('slide-menu--visible');
          $('.overlay').addClass('overlay--visible');
        }, 100);
      });

      $('.js-hide-overlay').click(function (e) {
        e.preventDefault();
        $('body').removeClass('no-scroll');
        $('.slide-menu').removeClass('slide-menu--visible');
        $('.overlay').removeClass('overlay--visible');
        $('.follow-us').removeClass('follow-us--visible');
        setTimeout(function () {
          $('.slide-menu').hide();
          $('.follow-us').hide();
          $('.overlay').hide();
        }, 500);
      });


      $('.js-show-follow-us').click(function (e) {
        e.preventDefault();
        $('.slide-menu').removeClass('slide-menu--visible');
        $('.follow-us').show();
        $('.overlay').show();
        $('#edit-mergevars-email').attr('placeholder','E-mail');
        setTimeout(function () {
          $('.follow-us').addClass('follow-us--visible');
          $('.overlay').addClass('overlay--visible');
        }, 100);


      });

      $('.follow-us').bind('touchmove', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });

      $('.overlay').bind('touchmove', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });

     // $('.js-show-follow-us').trigger('click');

    }
  };

  Drupal.behaviors.scroll = {
    attach: function (context, settings) {

      $('.js-scroll').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
      });
    }
  };


})(jQuery, Drupal);
