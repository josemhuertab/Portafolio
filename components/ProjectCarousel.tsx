'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { ProjectImage } from '@/data/projects'

interface ProjectCarouselProps {
  images: ProjectImage[]
  projectTitle: string
  projectUrl: string
  priority?: boolean
}

export default function ProjectCarousel({ images, projectTitle, projectUrl, priority = false }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % images.length)
  }, [images.length])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-label={`Capturas de pantalla de ${projectTitle}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="carousel__link group"
        tabIndex={-1}
        aria-label={`Ver proyecto ${projectTitle}`}
      >
        <div className="carousel__image-wrapper">
          {images.map((img, i) => {
            const src = isDark ? img.dark : img.light
            return (
              <Image
                key={`${i}-${isDark ? 'dark' : 'light'}`}
                src={src}
                alt={img.alt}
                width={928}
                height={599}
                // El carrusel ocupa ~50% del ancho en desktop (max-w-3xl / 2 cols)
                // y 100% en móvil
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 464px"
                className={`carousel__image ${i === current ? 'carousel__image--active' : 'carousel__image--hidden'}`}
                loading={priority && i === 0 ? undefined : 'lazy'}
                priority={priority && i === 0}
              />
            )
          })}
          <div className="carousel__overlay">
            <span className="carousel__overlay-text">Ver proyecto</span>
          </div>
        </div>
      </a>

      {images.length > 1 && (
        <div className="carousel__controls">
          <button
            onClick={prev}
            className="carousel__arrow"
            aria-label="Imagen anterior"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="carousel__dots" role="tablist" aria-label="Seleccionar imagen">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Imagen ${i + 1} de ${images.length}`}
                onClick={() => setCurrent(i)}
                className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="carousel__arrow"
            aria-label="Imagen siguiente"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
