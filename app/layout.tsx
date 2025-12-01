import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://jhuerta.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'José Huerta | Desarrollador Frontend Junior - Vue.js, React & UX/UI',
    template: '%s | José Huerta'
  },
  description: 'Desarrollador Frontend Junior especializado en Vue.js, React, JavaScript y diseño UX/UI. Experiencia en consumo de APIs REST, Firebase, Tailwind CSS, Bootstrap y Vuetify. Disponible para nuevos proyectos.',
  keywords: [
    'José Huerta',
    'Desarrollador Frontend Junior',
    'Vue.js',
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'UX/UI',
    'Tailwind CSS',
    'Bootstrap',
    'Vuetify',
    'Next.js',
    'jQuery',
    'Firebase',
    'API REST',
    'Consumo de APIs',
    'Desarrollador Web',
    'Frontend Developer',
    'Diseño Web Responsivo',
    'Portfolio',
    'Chile'
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
    title: 'José Huerta | Desarrollador Frontend Junior - Vue.js, React & UX/UI',
    description: 'Desarrollador Frontend Junior con experiencia en Vue.js, React, JavaScript y diseño UX/UI. Especializado en consumo de APIs REST y desarrollo de interfaces responsivas.',
    siteName: 'José Huerta - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'José Huerta - Desarrollador Frontend Junior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Huerta | Desarrollador Frontend Junior - Vue.js, React & UX/UI',
    description: 'Desarrollador Frontend Junior especializado en Vue.js, React, JavaScript y diseño UX/UI. Disponible para nuevos proyectos.',
    images: ['/og-image.jpg'],
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'UX/UI Design',
      'Tailwind CSS',
      'Bootstrap',
      'Vuetify',
      'Next.js',
      'jQuery',
      'Firebase',
      'API REST',
      'Consumo de APIs',
      'Diseño Web Responsivo',
      'Desarrollo de Componentes',
      'Interfaces de Usuario'
    ],
    description: 'Desarrollador Frontend Junior especializado en Vue.js, React, JavaScript y diseño UX/UI. Experiencia en consumo de APIs REST, Firebase y desarrollo de interfaces responsivas.',
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        {children}
      </body>
    </html>
  )
}
