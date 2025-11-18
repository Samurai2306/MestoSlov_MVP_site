import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Блог',
  description: 'Полезные статьи о путешествиях, создании аудиоэкскурсий, интересных местах России и советах для авторов и путешественников.',
  keywords: 'блог путешествий, статьи о России, советы путешественникам, создание экскурсий',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

