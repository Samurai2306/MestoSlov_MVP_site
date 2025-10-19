'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { mockTours } from '@/lib/mockData'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedCity, setSelectedCity] = useState<string>('all')

  const categories = ['all', 'История', 'Архитектура', 'Искусство', 'Природа', 'Гастрономия']
  const cities = ['all', 'Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург']

  // Фильтрация результатов
  const filteredTours = mockTours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory
    const matchesCity = selectedCity === 'all' || tour.city === selectedCity

    return matchesSearch && matchesCategory && matchesCity
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
            Поиск экскурсий
          </h1>
          <p className="text-xl text-gray-600">
            Найдите идеальное путешествие для себя
          </p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию, описанию, городу..."
              className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 transition-all"
            />
            <svg
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Категория
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-primary-teal to-accent-amber text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category === 'all' ? 'Все' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Город
                </label>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCity === city
                          ? 'bg-gradient-to-r from-primary-teal to-accent-amber text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {city === 'all' ? 'Все города' : city}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Найдено результатов: <span className="font-bold text-primary-teal">{filteredTours.length}</span>
          </p>
        </motion.div>

        {/* Results Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Link href={`/tours/${tour.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                          {tour.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium">
                          {tour.price} ₽
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {tour.city}
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-teal transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {tour.rating}
                          </div>
                          <div>
                            {tour.duration} мин
                          </div>
                          <div>
                            {tour.distance} км
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
            <p className="text-gray-600 mb-6">
              Попробуйте изменить параметры поиска или фильтры
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
                setSelectedCity('all')
              }}
              className="px-6 py-3 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl font-medium"
            >
              Сбросить фильтры
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}


