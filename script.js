// Theme Toggle Button
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Set default mode from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}
updateThemeIcon();

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
});

function updateThemeIcon() {
  toggleBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
}

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile Nav Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
