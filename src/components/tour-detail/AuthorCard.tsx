'use client'

import { motion } from 'framer-motion'
import { Star, MapPin, CheckCircle, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Author } from '@/types'

interface AuthorCardProps {
  author: Author
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-elevation"
    >
      <div className="text-center mb-6">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover rounded-full"
          />
          {author.verified && (
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary-teal rounded-full flex items-center justify-center border-4 border-white">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{author.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{author.bio}</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Экскурсий</span>
          <span className="font-bold text-gray-900">{author.toursCount}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Рейтинг</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-accent-amber text-accent-amber" />
            <span className="font-bold text-gray-900">{author.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Статус</span>
          <span className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-primary-teal" />
            <span className="text-sm font-medium text-primary-teal">Проверен</span>
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <Link href={`/authors/${author.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-primary-teal text-white rounded-xl font-medium hover:shadow-glow transition-all"
          >
            Все экскурсии автора
          </motion.button>
        </Link>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Написать автору</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default AuthorCard


