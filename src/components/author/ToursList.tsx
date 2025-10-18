'use client'

import { motion } from 'framer-motion'
import { Edit, Eye, MoreVertical, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { mockTours } from '@/lib/mockData'

const ToursList = () => {
  const authorTours = mockTours.slice(0, 5).map((tour, index) => ({
    ...tour,
    status: ['published', 'draft', 'published', 'published', 'draft'][index],
    views: [1250, 0, 890, 2100, 0][index],
    sales: [45, 0, 32, 78, 0][index],
    revenue: [22500, 0, 16000, 39000, 0][index],
  }))

  return (
    <div className="space-y-6">
      {authorTours.map((tour, index) => (
        <motion.div
          key={tour.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white rounded-2xl overflow-hidden shadow-elevation hover:shadow-glow transition-all group"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-64 h-48 overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tour.status === 'published'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-500 text-white'
                }`}>
                  {tour.status === 'published' ? 'Опубликовано' : 'Черновик'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-teal transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{tour.description}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{tour.views}</div>
                  <div className="text-sm text-gray-600">Просмотров</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{tour.sales}</div>
                  <div className="text-sm text-gray-600">Продаж</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-teal">{tour.revenue.toLocaleString()} ₽</div>
                  <div className="text-sm text-gray-600">Выручка</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{tour.rating}</div>
                  <div className="text-sm text-gray-600">Рейтинг</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 bg-primary-teal text-white rounded-lg font-medium hover:shadow-glow transition-all flex items-center justify-center space-x-2"
                >
                  <Edit className="w-4 h-4" />
                  <span>Редактировать</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">Просмотр</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ToursList

