function createCookie(c, d, e) {
  var a = "";
  if (e) {
    var b = new Date();
    b.setTime(b.getTime() + e * 24 * 60 * 60 * 1000);
    a = "; expires=" + b.toUTCString();
  }
  document.cookie = c + "=" + d + a + "; path=/";
}
function readCookie(b) {
  var e = b + "=";
  var a = document.cookie.split(";");
  for (var d = 0; d < a.length; d++) {
    var f = a[d];
    while (f.charAt(0) == " ") {
      f = f.substring(1, f.length);
    }
    if (f.indexOf(e) == 0) {
      return f.substring(e.length, f.length);
    }
  }
  return null;
}
function eraseCookie(a) {
  createCookie(a, "", -1);
}
function cookies() {
  var a = readCookie("cookies-allowed");
  if (a === null) {
    jQuery("#cookie-msg").removeClass("hidden").slideDown(400);
  }
  jQuery("body").on("click", "#cookie-msg-close", function (b) {
    b.preventDefault();
    createCookie("cookies-allowed", "cookies allowed Bespoke Hotels", 365);
    jQuery("#cookie-msg").addClass("hidden").slideUp(400);
  });
  jQuery("#cookie-msg-close").on("click", function (b) {
    b.preventDefault();
    createCookie("cookies-allowed", "cookies allowed Bespoke Hotels", 365);
    jQuery("#cookie-msg").addClass("hidden").slideUp(400);
  });
}
function mainInit() {
  cookies();
  var i = jQuery("#toThetop");
  i.on("click", function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 400);
  });
  var k = jQuery("#expand-booking-options");
  var n = k.find(".open");
  var g = k.find(".closed");
  var h = jQuery("#availability-search");
  k.off().on("click", function (o) {
    o.preventDefault();
    h.toggleClass("hidden");
    n.toggleClass("hidden");
    g.toggleClass("hidden");
  });
  jQuery(".carousel").carousel({ interval: 6000 });
  var c = jQuery(".featured-image-container > a");
  c.off().on({
    mouseenter: function () {
      var o = jQuery(this).find(".hover").removeClass("hidden");
    },
    mouseleave: function () {
      var o = jQuery(this).find(".hover").addClass("hidden");
    },
  });
  var j = jQuery("#more-apartment-options");
  var a = jQuery("#less-apartment-options");
  var m = jQuery(".category-results .extra-category-option");
  var l = j.closest(".col-xs-6");
  j.off().on("click", function (o) {
    o.preventDefault();
    l.addClass("hidden");
    m.addClass("show");
  });
  a.off().on("click", function (o) {
    o.preventDefault();
    l.removeClass("hidden");
    m.removeClass("show");
  });
  var d = jQuery(".hotel-features .read-more");
  var e = jQuery(".hotel-features .show-less");
  var b = jQuery(".hotel-features .listed-features");
  d.off().on("click", function () {
    jQuery(this).addClass("hidden");
    b.addClass("show");
  });
  e.off().on("click", function () {
    d.removeClass("hidden");
    b.removeClass("show");
  });
  dtScreensize();
  jQuery(document).on("click", ".more-details", function (r) {
    r.preventDefault();
    var o = jQuery(r.target);
    var q = o.closest(".room");
    var p = q.attr("id");
    if (q.hasClass("open")) {
      jQuery(".room-details").each(function () {
        jQuery(this).addClass("hidden");
      });
      q.removeClass("open");
      o.removeClass("active");
    } else {
      jQuery(".room-details").each(function () {
        jQuery(this).addClass("hidden");
      });
      jQuery(".more-details").each(function () {
        jQuery(this).removeClass("active");
      });
      jQuery(".room-room").each(function () {
        jQuery(this).removeClass("open");
      });
      jQuery(".room-details." + p).removeClass("hidden");
      q.addClass("open");
      o.addClass("active");
    }
  });
  var f;
  jQuery(window).on("resize", function (o) {
    clearTimeout(f);
    f = setTimeout(function () {
      dtScreensize();
    }, 250);
  });
  $(".new-search-button").click(function () {
    tetherToSearchPage();
  });
}
function dtScreensize() {
  var a = jQuery(window).width();
  if (a > 991) {
    initDesktop();
  } else {
    initMobile(a);
  }
}
function initDesktop() {
  var C = jQuery("#body");
  if (C.hasClass("home")) {
    C.css("background", "none");
  }
  if (!C.hasClass("minisite")) {
    $("#nav-icon-bars-main, .navbar, #nav-icon-bars").addClass("open");
    $(".navigation-icon").addClass("active");
  }
  var av = jQuery(".navigation-icon");
  var ah = av.find("#nav-icon-bars-main");
  var ay = jQuery("#nav-icon-bars");
  var ao = jQuery(".navbar");
  var aT = ao.find(".navigation");
  var f = aT.find("#Hotels");
  var h = aT.find("#Brands");
  var D = aT.find("#Collections");
  var aM = jQuery(".Signin");
  var U = jQuery(".Businesses");
  var c = jQuery(".return-main-menu");
  var ac = ao.find("#UK");
  var p = ao.find("#INTERNATIONAL");
  var aK = ao.find(".dropdown-outer");
  var aa = ao.find(".customer-dropdown");
  var d = aK.find(".hotels-dropdown");
  var aW = aK.find(".brands-dropdown");
  var M = aK.find(".collections-dropdown");
  var y = aa.find(".sign-in-dropdown");
  var z = aa.find(".business-dropdown");
  var aJ = d.find(".uk-dropdown");
  var aE = d.find(".international-dropdown");
  av.off().on("click", function (aY) {
    if (ay) {
      ay.toggleClass("open");
    }
    ah.toggleClass("open");
    av.toggleClass("active");
    ao.toggleClass("open");
    if (!aK.hasClass("hidden")) {
      aK.addClass("hidden");
    }
    if (!d.hasClass("hidden")) {
      d.addClass("hidden");
    }
    if (!y.hasClass("hidden")) {
      aa.addClass("hidden");
      y.addClass("hidden");
      ao.addClass("open");
    }
    if (!z.hasClass("hidden")) {
      aa.addClass("hidden");
      z.addClass("hidden");
      ao.addClass("open");
    }
  });
  f.off().on("click", function (aY) {
    aY.preventDefault();
    if (!aW.hasClass("hidden")) {
      aW.addClass("hidden");
      h.removeClass("active");
      d.removeClass("hidden");
      f.addClass("active");
    } else {
      if (!M.hasClass("hidden")) {
        M.addClass("hidden");
        D.removeClass("active");
        d.removeClass("hidden");
        f.addClass("active");
      } else {
        if (!d.hasClass("hidden")) {
          if (d.hasClass("hidden")) {
            d.removeClass("hidden");
            f.addClass("active");
          } else {
            d.addClass("hidden");
            f.addClass("active");
          }
        } else {
          d.removeClass("hidden");
          f.addClass("active");
          aK.removeClass("hidden");
        }
      }
    }
    aK.removeClass("hidden");
  });
  ac.off().on("click", function (aY) {
    aY.preventDefault();
    if (!aE.hasClass("hidden")) {
      aE.addClass("hidden");
      p.removeClass("active");
      aJ.removeClass("hidden");
      ac.addClass("active");
    } else {
      if (!aJ.hasClass("hidden")) {
        aJ.addClass("hidden");
        aJ.removeClass("active");
      } else {
        aJ.removeClass("hidden");
        ac.addClass("active");
      }
    }
  });
  p.off().on("click", function (aY) {
    aY.preventDefault();
    if (!aJ.hasClass("hidden")) {
      aJ.addClass("hidden");
      aJ.removeClass("active");
      aE.removeClass("hidden");
      p.addClass("active");
    } else {
      if (!aE.hasClass("hidden")) {
        aE.addClass("hidden");
        p.removeClass("active");
      } else {
        aE.removeClass("hidden");
        p.addClass("active");
      }
    }
  });
  h.off().on("click", function (aY) {
    aY.preventDefault();
    if (!d.hasClass("hidden")) {
      d.addClass("hidden");
      f.removeClass("active");
      aW.removeClass("hidden");
      h.addClass("active");
    } else {
      if (!M.hasClass("hidden")) {
        M.addClass("hidden");
        D.removeClass("active");
        aW.removeClass("hidden");
        h.addClass("active");
      } else {
        if (!aW.hasClass("hidden")) {
          aW.addClass("hidden");
          h.removeClass("active");
        } else {
          aW.removeClass("hidden");
        }
      }
    }
    aK.removeClass("hidden");
  });
  D.off().on("click", function (aY) {
    aY.preventDefault();
    if (!d.hasClass("hidden")) {
      d.addClass("hidden");
      f.removeClass("active");
      M.removeClass("hidden");
      D.addClass("active");
    } else {
      if (!aW.hasClass("hidden")) {
        aW.addClass("hidden");
        h.removeClass("active");
        M.removeClass("hidden");
        D.addClass("active");
      } else {
        if (!M.hasClass("hidden")) {
          M.addClass("hidden");
          D.removeClass("active");
        } else {
          M.removeClass("hidden");
        }
      }
    }
    aK.removeClass("hidden");
  });
  aM.off().on("click", function (aY) {
    aY.preventDefault();
    if (!z.hasClass("hidden")) {
      z.addClass("hidden");
      U.removeClass("active");
      y.removeClass("hidden");
      aM.addClass("active");
    } else {
      if (!y.hasClass("hidden")) {
        y.addClass("hidden");
        aM.removeClass("active");
        if (ao.hasClass("open")) {
          if (aa.hasClass("hidden")) {
            aa.addClass("hidden");
          } else {
            aa.removeClass("hidden");
          }
          if (aT.hasClass("hidden")) {
            aT.removeClass("hidden");
          } else {
            aT.addClass("hidden");
          }
          ao.removeClass("open");
        } else {
          ao.removeClass("open");
          aa.removeClass("hidden");
        }
      } else {
        if (ao.hasClass("open") && y.hasClass("hidden")) {
          if (aa.hasClass("hidden")) {
            aa.removeClass("hidden");
            aK.addClass("hidden");
            ao.addClass("open");
            y.removeClass("hidden");
          } else {
            if (!aK.hasClass("hidden")) {
              aK.addClass("hidden");
            }
          }
          if (aT.hasClass("hidden")) {
            aT.removeClass("hidden");
          } else {
            aT.addClass("hidden");
          }
          ah.toggleClass("open");
          av.toggleClass("active");
        } else {
          if (ao.hasClass("open") && !y.hasClass("hidden")) {
            if (aa.hasClass("hidden")) {
              aa.removeClass("hidden");
              ao.removeClass("open");
            } else {
              aK.addClass("hidden");
            }
            if (aT.hasClass("hidden")) {
              aT.removeClass("hidden");
            } else {
              aT.addClass("hidden");
            }
          } else {
            ao.addClass("open");
            aa.removeClass("hidden");
            y.removeClass("hidden");
            aM.addClass("active");
            aT.addClass("hidden");
          }
        }
      }
    }
  });
  U.off().on("click", function (aY) {
    aY.preventDefault();
    if (!y.hasClass("hidden")) {
      y.addClass("hidden");
      aM.removeClass("active");
      z.removeClass("hidden");
      U.addClass("active");
    } else {
      if (!z.hasClass("hidden")) {
        z.addClass("hidden");
        U.removeClass("active");
        if (ao.hasClass("open")) {
          if (aa.hasClass("hidden")) {
            aa.addClass("hidden");
          } else {
            aa.removeClass("hidden");
          }
          if (aT.hasClass("hidden")) {
            aT.removeClass("hidden");
          } else {
            aT.addClass("hidden");
          }
          ao.removeClass("open");
        } else {
          ao.removeClass("open");
          aa.removeClass("hidden");
        }
      } else {
        if (ao.hasClass("open") && z.hasClass("hidden")) {
          if (aa.hasClass("hidden")) {
            aa.removeClass("hidden");
            aK.addClass("hidden");
            ao.addClass("open");
            z.removeClass("hidden");
          } else {
            if (!aK.hasClass("hidden")) {
              aK.addClass("hidden");
            }
          }
          if (aT.hasClass("hidden")) {
            aT.removeClass("hidden");
          } else {
            aT.addClass("hidden");
          }
          ah.toggleClass("open");
          av.toggleClass("active");
        } else {
          if (ao.hasClass("open") && !z.hasClass("hidden")) {
            if (aa.hasClass("hidden")) {
              aa.removeClass("hidden");
              ao.removeClass("open");
            } else {
              aK.addClass("hidden");
            }
            if (aT.hasClass("hidden")) {
              aT.removeClass("hidden");
            } else {
              aT.addClass("hidden");
            }
          } else {
            ao.addClass("open");
            aa.removeClass("hidden");
            z.removeClass("hidden");
            U.addClass("active");
            aT.addClass("hidden");
          }
        }
      }
    }
  });
  var o = jQuery(".featured-panels");
  var i = o.find(".panel-controls");
  var aw = i.find(".arrow.left");
  var v = i.find(".arrow.right");
  var an = i.find(".panelOne");
  var aS = i.find(".panelTwo");
  var t = i.find(".panelThree");
  var aG = setInterval(N, 6000);
  var aL = o.find(".panel-outer-container");
  var P = o.find("#panel-1");
  var ag = o.find("#panel-2");
  var G = o.find("#panel-3");
  an.off().on("click", function () {
    i.find(".selected").removeClass("selected");
    jQuery(this).find(".border > span").addClass("selected");
    o.find(".panel.active").addClass("hide").removeClass("active");
    P.removeClass("hide").addClass("active");
    clearInterval(aG);
  });
  aS.off().on("click", function () {
    i.find(".selected").removeClass("selected");
    jQuery(this).find(".border > span").addClass("selected");
    o.find(".panel.active").addClass("hide").removeClass("active");
    ag.removeClass("hide").addClass("active");
    clearInterval(aG);
  });
  t.off().on("click", function () {
    i.find(".selected").removeClass("selected");
    jQuery(this).find(".border > span").addClass("selected");
    o.find(".panel.active").addClass("hide").removeClass("active");
    G.removeClass("hide").addClass("active");
    clearInterval(aG);
  });
  aw.off().on("click", function () {
    if (i.find(".selected").closest("li").hasClass("panelOne")) {
      var aY = i.find(".selected").removeClass("selected");
      t.find(".border > span").addClass("selected");
      o.find(".panel.active").addClass("hide").removeClass("active");
      G.removeClass("hide").addClass("active");
    } else {
      if (i.find(".selected").closest("li").hasClass("panelTwo")) {
        var aY = i.find(".selected").removeClass("selected");
        an.find(".border > span").addClass("selected");
        o.find(".panel.active").addClass("hide").removeClass("active");
        P.removeClass("hide").addClass("active");
      } else {
        if (i.find(".selected").closest("li").hasClass("panelThree")) {
          var aY = i.find(".selected").removeClass("selected");
          aS.find(".border > span").addClass("selected");
          o.find(".panel.active").addClass("hide").removeClass("active");
          ag.removeClass("hide").addClass("active");
        } else {
          var aY = i.find(".selected").removeClass("selected");
          an.find(".border > span").addClass("selected");
          o.find(".panel.active").addClass("hide").removeClass("active");
          P.removeClass("hide").addClass("active");
        }
      }
    }
  });
  v.off().on("click", function () {
    N();
  });
  function N() {
    if (i.find(".selected").closest("li").hasClass("panelOne")) {
      i.find(".selected").removeClass("selected");
      aS.find(".border > span").addClass("selected");
      o.find(".panel.active").addClass("hide").removeClass("active");
      ag.removeClass("hide").addClass("active");
    } else {
      if (i.find(".selected").closest("li").hasClass("panelTwo")) {
        i.find(".selected").removeClass("selected");
        t.find(".border > span").addClass("selected");
        o.find(".panel.active").addClass("hide").removeClass("active");
        G.removeClass("hide").addClass("active");
      } else {
        if (i.find(".selected").closest("li").hasClass("panelThree")) {
          i.find(".selected").removeClass("selected");
          an.find(".border > span").addClass("selected");
          o.find(".panel.active").addClass("hide").removeClass("active");
          P.removeClass("hide").addClass("active");
        } else {
          i.find(".selected").removeClass("selected");
          an.find(".border > span").addClass("selected");
          o.find(".panel.active").addClass("hide").removeClass("active");
          P.removeClass("hide").addClass("active");
        }
      }
    }
  }
  var b = jQuery(".panel");
  var w = b.find(".leftArrow");
  var am = b.find(".rightArrow");
  w.off().on("click", function () {
    var a1 = jQuery(this).closest(".row");
    var a0 = a1.find(".featured-hotels.active");
    var aY = a0.prev(".featured-hotels");
    if (aY.length == 0) {
      var aZ = a1.find(".featured-hotels").last();
      a0.removeClass("active");
      aZ.addClass("active");
    } else {
      a0.removeClass("active");
      aY.addClass("active");
    }
  });
  am.off().on("click", function () {
    var a1 = jQuery(this).closest(".row");
    var aZ = a1.find(".featured-hotels.active");
    var aY = aZ.next(".featured-hotels");
    if (aY.length == 0) {
      var a0 = a1.find(".featured-hotels").first();
      aZ.removeClass("active");
      a0.addClass("active");
    } else {
      aZ.removeClass("active");
      aY.addClass("active");
    }
  });
  var b = jQuery(".special-offers .panel");
  var w = b.find(".leftArrow");
  var am = b.find(".rightArrow");
  w.off().on("click", function () {
    var a1 = jQuery(this).closest(".row");
    var a0 = a1.find(".featured-offer.active");
    var aY = a0.prev(".featured-offer");
    if (aY.length == 0) {
      var aZ = a1.find(".featured-offer").last();
      a0.removeClass("active");
      aZ.addClass("active");
    } else {
      a0.removeClass("active");
      aY.addClass("active");
    }
  });
  am.off().on("click", function () {
    var a1 = jQuery(this).closest(".row");
    var aZ = a1.find(".featured-offer.active");
    var aY = aZ.next(".featured-offer");
    if (aY.length == 0) {
      var a0 = a1.find(".featured-offer").first();
      aZ.removeClass("active");
      a0.addClass("active");
    } else {
      aZ.removeClass("active");
      aY.addClass("active");
    }
  });
  var ar = jQuery(".scroller-controls .bespoke-spa");
  var O = jQuery(".scroller-controls .bespoke-family");
  var q = jQuery(".scroller-controls .bespoke-spa-break");
  var aI = jQuery(".scroller-controls .bespoke-golf");
  var au = jQuery(".scroller-controls .bespoke-snowflake-o");
  var aO = jQuery(".scroller-controls .bespoke-tennis");
  var u = jQuery(".scroller-controls .bespoke-star-0");
  var aF = jQuery(".scroller-controls .bespoke-weddings");
  var aD = jQuery(".scroller-controls .bespoke-restaurant");
  var Y = jQuery("#bespoke-spa");
  var H = jQuery("#bespoke-family");
  var aU = jQuery("#bespoke-spa-break");
  var aC = jQuery("#bespoke-golf");
  var s = jQuery("#bespoke-snowflake-o");
  var J = jQuery("#bespoke-tennis");
  var ai = jQuery("#bespoke-star-0");
  var aj = jQuery("#bespoke-weddings");
  var g = jQuery("#bespoke-restaurant");
  ar.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    Y.removeClass("hide");
  });
  O.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    H.removeClass("hide");
  });
  q.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    aU.removeClass("hide");
  });
  aI.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    aC.removeClass("hide");
  });
  au.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    s.removeClass("hide");
  });
  aO.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    J.removeClass("hide");
  });
  u.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    ai.removeClass("hide");
  });
  aF.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    aj.removeClass("hide");
  });
  aD.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    g.removeClass("hide");
  });
  var F = jQuery(".scroller-controls .bespoke-summer");
  var I = jQuery(".scroller-controls .bespoke-winter");
  var V = jQuery(".scroller-controls .bespoke-valentines");
  var aQ = jQuery(".scroller-controls .bespoke-newyear");
  var K = jQuery(".scroller-controls .bespoke-xmas");
  var ab = jQuery(".scroller-controls .bespoke-easter");
  var aP = jQuery(".scroller-controls .bespoke-walking");
  var x = jQuery(".scroller-controls .bespoke-spring");
  var B = jQuery(".scroller-controls .bespoke-activity");
  var j = jQuery(".scroller-controls .bespoke-romantic");
  var L = jQuery(".scroller-controls .bespoke-getaway");
  var n = jQuery(".scroller-controls .bespoke-spa-icon3");
  var aR = jQuery(".scroller-controls .bespoke-golf-1");
  var aX = jQuery("#bespoke-summer");
  var e = jQuery("#bespoke-winter");
  var E = jQuery("#bespoke-valentines");
  var af = jQuery("#bespoke-newyear");
  var aA = jQuery("#bespoke-xmas");
  var aV = jQuery("#bespoke-easter");
  var X = jQuery("#bespoke-walking");
  var ak = jQuery("#bespoke-spring");
  var aq = jQuery("#bespoke-activity");
  var W = jQuery("#bespoke-romantic");
  var Z = jQuery("#bespoke-getaway");
  var ae = jQuery("#bespoke-spa-icon3");
  var T = jQuery("#bespoke-golf-1");
  F.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    aX.removeClass("hide");
  });
  I.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    e.removeClass("hide");
  });
  V.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    E.removeClass("hide");
  });
  aQ.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    af.removeClass("hide");
  });
  K.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    aA.removeClass("hide");
  });
  ab.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    aV.removeClass("hide");
  });
  aP.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    X.removeClass("hide");
  });
  x.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    ak.removeClass("hide");
  });
  B.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    aq.removeClass("hide");
  });
  j.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    W.removeClass("hide");
  });
  L.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    Z.removeClass("hide");
  });
  n.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    ae.removeClass("hide");
  });
  aR.off().on("click", function () {
    jQuery(".special-offers .panel:not(hide)").addClass("hide");
    T.removeClass("hide");
  });
  var r = jQuery("#refine-icon .filter");
  var ax = jQuery(".mobile-options-header .bespoke-sliders");
  var l = jQuery(".refine-search-options");
  var ad = jQuery("#search-submit");
  var Q = jQuery("#show-all");
  var ap = jQuery("#body .innerWrapper");
  r.off().on("click", function () {
    l.toggle("slide");
    ap.toggleClass("right-align");
  });
  ax.off().on("click", function () {
    l.toggle("slide");
    ap.toggleClass("right-align");
  });
  ad.off().on("click", function () {
    l.toggle("slide");
    ap.toggleClass("right-align");
  });
  Q.off().on("click", function () {
    l.toggle("slide");
    ap.toggleClass("right-align");
  });
  var a = jQuery(".refine-search-options .options-one");
  var S = a.find(".col-lg-12");
  var m = a.find(".show-more");
  var az = a.find(".show-less");
  var at = jQuery(".refine-search-options .options-two");
  var aB = at.find(".col-lg-12");
  var R = at.find(".show-more");
  var k = at.find(".show-less");
  m.off().on("click", function () {
    jQuery(this).addClass("hidden");
    S.addClass("show");
    az.addClass("show");
  });
  az.off().on("click", function () {
    jQuery(this).removeClass("show");
    S.removeClass("show");
    m.removeClass("hidden");
  });
  R.off().on("click", function () {
    jQuery(this).addClass("hidden");
    aB.addClass("show");
    k.addClass("show");
  });
  k.off().on("click", function () {
    jQuery(this).removeClass("show");
    aB.removeClass("show");
    R.removeClass("hidden");
  });
  var al = jQuery("#header .toolbar");
  var aN = al.find(".sticky-nav");
  var A = jQuery(".navbar");
  var aH = jQuery("#toThetop");
  jQuery(document).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      C.addClass("sticky");
      A.addClass("sticky");
    } else {
      if (jQuery(this).scrollTop() < 1) {
        C.removeClass("sticky");
        A.removeClass("sticky");
      }
    }
  });
  jQuery(document).scroll(function () {
    if (jQuery(this).scrollTop() > 180) {
      aH.removeClass("hidden");
    } else {
      if (jQuery(this).scrollTop() < 180) {
        aH.addClass("hidden");
      }
    }
  });
}
function initMobile(k) {
  var y = jQuery("#body");
  var a = jQuery("#carousel");
  var l = a.find(".fill");
  var N = jQuery(".navigation-icon");
  var ac = N.find("#nav-icon-bars-main");
  var v = jQuery(".navbar");
  var V = v.find(".navigation");
  var Q = V.find("#Hotels");
  var G = V.find("#Brands");
  var z = V.find("#Collections");
  var w = jQuery("#Signin");
  var n = jQuery("#Businesses");
  var i = jQuery(".return-main-menu");
  var K = v.find("#UK");
  var E = v.find("#INTERNATIONAL");
  var s = v.find(".dropdown-outer");
  var d = s.find(".hotels-dropdown");
  var Y = s.find(".brands-dropdown");
  var m = s.find(".collections-dropdown");
  var j = s.find(".sign-in-dropdown");
  var aa = s.find(".business-dropdown");
  var r = d.find(".uk-dropdown");
  var f = d.find(".international-dropdown");
  N.off().on("click", function () {
    ac.toggleClass("open");
    N.toggleClass("active");
    v.toggleClass("open");
    if (!s.hasClass("hidden")) {
      s.addClass("hidden");
      V.removeClass("hidden");
    }
    if (!d.hasClass("hidden")) {
      d.addClass("hidden");
      V.removeClass("hidden");
    }
    if (!m.hasClass("hidden")) {
      m.addClass("hidden");
      V.removeClass("hidden");
    }
    if (!Y.hasClass("hidden")) {
      Y.addClass("hidden");
      V.removeClass("hidden");
    }
  });
  i.off().on("click", function (ad) {
    ad.preventDefault();
    if (!d.hasClass("hidden")) {
      d.addClass("hidden");
      Q.removeClass("active");
    } else {
      if (!m.hasClass("hidden")) {
        m.addClass("hidden");
        z.removeClass("active");
      } else {
        if (!Y.hasClass("hidden")) {
          Y.addClass("hidden");
          G.removeClass("active");
        }
      }
    }
    s.addClass("hidden");
    V.removeClass("hidden");
  });
  Q.off().on("click", function (ad) {
    ad.preventDefault();
    if (!Y.hasClass("hidden")) {
      Y.addClass("hidden");
      G.removeClass("active");
      d.removeClass("hidden");
      Q.addClass("active");
      V.addClass("hidden");
    } else {
      if (!m.hasClass("hidden")) {
        m.addClass("hidden");
        z.removeClass("active");
        d.removeClass("hidden");
        Q.addClass("active");
        V.addClass("hidden");
      } else {
        d.removeClass("hidden");
        Q.addClass("active");
        V.addClass("hidden");
        s.removeClass("hidden");
      }
    }
    s.removeClass("hidden");
  });
  K.off().on("click", function (ad) {
    ad.preventDefault();
    if (!f.hasClass("hidden")) {
      f.addClass("hidden");
      E.removeClass("active");
      r.removeClass("hidden");
      K.addClass("active");
    } else {
      if (!r.hasClass("hidden")) {
        r.addClass("hidden");
        r.removeClass("active");
      } else {
        r.removeClass("hidden");
        K.addClass("active");
      }
    }
  });
  E.off().on("click", function (ad) {
    ad.preventDefault();
    if (!r.hasClass("hidden")) {
      r.addClass("hidden");
      r.removeClass("active");
      f.removeClass("hidden");
      E.addClass("active");
    } else {
      if (!f.hasClass("hidden")) {
        f.addClass("hidden");
        E.removeClass("active");
      } else {
        f.removeClass("hidden");
        E.addClass("active");
      }
    }
  });
  G.off().on("click", function (ad) {
    ad.preventDefault();
    if (!d.hasClass("hidden")) {
      d.addClass("hidden");
      Q.removeClass("active");
      Y.removeClass("hidden");
      G.addClass("active");
      V.addClass("hidden");
    } else {
      if (!m.hasClass("hidden")) {
        m.addClass("hidden");
        z.removeClass("active");
        Y.removeClass("hidden");
        G.addClass("active");
        V.addClass("hidden");
      } else {
        if (!Y.hasClass("hidden")) {
          Y.addClass("hidden");
          G.removeClass("active");
          V.removeClass("hidden");
        } else {
          Y.removeClass("hidden");
          V.addClass("hidden");
        }
      }
    }
    s.removeClass("hidden");
  });
  z.off().on("click", function (ad) {
    ad.preventDefault();
    if (!d.hasClass("hidden")) {
      d.addClass("hidden");
      Q.removeClass("active");
      m.removeClass("hidden");
      z.addClass("active");
      V.addClass("hidden");
    } else {
      if (!Y.hasClass("hidden")) {
        Y.addClass("hidden");
        G.removeClass("active");
        m.removeClass("hidden");
        z.addClass("active");
        V.addClass("hidden");
      } else {
        if (!m.hasClass("hidden")) {
          m.addClass("hidden");
          z.removeClass("active");
          V.removeClass("hidden");
        } else {
          m.removeClass("hidden");
          V.addClass("hidden");
        }
      }
    }
    s.removeClass("hidden");
  });
  var J = jQuery("#property-booking-engine-button #search");
  var S = jQuery("#property-booking-engine-button #close-search");
  var g = jQuery(".booking-engine-mobile .booking-options");
  J.off().on("click", function () {
    J.addClass("hidden");
    S.removeClass("hidden");
    g.removeClass("hidden");
  });
  S.off().on("click", function () {
    J.removeClass("hidden");
    S.addClass("hidden");
    g.addClass("hidden");
  });
  if (k > 840) {
    var F = jQuery("#refine-icon .bespoke-sliders");
    var X = jQuery(".mobile-options-header .bespoke-sliders");
    var W = jQuery(".refine-search-options");
    var q = jQuery("#search-submit");
    var e = jQuery("#show-all");
    var R = jQuery("#body .innerWrapper");
    F.off().on("click", function () {
      W.toggle("slide");
      R.toggleClass("right-align");
      jQuery("html, body").animate({ scrollTop: 0 }, 400);
    });
    X.off().on("click", function () {
      W.toggle("slide");
      R.toggleClass("right-align");
    });
    q.off().on("click", function () {
      W.toggle("slide");
    });
    e.off().on("click", function () {
      W.toggle("slide");
    });
  } else {
    var F = jQuery("#refine-icon .bespoke-sliders");
    var X = jQuery(".mobile-options-header .bespoke-sliders");
    var q = jQuery("#search-submit");
    var e = jQuery("#show-all");
    var W = jQuery(".refine-search-options");
    F.off().on("click", function () {
      W.toggle("slide");
      jQuery("html, body").animate({ scrollTop: 0 }, 400);
    });
    X.off().on("click", function () {
      W.toggle("slide");
    });
    q.off().on("click", function () {
      W.toggle("slide");
    });
    e.off().on("click", function () {
      W.toggle("slide");
    });
  }
  var P = jQuery(".refine-search-options .options-one");
  var b = P.find(".col-lg-12");
  var o = P.find(".show-more");
  var u = P.find(".show-less");
  var A = jQuery(".refine-search-options .options-two");
  var x = A.find(".col-lg-12");
  var M = A.find(".show-more");
  var U = A.find(".show-less");
  o.off().on("click", function () {
    jQuery(this).addClass("hidden");
    b.addClass("show");
    u.addClass("show");
  });
  u.off().on("click", function () {
    jQuery(this).removeClass("show");
    b.removeClass("show");
    o.removeClass("hidden");
  });
  M.off().on("click", function () {
    jQuery(this).addClass("hidden");
    x.addClass("show");
    U.addClass("show");
  });
  U.off().on("click", function () {
    jQuery(this).removeClass("show");
    x.removeClass("show");
    M.removeClass("hidden");
  });
  var B = jQuery("#booking-engine-banner-icon .bespoke-search");
  var T = jQuery(".booking-engine");
  B.off().on("click", function () {
    jQuery("html, body").scrollTop(T.offset().top);
  });
  var t = jQuery("#about-info-button");
  var h = t.find("#nav-icon-bars");
  var C = jQuery("ul.info-navigation");
  t.off().on("click", function () {
    h.toggleClass("open");
    t.toggleClass("active");
    C.slideToggle(500);
  });
  var I = jQuery("#hotel-menu-btn");
  var D = I.find("#nav-icon-bars");
  var H = jQuery("ul.hotel-navigation");
  I.off().on("click", function () {
    D.toggleClass("open");
    I.toggleClass("active");
    H.slideToggle(500);
  });
  var c = jQuery("#header");
  var Z = jQuery(".navbar");
  var ab = jQuery(".search-results-mobile-toolbar");
  var O = jQuery(".about-section .info-mini-navigation");
  var L = jQuery("#toThetop");
  var p;
  if (O.length >= 1) {
    var p = true;
  } else {
    var p = false;
  }
  jQuery(document).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      y.addClass("sticky");
      c.addClass("sticky");
      Z.addClass("sticky");
      if (p) {
        O.addClass("sticky");
      }
      ab.addClass("sticky");
    } else {
      if (jQuery(this).scrollTop() < 1) {
        y.removeClass("sticky");
        c.removeClass("sticky");
        Z.removeClass("sticky");
        if (p) {
          O.removeClass("sticky");
        }
        ab.removeClass("sticky");
      }
    }
  });
}
function handleChange(a) {
  if (a.value <= 0) {
    a.value = 1;
  }
  if (a.value > 99) {
    a.value = 99;
  }
}
function validate(a) {
  var d = a || window.event;
  var b = d.keyCode || d.which;
  b = String.fromCharCode(b);
  var c = /[0-9]|\./;
  if (!c.test(b)) {
    d.returnValue = false;
    if (d.preventDefault) {
      d.preventDefault();
    }
  }
}
jQuery(document).ready(function () {
  mainInit();
});
