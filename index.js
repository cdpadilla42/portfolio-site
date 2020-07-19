const usesIcons = document.querySelector('.uses__icons');

function animateOnScroll(element) {
  function toggleAnimation(payload) {
    console.log(payload);
    if (payload[0].isIntersecting) {
      element.classList.remove('pre-animation');
    }
    if (!payload[0].isIntersecting) {
      element.classList.add('pre-animation');
    }
  }
  const ob = new IntersectionObserver(toggleAnimation);
  ob.observe(element);
}

animateOnScroll(usesIcons);
