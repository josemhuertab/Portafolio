import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__image-wrapper">
          <Image
            src="/images/profile-photo.jpg"
            alt="José Huerta - Desarrollador Frontend"
            width={176}
            height={176}
            className="hero__image"
            priority
            unoptimized
          />
        </div>
        <div className="hero__info">
          <div className="hero__text">
            <h1 className="hero__title">José Huerta</h1>
            <p className="hero__subtitle">
              Apasionado del Desarrollo Frontend y el diseño UX/UI
            </p>
          </div>
          <div className="hero__actions">
            <div className="hero__badge">
              <div className="hero__badge-content">
                <p className="hero__badge-text">Disponible para trabajo</p>
                <svg className="hero__badge-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <a href="/documents/cv.pdf" download className="hero__cv-button" aria-label="Descargar CV">
              <span>Descargar CV</span>
              <svg className="hero__badge-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
