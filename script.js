/* Reset and base */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  transition: background-color 0.4s ease, color 0.4s ease;
  scroll-behavior: smooth;
  background-color: #f9f9f9;
  color: #111;
}

body.dark {
  background-color: #111;
  color: #f9f9f9;
}

header {
  background-color: #4f46e5;
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.2rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #d1d5db;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(to right, #4f46e5, #6366f1);
  color: white;
  animation: fadeIn 1s ease-in;
}

.hero img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  margin-bottom: 1rem;
}

/* Sections */
section {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: auto;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.skills-grid div {
  background: #e0e7ff;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
}

body.dark .skills-grid div {
  background: #1e1e2e;
  color: white;
}

.skills-grid div:hover {
  transform: scale(1.05);
  background: #c7d2fe;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.projects-grid div {
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, background 0.3s ease;
}

body.dark .projects-grid div {
  background: #222;
}

.projects-grid div:hover {
  transform: translateY(-5px);
  background: #e0e7ff;
}

/* Resume Download */
#resume a {
  display: inline-block;
  margin-top: 1rem;
  background: #4f46e5;
  color: white;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s ease;
}

#resume a:hover {
  background: #4338ca;
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  background: #e5e7eb;
  color: #444;
}

body.dark footer {
  background: #181818;
  color: #bbb;
}

/* Scroll to top button */
#scrollTopBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

#scrollTopBtn:hover {
  background-color: #3730a3;
}

/* Animations */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media screen and (max-width: 600px) {
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    padding: 2rem 1rem;
  }

  .hero img {
    width: 100px;
    height: 100px;
  }
}
