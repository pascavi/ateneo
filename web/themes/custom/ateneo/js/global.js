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


  Drupal.behaviors.ga = {
    attach: function (context, settings) {
      $('.ga-event').click(function (e) {
        var tag = $(this);
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
          'event': 'ga-event',
          'category': tag.data('category'),
          'action': tag.data('action'),
          'label': tag.data('label')
        });
      });

      $('.extra-link').click(function (e) {
        var tag = $(this);
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
          'event': 'ga-event',
          'category': "Actividad",
          'action': "Enlaces",
          'label': "Listado"
        });
      });

      $('.js-form-submit').click(function (e) {
        var tag = $(this);
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
          'event': 'ga-event',
          'category': "Contacto",
          'action': "Subscripción",
          'label': "Pop-up"
        });
      });

    }
  };



  Drupal.behaviors.cookies = {
    attach: function (context, settings) {
      var cookie = Cookies.get('cookie-notice');
      if (typeof  cookie == 'undefined') {
        jQuery('#cookies').show();
        jQuery('a').click(function () {
          remove_cookie_notice();
        });
        jQuery(window).scroll(function () {
          setTimeout(remove_cookie_notice, 3000);
        });
      }

      function remove_cookie_notice() {
        jQuery('#cookies').fadeOut();
        Cookies.set('cookie-notice', 'yes', {expires: 1000});
      }

    }
  };

})(jQuery, Drupal);


/*! js-cookie v2.1.0 | MIT */
!function (a) {
  if ("function" == typeof define && define.amd)define(a); else if ("object" == typeof exports)module.exports = a(); else {
    var b = window.Cookies, c = window.Cookies = a();
    c.noConflict = function () {
      return window.Cookies = b, c
    }
  }
}(function () {
  function a() {
    for (var a = 0, b = {}; a < arguments.length; a++) {
      var c = arguments[a];
      for (var d in c)b[d] = c[d]
    }
    return b
  }

  function b(c) {
    function d(b, e, f) {
      var g;
      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if (f = a({path: "/"}, d.defaults, f), "number" == typeof f.expires) {
            var h = new Date;
            h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires), f.expires = h
          }
          try {
            g = JSON.stringify(e), /^[\{\[]/.test(g) && (e = g)
          } catch (i) {
          }
          return e = c.write ? c.write(e, b) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), b = encodeURIComponent(String(b)), b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), b = b.replace(/[\(\)]/g, escape), document.cookie = [b, "=", e, f.expires && "; expires=" + f.expires.toUTCString(), f.path && "; path=" + f.path, f.domain && "; domain=" + f.domain, f.secure ? "; secure" : ""].join("")
        }
        b || (g = {});
        for (var j = document.cookie ? document.cookie.split("; ") : [], k = /(%[0-9A-Z]{2})+/g, l = 0; l < j.length; l++) {
          var m = j[l].split("="), n = m[0].replace(k, decodeURIComponent), o = m.slice(1).join("=");
          '"' === o.charAt(0) && (o = o.slice(1, -1));
          try {
            if (o = c.read ? c.read(o, n) : c(o, n) || o.replace(k, decodeURIComponent), this.json)try {
              o = JSON.parse(o)
            } catch (i) {
            }
            if (b === n) {
              g = o;
              break
            }
            b || (g[n] = o)
          } catch (i) {
          }
        }
        return g
      }
    }

    return d.get = d.set = d, d.getJSON = function () {
      return d.apply({json: !0}, [].slice.call(arguments))
    }, d.defaults = {}, d.remove = function (b, c) {
      d(b, "", a(c, {expires: -1}))
    }, d.withConverter = b, d
  }

  return b(function () {
  })
});
