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
        <p className="muted">
          Développeur en <strong>2<sup>e</sup> année à Epitech</strong>. 
          J’aime le C (système), la sécu, et construire des UIs propres en React.
          Ouvert à un stage et à des collaborations techniques.
        </p>

        <div className="cta-row">
          <button
            className="button primary"
            onClick={() => copyToClipboard("enzo@example.com")}
            aria-label="Copier l’adresse email"
            title="Copier l’email"
          >
            Copier mon email
          </button>
          <a
            className="button"
            href="https://github.com/username"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Animation de compétences */}
      <section className="container skills-section" aria-label="Compétences techniques">
        <h2>Compétences</h2>

        <div className="skills-marquee">
          <div className="track track-1">
            <span className="badge">C</span>
            <span className="badge">React</span>
            <span className="badge">CSS</span>
            <span className="badge">Python</span>
            <span className="badge">JavaScript</span>
            <span className="badge">Git</span>

            {/* duplication pour boucle fluide */}
            <span className="badge">C</span>
            <span className="badge">React</span>
            <span className="badge">CSS</span>
            <span className="badge">Python</span>
            <span className="badge">JavaScript</span>
            <span className="badge">Git</span>
          </div>

          <div className="track track-2">
            <span className="badge">Git</span>
            <span className="badge">JavaScript</span>
            <span className="badge">Python</span>
            <span className="badge">CSS</span>
            <span className="badge">React</span>
            <span className="badge">C</span>

            {/* duplication pour boucle fluide */}
            <span className="badge">Git</span>
            <span className="badge">JavaScript</span>
            <span className="badge">Python</span>
            <span className="badge">CSS</span>
            <span className="badge">React</span>
            <span className="badge">C</span>
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </div>
  );
}