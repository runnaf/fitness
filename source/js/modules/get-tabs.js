const getTabs = () => {
  const links = document.querySelectorAll('[data-ticket-link]');
  const items = document.querySelectorAll('[data-ticket-content]');

  if (links.length > 0) {
    links.forEach(openingTabs);
  }

  function openingTabs(link) {
    link.addEventListener('click', (e)=>{
      e.preventDefault();

      if (!link.classList.contains('is-active')) {
        links.forEach((itemLink)=> {
          itemLink.classList.remove('is-active');
        });

        if (items.length > 0) {
          items.forEach((item)=>{
            item.target = false;
            item.classList.remove('is-active');
          });
        }

        const index = link.getAttribute('href');
        const list = document.querySelector(index);

        list.classList.add('is-active');
        link.classList.add('is-active');
      }

    });
  }
};

export {getTabs};
