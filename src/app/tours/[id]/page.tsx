import { mockTours } from '@/lib/mockData'
import TourDetailClient from './TourDetailClient'

// Generate static params for all tours
export async function generateStaticParams() {
  const tours = mockTours.map(tour => ({
    id: tour.id
  }))
  
  return tours
}

export default function TourDetailPage() {
  return <TourDetailClient />
}
    // В реальном приложении здесь будет API запрос
    const foundTour = mockTours.find(t => t.id === params.id)
    if (foundTour) {
      setTour(foundTour)
    }
  }, [params.id])

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-teal border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'route', label: 'Маршрут' },
    { id: 'reviews', label: `Отзывы (${tour.reviewsCount})` },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-8 right-8 flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-accent-raspberry text-accent-raspberry' : 'text-gray-700'}`} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
          >
            <Share2 className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>

        {/* Tour Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-4 py-1 bg-primary-teal rounded-full text-white text-sm font-medium">
                {tour.category}
              </span>
              <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
                {tour.city}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-accent-amber text-accent-amber" />
                <span className="font-bold">{tour.rating}</span>
                <span>({tour.reviewsCount} отзывов)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{tour.duration} минут</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{tour.distance} км</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Самостоятельно</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Audio Player */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AudioPlayer tour={tour} />
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800 rounded-2xl overflow-hidden"
            >
              <div className="flex border-b border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 px-6 py-4 font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary-teal"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-300 space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">О экскурсии</h3>
                      <p className="leading-relaxed text-lg">
                        {tour.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Что вы узнаете</h3>
                      <ul className="space-y-3">
                        {[
                          'Историю создания и развития локации',
                          'Интересные факты от местных жителей',
                          'Легенды и предания, связанные с местом',
                          'Советы по лучшим видовым точкам',
                          'Рекомендации по кафе и ресторанам',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-primary-teal flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Теги</h3>
                      <div className="flex flex-wrap gap-2">
                        {tour.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-primary-teal/20 text-primary-teal rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'route' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <InteractiveTourMap tour={tour} />
                  </motion.div>
                )}

                {activeTab === 'reviews' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <ReviewsSection tourId={tour.id} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-2xl sticky top-24"
            >
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">Стоимость экскурсии</p>
                <p className="text-5xl font-bold text-primary-teal mb-1">
                  {tour.price} ₽
                </p>
                <p className="text-sm text-gray-500">единоразовая покупка</p>
              </div>

              <div className="space-y-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-sunset text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-glow-amber transition-all flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Купить экскурсию</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gray-100 text-gray-900 rounded-xl font-medium flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Попробовать демо</span>
                </motion.button>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Download className="w-5 h-5 text-primary-teal" />
                  <span>Доступ оффлайн</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-teal" />
                  <span>Пожизненный доступ</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Heart className="w-5 h-5 text-primary-teal" />
                  <span>Возврат в течение 7 дней</span>
                </div>
              </div>
            </motion.div>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AuthorCard author={tour.author} />
            </motion.div>
          </div>
        </div>

        {/* Related Tours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <RelatedTours currentTourId={tour.id} city={tour.city} />
        </motion.div>
      </div>
    </div>
  )
}


