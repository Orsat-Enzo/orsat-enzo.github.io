import { useEffect, useRef, useState } from "react";
import "./project.css";

export default function Project() {
  const [selected, setSelected] = useState(null);
  const expandedRef = useRef(null);

  const projects = [
    {
      title: "Minishell 2",
      short: "Shell minimal avec pipes et redirections.",
      long:
        "Implémentation des pipes, redirections (<, >, >>), parsing robuste, gestion des erreurs, builtins cd/env/exit, exécution via execve, et tests d’intégration.",
    },
    {
      title: "Pipeto",
      short: "Patches de vulnérabilités et contrôle d’accès.",
      long:
        "Audit + correctifs (.patch) par vulnérabilité, durcissement des points critiques, politiques d’accès granulaires, rapport de risques et consignes de déploiement.",
    },
    {
      title: "Portfolio React",
      short: "Vite + React Router + UI propre.",
      long:
        "SPA réactive, composants modulaires, thème dark, CI/CD GitHub Actions, déploiement GitHub Pages, et opti Lighthouse.",
    },
    {
      title: "Dataframe C",
      short: "Mini-lib de tableau typé en C.",
      long:
        "Lecture CSV, types de colonnes, tri/filtrage, API simple, et respect strict du Coding Style Epitech (fonctions découpées).",
    },
    {
      title: "A-Maze-d Pathfinding",
      short: "Recherche de chemin avec listes chaînées.",
      long:
        "Retour d’un tableau de chemins, heuristiques testées, visualisation console et instrumentation pour le debug.",
    },
    {
      title: "Corewar VM (WIP)",
      short: "Exécution d’opcodes et mémoire circulaire.",
      long:
        "Gestion des processus, opcodes clés (live, zjmp), timeline des cycles, dump mémoire, et conformité op.h.",
    },
  ];

  // Scroll vers le panneau agrandi à l’ouverture
  useEffect(() => {
    if (selected !== null && expandedRef.current) {
      expandedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

  return (
    <div className="project-page">
      <header className="project-header container">
        <h1>Projets</h1>
        <p className="project-sub">
          Survole pour surligner. Clique pour ouvrir un projet en grand (les autres restent en dessous).
        </p>
      </header>

      {/* Panneau plein-largeur pour le projet sélectionné */}
      <section className="container">
        <div
          ref={expandedRef}
          className={`expanded-wrapper ${selected !== null ? "open" : ""}`}
          aria-live="polite"
        >
          {selected !== null && (
            <article className="expanded-card" role="region" aria-label={projects[selected].title}>
              <header className="expanded-head">
                <h2 className="expanded-title">{projects[selected].title}</h2>
                <button
                  className="button small"
                  onClick={() => setSelected(null)}
                  aria-label="Fermer le projet ouvert"
                >
                  Fermer
                </button>
              </header>
              <p className="expanded-short">{projects[selected].short}</p>
              <p className="expanded-long">{projects[selected].long}</p>
            </article>
          )}
        </div>
      </section>

      {/* Grille des cartes (les autres projets) */}
      <section className="projects container" aria-label="Liste de projets">
        <ul className="projects-grid">
          {projects.map((p, i) => (
            <li key={i}>
              <button
                className={`project-card-btn ${
                  selected === i ? "active" : ""
                }`}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(i);
                }}
                aria-expanded={selected === i}
                aria-controls="expanded-project"
              >
                <h3 className="card-title">{p.title}</h3>
                <p className="card-short">{p.short}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}