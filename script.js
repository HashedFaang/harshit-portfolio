:root {
  --primary-color: #2c3e50;
  --secondary-color: #18bc9c;
  --bg-color: #ffffff;
  --text-color: #333;
  --link-color: #3498db;
}

body.dark {
  --bg-color: #121212;
  --text-color: #f1f1f1;
  --link-color: #1abc9c;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background 0.3s, color 0.3s;
  scroll-behavior: smooth;
}

/* NAVIGATION */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary-color);
  padding: 1rem 2rem;
  color: white;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.2rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

#theme-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

/* HERO SECTION */
.hero {
  text-align: center;
  padding: 3rem 1rem;
}

.hero img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.hero h1 {
  font-size: 2.2rem;
  margin-top: 1rem;
}

.hero span {
  color: var(--secondary-color);
}

.hero p {
  margin-top: 0.5rem;
  font-size: 1.1rem;
}

/* SECTIONS */
section {
  padding: 2.5rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

section h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--secondary-color);
}

/* SKILLS */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  text-align: center;
}

.skills-grid div {
  background: #ecf0f1;
  padding: 0.8rem;
  border-radius: 6px;
  font-weight: 500;
  transition: 0.3s ease;
}

body.dark .skills-grid div {
  background: #1e1e1e;
  color: var(--text-color);
}

.skills-grid div:hover {
  transform: scale(1.05);
  background: var(--secondary-color);
  color: white;
}

/* PROJECTS */
.projects-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

.projects-grid div {
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

body.dark .projects-grid div {
  background: #1a1a1a;
}

/* RESUME & CONTACT */
a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

section#resume a {
  font-weight: bold;
  display: inline-block;
  margin-top: 1rem;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  margin-top: 2rem;
}

/* SCROLL TO TOP */
#scrollTopBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 1.2rem;
  padding: 8px 12px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 999;
}

#scrollTopBtn:hover {
  background-color: #149174;
}
