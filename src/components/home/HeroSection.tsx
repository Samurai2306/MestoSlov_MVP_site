'use client'

import { motion } from 'framer-motion'
import { Play, MapPin, Headphones } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-teal/10 via-white to-accent-amber/10">
      {/* Анимированные волны на фоне */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38B2AC" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#F6AD55" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#38B2AC" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#38B2AC" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F6AD55" stopOpacity="0.18" />
              <stop offset="40%" stopColor="#22543D" stopOpacity="0.12" />
              <stop offset="80%" stopColor="#F6AD55" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#F6AD55" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22543D" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#38B2AC" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#22543D" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          
          {/* Волна 1 - основная */}
          <motion.path
            d="M0,200 Q150,170 300,200 Q450,230 600,200 Q750,170 900,200 Q1050,230 1200,200 L1200,300 L0,300 Z"
            fill="url(#gradient1)"
            animate={{
              d: [
                "M0,200 Q150,170 300,200 Q450,230 600,200 Q750,170 900,200 Q1050,230 1200,200 L1200,300 L0,300 Z",
                "M0,180 Q150,150 300,180 Q450,210 600,180 Q750,150 900,180 Q1050,210 1200,180 L1200,300 L0,300 Z",
                "M0,220 Q150,190 300,220 Q450,250 600,220 Q750,190 900,220 Q1050,250 1200,220 L1200,300 L0,300 Z",
                "M0,190 Q150,160 300,190 Q450,220 600,190 Q750,160 900,190 Q1050,220 1200,190 L1200,300 L0,300 Z",
                "M0,200 Q150,170 300,200 Q450,230 600,200 Q750,170 900,200 Q1050,230 1200,200 L1200,300 L0,300 Z"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Волна 2 - средняя */}
          <motion.path
            d="M0,220 Q200,190 400,220 Q600,250 800,220 Q1000,190 1200,220 L1200,300 L0,300 Z"
            fill="url(#gradient2)"
            animate={{
              d: [
                "M0,220 Q200,190 400,220 Q600,250 800,220 Q1000,190 1200,220 L1200,300 L0,300 Z",
                "M0,200 Q200,170 400,200 Q600,230 800,200 Q1000,170 1200,200 L1200,300 L0,300 Z",
                "M0,240 Q200,210 400,240 Q600,270 800,240 Q1000,210 1200,240 L1200,300 L0,300 Z",
                "M0,210 Q200,180 400,210 Q600,240 800,210 Q1000,180 1200,210 L1200,300 L0,300 Z",
                "M0,220 Q200,190 400,220 Q600,250 800,220 Q1000,190 1200,220 L1200,300 L0,300 Z"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Волна 3 - задняя */}
          <motion.path
            d="M0,240 Q250,210 500,240 Q750,270 1000,240 Q1100,210 1200,240 L1200,300 L0,300 Z"
            fill="url(#gradient3)"
            animate={{
              d: [
                "M0,240 Q250,210 500,240 Q750,270 1000,240 Q1100,210 1200,240 L1200,300 L0,300 Z",
                "M0,220 Q250,190 500,220 Q750,250 1000,220 Q1100,190 1200,220 L1200,300 L0,300 Z",
                "M0,260 Q250,230 500,260 Q750,290 1000,260 Q1100,230 1200,260 L1200,300 L0,300 Z",
                "M0,230 Q250,200 500,230 Q750,260 1000,230 Q1100,200 1200,230 L1200,300 L0,300 Z",
                "M0,240 Q250,210 500,240 Q750,270 1000,240 Q1100,210 1200,240 L1200,300 L0,300 Z"
              ]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </svg>
      </div>

      {/* Плавающие элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 bg-gradient-to-br from-primary-teal/30 to-accent-amber/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Мелкие частицы */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Заголовок */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-teal via-accent-amber to-primary-green bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ 
              backgroundSize: "300% 300%" 
            }}
          >
            МестоСлов
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Откройте аутентичную Россию через личные аудиорассказы местных жителей. 
            Погрузитесь в историю, культуру и секреты каждого уголка нашей необъятной страны.
          </motion.p>

          {/* Кнопки действий */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/tours"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 block"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Начать путешествие
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-amber to-primary-teal rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/how-it-works"
                className="px-8 py-4 border-2 border-primary-teal text-primary-teal rounded-2xl text-lg font-semibold hover:bg-primary-teal hover:text-white transition-all duration-300 block"
              >
                Как это работает
              </Link>
            </motion.div>
          </motion.div>

          {/* Плавающие карточки с преимуществами */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Аудиоэкскурсии",
                description: "Погружение в историю через голос местных жителей",
                color: "from-primary-teal to-primary-green"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Геолокация",
                description: "Синхронизация с вашим местоположением",
                color: "from-accent-amber to-primary-yellow"
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Независимость",
                description: "Путешествуйте в своем темпе без гидов",
                color: "from-primary-burgundy to-accent-raspberry"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Индикатор прокрутки */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary-teal/60 rounded-full flex justify-center backdrop-blur-sm bg-white/20"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary-teal rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          className="text-sm text-primary-teal/80 mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Прокрутите вниз
        </motion.p>
      </motion.div>
    </section>
  )
}

export default HeroSection
