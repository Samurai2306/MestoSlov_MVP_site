'use client'

import { motion } from 'framer-motion'
import { MapPin, Eye, DollarSign, Users } from 'lucide-react'

interface AuthorStatsProps {
  stats: {
    totalTours: number
    totalViews: number
    totalEarnings: number
    activeSubscribers: number
  }
}

const AuthorStats = ({ stats }: AuthorStatsProps) => {
  const statCards = [
    {
      icon: <MapPin className="w-6 h-6" />,
      value: stats.totalTours,
      label: 'Экскурсий',
      color: 'from-primary-teal to-primary-green',
      change: '+2 за месяц',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      value: stats.totalViews.toLocaleString(),
      label: 'Просмотров',
      color: 'from-accent-amber to-primary-yellow',
      change: '+1.2K за неделю',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: `${(stats.totalEarnings / 1000).toFixed(1)}K ₽`,
      label: 'Заработано',
      color: 'from-accent-raspberry to-primary-burgundy',
      change: '+12.5K за месяц',
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: stats.activeSubscribers,
      label: 'Подписчиков',
      color: 'from-primary-green to-primary-teal',
      change: '+34 за неделю',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 shadow-elevation hover:shadow-glow transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white`}>
              {stat.icon}
            </div>
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
              {stat.change}
            </span>
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

export default AuthorStats


