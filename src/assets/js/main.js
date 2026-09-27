(function ($) {
  "use strict";

  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    // ============== Mobile Nav Menu Dropdown Js Start =======================
    function toggleSubMenu() {
      if ($(window).width() <= 991) {
        $(".has-submenu")
          .off("click")
          .on("click", function () {
            $(this)
              .toggleClass("active")
              .siblings(".has-submenu")
              .removeClass("active")
              .find(".nav-submenu")
              .slideUp(300);
            $(this).find(".nav-submenu").stop(true, true).slideToggle(300);
          });
      } else {
        $(".has-submenu").off("click");
      }
    }

    toggleSubMenu();
    $(window).resize(toggleSubMenu);
    // ============== Mobile Nav Menu Dropdown Js End =======================

    // ===================== Scroll Back to Top Js Start ======================
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
    // ===================== Scroll Back to Top Js End ======================

    // ========================== add active class to navbar menu current page Js Start =====================
    function dynamicActiveMenuClass(selector) {
      let FileName = window.location.pathname.split("/").reverse()[0];

      // If we are at the root path ("/" or no file name), keep the activePage class on the Home item
      if (FileName === "" || /^index(-\d+)?\.html$/.test(FileName)) {
        // Keep the activePage class on the Home link
        selector.find("li.nav-menu__item").eq(0).addClass("activePage");
      } else {
        // Remove activePage class from all items first
        selector.find("li").removeClass("activePage");

        // Add activePage class to the correct li based on the current URL
        selector.find("li").each(function () {
          let anchor = $(this).find("a");
          if ($(anchor).attr("href") == FileName) {
            $(this).addClass("activePage");
          }
        });

        // If any li has activePage element, add class to its parent li
        selector.children("li").each(function () {
          if ($(this).find(".activePage").length) {
            $(this).addClass("activePage");
          }
        });
      }
    }

    if ($("ul").length) {
      dynamicActiveMenuClass($("ul"));
    }
    // ========================== add active class to navbar menu current page Js End =====================

    // ========================== Settings Panel Js Start =====================
    $(".settings-button").on("click", function () {
      $(".settings-panel").toggleClass("active");
      $(this).toggleClass("active");
    });

    $(document).on(
      "click",
      ".settings-panel__buttons .settings-panel__button",
      function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
      }
    );

    // Cursor start
    $(".cursor-animate").on("click", function () {
      $("body").removeClass("remove-animate-cursor");
    });

    $(".cursor-default").on("click", function () {
      $("body").addClass("remove-animate-cursor");
    });
    // Cursor end

    // Direction start
    $(".direction-ltr").on("click", function () {
      $("html").attr("dir", "ltr");
    });

    $(".direction-rtl").on("click", function () {
      $("html").attr("dir", "rtl");
    });
    // Direction end
    // ========================== Settings Panel Js End =====================

    // ********************* Toast Notification Js start *********************
    function toastMessage(messageType, messageTitle, messageText, messageIcon) {
      let $toastContainer = $("#toast-container");

      let $toast = $("<div>", {
        class: `toast-message ${messageType}`,
        html: `
      <div class="toast-message__content">
        <span class="toast-message__icon">
          <i class="${messageIcon}"></i>
        </span>
        <div class="flex-grow-1">
          <div class="d-flex align-items-start justify-content-between mb-1">
            <h6 class="toast-message__title">${messageTitle}</h6>
            <button type="button" class="toast-message__close">
              <i class="ph-bold ph-x"></i>
            </button>
          </div>
          <span class="toast-message__text">${messageText}</span>
        </div>
      </div>
      <div class="progress__bar"></div>
    `,
      });

      $toastContainer.append($toast);

      setTimeout(() => {
        $toast.addClass("active");
      }, 50);

      let totalDuration = 3500;
      let startTime = Date.now();
      let remainingTime = totalDuration;
      let toastTimeout = setTimeout(hideToast, remainingTime);

      function hideToast() {
        $toast.removeClass("active");
        setTimeout(() => {
          $toast.remove();
        }, 500);
      }

      // Remove Toast on Close Button Click
      $toast.find(".toast-message__close").on("click", function () {
        $toast.removeClass("active");
        setTimeout(() => {
          $toast.remove();
        }, 500);
      });

      // Pause Timeout on Hover
      $toast.on("mouseenter", function () {
        remainingTime -= Date.now() - startTime;
        clearTimeout(toastTimeout);
      });

      // Resume Timeout on Mouse Leave
      $toast.on("mouseleave", function () {
        startTime = Date.now();
        toastTimeout = setTimeout(hideToast, remainingTime);
      });
    }
    // ********************* Toast Notification Js End *********************

    // ========================= Delete Item Js start ===================
    $(document).on("click", ".delete-button", function () {
      $(this).closest(".delete-item").addClass("d-none");

      toastMessage(
        "danger",
        "Deleted",
        "You deleted successfully!",
        "ph-bold ph-trash"
      );
    });
    // ========================= Delete Item Js End ===================

    // ========================= Form Submit Js Start ===================
    $(document).on("submit", ".form-submit", function (e) {
      e.preventDefault();

      $("input").val("");

      $("textarea").val("");

      toastMessage(
        "success",
        "Success",
        "Form submitted successfully!",
        "ph-fill ph-check-circle"
      );
    });
    // ========================= Form Submit Js End ===================

    // ========================= Custom Select Js Start ===================
    // Picking an option updates the trigger label (and image), the active/checked state,
    // and the hidden native <select>, which fires a normal "change" event.
    $(document).on("click", ".custom-select__option", function () {
      let $option = $(this);
      let $select = $option.closest(".custom-select");

      $select
        .find(".custom-select__option")
        .removeClass("active")
        .attr("aria-selected", "false");
      $option.addClass("active").attr("aria-selected", "true");

      $select.find(".custom-select__value").text($option.data("label"));

      let image = $option.data("image");
      if (image) {
        $select
          .find(".custom-select__image")
          .attr({ src: image, alt: $option.data("alt") });
      }

      let native = $select.find(".custom-select__native").val($option.data("value"))[0];
      // a real DOM event, so both jQuery and addEventListener listeners hear it
      native.dispatchEvent(new Event("change", { bubbles: true }));
    });
    // ========================= Custom Select Js End ===================

    // ========================= Countdown Js Start ===================
    // [data-countdown] counts down to data-deadline (ISO date) or, if absent, data-duration seconds from page load
    $("[data-countdown]").each(function () {
      let $timer = $(this);
      let deadline = $timer.data("deadline")
        ? new Date($timer.data("deadline")).getTime()
        : Date.now() + Number($timer.data("duration") || 0) * 1000;
      let pad = (n) => String(n).padStart(2, "0");

      function tick() {
        let left = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
        // optional days: when present, hours roll over at 24
        let $days = $timer.find("[data-countdown-days]");
        $days.text(pad(Math.floor(left / 86400)));
        $timer.find("[data-countdown-hours]").text(pad(Math.floor(($days.length ? left % 86400 : left) / 3600)));
        $timer.find("[data-countdown-minutes]").text(pad(Math.floor((left % 3600) / 60)));
        $timer.find("[data-countdown-seconds]").text(pad(left % 60));
        if (left === 0) clearInterval(timer);
      }

      let timer = setInterval(tick, 1000);
      tick();
    });
    // ========================= Countdown Js End ===================

    // ========================= Snap Slider Js Start ===================
    // Scroll-snap track + one dot per scroll position (slides - slides per view + 1)
    $(".snap-slider").each(function () {
      let $slider = $(this);
      let track = $slider.find(".snap-slider__track")[0];
      let $dots = $slider.find(".snap-slider__dots");
      let slides = track.children;
      let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let index = Number($slider.data("start") || 0);
      let autoplay;

      let step = () => slides.length > 1 ? Math.abs(slides[1].offsetLeft - slides[0].offsetLeft) : track.clientWidth;
      // visible width excludes inline padding (full-bleed tracks pad back to the container edge)
      let viewWidth = () => {
        let cs = getComputedStyle(track);
        return track.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      };
      let perView = () => Math.max(1, Math.round((viewWidth() + 20) / step()));
      let positions = () => Math.max(1, slides.length - perView() + 1);
      let rtl = () => getComputedStyle(track).direction === "rtl" ? -1 : 1;

      function renderDots() {
        $dots.empty();
        for (let i = 0; i < positions(); i++) {
          $("<button>", {
            type: "button",
            class: "snap-slider__dot" + (i === index ? " active" : ""),
            role: "tab",
            "aria-label": "Go to slide " + (i + 1),
            "aria-selected": i === index,
          }).appendTo($dots);
        }
      }

      // active dot, "is-center" on the middle visible slide and "is-start" on the first (used by the testimonial cards)
      function markActive() {
        $dots.children().removeClass("active").attr("aria-selected", "false").eq(index).addClass("active").attr("aria-selected", "true");
        $(slides).removeClass("is-center").eq(index + Math.floor(perView() / 2)).addClass("is-center");
        $(slides).removeClass("is-start").eq(index).addClass("is-start");
      }

      function goTo(i, smooth) {
        index = Math.min(Math.max(i, 0), positions() - 1);
        track.scrollTo({ left: index * step() * rtl(), behavior: smooth && !reduceMotion ? "smooth" : "auto" });
        markActive();
      }

      $dots.on("click", ".snap-slider__dot", function () {
        goTo($(this).index(), true);
      });

      // optional prev / next buttons (wrap around at the ends)
      $slider.find(".snap-slider__prev").on("click", function () {
        goTo(index > 0 ? index - 1 : positions() - 1, true);
      });
      $slider.find(".snap-slider__next").on("click", function () {
        goTo(index + 1 < positions() ? index + 1 : 0, true);
      });

      let scrollTimer;
      track.addEventListener("scroll", function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
          let i = Math.round(Math.abs(track.scrollLeft) / step());
          if (i !== index) {
            index = i;
            markActive();
          }
        }, 80);
      });

      function play() {
        if (reduceMotion) return;
        clearInterval(autoplay);
        autoplay = setInterval(function () {
          goTo(index + 1 < positions() ? index + 1 : 0, true);
        }, 5000);
      }

      $slider.on("mouseenter focusin", function () { clearInterval(autoplay); });
      $slider.on("mouseleave focusout", play);

      // snap points follow the track's inline padding (a % scroll-padding would resolve against the track itself)
      function syncSnapPadding() {
        track.style.scrollPaddingInline = getComputedStyle(track).paddingLeft;
      }

      $(window).on("resize", function () {
        syncSnapPadding();
        renderDots();
        goTo(index, false);
      });

      syncSnapPadding();
      renderDots();
      goTo(index, false);
      play();
    });
    // ========================= Snap Slider Js End ===================

    // ========================= Product Gallery Js Start ===================
    // thumbnails swap the main image; the arrows step through them and the counter follows
    $("[data-pd-gallery]").each(function () {
      let $gallery = $(this);
      let $thumbs = $gallery.find(".pd-gallery__thumb");

      function show(i) {
        i = (i + $thumbs.length) % $thumbs.length;
        let $thumb = $thumbs.removeClass("active").eq(i).addClass("active");
        $gallery.find("[data-pd-main]").attr("src", $thumb.data("image"));
        $gallery.find("[data-pd-count]").text(i + 1 + "/" + $thumbs.length);
      }

      $thumbs.on("click", function () { show($thumbs.index(this)); });
      $gallery.find("[data-pd-prev]").on("click", function () { show($thumbs.index($thumbs.filter(".active")) - 1); });
      $gallery.find("[data-pd-next]").on("click", function () { show($thumbs.index($thumbs.filter(".active")) + 1); });
    });

    // quantity stepper (never below the input's min)
    $("[data-pd-qty]").each(function () {
      let $input = $(this).find("input");
      let min = Number($input.attr("min") || 1);
      $(this).find("[data-pd-minus]").on("click", function () { $input.val(Math.max(min, Number($input.val()) - 1)); });
      $(this).find("[data-pd-plus]").on("click", function () { $input.val(Number($input.val()) + 1); });
    });
    // cart: removing a row updates the "(n item)" count
    $("[data-cart-remove]").on("click", function () {
      $(this).closest("[data-cart-row]").remove();
      $("[data-cart-count]").text($("[data-cart-row]").length);
    });
    // ========================= Product Gallery Js End ===================

    // ========================= Price Range Js Start ===================
    // two stacked range inputs; the thumbs can't cross and the fill spans between them
    $("[data-price-range]").each(function () {
      let $range = $(this);
      let min = $range.find("[data-price-min]")[0];
      let max = $range.find("[data-price-max]")[0];
      let gap = 50;

      function update(e) {
        if (Number(max.value) - Number(min.value) < gap) {
          if (e && e.target === min) min.value = Number(max.value) - gap;
          else max.value = Number(min.value) + gap;
        }
        let total = Number(min.max) - Number(min.min);
        let from = ((min.value - min.min) / total) * 100;
        let to = ((max.value - min.min) / total) * 100;
        $range.find(".price-range__fill").css({ left: from + "%", width: to - from + "%" });
        $range.find("[data-price-value]").text("$" + min.value + " - $" + max.value);
      }

      $(min).add(max).on("input", update);
      update();
    });
    // ========================= Price Range Js End ===================

    // ========================= Fashion Card Swatches Js Start ===================
    // picking a colour swatch marks it active and shows its photo in the card
    $(".fashion-card__swatch").on("click", function () {
      let $swatch = $(this);
      $swatch.addClass("active").attr("aria-checked", "true")
        .siblings().removeClass("active").attr("aria-checked", "false");
      $swatch.closest(".fashion-card").find(".fashion-card__thumb > a img").attr("src", $swatch.find("img").attr("src"));
    });

    // colour dots (furniture cards) only mark the chosen colour
    $(".fashion-card__color").on("click", function () {
      $(this).addClass("active").attr("aria-checked", "true")
        .siblings().removeClass("active").attr("aria-checked", "false");
    });
    // ========================= Fashion Card Swatches Js End ===================

    // ========================= Hero Two Carousel Js Start ===================
    // Centre-mode loop: the track holds 3 copies of the slides; we stay inside the middle copy
    // and jump (without animation) by one copy's length whenever we step past its ends.
    $("[data-hero-slider]").each(function () {
      let $slider = $(this);
      let track = $slider.find(".hero-two__track")[0];
      let slides = track.children;
      let setSize = slides.length / 3;
      let index = setSize + 1; // the design opens on the 2nd slide of the middle copy
      let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let autoplay;

      // copies are decorative for assistive tech
      $(slides).each(function (i) {
        if (i < setSize || i >= setSize * 2) $(this).attr("aria-hidden", "true").find("a, button").attr("tabindex", "-1");
      });

      function position(animate) {
        let viewport = track.parentElement.clientWidth;
        let slide = slides[index];
        let x = viewport / 2 - (slide.offsetLeft + slide.offsetWidth / 2);
        track.classList.toggle("is-jumping", !animate);
        track.style.transform = "translateX(" + x + "px)";
      }

      function go(step) {
        index += step;
        if (reduceMotion) {
          // no transition, so no transitionend: wrap right away
          if (index < setSize || index >= setSize * 2) index = index < setSize ? index + setSize : index - setSize;
          position(false);
          return;
        }
        position(true);
      }

      track.addEventListener("transitionend", function () {
        if (index < setSize || index >= setSize * 2) {
          index = index < setSize ? index + setSize : index - setSize;
          position(false);
        }
      });

      $slider.find(".hero-two__arrow--prev").on("click", function () { go(-1); });
      $slider.find(".hero-two__arrow--next").on("click", function () { go(1); });

      function play() {
        if (reduceMotion) return;
        clearInterval(autoplay);
        autoplay = setInterval(function () { go(1); }, 5000);
      }

      $slider.on("mouseenter focusin", function () { clearInterval(autoplay); });
      $slider.on("mouseleave focusout", play);
      $(window).on("resize", function () { position(false); });

      position(false);
      play();
    });
    // ========================= Hero Two Carousel Js End ===================

    // ================== Password Show Hide Js Start ==========
    $(".toggle-password").on("click", function () {
      $(this).toggleClass("active");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
        $(this).removeClass("ph-bold ph-eye-closed");
        $(this).addClass("ph-bold ph-eye");
      } else {
        input.attr("type", "password");
        $(this).addClass("ph-bold ph-eye-closed");
      }
    });
    // ========================= Password Show Hide Js End ===========================

    // ========================= AOS Js Start ===========================
    AOS.init({
      once: true,
    });
    // ========================= AOS Js End ===========================

    // // ================================= Brand slider Start =========================
    // var brandSlider = new Swiper('.brand-slider', {
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    //   },
    //   autoplay: true,
    //   speed: 1500,
    //   grabCursor: true,
    //   loop: true,
    //   slidesPerView: 7,
    //   breakpoints: {
    //       300: {
    //           slidesPerView: 2,
    //       },
    //       575: {
    //           slidesPerView: 3,
    //       },
    //       768: {
    //           slidesPerView: 4,
    //       },
    //       992: {
    //           slidesPerView: 5,
    //       },
    //       1200: {
    //           slidesPerView: 6,
    //       },
    //       1400: {
    //           slidesPerView: 7,
    //       },
    //   }
    // });
    // // ================================= Brand slider End =========================

    // ========================= Counter Up Js End ===================
    // const counterUp = window.counterUp.default;

    // const callback = (entries) => {
    //   entries.forEach((entry) => {
    //     const el = entry.target;
    //     if (entry.isIntersecting && !el.classList.contains("is-visible")) {
    //       counterUp(el, {
    //         duration: 1500,
    //         delay: 16,
    //       });
    //       el.classList.add("is-visible");
    //     }
    //   });
    // };
    // const IO = new IntersectionObserver(callback, { threshold: 1 });

    // // Banner statistics Counter
    // const statisticsCounter = document.querySelectorAll(".counter");
    // if (statisticsCounter.length > 0) {
    //   statisticsCounter.forEach((counterNumber) => {
    //     IO.observe(counterNumber);
    //   });
    // }

    // // performance Count
    // const performanceCount = document.querySelectorAll(".counter");
    // if (performanceCount.length > 0) {
    //   performanceCount.forEach((counterNumber) => {
    //     IO.observe(counterNumber);
    //   });
    // }
    // ========================= Counter Up Js End ===================

    // ========================== Add Attribute For Bg Image Js Start ====================
    // $(".background-img").css('background', function () {
    //   var bg = ('url(' + $(this).data("background-image") + ')');
    //   return bg;
    // });
    // ========================== Add Attribute For Bg Image Js End =====================
  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".loader-mask").fadeOut();
  });
  // ========================= Preloader Js End=====================

  // ========================= Header Sticky Js Start ==============
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });
  // ========================= Header Sticky Js End===================
})(jQuery);
