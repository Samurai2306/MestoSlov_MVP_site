'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const team = [
    {
      name: 'Софья Собещанская',
      role: 'Основатель и CEO',
      image: 'https://drive.google.com/thumbnail?id=1s2Cc2ustmjogwxuhmp7iy0pchwkkE4tQ&sz=w1000',
      bio: 'Создатель концепции и идеи проекта. Вдохновляет команду и определяет стратегическое развитие платформы МестоСлов.'
    },
    {
      name: 'Глеб Чернов',
      role: 'Технический директор',
      image: 'https://drive.google.com/thumbnail?id=1AIzxYqfKNARvlOwK9rx3teKUaEfr9bUi&sz=w1000',
      bio: 'Руководит разработкой платформы и технической инфраструктуры. Обеспечивает высокое качество и производительность сервиса.'
    },
    {
      name: 'Ира Дружинина',
      role: 'Операционный директор',
      image: 'https://drive.google.com/thumbnail?id=1M58p6BPBDlmNYp0IWU82KX7BBDdKT5kT&sz=w1000',
      bio: 'Координирует операционные процессы, работу с авторами и партнерами. Отвечает за развитие сообщества и качество контента.'
    },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Аутентичность',
      description: 'Мы создаем контент вместе с местными жителями, чтобы показать настоящую Россию'
    },
    {
      icon: '❤️',
      title: 'Любовь к путешествиям',
      description: 'Каждая экскурсия создана с душой и вниманием к деталям'
    },
    {
      icon: '🚀',
      title: 'Инновации',
      description: 'Используем современные технологии для лучшего опыта путешествий'
    },
    {
      icon: '🤝',
      title: 'Сообщество',
      description: 'Объединяем путешественников и авторов в единую экосистему'
    },
  ]

  const stats = [
    { number: '10000+', label: 'Путешественников' },
    { number: '500+', label: 'Экскурсий' },
    { number: '50+', label: 'Городов' },
    { number: '200+', label: 'Авторов' },
  ]

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/10 to-accent-amber/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
            О МестоСлов
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Мы создаем платформу, которая объединяет путешественников с аутентичными историями местных жителей, 
            превращая каждую прогулку в незабываемое приключение.
          </p>
        </motion.div>
      </section>

      {/* Статистика */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Наша миссия */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-teal/5 to-accent-amber/5 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Наша миссия</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Мы верим, что лучшие истории о городах рассказывают те, кто в них живет. МестоСлов дает 
              возможность местным авторам делиться своими знаниями, а путешественникам — открывать 
              неизвестные места и истории.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Наша цель — сделать путешествия более осмысленными, глубокими и аутентичными, превратив 
              каждую прогулку в увлекательное путешествие во времени и пространстве.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-cream to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Наша команда</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Профессионалы, влюбленные в путешествия и технологии
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://i.pravatar.cc/300?img=1'
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-teal font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* История */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-teal/5 to-accent-amber/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Наша история</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                МестоСлов родился из личного опыта основателей, которые много путешествовали по России 
                и понимали, что стандартные туристические маршруты не передают настоящую атмосферу городов.
              </p>
              <p>
                В 2024 году мы запустили первую версию платформы с 50 экскурсиями по Москве и Санкт-Петербургу. 
                Отклик был невероятным — за первый месяц к нам присоединилось более 1000 путешественников.
              </p>
              <p>
                Сегодня МестоСлов — это растущее сообщество авторов и путешественников, которые вместе 
                создают уникальную карту аутентичной России.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Присоединяйтесь к нашему путешествию
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Станьте частью сообщества, которое меняет способ путешествовать
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/tours"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Начать путешествие
            </motion.a>
            <motion.a
              href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-teal text-primary-teal rounded-xl font-medium hover:bg-primary-teal hover:text-white transition-all"
            >
              Стать автором
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}


