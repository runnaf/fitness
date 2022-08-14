import {Swiper} from 'swiper/swiper-bundle.esm.browser.min.js';

const getSliderSwiper = () => {
  const swiper = new Swiper('.reviews__slider-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  const swiperTrainer = new Swiper('.trainers__swiper', {
    controller: {
      inverse: true,
    },
    loop: true,

    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    },
    mousewheel: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  return (swiper, swiperTrainer);
};

export {getSliderSwiper};
