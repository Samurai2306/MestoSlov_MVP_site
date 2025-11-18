'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, CreditCard, Shield, QrCode } from 'lucide-react'
import Link from 'next/link'
import { mockTours } from '@/lib/mockData'
import { Tour } from '@/types'
import Image from 'next/image'
import toast from 'react-hot-toast'

function PaymentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tourId = searchParams.get('tourId')
  const [tour, setTour] = useState<Tour | null>(null)

  useEffect(() => {
    if (tourId) {
      const foundTour = mockTours.find(t => t.id === tourId)
      if (foundTour) {
        setTour(foundTour)
      }
    }
  }, [tourId])

  const handlePaymentComplete = () => {
    toast.success('Оплата успешно обработана!')
    // В реальном приложении здесь будет редирект на страницу успешной оплаты
    router.push(`/tours/${tourId}`)
  }

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-cream to-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-teal"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link href={`/tours/${tourId}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-teal mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Вернуться к экскурсии</span>
          </motion.button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Tour Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Детали заказа</h2>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={tour.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{tour.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{tour.city}</p>
                  <p className="text-sm text-gray-500">Автор: {tour.author.name}</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Экскурсия</span>
                  <span className="font-medium">{tour.title}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Длительность</span>
                  <span className="font-medium">{tour.duration} мин</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Расстояние</span>
                  <span className="font-medium">{tour.distance} км</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Итого</span>
                  <span className="text-2xl font-bold text-primary-teal">{tour.price} ₽</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Что включено</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Пожизненный доступ к экскурсии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Офлайн режим для прослушивания</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Интерактивная карта маршрута</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Все точки интереса с описаниями</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Payment Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary-teal" />
                <h2 className="text-2xl font-bold text-gray-900">Оплата</h2>
              </div>

              <div className="bg-gradient-to-br from-primary-teal/10 to-primary-green/10 rounded-xl p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <QrCode className="w-5 h-5 text-primary-teal" />
                  <span className="text-sm font-medium text-gray-700">Перевод по СБП</span>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-4 flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-4 text-center">Отсканируйте QR-код для оплаты</div>
                  <div className="relative w-64 h-64 mb-4 bg-white p-4 rounded-lg shadow-md">
                    <Image
                      src="/MestoSlov_MVP_site/assets/imgAndLogo/qr-code.png"
                      alt="QR-код для оплаты"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-teal mb-1">Сумма к оплате</div>
                    <div className="text-2xl font-bold text-gray-900">{tour.price} ₽</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <span className="text-primary-teal">1.</span>
                    <span>Откройте приложение вашего банка</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary-teal">2.</span>
                    <span>Выберите перевод по СБП</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary-teal">3.</span>
                    <span>Отсканируйте QR-код камерой приложения</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary-teal">4.</span>
                    <span>Проверьте сумму: <strong>{tour.price} ₽</strong></span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary-teal">5.</span>
                    <span>Подтвердите перевод</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Важно!</p>
                    <p>После оплаты доступ к экскурсии будет предоставлен автоматически в течение 5-10 минут. Если доступ не появился, свяжитесь с поддержкой.</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePaymentComplete}
                className="w-full bg-gradient-sunset text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Я оплатил
              </motion.button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Нажимая кнопку, вы подтверждаете, что совершили перевод
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-cream to-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-teal"></div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}

