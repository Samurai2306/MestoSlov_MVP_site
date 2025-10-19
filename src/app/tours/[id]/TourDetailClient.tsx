'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Star, Clock, MapPin, Users, Heart, Share2, 
  CheckCircle, Play, Download, ShoppingCart 
} from 'lucide-react'
import AudioPlayer from '@/components/tour-detail/AudioPlayer'
import InteractiveTourMap from '@/components/tour-detail/InteractiveTourMap'
import ReviewsSection from '@/components/tour-detail/ReviewsSection'
import AuthorCard from '@/components/tour-detail/AuthorCard'
import RelatedTours from '@/components/tour-detail/RelatedTours'
import { mockTours } from '@/lib/mockData'
import { Tour } from '@/types'

export default function TourDetailClient() {
  const params = useParams()
  const [tour, setTour] = useState<Tour | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'route' | 'reviews'>('overview')

  useEffect(() => {
    // В реальном приложении здесь будет API запрос
    const foundTour = mockTours.find(t => t.id === params.id)
    if (foundTour) {
      setTour(foundTour)
    }
  }, [params.id])

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-teal"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-white/80 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{tour.city}</span>
                <span>•</span>
                <span>{tour.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {tour.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                {tour.description}
              </p>
              
              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2 text-white">
                  <Star className="w-5 h-5 fill-accent-amber text-accent-amber" />
                  <span className="font-semibold">{tour.rating}</span>
                  <span className="text-white/70">({tour.reviewsCount} отзывов)</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span>{tour.duration} мин</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>{tour.distance} км</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    isFavorite 
                      ? 'bg-accent-raspberry text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  <span>{isFavorite ? 'В избранном' : 'В избранное'}</span>
                </button>
                
                <button className="flex items-center space-x-2 px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all">
                  <Share2 className="w-5 h-5" />
                  <span>Поделиться</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="mb-8">
                <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                  {[
                    { id: 'overview', label: 'Обзор' },
                    { id: 'route', label: 'Маршрут' },
                    { id: 'reviews', label: 'Отзывы' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-white text-primary-teal shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Audio Player */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Аудиогид</h3>
                    <AudioPlayer tour={tour} />
                  </div>

                  {/* Tour Points */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Точки маршрута</h3>
                    <div className="space-y-4">
                      {tour.points?.map((point, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-teal rounded-full flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{point.title}</h4>
                            <p className="text-gray-600">{point.description}</p>
                          </div>
                        </div>
                      )) || (
                        <p className="text-gray-500">Информация о точках маршрута будет добавлена</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'route' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-6">Интерактивная карта</h3>
                  <InteractiveTourMap tour={tour} />
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ReviewsSection tour={tour} />
                </motion.div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Purchase Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-teal mb-2">
                    {tour.price} ₽
                  </div>
                  <div className="text-gray-600">за экскурсию</div>
                </div>
                
                <button className="w-full bg-gradient-sunset text-white py-4 rounded-xl font-semibold text-lg mb-4 hover:shadow-lg transition-all">
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  Купить экскурсию
                </button>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Пожизненный доступ</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Офлайн режим</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Карта маршрута</span>
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <AuthorCard author={tour.author} />
              
              {/* Related Tours */}
              <RelatedTours currentTourId={tour.id} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
