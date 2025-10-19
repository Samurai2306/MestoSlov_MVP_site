'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Info } from 'lucide-react'
import { Tour } from '@/types'

interface InteractiveTourMapProps {
  tour: Tour
}

const InteractiveTourMap = ({ tour }: InteractiveTourMapProps) => {
  const [selectedPoint, setSelectedPoint] = useState(0)

  // Mock route points
  const routePoints = [
    {
      id: 1,
      title: 'Стартовая точка',
      description: 'Начало вашего путешествия',
      latitude: 55.7558,
      longitude: 37.6173,
      image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=400',
      duration: '2 минуты',
    },
    {
      id: 2,
      title: 'Главная площадь',
      description: 'Сердце города с богатой историей',
      latitude: 55.7540,
      longitude: 37.6200,
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400',
      duration: '5 минут',
    },
    {
      id: 3,
      title: 'Исторический памятник',
      description: 'Знаковое место с удивительными фактами',
      latitude: 55.7530,
      longitude: 37.6220,
      image: 'https://images.unsplash.com/photo-1555991438-b87d68cb3e1f?w=400',
      duration: '7 минут',
    },
    {
      id: 4,
      title: 'Набережная',
      description: 'Живописное место для прогулок',
      latitude: 55.7520,
      longitude: 37.6250,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400',
      duration: '4 минуты',
    },
    {
      id: 5,
      title: 'Финальная точка',
      description: 'Завершение маршрута',
      latitude: 55.7510,
      longitude: 37.6280,
      image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400',
      duration: '2 минуты',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Map Placeholder */}
      <div className="relative h-96 bg-gray-900 rounded-xl overflow-hidden">
        {/* SVG Map Illustration */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
          {/* Background */}
          <rect width="800" height="400" fill="#1F2937" />
          
          {/* Grid */}
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * 40}
                y1="0"
                x2={i * 40}
                y2="400"
                stroke="#374151"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="0"
                y1={i * 20}
                x2="800"
                y2={i * 20}
                stroke="#374151"
                strokeWidth="1"
                opacity="0.3"
              />
            </g>
          ))}

          {/* Route Path */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d="M 100 200 Q 200 150, 300 180 T 500 220 T 700 200"
            stroke="#38B2AC"
            strokeWidth="4"
            fill="none"
            strokeDasharray="10,5"
          />

          {/* Route Points */}
          {routePoints.map((point, index) => {
            const x = 100 + index * 150
            const y = 200 + Math.sin(index) * 30
            
            return (
              <g key={point.id}>
                {/* Pulsing Circle */}
                <motion.circle
                  animate={{
                    r: [15, 25, 15],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  cx={x}
                  cy={y}
                  fill="#38B2AC"
                />
                
                {/* Main Point */}
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  cx={x}
                  cy={y}
                  r="12"
                  fill={selectedPoint === index ? '#F59E0B' : '#38B2AC'}
                  className="cursor-pointer"
                  onClick={() => setSelectedPoint(index)}
                  whileHover={{ r: 16 }}
                />
                
                {/* Point Number */}
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {index + 1}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <Navigation className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white mb-4">Маршрут экскурсии</h4>
        {routePoints.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedPoint(index)}
            className={`cursor-pointer p-4 rounded-xl transition-all ${
              selectedPoint === index
                ? 'bg-primary-teal/20 border-2 border-primary-teal'
                : 'bg-gray-700/50 border-2 border-transparent hover:bg-gray-700'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                selectedPoint === index
                  ? 'bg-primary-teal text-white'
                  : 'bg-gray-600 text-gray-300'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="text-lg font-bold text-white">{point.title}</h5>
                  <span className="text-sm text-gray-400">{point.duration}</span>
                </div>
                <p className="text-gray-300 mb-3">{point.description}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {point.latitude.toFixed(4)}, {point.longitude.toFixed(4)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Route Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-gradient-to-r from-primary-teal/20 to-accent-amber/20 rounded-xl border border-primary-teal/30"
      >
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
          <div>
            <h5 className="font-bold text-white mb-2">Совет по прохождению</h5>
            <p className="text-gray-300">
              Аудио будет автоматически воспроизводиться, когда вы приближаетесь к каждой точке. 
              Убедитесь, что у вас включена геолокация и загружен оффлайн-контент для бесперебойной работы.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default InteractiveTourMap


