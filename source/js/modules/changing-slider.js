const changingSlider = () => {
  const fontSliders = document.querySelectorAll('[data-front-side]');
  const sliders = document.querySelectorAll('[data-slide]');
  const breakpoint = window.matchMedia('(min-width:1200px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      sliders.forEach((item)=>{
        if (!item.classList.contains('is-notjs')) {
          item.classList.add('is-notjs');
        }
      });
    } else {
      removeClass(sliders, 'is-notjs');
      fontSliders.forEach(flippingSliderClick);
    }
  };

  function flippingSliderClick(slide) {
    slide.addEventListener('click', ()=>{
      if (!slide.classList.contains('is-hover')) {
        removeClass(fontSliders, 'is-hover');
        slide.classList.add('is-hover');
      } return;
    });
  }

  function removeClass(array, className) {
    array.forEach((item)=>{
      item.classList.remove(className);
    });
  }

  breakpointChecker();
};

export {changingSlider};
