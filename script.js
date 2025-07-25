// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "🌞";
} else {
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌞";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// Scroll To Top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hamburger Toggle (for small screens)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
