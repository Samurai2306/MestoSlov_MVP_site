'use client'

import { motion } from 'framer-motion'
import { Award, Lock } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: 'Первые шаги',
      description: 'Прошли первую экскурсию',
      icon: '🎯',
      unlocked: true,
      unlockedAt: '15 января 2024',
      progress: 100,
    },
    {
      id: 2,
      name: 'Путешественник',
      description: 'Посетили 5 городов',
      icon: '🗺️',
      unlocked: true,
      unlockedAt: '22 января 2024',
      progress: 100,
    },
    {
      id: 3,
      name: 'Марафонец',
      description: 'Прошли 10 экскурсий',
      icon: '🏃',
      unlocked: true,
      unlockedAt: '1 февраля 2024',
      progress: 100,
    },
    {
      id: 4,
      name: 'Коллекционер',
      description: 'Посетили 100 точек интереса',
      icon: '📍',
      unlocked: false,
      progress: 75,
      requirement: 100,
      current: 75,
    },
    {
      id: 5,
      name: 'Гид по России',
      description: 'Посетили 15 городов',
      icon: '🏛️',
      unlocked: false,
      progress: 33,
      requirement: 15,
      current: 5,
    },
    {
      id: 6,
      name: 'Искатель приключений',
      description: 'Прошли 50 км',
      icon: '⛰️',
      unlocked: false,
      progress: 90,
      requirement: 50,
      current: 45,
    },
  ]

  const unlockedCount = achievements.filter(a => a.unlocked).length

  return (
    <div>
      <div className="bg-white rounded-2xl p-8 shadow-elevation mb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-sunset rounded-full mb-4">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {unlockedCount} из {achievements.length}
          </h2>
          <p className="text-gray-600">достижений разблокировано</p>
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-primary-teal to-accent-amber"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-elevation transition-all ${
              achievement.unlocked
                ? 'bg-white hover:shadow-glow'
                : 'bg-gray-100'
            }`}
          >
            {/* Achievement Icon */}
            <div className={`text-6xl mb-4 ${achievement.unlocked ? '' : 'filter grayscale opacity-40'}`}>
              {achievement.unlocked ? achievement.icon : <Lock className="w-16 h-16 text-gray-400" />}
            </div>

            {/* Achievement Info */}
            <h3 className={`text-xl font-bold mb-2 ${achievement.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
              {achievement.name}
            </h3>
            <p className={`mb-4 ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
              {achievement.description}
            </p>

            {/* Progress or Unlock Date */}
            {achievement.unlocked ? (
              <div className="text-sm text-primary-teal font-medium">
                Получено {achievement.unlockedAt}
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Прогресс</span>
                  <span>{achievement.current} / {achievement.requirement}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${achievement.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-primary-teal to-accent-amber"
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Achievements

