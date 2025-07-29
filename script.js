// Theme toggle with localStorage persistence
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

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollBtn.classList.add('visible');
  else scrollBtn.classList.remove('visible');
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate cards into view
const animateCards = document.querySelectorAll('.skill-card, .project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animateCards.forEach(card => observer.observe(card));
