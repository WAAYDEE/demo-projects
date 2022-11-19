 // navigation 
$(".navbar-toggler").click( function() {
    $(".offcanvas").toggleClass("show");
})
$(".btn-close").click( function() {
    $(".offcanvas").removeClass("show");
})


// mega menu 
!(function(n, i, e, a) {
    ;(n.navigation = function(t, s) {
      var o = {
          responsive: !0,
          mobileBreakpoint: 991,
          showDuration: 200,
          hideDuration: 200,
          showDelayDuration: 0,
          hideDelayDuration: 0,
          submenuTrigger: "hover",
          effect: "fadeIn",
          submenuIndicator: !0,
          submenuIndicatorTrigger: !1,
          hideSubWhenGoOut: !0,
          visibleSubmenusOnMobile: !1,
          fixed: !1,
          overlay: !0,
          overlayColor: "rgba(0, 0, 0, 0.5)",
          hidden: !1,
          hiddenOnMobile: !1,
          offCanvasSide: "left",
          offCanvasCloseButton: !0,
          animationOnShow: "",
          animationOnHide: "",
          onInit: function() {},
          onLandscape: function() {},
          onPortrait: function() {},
          onShowOffCanvas: function() {},
          onHideOffCanvas: function() {}
        },
        r = this,
        u = Number.MAX_VALUE,
        d = 1,
        l = "click.nav touchstart.nav",
        f = "mouseenter focusin",
        c = "mouseleave focusout"
      r.settings = {}
      var t = (n(t), t)
      n(t).find(".nav-search").length > 0 &&
        n(t)
          .find(".nav-search")
          .find("form")
          .prepend(
            "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
          ),
        (r.init = function() {
          ;(r.settings = n.extend({}, o, s)),
            r.settings.offCanvasCloseButton &&
              n(t)
                .find(".nav-menus-wrapper")
                .prepend(
                  "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
                ),
            "right" == r.settings.offCanvasSide &&
              n(t)
                .find(".nav-menus-wrapper")
                .addClass("nav-menus-wrapper-right"),
            r.settings.hidden &&
              (n(t).addClass("navigation-hidden"),
              (r.settings.mobileBreakpoint = 99999)),
            v(),
            r.settings.fixed && n(t).addClass("navigation-fixed"),
            n(t)
              .find(".nav-toggle")
              .on("click touchstart", function(n) {
                n.stopPropagation(),
                  n.preventDefault(),
                  r.showOffcanvas(),
                  s !== a && r.callback("onShowOffCanvas")
              }),
            n(t)
              .find(".nav-menus-wrapper-close-button")
              .on("click touchstart", function() {
                r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
              }),
            n(t)
              .find(".nav-search-button, .nav-search-close-button")
              .on("click touchstart keydown", function(i) {
                i.stopPropagation(), i.preventDefault()
                var e = i.keyCode || i.which
                "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                  ? r.toggleSearch()
                  : 9 == e && n(i.target).blur()
              }),
            n(t).find(".megamenu-tabs").length > 0 && y(),
            n(i).resize(function() {
              r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
            }),
            r.initNavigationMode(C()),
            r.settings.hiddenOnMobile && m(),
            s !== a && r.callback("onInit")
        })
      var h = function() {
          n(t)
            .find(".nav-submenu")
            .hide(0),
            n(t)
              .find("li")
              .removeClass("focus")
        },
        v = function() {
          n(t)
            .find("li")
            .each(function() {
              n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
                (n(this)
                  .children(".nav-dropdown,.megamenu-panel")
                  .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                  n(this)
                    .children("a")
                    .append(
                      "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                    ))
            })
        },
        m = function() {
          n(t).hasClass("navigation-portrait")
            ? n(t).addClass("navigation-hidden")
            : n(t).removeClass("navigation-hidden")
        }
      ;(r.showSubmenu = function(i, e) {
        C() > r.settings.mobileBreakpoint &&
          n(t)
            .find(".nav-search")
            .find("form")
            .fadeOut(),
          "fade" == e
            ? n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .fadeIn(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow)
            : n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .slideDown(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow),
          n(i).addClass("focus")
      }),
        (r.hideSubmenu = function(i, e) {
          "fade" == e
            ? n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .fadeOut(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide)
            : n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .slideUp(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide),
            n(i)
              .removeClass("focus")
              .find(".focus")
              .removeClass("focus")
        })
      var p = function() {
          n("body").addClass("no-scroll"),
            r.settings.overlay &&
              (n(t).append("<div class='nav-overlay-panel'></div>"),
              n(t)
                .find(".nav-overlay-panel")
                .css("background-color", r.settings.overlayColor)
                .fadeIn(300)
                .on("click touchstart", function(n) {
                  r.hideOffcanvas()
                }))
        },
        g = function() {
          n("body").removeClass("no-scroll"),
            r.settings.overlay &&
              n(t)
                .find(".nav-overlay-panel")
                .fadeOut(400, function() {
                  n(this).remove()
                })
        }
      ;(r.showOffcanvas = function() {
        p(),
          "left" == r.settings.offCanvasSide
            ? n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "left")
                .addClass("nav-menus-wrapper-open")
            : n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "right")
                .addClass("nav-menus-wrapper-open")
      }),
        (r.hideOffcanvas = function() {
          n(t)
            .find(".nav-menus-wrapper")
            .removeClass("nav-menus-wrapper-open")
            .on(
              "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
              function() {
                n(t)
                  .find(".nav-menus-wrapper")
                  .css("transition-property", "none")
                  .off()
              }
            ),
            g()
        }),
        (r.toggleOffcanvas = function() {
          C() <= r.settings.mobileBreakpoint &&
            (n(t)
              .find(".nav-menus-wrapper")
              .hasClass("nav-menus-wrapper-open")
              ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
              : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
        }),
        (r.toggleSearch = function() {
          "none" ==
          n(t)
            .find(".nav-search")
            .find("form")
            .css("display")
            ? (n(t)
                .find(".nav-search")
                .find("form")
                .fadeIn(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .focus())
            : (n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .blur())
        }),
        (r.initNavigationMode = function(i) {
          r.settings.responsive
            ? (i <= r.settings.mobileBreakpoint &&
                u > r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-portrait")
                  .removeClass("navigation-landscape"),
                S(),
                s !== a && r.callback("onPortrait")),
              i > r.settings.mobileBreakpoint &&
                d <= r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-landscape")
                  .removeClass("navigation-portrait"),
                k(),
                g(),
                r.hideOffcanvas(),
                s !== a && r.callback("onLandscape")),
              (u = i),
              (d = i))
            : (n(t).addClass("navigation-landscape"),
              k(),
              s !== a && r.callback("onLandscape"))
        })
      var b = function() {
          n("html").on("click.body touchstart.body", function(i) {
            0 === n(i.target).closest(".navigation").length &&
              (n(t)
                .find(".nav-submenu")
                .fadeOut(),
              n(t)
                .find(".focus")
                .removeClass("focus"),
              n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut())
          })
        },
        C = function() {
          return (
            i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
          )
        },
        w = function() {
          n(t)
            .find(".nav-menu")
            .find("li, a")
            .off(l)
            .off(f)
            .off(c)
        },
        O = function() {
          if (C() > r.settings.mobileBreakpoint) {
            var i = n(t).outerWidth(!0)
            n(t)
              .find(".nav-menu")
              .children("li")
              .children(".nav-submenu")
              .each(function() {
                n(this)
                  .parent()
                  .position().left +
                  n(this).outerWidth() >
                i
                  ? n(this).css("right", 0)
                  : n(this).css("right", "auto")
              })
          }
        },
        y = function() {
          function i(i) {
            var e = n(i)
                .children(".megamenu-tabs-nav")
                .children("li"),
              a = n(i).children(".megamenu-tabs-pane")
            n(e).on("click.tabs touchstart.tabs", function(i) {
              i.stopPropagation(),
                i.preventDefault(),
                n(e).removeClass("active"),
                n(this).addClass("active"),
                n(a)
                  .hide(0)
                  .removeClass("active"),
                n(a[n(this).index()])
                  .show(0)
                  .addClass("active")
            })
          }
          if (n(t).find(".megamenu-tabs").length > 0)
            for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
              i(e[a])
        },
        k = function() {
          w(),
            h(),
            navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
              ? n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function(e) {
                    if (
                      (r.hideSubmenu(
                        n(this)
                          .parent("li")
                          .siblings("li"),
                        r.settings.effect
                      ),
                      n(this)
                        .closest(".nav-menu")
                        .siblings(".nav-menu")
                        .find(".nav-submenu")
                        .fadeOut(r.settings.hideDuration),
                      n(this).siblings(".nav-submenu").length > 0)
                    ) {
                      if (
                        (e.stopPropagation(),
                        e.preventDefault(),
                        "none" ==
                          n(this)
                            .siblings(".nav-submenu")
                            .css("display"))
                      )
                        return (
                          r.showSubmenu(
                            n(this).parent("li"),
                            r.settings.effect
                          ),
                          O(),
                          !1
                        )
                      if (
                        (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                        "_blank" === n(this).attr("target") ||
                          "blank" === n(this).attr("target"))
                      )
                        i.open(n(this).attr("href"))
                      else {
                        if (
                          "#" === n(this).attr("href") ||
                          "" === n(this).attr("href") ||
                          "javascript:void(0)" === n(this).attr("href")
                        )
                          return !1
                        i.location.href = n(this).attr("href")
                      }
                    }
                  })
              : n(t)
                  .find(".nav-menu")
                  .find("li")
                  .on(f, function() {
                    r.showSubmenu(this, r.settings.effect), O()
                  })
                  .on(c, function() {
                    r.hideSubmenu(this, r.settings.effect)
                  }),
            r.settings.hideSubWhenGoOut && b()
        },
        S = function() {
          w(),
            h(),
            r.settings.visibleSubmenusOnMobile
              ? n(t)
                  .find(".nav-submenu")
                  .show(0)
              : (n(t)
                  .find(".submenu-indicator")
                  .removeClass("submenu-indicator-up"),
                r.settings.submenuIndicator &&
                r.settings.submenuIndicatorTrigger
                  ? n(t)
                      .find(".submenu-indicator")
                      .on(l, function(i) {
                        return (
                          i.stopPropagation(),
                          i.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li")
                              .siblings("li"),
                            "slide"
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                          n(this)
                            .parent("a")
                            .siblings(".nav-submenu")
                            .css("display")
                            ? (n(this).addClass("submenu-indicator-up"),
                              n(this)
                                .parent("a")
                                .parent("li")
                                .siblings("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              n(this)
                                .closest(".nav-menu")
                                .siblings(".nav-menu")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              r.showSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ),
                              !1)
                            : (n(this)
                                .parent("a")
                                .parent("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              void r.hideSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ))
                        )
                      })
                  : n(t)
                      .find(".nav-menu, .nav-dropdown")
                      .children("li")
                      .children("a")
                      .on(l, function(e) {
                        if (
                          (e.stopPropagation(),
                          e.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("li")
                              .siblings("li"),
                            r.settings.effect
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                            n(this)
                              .siblings(".nav-submenu")
                              .css("display"))
                        )
                          return (
                            n(this)
                              .children(".submenu-indicator")
                              .addClass("submenu-indicator-up"),
                            n(this)
                              .parent("li")
                              .siblings("li")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            r.showSubmenu(n(this).parent("li"), "slide"),
                            !1
                          )
                        if (
                          (n(this)
                            .parent("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.hideSubmenu(n(this).parent("li"), "slide"),
                          "_blank" === n(this).attr("target") ||
                            "blank" === n(this).attr("target"))
                        )
                          i.open(n(this).attr("href"))
                        else {
                          if (
                            "#" === n(this).attr("href") ||
                            "" === n(this).attr("href") ||
                            "javascript:void(0)" === n(this).attr("href")
                          )
                            return !1
                          i.location.href = n(this).attr("href")
                        }
                      }))
        }
      ;(r.callback = function(n) {
        s[n] !== a && s[n].call(t)
      }),
        r.init()
    }),
      (n.fn.navigation = function(i) {
        return this.each(function() {
          if (a === n(this).data("navigation")) {
            var e = new n.navigation(this, i)
            n(this).data("navigation", e)
          }
        })
      })
  })(jQuery, window, document)

  ;(function($) {
    "use strict"

    var $window = $(window)

    if ($.fn.navigation) {
      $("#navigation1").navigation()
      $("#always-hidden-nav").navigation({
        hidden: true
      })
    }

    $window.on("load", function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove()
      })
    })
  })(jQuery)


