'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Download } from 'lucide-react'

const EarningsChart = () => {
  const monthlyEarnings = [
    { month: 'Янв', amount: 12500 },
    { month: 'Фев', amount: 18700 },
    { month: 'Мар', amount: 25300 },
    { month: 'Апр', amount: 31000 },
  ]

  const maxAmount = Math.max(...monthlyEarnings.map(e => e.amount))

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="bg-gradient-to-br from-primary-teal to-accent-amber rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/80 mb-2">Общий доход</p>
            <h2 className="text-5xl font-bold">87,500 ₽</h2>
          </div>
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
            <TrendingUp className="w-8 h-8" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white/80">+24.5% по сравнению с прошлым месяцем</span>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl p-8 shadow-elevation">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Доходы по месяцам</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Экспорт</span>
          </motion.button>
        </div>

        <div className="space-y-6">
          {monthlyEarnings.map((item, index) => (
            <div key={item.month}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{item.month}</span>
                <span className="font-bold text-primary-teal">{item.amount.toLocaleString()} ₽</span>
              </div>
              <div className="h-12 bg-gray-100 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.amount / maxAmount) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary-teal to-accent-amber flex items-center justify-end pr-4"
                >
                  <span className="text-white font-bold text-sm">
                    {((item.amount / maxAmount) * 100).toFixed(0)}%
                  </span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Payouts */}
      <div className="bg-white rounded-2xl p-8 shadow-elevation">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Предстоящие выплаты</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div>
              <p className="font-bold text-gray-900">Выплата за март 2024</p>
              <p className="text-sm text-gray-600">Поступит 5 апреля 2024</p>
            </div>
            <span className="text-2xl font-bold text-green-600">25,300 ₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsChart


