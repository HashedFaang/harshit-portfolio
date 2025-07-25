// Theme Toggle Logic
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "🌞";
} else {
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "🌞";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
