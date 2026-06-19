import { projects, collaborationProjects, TechIcon } from '@/data/projects'
import type { Project } from '@/data/projects'
import ProjectCarousel from './ProjectCarousel'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <ProjectCarousel
        images={project.images}
        projectTitle={project.title}
        projectUrl={project.url}
        priority={index === 0}
      />

      <div className="project-card__content">
        <div className="project-card__header">
          <div className="project-card__title-row">
            <h3 className="project-card__title">{project.title}</h3>
            {project.type === 'collaboration' && project.role && (
              <span className="project-card__role-badge">{project.role}</span>
            )}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__url"
          >
            <span>{project.url.replace('https://', '')}</span>
            <svg className="project-card__url-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <p className="project-card__description">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-card__highlights">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="project-card__highlight-item">
                <span className="project-card__highlight-dot" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card__tech">
          {project.technologies.map((tech, techIndex) => (
            <div key={techIndex} className="tech-badge group/tooltip">
              <span className="tech-badge__tooltip">{tech.name}</span>
              <TechIcon name={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const hasCollaborations = collaborationProjects.length > 0

  return (
    <section className="projects">
      <header className="projects__header">
        <h2 className="projects__title">Proyectos</h2>
        <svg className="projects__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </header>

      <div className="projects__section">
        <h3 className="projects__section-title">
          <span className="projects__section-title-line" aria-hidden="true" />
          Proyectos personales
        </h3>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {hasCollaborations && (
        <>
          <div className="projects__divider" />
          <div className="projects__section">
            <h3 className="projects__section-title">
              <span className="projects__section-title-line" aria-hidden="true" />
              Proyectos en los que he participado
            </h3>
            <div className="projects__grid">
              {collaborationProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
