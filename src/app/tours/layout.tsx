import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Каталог экскурсий',
  description: 'Исследуйте более 1000 аудиоэкскурсий по всей России. Найдите идеальный маршрут по городу, категории или теме. Фильтруйте по цене, длительности и рейтингу.',
  keywords: 'каталог экскурсий, аудиоэкскурсии Россия, туры по городам, экскурсии Москва, экскурсии Санкт-Петербург',
})

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

