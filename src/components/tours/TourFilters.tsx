'use client'

import { motion } from 'framer-motion'
import { MapPin, Grid, Clock, Sliders, DollarSign } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { setFilters } from '@/lib/slices/toursSlice'

const TourFilters = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state: RootState) => state.tours)

  const cities = [
    'Все города',
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'Екатеринбург',
    'Владивосток',
    'Сочи',
    'Владимир',
    'Нижний Новгород',
  ]

  const categories = [
    'Все категории',
    'История',
    'Архитектура',
    'Культура',
    'Природа',
    'Искусство',
    'Гастрономия',
    'Традиции',
  ]

  const durations = [
    { label: 'Любая', value: '' },
    { label: 'До 1 часа', value: '60' },
    { label: '1-2 часа', value: '120' },
    { label: '2-3 часа', value: '180' },
    { label: '3+ часа', value: '180+' },
  ]

  const priceRanges = [
    { label: 'Все цены', min: 0, max: Infinity },
    { label: 'До 500 ₽', min: 0, max: 500 },
    { label: '500-1000 ₽', min: 500, max: 1000 },
    { label: '1000+ ₽', min: 1000, max: Infinity },
  ]

  const handleCityChange = (city: string) => {
    dispatch(setFilters({ city: city === 'Все города' ? '' : city }))
  }

  const handleCategoryChange = (category: string) => {
    dispatch(setFilters({ category: category === 'Все категории' ? '' : category }))
  }

  const handleDurationChange = (duration: string) => {
    dispatch(setFilters({ duration }))
  }

  const handlePriceChange = (min: string, max: string) => {
    dispatch(setFilters({ 
      priceMin: min === '0' && max === 'Infinity' ? '' : min,
      priceMax: max === 'Infinity' ? '' : max,
    }))
  }

  const clearFilters = () => {
    dispatch(setFilters({ city: '', category: '', duration: '', search: '', priceMin: '', priceMax: '' }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl p-6 shadow-elevation sticky top-24"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Sliders className="w-5 h-5 text-primary-teal" />
          <h3 className="text-xl font-bold text-gray-900">Фильтры</h3>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearFilters}
          className="text-sm text-primary-teal hover:underline"
        >
          Сбросить
        </motion.button>
      </div>

      {/* City Filter */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-600" />
          <label className="font-medium text-gray-900">Город</label>
        </div>
        <div className="space-y-2">
          {cities.map((city) => (
            <motion.button
              key={city}
              whileHover={{ x: 4 }}
              onClick={() => handleCityChange(city)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                (city === 'Все города' && !filters.city) || filters.city === city
                  ? 'bg-primary-teal text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {city}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center space-x-2 mb-3">
          <Grid className="w-4 h-4 text-gray-600" />
          <label className="font-medium text-gray-900">Категория</label>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ x: 4 }}
              onClick={() => handleCategoryChange(category)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                (category === 'Все категории' && !filters.category) || filters.category === category
                  ? 'bg-primary-teal text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center space-x-2 mb-3">
          <Clock className="w-4 h-4 text-gray-600" aria-hidden="true" />
          <label className="font-medium text-gray-900">Длительность</label>
        </div>
        <div className="space-y-2" role="group" aria-label="Фильтр по длительности">
          {durations.map((duration) => (
            <motion.button
              key={duration.label}
              whileHover={{ x: 4 }}
              onClick={() => handleDurationChange(duration.value)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                filters.duration === duration.value
                  ? 'bg-primary-teal text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
              aria-pressed={filters.duration === duration.value}
            >
              {duration.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <DollarSign className="w-4 h-4 text-gray-600" aria-hidden="true" />
          <label className="font-medium text-gray-900">Цена</label>
        </div>
        <div className="space-y-2" role="group" aria-label="Фильтр по цене">
          {priceRanges.map((range) => {
            const isActive = 
              (range.min === 0 && range.max === Infinity && !filters.priceMin && !filters.priceMax) ||
              (filters.priceMin === String(range.min) && filters.priceMax === String(range.max))
            
            return (
              <motion.button
                key={range.label}
                whileHover={{ x: 4 }}
                onClick={() => handlePriceChange(String(range.min), String(range.max))}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-teal text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={isActive}
              >
                {range.label}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Active Filters */}
      {(filters.city || filters.category || filters.duration || filters.search || filters.priceMin || filters.priceMax) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-6 border-t border-gray-100"
        >
          <p className="text-sm font-medium text-gray-900 mb-3">Активные фильтры:</p>
          <div className="flex flex-wrap gap-2">
            {filters.city && (
              <span className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm rounded-full">
                {filters.city}
              </span>
            )}
            {filters.category && (
              <span className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm rounded-full">
                {filters.category}
              </span>
            )}
            {filters.duration && (
              <span className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm rounded-full">
                {durations.find(d => d.value === filters.duration)?.label}
              </span>
            )}
            {filters.search && (
              <span className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm rounded-full">
                {filters.search}
              </span>
            )}
            {(filters.priceMin || filters.priceMax) && (
              <span className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm rounded-full">
                {filters.priceMin && filters.priceMax 
                  ? `${filters.priceMin}-${filters.priceMax} ₽`
                  : filters.priceMin 
                    ? `от ${filters.priceMin} ₽`
                    : `до ${filters.priceMax} ₽`}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default TourFilters


