'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ThumbsUp, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface ReviewsSectionProps {
  tourId: string
}

const ReviewsSection = ({ tourId }: ReviewsSectionProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const reviews = [
    {
      id: 1,
      user: {
        name: 'Мария Иванова',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      },
      rating: 5,
      date: '15 января 2024',
      text: 'Невероятная экскурсия! Узнала столько нового о своем городе. Рассказчик очень харизматичный, а аудио качество на высоте. Особенно понравилась автоматическая активация точек по геолокации.',
      helpful: 24,
      images: [
        'https://images.unsplash.com/photo-1555991438-b87d68cb3e1f?w=300',
        'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=300',
      ],
    },
    {
      id: 2,
      user: {
        name: 'Алексей Смирнов',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      },
      rating: 5,
      date: '10 января 2024',
      text: 'Отличный способ познакомиться с городом! Можно идти в своем темпе, останавливаться где захочется. Информация подана интересно и ненавязчиво.',
      helpful: 18,
    },
    {
      id: 3,
      user: {
        name: 'Елена Волкова',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      },
      rating: 4,
      date: '5 января 2024',
      text: 'Хорошая экскурсия, но иногда GPS подводил и аудио включалось не сразу. В целом впечатления отличные, рекомендую!',
      helpful: 12,
    },
  ]

  const ratingDistribution = [
    { stars: 5, count: 189, percentage: 85 },
    { stars: 4, count: 28, percentage: 12 },
    { stars: 3, count: 5, percentage: 2 },
    { stars: 2, count: 1, percentage: 0.5 },
    { stars: 1, count: 1, percentage: 0.5 },
  ]

  return (
    <div className="space-y-8">
      {/* Rating Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Average Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-6xl font-bold text-white mb-2">4.9</div>
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent-amber text-accent-amber" />
            ))}
          </div>
          <p className="text-gray-400">На основе 234 отзывов</p>
        </motion.div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map((item) => (
            <motion.button
              key={item.stars}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedRating(item.stars)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                selectedRating === item.stars ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <span className="text-white font-medium w-12">{item.stars} ★</span>
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, delay: item.stars * 0.1 }}
                  className="h-full bg-gradient-to-r from-accent-amber to-primary-teal"
                />
              </div>
              <span className="text-gray-400 text-sm w-12 text-right">{item.count}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Add Review Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-4 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl font-bold flex items-center justify-center space-x-2"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Написать отзыв</span>
      </motion.button>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 bg-gray-700/50 rounded-xl"
          >
            {/* User Info */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.user.avatar}
                    alt={review.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-white">{review.user.name}</h5>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-accent-amber text-accent-amber'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-300 leading-relaxed mb-4">{review.text}</p>

            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex space-x-2 mb-4">
                {review.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`Review image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-teal transition-colors"
              >
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">Полезно ({review.helpful})</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-teal transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Ответить</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 bg-gray-700/50 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors"
      >
        Показать еще отзывы
      </motion.button>
    </div>
  )
}

export default ReviewsSection


