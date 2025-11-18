import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import SkipLink from '@/components/common/SkipLink'
import PWARegister from '@/components/common/PWARegister'
import { generateMetadata as genMeta, generateStructuredData } from '@/lib/metadata'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = genMeta({
  title: 'МестоСлов - Аутентичная Россия через аудиоэкскурсии',
  description: 'Откройте для себя уникальные места России через личные истории местных жителей. Аудиоэкскурсии с геолокацией для самостоятельных путешествий.',
  keywords: 'аудиоэкскурсии, путешествия по России, геолокация, местные истории, туризм',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateStructuredData('Organization')
  const websiteSchema = generateStructuredData('WebSite')

  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/MestoSlov_MVP_site/manifest.json" />
        <meta name="theme-color" content="#38B2AC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="МестоСлов" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ErrorBoundary>
          <Providers>
            <PWARegister />
            <SkipLink />
            <Navigation />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#38B2AC',
                  color: '#fff',
                },
              }}
            />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}


