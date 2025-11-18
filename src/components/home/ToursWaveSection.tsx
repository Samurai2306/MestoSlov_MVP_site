'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ToursWaveSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tours = [
    {
      id: 1,
      title: 'Тайны Петербургских дворов',
      city: 'Санкт-Петербург',
      author: 'Анна Петрова',
      rating: 4.9,
      reviews: 234,
      duration: 90,
      price: 499,
      image: 'https://images.unsplash.com/photo-1555991438-b87d68cb3e1f?w=600',
      category: 'История',
    },
    {
      id: 2,
      title: 'Московское метро: подземный дворец',
      city: 'Москва',
      author: 'Дмитрий Соколов',
      rating: 4.8,
      reviews: 189,
      duration: 120,
      price: 599,
      image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=600',
      category: 'Архитектура',
    },
    {
      id: 3,
      title: 'Золотое кольцо: путь к истокам',
      city: 'Владимир',
      author: 'Елена Волкова',
      rating: 5.0,
      reviews: 156,
      duration: 180,
      price: 799,
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600',
      category: 'Культура',
    },
    {
      id: 4,
      title: 'Казань: легенды татарского народа',
      city: 'Казань',
      author: 'Рустам Ахметов',
      rating: 4.9,
      reviews: 201,
      duration: 150,
      price: 699,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600',
      category: 'Традиции',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
              Волна рассказов
            </h2>
            <p className="text-xl text-gray-600">
              Популярные аудиоэкскурсии нашей платформы
            </p>
          </div>
          <Link href="/tours">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-6 py-3 bg-primary-teal text-white rounded-full font-medium hover:shadow-glow transition-all"
            >
              <span>Все экскурсии</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex-shrink-0 w-80"
              >
                <Link href={`/tours/${tour.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elevation hover:shadow-glow transition-all duration-300 card-3d">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={tour.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'
                        }}
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-green">
                        {tour.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{tour.city}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-teal transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Автор: {tour.author}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-accent-amber text-accent-amber" />
                          <span className="font-medium">{tour.rating}</span>
                          <span className="text-gray-500 text-sm">({tour.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{tour.duration} мин</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary-teal">
                          {tour.price} ₽
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-sunset text-white rounded-full text-sm font-medium"
                        >
                          Подробнее
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex justify-center mt-8 md:hidden"
        >
          <Link href="/tours">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-primary-teal text-white rounded-full font-medium"
            >
              <span>Все экскурсии</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ToursWaveSection


