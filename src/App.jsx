import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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

function DocumentTitle() {
  useDocumentTitle();
  return null;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);
  const navLinkClass = ({ isActive }) => `navlink${isActive ? " active" : ""}`;

  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback pour vieux navigateurs / contexte non sécurisé
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setToast("Email copié dans le presse-papiers");
    } catch {
      setToast("Impossible de copier l’email");
    } finally {
      setTimeout(() => setToast(null), 1800);
    }
  }

  return (
    <Router>
      <ScrollToTop />
      <DocumentTitle />

      <header className="site-header">
        <div className="brand" onClick={closeMenu}>
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
          <Route
            path="*"
            element={
              <div className="container">
                <h1>404</h1>
                <p>La page demandée n’existe pas.</p>
                <NavLink to="/" className="button">
                  Retour à l’accueil
                </NavLink>
              </div>
            }
          />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Enzo Orsat — Portfolio</p>
        <div className="footer-links">
          {/* Remplace l'email par le tien */}
          <button
            type="button"
            className="footer-link-btn"
            onClick={() => copyToClipboard("enzo.orsat@epitech.eu")}
            aria-label="Copier l’adresse email"
            title="Copier l’email"
          >
            Email
          </button>

          {/* Remplace ces URLs par les tiennes */}
          <a href="https://github.com/Orsat-Enzo" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/enzo-orsat-136646350/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        {/* Toast de confirmation */}
        {toast && (
          <div className="toast" role="status" aria-live="polite">
            {toast}
          </div>
        )}
      </footer>
    </Router>
  );
}