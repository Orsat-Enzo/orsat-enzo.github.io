import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [toast, setToast] = useState(null);

  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
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
    <div className="contact-page">
      <header className="container contact-header">
        <h1>Contact</h1>
          <p className="intro-text">
            Je suis un jeune développeur, actuellement en 2<sup>e</sup> année à Epitech.  
            Curieux et motivé, je suis ouvert à toutes les opportunités et toujours prêt à découvrir
            de nouvelles technologies.  
            <br />
            les technologies que j’utilise :{" "}
            <span className="tech-rotator-inline">
              <span>React</span>
              <span>C</span>
              <span>Python</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Git</span>
            </span>
          </p>

        <div className="cta-row">
          <button
            className="button primary"
            onClick={() => copyToClipboard("enzo.orsat@epitech.eu")}
            aria-label="Copier l’adresse email"
            title="Copier l’email"
          >
            Copier mon email
          </button>
          <a
            className="button"
            href="https://github.com/Orsat-Enzo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/enzo-orsat-136646350/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>
      {toast && (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </div>
  );
}