// owl-carousel
$(function() {

    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      margin: 10,
      loop: true,
      nav: true,
      dots: false
    });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            dots:true
        },
        600:{
            items:2,
            nav:false,
            dots:true,
            loop:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false,
            dots:false
        }
    }
})

// FAQs Accordion
$(document).ready(function() {
  $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
  $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
  $('.acc-head').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.acc-content').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.acc-content').slideUp();
        $('.acc-head').removeClass('active');
        $(this).siblings('.acc-content').slideToggle();
        $(this).toggleClass('active');
      }
  });     
  });
  
// card mouseover
$(".item").mouseenter(function () {
    $(this).addClass("active-card");
    $(this).find("button").css({
        
        "background" : "white", 
        "color" : "#9c623e"
    });

    $(this).find(".buy-now").css("display", "block");
})

$(".item").mouseleave(function () {
    $(this).removeClass("active-card");
    $(this).find(".buy-now").css("display", "none");
    $(this).find("button").css({
        
        "background" : "#9c623e",
        "color" : "white"
    });
    
})

// Regex 
$("#btn-register").click(function() {

  let uName = $("#u-name").val();
  let uEmail = $("#u-email").val();
  let uPass = $("#u-pass").val();
  let ucPass = $("#u-c-pass").val();

  // validation variables

  var nameRegex = /^[a-zA-Z ]+$/;
  var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

  // Logic

  if (uName=="") {
    $("#name-error").text("Please Enter your Name");
    $("#u-name").focus();
    return false;
  }
  if (nameRegex.test(uName)==false) {
    $("#name-error").text("Please Enter a Valid Name");
    $("#u-name").focus();
    return false;
  }
  if (uEmail=="") {
    $("#email-error").text("Please Enter Your E-mail Address");
    $("#u-email").focus();

    return false;
  }
  if (emailRegex.test(uEmail)==false) {
    $("#email-error").text("Please Enter a Valid E-mail Address");
    $("#u-email").focus();

    return false;
  }
  if (uPass=="") {
    $("#pass-error").text("Must Contain a number, a small, a capital letter and a special character");
    $("#u-pass").focus();
    return false;
}
if (passRegex.test(uPass)==false) {
    $("#pass-error").text("Must Contain a number, a small letter, a capital letter and a special character");
    $("#u-pass").focus();
    return false;
}
if (uPass!=ucPass) {
  $("#cp-error").text("Password doest not match");
  $("#u-c-pass").focus();
  return false;
}
})

// show password
$("#eye").click(function() {

  $("#eye").toggleClass("show-pass");
  
  let pType = $("#u-pass").attr("type");

  if (pType == "password") {
      
      $("#u-pass").attr("type", "text");
  }
  else {
      $("#u-pass").attr("type", "password");
  }
  
})

// light box 
// Gallery image hover
$( ".img-wrapper" ).hover(
  function() {
    $(this).find(".img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = $("#image-gallery img");
  // If there is a next image
  if ($nextImg.length > 0) { 
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
  // Fade out the overlay
  $("#overlay").fadeOut("slow");
});
