'use strict';

gsap.registerPlugin(TextPlugin);

const headingSecondary = document.querySelector('.heading__secondary');

gsap.to(headingSecondary, {
  delay: 1,
  duration: 0.4,
  text: 'Natalka',
  ease: 'none',
});
