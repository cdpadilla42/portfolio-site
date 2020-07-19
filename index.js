const usesIcons = document.querySelector('.uses__icons');

function animateOnScroll(element) {
  function toggleAnimation(payload) {
    console.log(payload);
    if (payload[0].isIntersecting) console.log('We are on!');
    if (!payload[0].isIntersecting) console.log('We are off!');
  }
  const ob = new IntersectionObserver(toggleAnimation);
  ob.observe(element);
}

animateOnScroll(usesIcons);
