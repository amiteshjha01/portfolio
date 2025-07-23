// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Section Fade-in on Scroll
const fadeSections = document.querySelectorAll('.section-fade');
function revealSections() {
  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Animated Typing Effect for Hero Tagline
const heroTagline = document.querySelector('.hero h2');
if (heroTagline) {
  const text = 'Python Developer & Software Engineer';
  let i = 0;
  heroTagline.textContent = '';
  function type() {
    if (i < text.length) {
      heroTagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  setTimeout(type, 600);
} 