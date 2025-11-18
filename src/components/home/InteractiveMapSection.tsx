'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const InteractiveMapSection = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const cities = useMemo(() => [
    { id: 'moscow', name: 'Москва', coords: { x: 137, y: 640 }, tours: 127, color: '#F6AD55', federalDistrict: 'Центральный' },
    { id: 'stpetersburg', name: 'Санкт-Петербург', coords: { x: 80, y: 580 }, tours: 89, color: '#38B2AC', federalDistrict: 'Северо-Западный' },
    { id: 'kazan', name: 'Казань', coords: { x: 231, y: 643 }, tours: 45, color: '#742A2A', federalDistrict: 'Приволжский' },
    { id: 'yekaterinburg', name: 'Екатеринбург', coords: { x: 315, y: 620 }, tours: 38, color: '#22543D', federalDistrict: 'Уральский' },
    { id: 'novosibirsk', name: 'Новосибирск', coords: { x: 478, y: 650 }, tours: 32, color: '#DB2777', federalDistrict: 'Сибирский' },
    { id: 'vladivostok', name: 'Владивосток', coords: { x: 857, y: 786 }, tours: 28, color: '#F59E0B', federalDistrict: 'Дальневосточный' },
  ], [])

  // Intersection Observer для ленивой загрузки
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  // Debounced hover handler
  const handleMouseEnter = useCallback((cityId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCity(cityId)
    }, 50)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredCity(null)
  }, [])

  const currentCity = useMemo(() => {
    return cities.find(c => c.id === hoveredCity)
  }, [hoveredCity, cities])

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary-cream to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
            Живая карта России
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте аутентичные истории в каждом регионе нашей необъятной страны
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto bg-gradient-to-br from-primary-teal/5 via-white to-accent-amber/5 rounded-3xl p-8 shadow-2xl border border-white">
          <div className="relative w-full h-auto" style={{ contain: 'layout style paint' }}>
            {isVisible && (
              <Image
                src="/MestoSlov_MVP_site/assets/imgAndLogo/ru.svg"
                alt="Карта России"
                width={1000}
                height={600}
                className="w-full h-auto"
                style={{ 
                  filter: 'drop-shadow(0 10px 30px rgba(56, 178, 172, 0.15))',
                  willChange: 'auto'
                }}
                priority={false}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200'
                }}
              />
            )}

            {/* Города на карте - оптимизированный SVG */}
            {isVisible && (
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ 
                  willChange: 'transform',
                  contain: 'layout style paint'
                }}
              >
                {cities.map((city) => {
                  const isHovered = hoveredCity === city.id
                  return (
                    <g
                      key={city.id}
                      onMouseEnter={() => handleMouseEnter(city.id)}
                      onMouseLeave={handleMouseLeave}
                      className="cursor-pointer"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <circle
                        cx={city.coords.x}
                        cy={city.coords.y}
                        r={isHovered ? 10 : 7}
                        fill={city.color}
                        className="transition-all duration-200 ease-out"
                        style={{ 
                          filter: isHovered ? `drop-shadow(0 0 8px ${city.color})` : 'none',
                          transformOrigin: `${city.coords.x}px ${city.coords.y}px`,
                          willChange: 'transform, filter'
                        }}
                      />
                      {isHovered && (
                        <text
                          x={city.coords.x + 15}
                          y={city.coords.y + 5}
                          className="text-sm font-bold fill-gray-800 pointer-events-none"
                          style={{ willChange: 'auto' }}
                        >
                          {city.name}
                        </text>
                      )}
                    </g>
                  )
                })}
              </svg>
            )}
          </div>

          {/* Карточка с информацией о городе при наведении - оптимизированная */}
          {currentCity && (
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl border border-primary-teal z-10 min-w-[250px]"
              style={{ 
                willChange: 'transform, opacity',
                contain: 'layout style paint'
              }}
            >
              <h3 className="text-2xl font-bold text-primary-green mb-2">{currentCity.name}</h3>
              <p className="text-gray-700 mb-4">
                {currentCity.federalDistrict} Федеральный округ
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Экскурсий:</span>
                <span className="text-primary-teal font-bold">{currentCity.tours}</span>
              </div>
              <Link
                href={`/tours?city=${currentCity.name}`}
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all"
              >
                Смотреть экскурсии →
              </Link>
            </div>
          )}
        </div>

        {/* Сетка городов */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-12 max-w-7xl mx-auto">
          {cities.map((city) => (
            <div
              key={city.id}
              onMouseEnter={() => handleMouseEnter(city.id)}
              onMouseLeave={handleMouseLeave}
              className="group"
            >
              <Link
                href={`/tours?city=${city.name}`}
                className="block bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-teal relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 to-accent-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: city.color }}>
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-primary-green transition-colors">
                    {city.name}
                  </h4>
                  <p className="text-sm text-gray-500">{city.federalDistrict}</p>
                  <div className="mt-2">
                    <p className="text-xl font-bold bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
                      {city.tours}
                    </p>
                    <p className="text-xs text-gray-600">экскурсий</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { value: '85+', label: 'Регионов' },
            { value: '1000+', label: 'Экскурсий' },
            { value: '500+', label: 'Авторов' },
            { value: '50K+', label: 'Путешественников' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-primary-cream/50 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary-green mb-4">
            Откройте Россию заново
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Каждый регион нашей страны хранит уникальные истории, традиции и секреты. 
            Начните свое приключение прямо сейчас!
          </p>
          <Link
            href="/tours"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-2xl text-lg font-medium hover:shadow-xl transition-all"
          >
            Начать путешествие →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMapSection
