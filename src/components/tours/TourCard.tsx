'use client'

import { motion } from 'framer-motion'
import { Star, Clock, MapPin, Heart, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Tour } from '@/types'
import { useState } from 'react'

interface TourCardProps {
  tour: Tour
}

const TourCard = ({ tour }: TourCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-2xl overflow-hidden shadow-elevation hover:shadow-glow transition-all duration-300"
    >
      <Link href={`/tours/${tour.id}`}>
        <div className="relative h-56 overflow-hidden">
          <Image
            src={tour.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-green">
            {tour.category}
          </div>

          {/* Favorite Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault()
              setIsFavorite(!isFavorite)
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'fill-accent-raspberry text-accent-raspberry' : 'text-gray-600'
              }`}
            />
          </motion.button>

          {/* Play Preview Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault()
                // Play audio preview
              }}
              className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl"
            >
              <Play className="w-6 h-6 text-primary-teal ml-1" />
            </motion.button>
          </motion.div>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="text-lg font-bold text-primary-teal">{tour.price} ₽</span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        {/* Location */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{tour.city}</span>
        </div>

        {/* Title */}
        <Link href={`/tours/${tour.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-teal transition-colors line-clamp-2">
            {tour.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Author */}
        <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-100">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={tour.author.avatar || 'https://i.pravatar.cc/150?img=1'}
              alt={tour.author.name}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = 'https://i.pravatar.cc/150?img=1'
              }}
            />
          </div>
          <span className="text-sm text-gray-600">{tour.author.name}</span>
          {tour.author.verified && (
            <svg className="w-4 h-4 text-primary-teal" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-accent-amber text-accent-amber" />
              <span className="font-medium text-sm">{tour.rating}</span>
              <span className="text-gray-500 text-xs">({tour.reviewsCount})</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{tour.duration} мин</span>
            </div>
          </div>

          <Link href={`/tours/${tour.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-sunset text-white rounded-full text-sm font-medium"
            >
              Подробнее
            </motion.button>
          </Link>
        </div>

        {/* Tags */}
        {tour.tags && tour.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tour.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary-teal/10 text-primary-teal text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default TourCard


