(function ($) {
  const nav = $(".cc-nav__list");
  const hamburger = $(".js-hamburger");
  const header = $(".cc-header");

  hamburger.on("click", function () {
    if (nav.hasClass("is-open")) {
      CloseMenu();
    } else {
      OpenMenu();
    }
  });

  function OpenMenu() {
    nav.addClass("is-open");
    hamburger.addClass("is-active");
    header.addClass("nav-open");
  }

  function CloseMenu() {
    nav.removeClass("is-open");
    hamburger.removeClass("is-active");
    header.removeClass("nav-open");
  }
})(jQuery);
