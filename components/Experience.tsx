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
              Desarrollador Frontend • Empresa Tecnológica
            </h3>
          </div>
          <ul className="experience__item-list">
            <li className="experience__item-point">
              Desarrollo de componentes reutilizables con React y TypeScript
            </li>
            <li className="experience__item-point">
              Implementación de diseños responsivos con Tailwind CSS
            </li>
            <li className="experience__item-point">
              Optimización de rendimiento y mejora de Core Web Vitals
            </li>
            <li className="experience__item-point">
              Colaboración con equipos de diseño para crear interfaces intuitivas
            </li>
            <li className="experience__item-point">
              Integración de APIs RESTful y GraphQL
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
