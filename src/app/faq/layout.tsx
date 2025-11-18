import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Часто задаваемые вопросы',
  description: 'Ответы на популярные вопросы о платформе МестоСлов: как стать автором, как слушать экскурсии оффлайн, оплата и многое другое.',
  keywords: 'FAQ, вопросы и ответы, помощь, поддержка МестоСлов',
})

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

