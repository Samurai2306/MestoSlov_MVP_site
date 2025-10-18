'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Headphones, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    platform: [
      { label: 'Как это работает', href: '/how-it-works' },
      { label: 'Стать автором', href: '/become-author' },
      { label: 'Цены', href: '/pricing' },
      { label: 'Мобильное приложение', href: '/mobile-app' },
    ],
    explore: [
      { label: 'Все экскурсии', href: '/tours' },
      { label: 'Популярные города', href: '/cities' },
      { label: 'Авторы', href: '/authors' },
      { label: 'Блог', href: '/blog' },
    ],
    support: [
      { label: 'Помощь', href: '/help' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Контакты', href: '/contacts' },
      { label: 'Партнерам', href: '/partners' },
    ],
    legal: [
      { label: 'Условия использования', href: '/terms' },
      { label: 'Политика конфиденциальности', href: '/privacy' },
      { label: 'Публичная оферта', href: '/offer' },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-primary-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-sunset rounded-full flex items-center justify-center">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">МестоСлов</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Аутентичная Россия через личные аудиорассказы местных жителей
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Платформа</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Исследуйте</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@mestoslov.ru</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              {footerLinks.legal.map((link, index) => (
                <span key={link.href} className="flex items-center">
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="mx-2">•</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} МестоСлов. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

