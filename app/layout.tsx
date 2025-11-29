import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://josehuerta.dev' // Cambia esto por tu URL real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'José Huerta | Desarrollador Frontend & Diseñador UX/UI',
    template: '%s | José Huerta'
  },
  description: 'Desarrollador Frontend especializado en React, Vue.js, TypeScript y diseño UX/UI. Creando experiencias web modernas y accesibles.',
  keywords: ['José Huerta', 'Desarrollador Frontend', 'React', 'Vue.js', 'TypeScript', 'UI/UX', 'Tailwind CSS', 'Next.js', 'Vuetify', 'Bootstrap', 'Desarrollador Web', 'Portfolio'],
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
    title: 'José Huerta | Desarrollador Frontend & Diseñador UX/UI',
    description: 'Desarrollador Frontend especializado en React, Vue.js, TypeScript y diseño UX/UI. Creando experiencias web modernas y accesibles.',
    siteName: 'José Huerta Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'José Huerta - Desarrollador Frontend',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Huerta | Desarrollador Frontend & Diseñador UX/UI',
    description: 'Desarrollador Frontend especializado en React, Vue.js, TypeScript y diseño UX/UI.',
    images: ['/og-image.jpg'],
    creator: '@josemhuertab',
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
    jobTitle: 'Desarrollador Frontend',
    url: 'https://josehuerta.dev',
    sameAs: [
      'https://github.com/josemhuertab',
      'https://linkedin.com/in/josemhuertab',
    ],
    knowsAbout: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'UI/UX Design', 'Frontend Development'],
    description: 'Desarrollador Frontend especializado en React, Vue.js, TypeScript y diseño UX/UI',
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
