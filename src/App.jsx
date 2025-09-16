import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Project from "./page/project.jsx";
import Home from "./page/home.jsx";
import Contact from "./page/contact.jsx";

// Fait remonter la page en haut à chaque changement de route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Met à jour le title de l'onglet selon la route
function useDocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const map = {
      "/": "Accueil — Enzo Orsat",
      "/projects": "Projets — Enzo Orsat",
      "/contact": "Contact — Enzo Orsat",
    };
    document.title = map[pathname] || "Enzo Orsat";
  }, [pathname]);
}

// Petit composant pour exécuter le hook à l'intérieur du Router
function DocumentTitle() {
  useDocumentTitle();
  return null;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) => `navlink${isActive ? " active" : ""}`;

  return (
    <Router>
      <ScrollToTop />
      <DocumentTitle />

      <header className="site-header">
        <div className="brand" onClick={closeMenu}>
          <img src={viteLogo} alt="Vite" className="logo small" />
          <img src={reactLogo} alt="React" className="logo small spin" />
          <span className="brand-name">ENZO ORSAT</span>
        </div>

        <button
          className={`burger${menuOpen ? " open" : ""}`}
          aria-label="Ouvrir/fermer le menu"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar${menuOpen ? " show" : ""}`}>
          <NavLink to="/" className={navLinkClass} onClick={closeMenu} end>
            Accueil
          </NavLink>
          <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>
            Projets
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 minimaliste si la route n'existe pas */}
          <Route path="*" element={
            <div className="container">
              <h1>404</h1>
              <p>La page demandée n’existe pas.</p>
              <NavLink to="/" className="button">Retour à l’accueil</NavLink>
            </div>
          } />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Enzo Orsat — Portfolio</p>
        <div className="footer-links">
          <a href="mailto:contact@example.com">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </Router>
  );
}
