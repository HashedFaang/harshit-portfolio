// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Remove default label (🌙/☀️) and use only icon visuals
function updateThemeIcon() {
  toggleBtn.innerHTML = body.classList.contains("dark") ? "<i class='fas fa-sun'></i>" : "<i class='fas fa-moon'></i>";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    updateThemeIcon();
  });
  updateThemeIcon();
}

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");

if (scrollBtn) {
  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.pointerEvents = "auto";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.pointerEvents = "none";
    }
  };

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
