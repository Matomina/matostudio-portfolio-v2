import type { CSSProperties } from 'react'

import { projects } from '@/data/projects.data'

function revealDelay(delay: number): CSSProperties {
  return {
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties
}

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow" data-reveal="soft">
          Projets
        </p>

        <h2 id="projects-title" data-reveal="soft" style={revealDelay(120)}>
          Des projets concrets, pensés pour progresser vers le niveau professionnel.
        </h2>

        <p data-reveal="soft" style={revealDelay(240)}>
          Une sélection de projets construits pour démontrer la maîtrise du front-end, du back-end,
          de l’architecture, du design responsive et de la logique produit.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.id}
            data-reveal="card"
            style={revealDelay(index * 140)}
          >
            <div className="project-card__header">
              <div>
                <p className="project-card__category">{project.category}</p>
                <h3>{project.title}</h3>
              </div>

              <span className="project-card__status">{project.status}</span>
            </div>

            <p className="project-card__description">{project.description}</p>

            <ul
              className="project-card__stack"
              aria-label={`Technologies utilisées pour ${project.title}`}
            >
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="project-card__links">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  Code source
                </a>
              ) : null}

              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Démo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
