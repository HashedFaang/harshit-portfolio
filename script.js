// Theme toggle logic
const toggle = document.getElementById("theme-toggle");
const body = document.body;
const scrollBtn = document.getElementById("scroll-top");

// Load theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle on click
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Scroll-to-top logic
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
