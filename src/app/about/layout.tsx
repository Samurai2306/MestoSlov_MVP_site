import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'О нас',
  description: 'Узнайте больше о команде МестоСлов. Мы создаем платформу для аутентичных путешествий по России через личные истории местных жителей.',
  keywords: 'о нас, команда МестоСлов, миссия, ценности, история проекта',
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

