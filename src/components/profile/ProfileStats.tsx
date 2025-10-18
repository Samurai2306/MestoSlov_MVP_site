'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, TrendingUp, Award, Map } from 'lucide-react'
import { UserStats } from '@/types'

interface ProfileStatsProps {
  stats: UserStats
}

const ProfileStats = ({ stats }: ProfileStatsProps) => {
  const statCards = [
    {
      icon: <Award className="w-6 h-6" />,
      value: stats.toursCompleted,
      label: 'Пройдено экскурсий',
      color: 'from-primary-teal to-primary-green',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      value: stats.citiesVisited,
      label: 'Посещено городов',
      color: 'from-accent-amber to-primary-yellow',
    },
    {
      icon: <Map className="w-6 h-6" />,
      value: `${stats.totalDistance} км`,
      label: 'Пройдено расстояние',
      color: 'from-accent-raspberry to-primary-burgundy',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: `${Math.floor(stats.totalListeningTime / 60)} ч`,
      label: 'Время прослушивания',
      color: 'from-primary-green to-primary-teal',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: stats.pointsVisited,
      label: 'Точек интереса',
      color: 'from-primary-teal to-accent-amber',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {statCards.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 shadow-elevation hover:shadow-glow transition-all"
        >
          <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white mb-4`}>
            {stat.icon}
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProfileStats

