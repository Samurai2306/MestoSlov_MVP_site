'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, TrendingUp, DollarSign, Eye, MapPin, 
  Settings, BarChart3, FileText 
} from 'lucide-react'
import Link from 'next/link'
import AuthorStats from '@/components/author/AuthorStats'
import ToursList from '@/components/author/ToursList'
import EarningsChart from '@/components/author/EarningsChart'

export default function AuthorDashboard() {
  const [activeTab, setActiveTab] = useState<'tours' | 'analytics' | 'earnings'>('tours')

  const stats = {
    totalTours: 12,
    totalViews: 15420,
    totalEarnings: 87500,
    activeSubscribers: 234,
  }

  const tabs = [
    { id: 'tours', label: 'Мои экскурсии', icon: <MapPin className="w-5 h-5" /> },
    { id: 'analytics', label: 'Аналитика', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'earnings', label: 'Доходы', icon: <DollarSign className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Панель автора
            </h1>
            <p className="text-gray-600">
              Управляйте своими экскурсиями и отслеживайте статистику
            </p>
          </div>
          <Link href="/author/create">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-sunset text-white rounded-full font-bold shadow-lg hover:shadow-glow-amber transition-all flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Создать экскурсию</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <AuthorStats stats={stats} />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-2 shadow-elevation mb-8"
        >
          <div className="grid grid-cols-3 gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-primary-teal to-accent-amber text-white shadow-lg'
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
          {activeTab === 'tours' && <ToursList />}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-2xl p-8 shadow-elevation">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Аналитика просмотров
              </h2>
              <div className="h-96 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p>Графики аналитики</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'earnings' && <EarningsChart />}
        </motion.div>
      </div>
    </div>
  )
}


