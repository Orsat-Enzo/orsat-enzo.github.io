import { NavLink } from "react-router-dom";
import "./home.css";

export default function Home() {
  // Indices des projets dans Project.jsx (garde cet ordre en sync)
  const OPEN = {
    MINISHELL: 0,
    PIPETO: 1,
    PORTFOLIO: 2,
  };

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">Développeur en formation — Epitech</h1>
          <p className="hero-subtitle">
            Je suis un développeur en <strong>2<sup>e</sup> année à Epitech</strong>,
            prêt à relever de nouveaux défis techniques et à apprendre vite.
          </p>
          <div className="hero-actions">
            <NavLink to="/projects" className="button primary">Voir mes projets</NavLink>
            <NavLink to="/contact" className="button">Me contacter</NavLink>
          </div>
        </div>
      </section>

      {/* Highlights (tu peux garder/adapter) */}
      <section className="highlights container">
        <h2>Ce que je fais</h2>
        <ul className="cards">
          <li className="card">
            <h3>Back & Système</h3>
            <p>Mini-shell, parsing, pipes, gestion de process, patchs sécurité.</p>
          </li>
          <li className="card">
            <h3>Front léger</h3>
            <p>React + CSS, composants propres, navigation client, prototypage rapide.</p>
          </li>
          <li className="card">
            <h3>Data & Outils</h3>
            <p>Structures en C, lib type DataFrame, outils de tri/filtrage.</p>
          </li>
        </ul>
      </section>

      <section className="teaser container">
        <h2>Projets récents</h2>
        <div className="grid">
          <article className="teaser-card">
            <h3>Minishell 2</h3>
            <p>Exécution de commandes, pipes et redirections.</p>
            <NavLink
              to="/projects"
              state={{ open: OPEN.MINISHELL }}
              className="link"
            >
              Détails →
            </NavLink>
          </article>

          <article className="teaser-card">
            <h3>Pipeto (Blue Team)</h3>
            <p>Pentests, reverse et correctifs sur une centrale simulée.</p>
            <NavLink
              to="/projects"
              state={{ open: OPEN.PIPETO }}
              className="link"
            >
              Détails →
            </NavLink>
          </article>

          <article className="teaser-card">
            <h3>Portfolio</h3>
            <p>Site perso en React/Vite, déployé sur GitHub Pages.</p>
            <NavLink
              to="/projects"
              state={{ open: OPEN.PORTFOLIO }}
              className="link"
            >
              Détails →
            </NavLink>
          </article>
        </div>
      </section>
    </div>
  );
}