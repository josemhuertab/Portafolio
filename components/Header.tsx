'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [showHeroInfo, setShowHeroInfo] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (theme === 'dark' || (!theme && prefersDark)) {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero')
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        setShowHeroInfo(heroRect.bottom < 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className={`header ${showHeroInfo ? 'header--expanded' : ''}`}>
      <div className="header__container">
        {showHeroInfo && (
          <div className="header__hero-info">
            <div className="header__hero-image-wrapper">
              <Image
                src="/profile-photo.png"
                alt="José Huerta"
                width={48}
                height={48}
                className="header__hero-image"
                unoptimized
              />
            </div>
            <div className="header__hero-text">
              <h2 className="header__hero-name">José Huerta</h2>
              <p className="header__hero-description">
                Apasionado del Desarrollo Frontend y el diseño UX/UI
              </p>
            </div>
          </div>
        )}
        <button
          onClick={toggleTheme}
          className="header__theme-toggle"
          aria-label="Cambiar tema"
          suppressHydrationWarning
        >
          {isDark ? (
            <svg className="header__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="header__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
