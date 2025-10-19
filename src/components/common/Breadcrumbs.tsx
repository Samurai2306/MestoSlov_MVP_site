'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

interface Breadcrumb {
  label: string
  href: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  const generateBreadcrumbs = (): Breadcrumb[] => {
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: Breadcrumb[] = [{ label: 'Главная', href: '/' }]

    // Маппинг путей к читаемым названиям
    const pathNames: Record<string, string> = {
      tours: 'Экскурсии',
      blog: 'Блог',
      about: 'О нас',
      contact: 'Контакты',
      faq: 'FAQ',
      profile: 'Профиль',
      author: 'Кабинет автора',
      login: 'Вход',
      register: 'Регистрация',
      privacy: 'Конфиденциальность',
      terms: 'Условия использования',
    }

    segments.forEach((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join('/')}`
      const label = pathNames[segment] || segment

      // Не добавляем динамические ID как хлебные крошки
      if (!/^[0-9a-f-]{36}$/i.test(segment) && !segment.match(/^\d+$/)) {
        breadcrumbs.push({ label, href })
      }
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Не показываем хлебные крошки на главной странице
  if (pathname === '/') return null

  return (
    <nav className="py-4 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1

            return (
              <motion.li
                key={breadcrumb.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center"
              >
                {index > 0 && (
                  <svg
                    className="w-4 h-4 mx-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium">{breadcrumb.label}</span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-gray-600 hover:text-primary-teal transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                )}
              </motion.li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}


