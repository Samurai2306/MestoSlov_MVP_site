'use client'

import { motion } from 'framer-motion'
import { mockTours } from '@/lib/mockData'
import TourCard from '@/components/tours/TourCard'

const FavoriteTours = () => {
  const favoriteTours = mockTours.slice(0, 3)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Избранное ({favoriteTours.length})
        </h2>
      </div>

      {favoriteTours.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20 bg-white rounded-2xl shadow-elevation"
        >
          <div className="w-32 h-32 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-16 h-16 text-primary-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Нет избранных экскурсий
          </h3>
          <p className="text-gray-600 mb-6">
            Сохраняйте понравившиеся экскурсии, чтобы не потерять их
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoriteTours


