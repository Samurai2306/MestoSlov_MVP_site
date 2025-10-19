'use client'

import { motion } from 'framer-motion'
import { Clock, User, Tag, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: 'Как создать идеальную аудиоэкскурсию: гид для начинающих авторов',
    excerpt: 'Подробное руководство по созданию увлекательных аудиоэкскурсий, которые понравятся путешественникам',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    author: 'Анна Петрова',
    category: 'Для авторов',
    readTime: 8,
    publishedAt: '15 января 2024',
  }

  const posts = [
    {
      id: 2,
      title: '10 секретных мест Петербурга, которые стоит посетить',
      excerpt: 'Малоизвестные локации с богатой историей',
      image: 'https://images.unsplash.com/photo-1555991438-b87d68cb3e1f?w=400',
      author: 'Дмитрий Соколов',
      category: 'Путешествия',
      readTime: 5,
      publishedAt: '12 января 2024',
    },
    {
      id: 3,
      title: 'История московского метро: от первых станций до наших дней',
      excerpt: 'Увлекательный рассказ о подземном дворце столицы',
      image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400',
      author: 'Елена Волкова',
      category: 'История',
      readTime: 12,
      publishedAt: '10 января 2024',
    },
    {
      id: 4,
      title: 'Как монетизировать свои знания о городе',
      excerpt: 'Практические советы по созданию и продвижению аудиоэкскурсий',
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400',
      author: 'Михаил Уральский',
      category: 'Для авторов',
      readTime: 7,
      publishedAt: '8 января 2024',
    },
    {
      id: 5,
      title: 'Золотое кольцо: маршрут на выходные',
      excerpt: 'Оптимальный план посещения древних городов России',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400',
      author: 'Светлана Морская',
      category: 'Маршруты',
      readTime: 10,
      publishedAt: '5 января 2024',
    },
    {
      id: 6,
      title: 'Технологии в туризме: будущее аудиоэкскурсий',
      excerpt: 'AR, VR и другие инновации в индустрии путешествий',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
      author: 'Рустам Ахметов',
      category: 'Технологии',
      readTime: 6,
      publishedAt: '3 января 2024',
    },
  ]

  const categories = [
    'Все статьи',
    'Путешествия',
    'Для авторов',
    'История',
    'Маршруты',
    'Технологии',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-green mb-4">
            Блог МестоСлов
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Истории, советы и вдохновение для путешествий по России
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white rounded-full font-medium shadow-elevation hover:shadow-glow transition-all text-gray-700 hover:text-primary-teal"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Link href={`/blog/${featuredPost.id}`}>
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-primary-teal text-white rounded-full text-sm font-medium mb-4">
                  Рекомендуем
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-primary-teal transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-white/90 mb-6 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <span className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>{featuredPost.author}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{featuredPost.readTime} мин чтения</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Tag className="w-5 h-5" />
                    <span>{featuredPost.category}</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-elevation hover:shadow-glow transition-all group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-green">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} мин</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-sunset text-white rounded-full font-bold shadow-lg hover:shadow-glow-amber transition-all flex items-center space-x-2"
          >
            <span>Показать больше статей</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}


