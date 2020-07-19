const usesIcons = document.querySelector('.uses__icons');
const heroTextEl = document.querySelector('.hero__text_greeting');
const heroTextTrigger = document.querySelector('.animation_prompt');

function animateOnScroll(element) {
  const ob = new IntersectionObserver(toggleAnimation);

  function toggleAnimation(payload) {
    if (payload[0].isIntersecting) {
      element.classList.remove('pre-animation');
    } else {
      element.classList.add('pre-animation');
    }
  }

  ob.observe(element);
}

function animateOnLeaving(element, triggerEl) {
  const ob = new IntersectionObserver(toggleAnimation);

  function toggleAnimation(payload) {
    console.log(payload[0].intersectionRatio);
    if (payload[0].isIntersecting) {
      element.classList.remove('pre-animation');
    } else {
      element.classList.add('pre-animation');
    }
  }

  ob.observe(triggerEl, {
    root: null,
    threshold: 0,
  });
}

animateOnScroll(usesIcons);
animateOnLeaving(heroTextEl, heroTextTrigger);
