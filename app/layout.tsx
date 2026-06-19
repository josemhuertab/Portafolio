import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DotBackground from '@/components/DotBackground'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://jhuerta.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'José Huerta | Desarrollo Frontend · UX/UI · Entornos Full Stack',
    template: '%s | José Huerta'
  },
  description: 'Portfolio de José Huerta — desarrollo frontend con Vue 3, React y Next.js, con experiencia en entornos fullstack. Proyectos en producción: PWAs, sistemas POS y landing pages.',
  keywords: [
    'José Huerta',
    'Desarrollador Frontend Junior',
    'Vue.js',
    'Vue 3',
    'Pinia',
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'UX/UI',
    'Tailwind CSS',
    'Next.js',
    'Firebase',
    'Firestore',
    'PWA',
    'Chart.js',
    'API REST',
    'Desarrollador Web',
    'Frontend Developer',
    'Diseño Web Responsivo',
    'Portfolio',
    'Chile',
    'SynchroDev',
  ],
  authors: [{ name: 'José Huerta', url: siteUrl }],
  creator: 'José Huerta',
  publisher: 'José Huerta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    title: 'José Huerta | Desarrollador Frontend · UX/UI · Entornos Full Stack',
    description: 'Portfolio de José Huerta — desarrollo frontend con Vue 3, React y Next.js. Proyectos en producción: PWAs, sistemas POS multi-tenant y landing pages orientadas a conversión.',
    siteName: 'José Huerta - Portfolio',
    images: [
      {
        url: '/images/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'José Huerta - Desarrollo Frontend · UX/UI · Entornos Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Huerta | Desarrollo Frontend · UX/UI · Entornos Full Stack',
    description: 'Portfolio de José Huerta — desarrollo frontend con Vue 3, React y Next.js. Proyectos en producción: PWAs, sistemas POS y landing pages.',
    images: ['/images/og-image.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: [],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José Huerta',
    jobTitle: 'Desarrollador Frontend Junior',
    url: 'https://jhuerta.vercel.app',
    sameAs: [
      'https://github.com/josemhuertab',
      'https://linkedin.com/in/josemhuertab',
    ],
    knowsAbout: [
      'Desarrollo Frontend',
      'Vue.js',
      'Vue 3 Composition API',
      'Pinia',
      'React',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'UX/UI Design',
      'Tailwind CSS',
      'Next.js',
      'Firebase',
      'Firestore',
      'PWA',
      'Chart.js',
      'API REST',
      'Diseño Web Responsivo',
      'Desarrollo de Componentes',
      'Interfaces de Usuario',
      'Java Spring Boot',
    ],
    description: 'Desarrollador Frontend Junior especializado en Vue.js, React, JavaScript y diseño UX/UI. Experiencia en consumo de APIs REST, Firebase y desarrollo de interfaces responsivas.',
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        <DotBackground />
        {children}
      </body>
    </html>
  )
}
