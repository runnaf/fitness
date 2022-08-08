const playingVideo = () => {
  const videoBtn = document.querySelector('[data-video-btn]');
  const picture = document.querySelector('[data-gym-picture]');
  const video = document.querySelector('[data-video]');

  if (videoBtn !== null) {
    videoBtn.addEventListener('click', startPlay);
  }

  function startPlay() {
    if (picture !== null && video !== null) {
      picture.style.display = 'none';
      video.style.display = 'flex';
      videoBtn.style.display = 'none';
      if (video) {
        const src = video.getAttribute('src');
        video.setAttribute('src', src + '?autoplay=1&amp;');
      }
    }
  }
};

export {playingVideo};
