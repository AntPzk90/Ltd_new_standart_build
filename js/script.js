// === подключение библиотек === //
//преобразуем селекты библиотека https://select2.org/
let viewport = $(document).width();
$(document).ready(function () {
  $('.form__select').select2({
  });
  $('.pagination__select').select2({
    minimumResultsForSearch: -1
  });
});
// === главная страница === //
// открывание мобильного меню
$('.header__mobile-btn').click(function () {
  $('.header__navigation').slideToggle();
  removeClassFunc = function () {
    $('.inner-navigation__fixed-wrapper').removeClass('inner-navigation__fixed-wrapper--statick')
  };
  if ($('.inner-navigation__fixed-wrapper').hasClass('inner-navigation__fixed-wrapper--statick')) {
    setTimeout(removeClassFunc, 400);
  } else {
    $('.inner-navigation__fixed-wrapper').addClass('inner-navigation__fixed-wrapper--statick');
  }
  if (viewport < 768) {
    $('.header__user-list').slideToggle();
    $('.header__user-list').css('display', 'flex');
    $('.header__user').css('order', '1')
  }
  if ($(this).hasClass('header__mobile-btn--gamburger')) {
    $(this).removeClass('header__mobile-btn--gamburger');
    $(this).addClass('header__mobile-btn--close')
  } else if ($(this).hasClass('header__mobile-btn--close')) {
    $(this).removeClass('header__mobile-btn--close');
    $(this).addClass('header__mobile-btn--gamburger');
    $('.header__user').removeAttr('style');
    if (viewport < 768) {
      $('.header__user-list').slideUp();
    }
  }
});
// открывание подменю в пункте услуги
$('.header__sub-list-btn').click(function () {
  $(this).toggleClass('header__sub-list-btn--active');
  if ($(this).hasClass('header__sub-list-btn--active')) {
    $('.header__sub-list').slideDown();
  } else {
    $('.header__sub-list').slideUp();
  }
});
// открывание меню залогиненого юзера
if (viewport <= 1024) {
  $('.header__logged-icon-img').click(function () {
    $('.header__logged-name').slideToggle();
    $('.header__logged-list').slideToggle();
    $('.header__logged-icon').css('display', 'block');
  });
} else {
  $('.header__logged-block').mouseenter(function () {
    $('.header__logged-list').slideDown();
  });
  $('.header__logged-block').mouseleave(function () {
    $('.header__logged-list').slideUp();
  });
}
// открывание фильтров на мобильной версии
$('.present__form-filter-mobile-btn').click(function () {
  $('.present__form').addClass('present__form--active');
  $(this).css('display', 'none');
  $('.present__form-wrapper').css('padding-bottom', '0');
  $('html, body').animate({ scrollTop: 0 }, 300);
});
// закрытие фильтров на мобильной версии
$('.present__form-btn-close').click(function () {
  if ($('.present__form').hasClass('present__form--active')) {
    $('.present__form').removeClass('present__form--active');
    $('.present__form-filter-mobile-btn').removeAttr('style');
    $('.present__form-wrapper').removeAttr('style');
  }
});
// slick slider на главной странице
if (viewport < 1200) {
  $('.present__slider-wrapper').slick({
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          rows: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
          rows: 1
        }
      },
    ]
  });
} else {
  $('.present__slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: false
  });
}
// появление подменю в пункте УСЛУГИ
if (viewport > 1200) {
  $('.header__navigation-list-item--services').mouseenter(function () {
    $('.header__sub-list').slideDown();
  });
  $('.header__navigation-list-item--services').mouseleave(function () {
    $('.header__sub-list').slideUp();
  });
}

if ($(".datepicker").length > 0) {
  console.log($(".datepicker"))
  $(".datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });
}


// faq
$('.faq__bold-txt').click(function () {
  $(this).parent().toggleClass('faq__list-item--active');
  $(this).next().slideToggle();
});
// slider бухгалтерия
if ($('.bookkeeping__1c-info').length > 0) {
  $('.bookkeeping__1c-info').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
}
if ($('.bookkeeping__advantages-slider').length > 0) {
  $('.bookkeeping__advantages-slider').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
}

// if($('.bookkeeping__video').length > 0) {
//   let video = $('.bookkeeping__video');
//   let videoBtn = $('.bookkeeping__video-btn');

//   videoBtn.click(function() {
//     if (video[0].duration != video[0].currentTime) {
//       video[0].pause();
//     }  else {
//       video[0].play();
//     }


//   });
// }
if ($('.inner-navigation__btn').length > 0) {
  $('.inner-navigation__btn').click(function (evt) {
    evt.preventDefault();
    $(this).toggleClass('inner-navigation__btn--active');
    $('.inner-navigation__list').slideToggle();
  });
}
if (viewport < 768) {
  $(window).scroll(function (evt) {
    var scrolling = window.scrollY;
    if (scrolling > $('.header__wrapper').height()) {
      $('main').css('paddingTop', '62px');
      $('.inner-navigation__fixed-wrapper').addClass('inner-navigation__fixed-wrapper--fixed');
      $('.inner-navigation__list').addClass('inner-navigation__list--fixed');
    } else {
      $('main').removeAttr('style');
      $('.inner-navigation__fixed-wrapper').removeClass('inner-navigation__fixed-wrapper--fixed');
      $('.inner-navigation__list').removeClass('inner-navigation__list--fixed');
    }
  });
}

if($('.table-pa__btn').length > 0) {
  $('.table-pa__btn').mouseenter(function() {
    $(this).find('.table__hint').fadeIn();
  });
  $('.table-pa__btn').mouseleave(function() {
    $(this).find('.table__hint').fadeOut();
  })
}

if($('.cargo-pa-inner__checkbox-list-type-txt').length > 0) {
  $('.cargo-pa-inner__checkbox-list-type-txt').click(function() {
    $('.cargo-pa-inner__checkbox-list--active').not($(this).next()).slideUp().removeClass('cargo-pa-inner__checkbox-list--active');
    $(this).next().toggleClass('cargo-pa-inner__checkbox-list--active');
    $(this).next().slideToggle();
  });

  $(document).click(function(evt) {
    let target = $(evt.target);

      if (target.hasClass('cargo-pa-inner__form-label') || target.hasClass('cargo-pa-inner__form-checkbox') ||  target.hasClass('cargo-pa-inner__checkbox-list-type-txt')) {
        console.log('cargo-pa-inner__form-label')
      } else {
        $('.cargo-pa-inner__checkbox-list-type-txt').next().slideUp();

      }
  });
}

if($('.transport-pa-inner__checkbox-list-type-txt').length > 0) {
  $('.transport-pa-inner__checkbox-list-type-txt').click(function() {
    $('.transport-pa-inner__checkbox-list--active').not($(this).next()).slideUp().removeClass('transport-pa-inner__checkbox-list--active');
    $(this).next().toggleClass('transport-pa-inner__checkbox-list--active');
    $(this).next().slideToggle();
  });

  $(document).click(function(evt) {
    let target = $(evt.target);

      if (target.hasClass('transport-pa-inner__form-label') || target.hasClass('transport-pa-inner__form-checkbox') ||  target.hasClass('transport-pa-inner__checkbox-list-type-txt')) {
        console.log('transport-pa-inner__form-label')
      } else {
        $('.transport-pa-inner__checkbox-list-type-txt').next().slideUp();

      }
  });
}

if($('.timepicker').length > 0) {
  $('.timepicker').timepicker({});
}

$('.table-pa__mobile-present').click(function() {
  $(this).next().slideToggle(500).css('display', 'flex');
  $(this).toggleClass('table-pa__mobile-present--active');
});
