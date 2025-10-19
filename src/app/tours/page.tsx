'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { setFilters, filterTours, setTours } from '@/lib/slices/toursSlice'
import TourCard from '@/components/tours/TourCard'
import TourFilters from '@/components/tours/TourFilters'
import TourSearchBar from '@/components/tours/TourSearchBar'
import { mockTours } from '@/lib/mockData'

export default function ToursPage() {
  const dispatch = useDispatch()
  const { filteredTours, filters } = useSelector((state: RootState) => state.tours)
  const [sortBy, setSortBy] = useState('popular')

  useEffect(() => {
    // В реальном приложении здесь будет API запрос
    dispatch(setTours(mockTours))
  }, [dispatch])

  useEffect(() => {
    dispatch(filterTours())
  }, [filters, dispatch])

  const sortOptions = [
    { value: 'popular', label: 'Популярные' },
    { value: 'rating', label: 'Рейтинг' },
    { value: 'price-low', label: 'Цена: низкая' },
    { value: 'price-high', label: 'Цена: высокая' },
    { value: 'newest', label: 'Новые' },
  ]

  const getSortedTours = () => {
    const sorted = [...filteredTours]
    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating)
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'newest':
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      default:
        return sorted
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-green mb-4">
            Каталог экскурсий
          </h1>
          <p className="text-xl text-gray-600">
            Найдено {filteredTours.length} экскурсий по всей России
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <TourSearchBar />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-80 flex-shrink-0"
          >
            <TourFilters />
          </motion.aside>

          {/* Tours Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-between mb-6"
            >
              <p className="text-gray-600">
                Показано {getSortedTours().length} из {filteredTours.length}
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Сортировка:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Tours Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {getSortedTours().map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {getSortedTours().length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
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
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Экскурсии не найдены
                </h3>
                <p className="text-gray-600 mb-6">
                  Попробуйте изменить параметры фильтрации
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(setFilters({ city: '', category: '', duration: '', search: '' }))}
                  className="px-6 py-3 bg-primary-teal text-white rounded-full font-medium"
                >
                  Сбросить фильтры
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


