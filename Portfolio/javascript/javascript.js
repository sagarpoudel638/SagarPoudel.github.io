function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  // preloader

  window.addEventListener('load', () => {
    const preload = document.querySelector('.preloader');
    preload.classList.add('preload-end');

  });
