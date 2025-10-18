'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const TravelMap = () => {
  const visitedCities = [
    { name: 'Москва', tours: 4, x: '58%', y: '42%' },
    { name: 'Санкт-Петербург', tours: 3, x: '53%', y: '28%' },
    { name: 'Казань', tours: 2, x: '68%', y: '45%' },
    { name: 'Екатеринбург', tours: 1, x: '82%', y: '48%' },
    { name: 'Владимир', tours: 2, x: '60%', y: '44%' },
  ]

  return (
    <div>
      <div className="bg-white rounded-2xl p-8 shadow-elevation mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Моя карта путешествий
        </h2>

        {/* Map */}
        <div className="relative h-96 bg-gradient-to-br from-primary-teal/10 to-primary-green/10 rounded-xl overflow-hidden mb-6">
          {/* Russia Map Outline */}
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 w-full h-full opacity-20"
          >
            <path
              d="M 100 150 Q 200 100 400 120 Q 600 140 800 180 Q 900 200 950 250 L 940 350 Q 850 380 700 360 Q 500 340 300 350 Q 150 360 100 300 Z"
              fill="currentColor"
              className="text-primary-green"
            />
          </svg>

          {/* Visited Cities */}
          {visitedCities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: city.x, top: city.y }}
            >
              {/* Pulsing Ring */}
              <motion.div
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="absolute inset-0 w-8 h-8 bg-primary-teal rounded-full opacity-50 -z-10"
              />

              {/* Marker */}
              <div className="w-8 h-8 bg-primary-teal rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-4 h-4 text-white" />
              </div>

              {/* City Info Card */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-4 min-w-[150px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <h4 className="font-bold text-gray-900 mb-1">{city.name}</h4>
                <p className="text-sm text-gray-600">{city.tours} экскурсий пройдено</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {visitedCities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-4 bg-gray-50 rounded-xl"
            >
              <div className="text-2xl font-bold text-primary-teal mb-1">
                {city.tours}
              </div>
              <div className="text-sm text-gray-600">{city.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelMap

