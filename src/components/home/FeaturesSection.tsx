'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Headphones, Globe, Star, Clock, Shield } from 'lucide-react'

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Геолокация в реальном времени',
      description: 'Аудио автоматически включается, когда вы приближаетесь к точке интереса',
      color: 'from-primary-teal to-primary-green',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Живые истории местных',
      description: 'Аутентичные рассказы от тех, кто знает эти места лучше всех',
      color: 'from-accent-amber to-primary-yellow',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Оффлайн-доступ',
      description: 'Скачивайте экскурсии и слушайте без интернета',
      color: 'from-primary-burgundy to-accent-raspberry',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Кураторский выбор',
      description: 'Каждая экскурсия проверена и одобрена нашими редакторами',
      color: 'from-accent-raspberry to-primary-burgundy',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Гибкий график',
      description: 'Путешествуйте в своем темпе, когда вам удобно',
      color: 'from-primary-teal to-accent-amber',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Безопасные платежи',
      description: 'Защищенные транзакции и гарантия возврата средств',
      color: 'from-primary-green to-primary-teal',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
            Почему выбирают МестоСлов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современная платформа для аутентичных путешествий
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-elevation hover:shadow-glow transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:shadow-glow`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection


