'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, MapPin, Headphones } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-cream via-white to-primary-teal/10">
      {/* Анимированный фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-amber/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-raspberry/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - текст и кнопки */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Бейдж */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6"
            >
              <div className="w-2 h-2 bg-primary-teal rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">10K+ путешественников уже с нами</span>
            </motion.div>

            {/* Заголовок */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary-teal via-accent-amber to-primary-green bg-clip-text text-transparent">
                Откройте Россию
              </span>
              <br />
              <span className="text-gray-900">через аудиорассказы</span>
            </motion.h1>

            {/* Подзаголовок */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Аутентичные путешествия с геолокацией. Личные истории от местных жителей. Путешествуйте независимо.
            </motion.p>

            {/* Кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/tours">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-2xl font-medium shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 justify-center"
                >
                  <Headphones className="w-5 h-5" />
                  Начать путешествие
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </Link>

              <Link href="/how-it-works">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-medium shadow-lg hover:shadow-xl hover:border-primary-teal transition-all flex items-center gap-3 justify-center"
                >
                  <Play className="w-5 h-5" />
                  Как это работает
                </motion.button>
              </Link>
            </motion.div>

            {/* Статистика */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: '500+', label: 'Экскурсий' },
                { value: '50+', label: 'Городов' },
                { value: '4.9★', label: 'Рейтинг' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Правая колонка - интерактивная иллюстрация */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Карточки экскурсий */}
            <div className="relative h-[600px]">
              {/* Карточка 1 */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-80 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary-teal/20 to-accent-amber/20 rounded-2xl mb-4 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary-teal" />
                </div>
                <h3 className="font-bold text-lg mb-2">Тайны Кремля</h3>
                <p className="text-sm text-gray-600 mb-3">Москва • 2.5 часа</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-accent-amber">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9 (234)</span>
                </div>
              </motion.div>

              {/* Карточка 2 */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-0 left-0 w-72 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
              >
                <div className="w-full h-40 bg-gradient-to-br from-accent-raspberry/20 to-primary-green/20 rounded-2xl mb-4 flex items-center justify-center">
                  <Headphones className="w-14 h-14 text-accent-raspberry" />
                </div>
                <h3 className="font-bold text-lg mb-2">Петровский Петербург</h3>
                <p className="text-sm text-gray-600 mb-3">СПб • 3 часа</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-accent-amber">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 (189)</span>
                </div>
              </motion.div>

              {/* Плавающие элементы */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-br from-primary-teal to-accent-amber rounded-2xl shadow-lg"
              />

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-40 right-20 w-12 h-12 bg-gradient-to-br from-accent-raspberry to-primary-green rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Листайте вниз</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
