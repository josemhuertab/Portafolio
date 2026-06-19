export default function Experience() {
  return (
    <section className="experience">
      <header className="experience__header">
        <h2 className="experience__title">Experiencia</h2>
        <svg className="experience__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </header>
      <div className="experience__list">
        <article className="experience__item">
          <div className="experience__item-header">
            <h3 className="experience__item-title">
              Desarrollador Fullstack Junior - SynchroDev SpA
            </h3>
            <h5 className="experience__item-period">
              Octubre 2024 - Actualidad
            </h5>
          </div>
          <ul className="experience__item-list">
            <li className="experience__item-point">
              Desarrollo de interfaces web modulares y responsivas con Vue 3 (Composition API) y Tailwind CSS, con foco en componentes reutilizables, consistencia visual y experiencia de usuario
            </li>
            <li className="experience__item-point">
              Implementación de features completos de extremo a extremo: landing page de marketing, modo demo con store en memoria y sistema de seguridad por inactividad con React Context y persistencia en Supabase
            </li>
            <li className="experience__item-point">
              Colaboración en servicios y APIs REST con Java Spring Boot, integrando endpoints al frontend y participando en la definición de contratos de datos
            </li>
            <li className="experience__item-point">
              Gestión de flujo de trabajo bajo metodologías Scrum/Kanban con Jira, participando en planificación de sprints y documentación técnica de requerimientos
            </li>
            <li className="experience__item-point">
              Participación directa en decisiones técnicas del producto, aportando criterio de frontend en la planificación estratégica orientada a los objetivos de cada cliente
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
