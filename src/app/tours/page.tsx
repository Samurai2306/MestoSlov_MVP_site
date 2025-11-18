'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import TourCard from '@/components/tours/TourCard'
import TourFilters from '@/components/tours/TourFilters'
import TourSearchBar from '@/components/tours/TourSearchBar'
import { mockTours } from '@/lib/mockData'
import LoadingSpinner from '@/components/common/LoadingSpinner'

function ToursContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [sortBy, setSortBy] = useState(() => searchParams.get('sort') || 'popular')
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || '',
    category: searchParams.get('category') || '',
    duration: searchParams.get('duration') || '',
    search: searchParams.get('search') || '',
    priceMin: searchParams.get('priceMin') || '',
    priceMax: searchParams.get('priceMax') || '',
  })

  // Sync filters with URL
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const params = new URLSearchParams()
    
    if (filters.city) params.set('city', filters.city)
    if (filters.category) params.set('category', filters.category)
    if (filters.duration) params.set('duration', filters.duration)
    if (filters.search) params.set('search', filters.search)
    if (filters.priceMin) params.set('priceMin', filters.priceMin)
    if (filters.priceMax) params.set('priceMax', filters.priceMax)
    if (sortBy !== 'popular') params.set('sort', sortBy)
    
    const queryString = params.toString()
    const newUrl = queryString ? `/tours?${queryString}` : '/tours'
    const currentSearch = window.location.search
    
    // Only update URL if it's different to avoid infinite loops
    if (currentSearch !== `?${queryString}`) {
      router.replace(newUrl, { scroll: false })
    }
  }, [filters, sortBy, router])

  const filteredTours = useMemo(() => {
    let filtered = [...mockTours]
    
    if (filters.city) {
      filtered = filtered.filter(tour => tour.city === filters.city)
    }
    
    if (filters.category) {
      filtered = filtered.filter(tour => tour.category === filters.category)
    }
    
    if (filters.duration) {
      if (filters.duration === '60') {
        filtered = filtered.filter(tour => tour.duration <= 60)
      } else if (filters.duration === '120') {
        filtered = filtered.filter(tour => tour.duration > 60 && tour.duration <= 120)
      } else if (filters.duration === '180') {
        filtered = filtered.filter(tour => tour.duration > 120 && tour.duration <= 180)
      } else if (filters.duration === '180+') {
        filtered = filtered.filter(tour => tour.duration > 180)
      }
    }
    
    if (filters.priceMin) {
      filtered = filtered.filter(tour => tour.price >= parseInt(filters.priceMin))
    }
    
    if (filters.priceMax) {
      filtered = filtered.filter(tour => tour.price <= parseInt(filters.priceMax))
    }
    
    if (filters.search) {
      const search = filters.search.toLowerCase()
      filtered = filtered.filter(tour => 
        tour.title.toLowerCase().includes(search) ||
        tour.description.toLowerCase().includes(search) ||
        tour.city.toLowerCase().includes(search)
      )
    }
    
    return filtered
  }, [filters])

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

  const handleResetFilters = () => {
    setFilters({ city: '', category: '', duration: '', search: '', priceMin: '', priceMax: '' })
    setSortBy('popular')
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
            aria-label="Фильтры экскурсий"
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
                <label htmlFor="sort-select" className="text-sm text-gray-600 sr-only">
                  Сортировка
                </label>
                <span className="text-sm text-gray-600" aria-hidden="true">Сортировка:</span>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal"
                  aria-label="Выберите способ сортировки"
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
              role="list"
              aria-label="Список экскурсий"
            >
              {getSortedTours().map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  role="listitem"
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
                role="status"
                aria-live="polite"
              >
                <div className="w-32 h-32 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <svg
                    className="w-16 h-16 text-primary-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  onClick={handleResetFilters}
                  className="px-6 py-3 bg-primary-teal text-white rounded-full font-medium"
                  aria-label="Сбросить все фильтры"
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

export default function ToursPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white pt-24 pb-16 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    }>
      <ToursContent />
    </Suspense>
  )
}
