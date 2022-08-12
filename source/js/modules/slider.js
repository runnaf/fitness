import Swiper, {Navigation} from 'swiper';

function getSlider() {
  const swiper = new Swiper('.reviews__slider-container', {
    modules: [Navigation],
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  const swiperTrainer = new Swiper('.trainers__swiper', {
    loop: true,
    modules: [Navigation],

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
}

export {getSlider};
