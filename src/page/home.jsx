import { NavLink } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">Développeur en formation — Epitech</h1>
          <p className="hero-subtitle">
            Je construis des projets en <strong>C</strong>, <strong>JavaScript</strong> et
            <strong> React</strong>. J’aime les défis techniques, la sécu et les UIs propres.
          </p>
          <div className="hero-actions">
            <NavLink to="/projects" className="button primary">Voir mes projets</NavLink>
            <NavLink to="/contact" className="button">Me contacter</NavLink>
          </div>
        </div>
      </section>

      {/* Quick highlights */}
      <section className="highlights container">
        <h2>Ce que je fais</h2>
        <ul className="cards">
          <li className="card">
            <h3>Back & Système</h3>
            <p>Mini-shell, parsing, IPC, gestion de process, patchs sécurité (Blue/Purple Team).</p>
          </li>
          <li className="card">
            <h3>Front léger</h3>
            <p>React + CSS, composants propres, navigation client, prototypage rapide.</p>
          </li>
          <li className="card">
            <h3>Data & Outils</h3>
            <p>CSV/Dataframes maison, algos de tri/filtrage, lecture de fichiers robuste.</p>
          </li>
        </ul>
      </section>

      {/* Teaser projets */}
      <section className="teaser container">
        <h2>Projets récents</h2>
        <div className="grid">
          <article className="teaser-card">
            <h3>Minishell 2</h3>
            <p>Pipes, redirections, builtin <code>cd</code>/<code>env</code>, gestion d’erreurs stricte.</p>
            <NavLink to="/projects" className="link">Détails →</NavLink>
          </article>
          <article className="teaser-card">
            <h3>Pipeto (Blue Team)</h3>
            <p>Patches de vulnérabilités, contrôles d’accès, rapport de risques.</p>
            <NavLink to="/projects" className="link">Détails →</NavLink>
          </article>
          <article className="teaser-card">
            <h3>Portfolio React</h3>
            <p>Vite + React Router, UI minimaliste, sections modulaires.</p>
            <NavLink to="/projects" className="link">Détails →</NavLink>
          </article>
        </div>
      </section>
    </div>
  );
}