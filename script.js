// Theme toggle with persistent dark/light mode
const toggleBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '🌙';
}
toggleBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  toggleBtn.textContent = dark ? '🌙' : '☀️';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

// Scroll-to-top button logic
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  observer.observe(el);
});

// Intersection Observer for dynamic header style on scroll
const header = document.querySelector('.navbar');
const intercept = document.createElement('div');
intercept.style.position = 'absolute';
intercept.style.top = '200px';
document.body.prepend(intercept);

new IntersectionObserver(([entry]) => {
  header.classList.toggle('scrolled', !entry.isIntersecting);
}, { rootMargin: '0px', threshold: 0 }).observe(intercept);
