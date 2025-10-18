'use client'

import { motion } from 'framer-motion'
import { Play, Download, MapPin, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { mockTours } from '@/lib/mockData'

const PurchasedTours = () => {
  // Mock purchased tours with progress
  const purchasedTours = mockTours.slice(0, 4).map((tour, index) => ({
    ...tour,
    progress: [75, 100, 30, 0][index],
    lastPlayed: ['Вчера', '3 дня назад', 'Неделю назад', 'Не начата'][index],
    downloaded: index < 3,
  }))

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Купленные экскурсии ({purchasedTours.length})
        </h2>
        <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal">
          <option>Все</option>
          <option>В процессе</option>
          <option>Завершённые</option>
          <option>Не начатые</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {purchasedTours.map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-elevation hover:shadow-glow transition-all group"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="relative w-full sm:w-48 h-48 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {tour.progress === 100 && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-teal transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{tour.city}</span>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Прогресс: {tour.progress}%</span>
                    <span className="text-xs">{tour.lastPlayed}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tour.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-teal to-accent-amber"
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration} мин</span>
                  </span>
                  {tour.downloaded && (
                    <span className="flex items-center space-x-1 text-green-600">
                      <Download className="w-4 h-4" />
                      <span>Загружено</span>
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link href={`/tours/${tour.id}`} className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 bg-gradient-sunset text-white rounded-lg font-medium flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>{tour.progress === 0 ? 'Начать' : 'Продолжить'}</span>
                    </motion.button>
                  </Link>
                  {!tour.downloaded && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PurchasedTours

