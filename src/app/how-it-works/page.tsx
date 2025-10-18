'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Выберите экскурсию',
      description: 'Просмотрите каталог аудиоэкскурсий по разным городам России. Фильтруйте по интересам, длительности и рейтингу.',
      icon: '🗺️',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800',
    },
    {
      number: '02',
      title: 'Оплатите и скачайте',
      description: 'Оплатите доступ к экскурсии банковской картой. Скачайте аудио и карты для оффлайн использования.',
      icon: '💳',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      number: '03',
      title: 'Начните путешествие',
      description: 'Включите геолокацию и следуйте по маршруту. Аудио будет автоматически воспроизводиться при приближении к точкам.',
      icon: '🎧',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    },
    {
      number: '04',
      title: 'Получайте достижения',
      description: 'Завершайте экскурсии, собирайте бейджи, оставляйте отзывы и делитесь впечатлениями с друзьями.',
      icon: '🏆',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800',
    },
  ]

  const features = [
    {
      icon: '📍',
      title: 'Автоматическая геолокация',
      description: 'Аудио включается само, когда вы подходите к точке интереса',
    },
    {
      icon: '🔊',
      title: 'Высокое качество звука',
      description: 'Профессиональная запись от местных экспертов',
    },
    {
      icon: '📱',
      title: 'Оффлайн режим',
      description: 'Слушайте экскурсии без интернета',
    },
    {
      icon: '⭐',
      title: 'Рейтинги и отзывы',
      description: 'Выбирайте лучшее на основе оценок других путешественников',
    },
    {
      icon: '🎯',
      title: 'Персонализация',
      description: 'Рекомендации на основе ваших интересов',
    },
    {
      icon: '🤝',
      title: 'Сообщество',
      description: 'Общайтесь с авторами и другими путешественниками',
    },
  ]

  const forAuthors = [
    {
      step: '1',
      title: 'Регистрация',
      description: 'Создайте аккаунт и выберите роль "Автор экскурсий"',
    },
    {
      step: '2',
      title: 'Создание маршрута',
      description: 'Используйте наш конструктор для создания точек и загрузки аудио',
    },
    {
      step: '3',
      title: 'Модерация',
      description: 'Экскурсия проходит быструю проверку качества',
    },
    {
      step: '4',
      title: 'Публикация',
      description: 'Ваша экскурсия доступна тысячам путешественников',
    },
    {
      step: '5',
      title: 'Монетизация',
      description: 'Получайте 70% от каждой продажи',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary-teal/10 to-accent-amber/10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
            Как это работает
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Простой и интуитивный способ открывать города через аудиоэкскурсии
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center mb-24 last:mb-0`}
            >
              <div className="flex-1">
                <div className="text-6xl font-bold text-primary-teal/20 mb-4">{step.number}</div>
                <div className="text-5xl mb-4">{step.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              <div className="flex-1">
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-cream to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-xl text-gray-600">Всё, что нужно для идеального путешествия</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Authors */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Для авторов экскурсий</h2>
            <p className="text-xl text-gray-600">Создавайте и монетизируйте свои маршруты</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-teal to-accent-amber" />

            {forAuthors.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-teal to-accent-amber rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg z-10">
                  {item.step}
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-teal to-accent-amber text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 text-white/90">
            Присоединяйтесь к тысячам путешественников и авторов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="px-8 py-4 bg-white text-primary-teal rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Смотреть экскурсии
            </Link>
            <Link
              href="/register"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              Стать автором
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

