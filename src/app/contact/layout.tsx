import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Контакты',
  description: 'Свяжитесь с командой МестоСлов. Мы всегда рады ответить на ваши вопросы об аудиоэкскурсиях, авторстве и партнерстве.',
  keywords: 'контакты МестоСлов, поддержка, связь, обратная связь',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

