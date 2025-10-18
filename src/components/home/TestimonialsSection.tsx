'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: 'Мария Иванова',
      role: 'Путешественница',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 5,
      text: 'Невероятный опыт! Я открыла для себя Петербург с совершенно новой стороны. Истории местных жителей добавляют особую атмосферу.',
      tour: 'Тайны Петербургских дворов',
      city: 'Санкт-Петербург',
    },
    {
      id: 2,
      name: 'Алексей Смирнов',
      role: 'Фотограф',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 5,
      text: 'Идеально для тех, кто любит самостоятельные путешествия. Удобно слушать в своем темпе и делать остановки для фото.',
      tour: 'Золотое кольцо',
      city: 'Владимир',
    },
    {
      id: 3,
      name: 'Елена Волкова',
      role: 'Автор экскурсий',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      text: 'Платформа дала мне возможность делиться историями моего города с тысячами людей. Техническая поддержка на высоте!',
      tour: 'Автор на платформе',
      city: 'Казань',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-primary-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
            Что говорят пользователи
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 50,000 путешественников доверяют МестоСлов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-elevation hover:shadow-glow transition-all duration-300 h-full relative overflow-hidden">
                {/* Quote Icon Background */}
                <motion.div
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 text-primary-teal/5"
                >
                  <Quote className="w-full h-full" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-accent-amber text-accent-amber" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Tour Info */}
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <p className="text-sm font-medium text-primary-teal">
                      {testimonial.tour}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.city}</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-primary-teal/10"
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-6 shadow-elevation">
            <div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent-amber text-accent-amber" />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary-teal">4.9</p>
              <p className="text-sm text-gray-600">Средний рейтинг</p>
            </div>
            <div className="w-px h-16 bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-primary-teal">12,500+</p>
              <p className="text-sm text-gray-600">Отзывов</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection

