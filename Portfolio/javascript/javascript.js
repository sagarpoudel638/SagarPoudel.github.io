document.addEventListener('DOMContentLoaded', () => {
  const introIm = document.querySelector('.intro-im');
  const introName = document.querySelector('.intro-name');
  const introDev = document.querySelector('.intro-dev');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let st = window.scrollY || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      // Scroll down
      introIm.style.left = '-100%';
      introName.style.left = '-100%';
      introDev.style.left = '-100%';
    } else {
      // Scroll up
      introIm.style.left = '0';
      introName.style.left = '0';
      introDev.style.left = '0';
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  });
});
