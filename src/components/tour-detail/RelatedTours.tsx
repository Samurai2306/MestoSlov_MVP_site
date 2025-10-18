'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import TourCard from '@/components/tours/TourCard'
import { mockTours } from '@/lib/mockData'

interface RelatedToursProps {
  currentTourId: string
  city: string
}

const RelatedTours = ({ currentTourId, city }: RelatedToursProps) => {
  const relatedTours = mockTours
    .filter(tour => tour.id !== currentTourId && tour.city === city)
    .slice(0, 3)

  if (relatedTours.length === 0) return null

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Похожие экскурсии
          </h2>
          <p className="text-gray-400">
            Другие интересные маршруты в городе {city}
          </p>
        </div>
        <Link href={`/tours?city=${city}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-white/20 transition-all"
          >
            <span>Все в {city}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTours.map((tour, index) => (
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
    </div>
  )
}

export default RelatedTours

