import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main className="portfolio">
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
