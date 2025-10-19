import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'МестоСлов - Аутентичная Россия через аудиоэкскурсии',
  description: 'Откройте для себя уникальные места России через личные истории местных жителей. Аудиоэкскурсии с геолокацией для самостоятельных путешествий.',
  keywords: 'аудиоэкскурсии, путешествия по России, геолокация, местные истории, туризм',
  openGraph: {
    title: 'МестоСлов - Аудиоэкскурсии по России',
    description: 'Аутентичная Россия через личные аудиорассказы',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="min-h-screen">
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
      </body>
    </html>
  )
}


