const star = document.querySelector('.cursor-star');

document.addEventListener('mousemove', (e) => {
  const offsetX = 20;
  const offsetY = -30;
  star.style.transform = `translate(${e.clientX + offsetX}px, ${e.clientY + offsetY}px)`;
});
const heroImageContainer = document.querySelector('.hero-image-container');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        heroImageContainer.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(heroImageContainer);
