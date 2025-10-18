'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const InteractiveMapSection = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  const cities = [
    { id: 'moscow', name: 'Москва', tours: 127, x: 520, y: 240, color: '#38B2AC' },
    { id: 'spb', name: 'Санкт-Петербург', tours: 89, x: 460, y: 160, color: '#F6AD55' },
    { id: 'kazan', name: 'Казань', tours: 45, x: 600, y: 250, color: '#DB2777' },
    { id: 'ekb', name: 'Екатеринбург', tours: 38, x: 700, y: 230, color: '#F59E0B' },
    { id: 'novosib', name: 'Новосибирск', tours: 32, x: 820, y: 260, color: '#22543D' },
    { id: 'vladiv', name: 'Владивосток', tours: 28, x: 980, y: 310, color: '#742A2A' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-primary-cream/20 to-white relative overflow-hidden">
      {/* Декор */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-accent-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
            Живая карта России
          </h2>
          <p className="text-xl text-gray-600">
            Откройте аутентичные истории в каждом регионе
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto bg-gradient-to-br from-primary-teal/5 via-white to-accent-amber/5 rounded-3xl p-6 shadow-2xl border border-white"
        >
          <svg
            viewBox="0 0 1100 500"
            className="w-full h-auto"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(56, 178, 172, 0.15))' }}
          >
            {/* Карта России (упрощенный контур) */}
            <motion.path
              d="M 200 180 L 250 150 L 320 140 L 400 135 L 480 140 L 560 145 L 640 150 L 720 160 L 800 170 L 880 185 L 940 200 L 980 220 L 1000 250 L 1010 280 L 1000 310 L 970 335 L 920 350 L 860 358 L 780 360 L 700 355 L 620 348 L 540 340 L 460 332 L 380 325 L 300 315 L 240 300 L 200 280 L 180 250 L 190 220 Z"
              fill="url(#mapGradient)"
              stroke="#38B2AC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Города на карте */}
            {cities.map((city, index) => (
              <g
                key={city.id}
                onMouseEnter={() => setHoveredCity(city.id)}
                onMouseLeave={() => setHoveredCity(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Пульсация при наведении */}
                {hoveredCity === city.id && (
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r="25"
                    fill={city.color}
                    opacity="0.2"
                    animate={{
                      r: [25, 40, 25],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}

                {/* Точка города */}
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r={hoveredCity === city.id ? 12 : 8}
                  fill={city.color}
                  stroke="#fff"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                />

                {/* Название города */}
                <motion.text
                  x={city.x}
                  y={city.y - 20}
                  textAnchor="middle"
                  className="text-sm font-bold fill-current text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCity === city.id ? 1 : 0.7 }}
                >
                  {city.name}
                </motion.text>
              </g>
            ))}

            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38B2AC" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#F6AD55" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#22543D" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {/* Информация о городе */}
          {hoveredCity && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 bg-white rounded-2xl p-6 shadow-2xl min-w-[220px] border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-2 text-primary-green">
                {cities.find(c => c.id === hoveredCity)?.name}
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent mb-3">
                {cities.find(c => c.id === hoveredCity)?.tours}
              </p>
              <p className="text-sm text-gray-600 mb-4">доступных экскурсий</p>
              <Link
                href={`/tours?city=${cities.find(c => c.id === hoveredCity)?.name}`}
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all"
              >
                Смотреть экскурсии →
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Сетка городов */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 max-w-6xl mx-auto">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
              className="group"
            >
              <Link
                href={`/tours?city=${city.name}`}
                className="block bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-teal relative overflow-hidden"
              >
                {/* Фоновый градиент при hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${city.color}, transparent)` }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: city.color }}
                    />
                    <p className="font-bold text-gray-900 text-sm">{city.name}</p>
                  </div>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
                    {city.tours}
                  </p>
                  <p className="text-xs text-gray-600">экскурсий</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: '50+', label: 'Городов' },
            { value: '500+', label: 'Экскурсий' },
            { value: '200+', label: 'Авторов' },
            { value: '10K+', label: 'Путешественников' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-primary-cream/50 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveMapSection
