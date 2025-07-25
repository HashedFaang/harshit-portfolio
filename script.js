// Theme Toggle Button
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Set default mode from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Update button icon based on theme
function updateThemeIcon() {
  toggleBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
}
updateThemeIcon();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile Nav Toggle
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.createElement("button");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector(".navbar").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
