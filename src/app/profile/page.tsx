'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, MapPin, Heart, Clock, Award, Settings, 
  Download, TrendingUp, Map 
} from 'lucide-react'
import Image from 'next/image'
import ProfileStats from '@/components/profile/ProfileStats'
import PurchasedTours from '@/components/profile/PurchasedTours'
import FavoriteTours from '@/components/profile/FavoriteTours'
import Achievements from '@/components/profile/Achievements'
import TravelMap from '@/components/profile/TravelMap'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'tours' | 'favorites' | 'achievements' | 'map'>('tours')

  // Mock user data
  const user = {
    name: 'Глеб Чернов',
    email: 'gleb.chernov@example.com',
    avatar: 'https://drive.google.com/thumbnail?id=1kWKh-Q1i1SoTYW4_qzZ_gVMa1DBX6XoO&sz=w150',
    memberSince: 'Январь 2024',
    stats: {
      toursCompleted: 12,
      citiesVisited: 5,
      totalDistance: 45.3,
      totalListeningTime: 720,
      pointsVisited: 75,
    },
  }

  const tabs = [
    { id: 'tours', label: 'Мои экскурсии', icon: <MapPin className="w-5 h-5" /> },
    { id: 'favorites', label: 'Избранное', icon: <Heart className="w-5 h-5" /> },
    { id: 'achievements', label: 'Достижения', icon: <Award className="w-5 h-5" /> },
    { id: 'map', label: 'Карта путешествий', icon: <Map className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-elevation mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary-teal/20"
            >
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://i.pravatar.cc/300?img=1'
                }}
              />
            </motion.div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {user.name}
              </h1>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                <span className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Участник с {user.memberSince}</span>
                </span>
                <span className="px-3 py-1 bg-primary-teal/10 text-primary-teal rounded-full text-sm font-medium">
                  Активный путешественник
                </span>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-primary-teal text-white rounded-full font-medium hover:shadow-glow transition-all flex items-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Настройки</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Экспорт данных</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <ProfileStats stats={user.stats} />

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-2 shadow-elevation mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-sunset text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'tours' && <PurchasedTours />}
          {activeTab === 'favorites' && <FavoriteTours />}
          {activeTab === 'achievements' && <Achievements />}
          {activeTab === 'map' && <TravelMap />}
        </motion.div>
      </div>
    </div>
  )
}


