// Theme Toggle & localStorage support
const toggleBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '🌙';
}
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  toggleBtn.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for card reveal animation
const cards = document.querySelectorAll('.skill-card, .project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(c => observer.observe(c));
