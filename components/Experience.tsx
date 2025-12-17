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
              Desarrollador Frontend Junior - SynchroDev SpA
            </h3>
            <h5 className="experience__item-period">
              Octubre 2024 - Actualidad
            </h5>
          </div>
          <ul className="experience__item-list">
            <li className="experience__item-point">
              Creación de componentes y funcionalidades en Front-End utilizando Vue.js, Vuetify, Bootstrap, entre otros
            </li>
            <li className="experience__item-point">
              Diseño de interfaces de usuario desde cero y conversión a web adaptable para cualquier tamaño de pantalla
            </li>
            <li className="experience__item-point">
              Implementación de consumo de APIs REST para integrar funcionalidades dinámicas y mejorar la eficiencia en la gestión de datos
            </li>
            <li className="experience__item-point">
              Participación en el desarrollo de sistemas, desde sus requerimientos hasta producción
            </li>
            <li className="experience__item-point">
              Ejecución de pruebas funcionales y colaboración en la puesta en marcha de sistemas en producción
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
