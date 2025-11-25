import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'José Huerta | Desarrollador Frontend',
  description: 'Portafolio profesional de José Huerta, desarrollador frontend especializado en React, Next.js y diseño UI/UX.',
  keywords: ['José Huerta', 'Desarrollador Frontend', 'React', 'Next.js', 'UI/UX', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'José Huerta' }],
  openGraph: {
    title: 'José Huerta | Desarrollador Frontend',
    description: 'Portafolio profesional de José Huerta',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
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
