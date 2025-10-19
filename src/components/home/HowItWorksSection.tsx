'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Headphones, MapPin, CheckCircle } from 'lucide-react'

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Выберите экскурсию',
      description: 'Найдите интересный маршрут по городу или теме',
      color: 'from-primary-teal to-primary-green',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Скачайте и отправляйтесь',
      description: 'Загрузите аудио и начните путешествие в любое время',
      color: 'from-accent-amber to-primary-yellow',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Следуйте по маршруту',
      description: 'Аудио включается автоматически при приближении к точкам',
      color: 'from-accent-raspberry to-primary-burgundy',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Три простых шага к незабываемому путешествию
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Step Content */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mb-6"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-glow`}>
                      {step.icon}
                    </div>
                  </motion.div>
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <span className="text-6xl font-bold text-primary-teal/20 mr-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Step Illustration */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="flex-1"
                >
                  <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-primary-cream to-white rounded-3xl shadow-elevation flex items-center justify-center overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`relative z-10 w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                    >
                      <div className="scale-150">{step.icon}</div>
                    </motion.div>

                    {/* Orbiting Dots */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8 + i * 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="absolute inset-0"
                        style={{
                          transformOrigin: 'center',
                        }}
                      >
                        <div
                          className={`absolute w-3 h-3 bg-gradient-to-br ${step.color} rounded-full`}
                          style={{
                            top: `${20 + i * 20}%`,
                            left: '50%',
                            transform: 'translateX(-50%)',
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary-teal to-accent-amber origin-top hidden md:block"
                  style={{ top: '50%' }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-sunset text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-glow-amber transition-all inline-flex items-center space-x-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Попробовать прямо сейчас</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection


