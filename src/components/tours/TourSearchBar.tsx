'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, TrendingUp, Clock } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setFilters } from '@/lib/slices/toursSlice'
import { useDebounce } from '@/lib/hooks/useDebounce'

const STORAGE_KEY = 'mestoslov_search_history'
const MAX_HISTORY_ITEMS = 5

const TourSearchBar = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  const debouncedSearch = useDebounce(searchValue, 300)

  useEffect(() => {
    // Load search history from localStorage
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setSearchHistory(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse search history', e)
      }
    }
  }, [])

  useEffect(() => {
    // Update filters with debounced search
    dispatch(setFilters({ search: debouncedSearch }))
  }, [debouncedSearch, dispatch])

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
    if (value.trim() && !searchHistory.includes(value.trim())) {
      const newHistory = [value.trim(), ...searchHistory].slice(0, MAX_HISTORY_ITEMS)
      setSearchHistory(newHistory)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
    }
  }

  const clearSearch = () => {
    setSearchValue('')
    dispatch(setFilters({ search: '' }))
  }

  const removeFromHistory = (item: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const newHistory = searchHistory.filter(h => h !== item)
    setSearchHistory(newHistory)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
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
          }`} aria-hidden="true" />
          
          <input
            type="text"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Поиск экскурсий по названию, городу или теме..."
            className="flex-1 outline-none text-gray-900 placeholder-gray-400"
            aria-label="Поиск экскурсий"
            aria-describedby="search-description"
          />
          <span id="search-description" className="sr-only">
            Введите название экскурсии, город или тему для поиска
          </span>

          <AnimatePresence>
            {searchValue && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={clearSearch}
                className="ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Очистить поиск"
              >
                <X className="w-5 h-5 text-gray-400" aria-hidden="true" />
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
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Search Suggestions Dropdown */}
      <AnimatePresence>
        {isFocused && !searchValue && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-4 z-10"
            role="listbox"
            aria-label="Предложения для поиска"
          >
            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span className="font-medium">История поиска</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSearch(item)}
                      className="px-4 py-2 bg-gray-100 hover:bg-primary-teal hover:text-white text-gray-700 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                      role="option"
                      aria-label={`Поиск: ${item}`}
                    >
                      {item}
                      <button
                        onClick={(e) => removeFromHistory(item, e)}
                        className="hover:bg-gray-200 rounded-full p-0.5"
                        aria-label={`Удалить ${item} из истории`}
                      >
                        <X className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div>
            <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
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
                    role="option"
                    aria-label={`Популярный поиск: ${search}`}
                >
                  {search}
                </motion.button>
              ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TourSearchBar
