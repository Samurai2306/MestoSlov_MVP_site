'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, TrendingUp } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setFilters } from '@/lib/slices/toursSlice'

const TourSearchBar = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const popularSearches = [
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'История',
    'Архитектура',
    'Природа',
  ]

  const handleSearch = (value: string) => {
    setSearchValue(value)
    dispatch(setFilters({ search: value }))
  }

  const clearSearch = () => {
    setSearchValue('')
    dispatch(setFilters({ search: '' }))
  }

  return (
    <div className="relative">
      <motion.div
        animate={{
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused
            ? '0 10px 40px rgba(56, 178, 172, 0.2)'
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        className="relative bg-white rounded-2xl overflow-hidden"
      >
        <div className="flex items-center px-6 py-4">
          <Search className={`w-5 h-5 mr-3 transition-colors ${
            isFocused ? 'text-primary-teal' : 'text-gray-400'
          }`} />
          
          <input
            type="text"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Поиск экскурсий по названию, городу или теме..."
            className="flex-1 outline-none text-gray-900 placeholder-gray-400"
          />

          <AnimatePresence>
            {searchValue && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={clearSearch}
                className="ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Search Progress Bar */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="h-1 bg-gradient-to-r from-primary-teal to-accent-amber origin-left"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Popular Searches Dropdown */}
      <AnimatePresence>
        {isFocused && !searchValue && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-4 z-10"
          >
            <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">Популярные запросы</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <motion.button
                  key={search}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSearch(search)}
                  className="px-4 py-2 bg-primary-teal/10 hover:bg-primary-teal hover:text-white text-primary-teal rounded-full text-sm font-medium transition-colors"
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TourSearchBar


