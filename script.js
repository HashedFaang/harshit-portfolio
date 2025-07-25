// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Apply stored theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Icon updater
function updateThemeIcon() {
  toggleBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
}
updateThemeIcon();

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu toggle
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.createElement("button");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector(".navbar").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
