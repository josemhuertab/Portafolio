import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Portfolio de José Huerta - Desarrollador Frontend especializado en React, Vue.js y TypeScript. Disponible para nuevos proyectos.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="portfolio" id="main-content">
        <div className="portfolio__container">
          <Hero />
          <div className="portfolio__divider" />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}
