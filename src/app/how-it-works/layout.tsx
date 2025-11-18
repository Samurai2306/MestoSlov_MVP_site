import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Как это работает',
  description: 'Узнайте, как использовать платформу МестоСлов: выбор экскурсии, скачивание аудио, геолокация и самостоятельные путешествия.',
  keywords: 'как работает, инструкция, руководство пользователя, геолокация',
})

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

