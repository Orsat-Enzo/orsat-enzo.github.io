import { useEffect, useRef, useState } from "react";
import "./project.css";

export default function Project() {
  const [selected, setSelected] = useState(null);
  const expandedRef = useRef(null);

  const projects = [
    {
      title: "Minishell 2",
      short: "Shell minimal avec exécution de commandes et redirections.",
      long:
        "Minishell focalisé sur l’essentiel : lancer des commandes/binaries, chaîner via '|' et rediriger l’I/O ('<' et '>'), avec parsing simple et gestion du PATH. Les fonctionnalités “confort” (autocomplétion, historique) ne sont pas incluses : le projet cible la compréhension des processus (fork/exec), des pipes et des descripteurs de fichiers."
    },
    {
      title: "Pipeto",
      short: "Patches de vulnérabilités et contrôle d’accès.",
      long:
        "Exercice de Blue/Purple Team sur une simulation de centrale nucléaire simplifiée : recherche de vulnérabilités (pentest), analyse en reverse engineering, puis rédaction et application de correctifs (.patch). L’objectif était de renforcer la sécurité des modules critiques via politiques d’accès, contrôle des entrées et recommandations de durcissement, le tout accompagné d’un rapport de risques.",
    },
    {
      title: "Portfolio",
      short: "Site web personnel en React/Vite.",
      long:
        "Création de mon portfolio en React avec Vite et React Router : navigation fluide, UI minimaliste et responsive. Déploiement automatisé via GitHub Pages pour présenter mes projets et mes compétences.",
    },
    {
      title: "Cuddle",
      short: "Mini-lib en C inspirée de Pandas.",
      long:
        "Réimplémentation simplifiée de certaines fonctionnalités de Pandas en C. Gestion de tableaux typés (dataframes), parsing CSV, filtres, tris et manipulation efficace des données. Objectif : fournir un outil performant et léger pour traiter des datasets en C.",
    },
    {
      title: "A-Maze-d Pathfinding",
      short: "Algorithme de recherche de chemin dans un labyrinthe.",
      long:
        "Implémentation d’un algorithme de pathfinding (Dijkstra/BFS) dans un labyrinthe. Retourne un tableau de chemins optimaux représentés sous forme de listes chaînées. Projet axé sur les structures de données et l’optimisation des parcours.",
    },
    {
      title: "Corewar VM",
      short: "Simulation de bataille en mémoire avec opcodes.",
      long:
        "Machine virtuelle capable d’exécuter des programmes compilés en pseudo-assembleur (champions). Simulation d’une bataille dans une mémoire circulaire où chaque processus exécute des instructions (opcodes) jusqu’à la victoire. Projet axé sur la gestion mémoire bas niveau et la simulation concurrente.",
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