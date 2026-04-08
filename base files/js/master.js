/**
 * Avista Real Estate Mazatlán — Master JS Init
 * Runs after all scripts load. Initialises common plugins.
 */
(function ($) {
  'use strict';

  // ── AOS (Animate On Scroll) ──────────────────────────────────────────
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 1000, easing: 'ease-out-quad' });
  }

  // ── WOW.js ──────────────────────────────────────────────────────────
  if (typeof WOW !== 'undefined') {
    new WOW({ animateClass: 'animated', offset: 100 }).init();
  }

  // ── Nice Select (Avista form selects) ───────────────────────────────
  if (typeof $.fn.niceSelect !== 'undefined') {
    $('select').niceSelect();
  }

  // ── Header scroll transition ─────────────────────────────────────────
  var $header = $('#site-header, .site-header');
  $(window).on('scroll.header', function () {
    if ($(this).scrollTop() > 50) {
      $header.addClass('site-header-scrolled');
    } else {
      $header.removeClass('site-header-scrolled');
    }
  });

  // ── Slick testimonials slider (if present) ───────────────────────────
  if (typeof $.fn.slick !== 'undefined') {
    $('.testi-slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
    // Custom prev/next
    $(document).on('click', '.testi-prev', function () {
      $('.testi-slick-slider').slick('slickPrev');
    });
    $(document).on('click', '.testi-next', function () {
      $('.testi-slick-slider').slick('slickNext');
    });
  }

  // ── Magazine popup ───────────────────────────────────────────────────
  $(document).on('click', '.magazine-click-to-read', function (e) {
    e.preventDefault();
    $('#magazinePopup').addClass('is-open');
    $('body').addClass('body-overflow');
  });
  $(document).on('click', '.magazine-close, .magazinePopup-backdrop', function () {
    $('#magazinePopup').removeClass('is-open');
    $('body').removeClass('body-overflow');
  });

  // ── Video popup (Danny / AJ section) ────────────────────────────────
  $(document).on('click', '.aios-video-popup, .video-link a', function (e) {
    e.preventDefault();
    var src = $(this).data('src') || $(this).attr('href');
    if (!src) return;
    var $overlay = $('<div class="aios-video-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:9999;display:flex;align-items:center;justify-content:center;">' +
      '<div style="position:relative;width:80vw;max-width:960px;">' +
      '<button class="aios-video-close" style="position:absolute;top:-40px;right:0;background:none;border:none;color:#fff;font-size:24px;cursor:pointer;font-family:var(--font-family-title);letter-spacing:.2em;">&#x2715; CLOSE</button>' +
      '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">' +
      '<iframe src="' + src + '" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" allow="autoplay" allowfullscreen></iframe>' +
      '</div></div></div>');
    $('body').append($overlay).addClass('body-overflow');
    $overlay.on('click', '.aios-video-close', function () {
      $overlay.remove();
      $('body').removeClass('body-overflow');
    });
  });

  // ── Lazy load images ─────────────────────────────────────────────────
  $('img.lazyload[data-src]').each(function () {
    $(this).attr('src', $(this).data('src'));
  });

}(jQuery));
