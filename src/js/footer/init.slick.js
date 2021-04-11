(function ($) {
  const $feature_carousel = $(".feature-box-carousel");
  const $feature_controls = $(".feature-box-carousel__controls");
  const $prev = $feature_controls.find(".prev");

  if ($feature_carousel.length) {
    $feature_carousel.each(function () {
      var $feature_controls = $(this).find(".feature-box-carousel__controls");
      var $carousel = $(this).find(".js-feature-box-carousel");
      var $prev = $feature_controls.find(".prev");
      var $next = $feature_controls.find(".next");

      $carousel.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        prevArrow: $prev,
        nextArrow: $next,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }

  const $recent = $(".recently-viewed-carousel");

  if ($recent.length) {
    var controls = $recent.find(".slick-controls");
    var prev = controls.find(".prev");
    var next = controls.find(".next");
    var carousel = $recent.find(".js-recently-viewed");

    if (carousel.length) {
      carousel.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        prevArrow: prev,
        nextArrow: next,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }

  const $hero = $(".js-home-hero");

  if ($hero.length) {
    $hero.slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
    });
  }
})(jQuery);
