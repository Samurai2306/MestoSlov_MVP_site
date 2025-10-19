'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id

  // Mock данные для примера
  const post = {
    id: postId,
    title: '10 скрытых жемчужин Петербурга',
    subtitle: 'Места, о которых не пишут в путеводителях',
    author: {
      name: 'Елена Иванова',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Петербурженка со стажем, автор 15+ экскурсий',
    },
    date: '15 октября 2024',
    readTime: '8 мин',
    category: 'Путешествия',
    image: 'https://images.unsplash.com/photo-1556543221-d86814f3d076?w=1200',
    content: `
      <p>Санкт-Петербург — город с богатой историей и культурой. Но даже коренные жители не всегда знают о всех его секретах...</p>
      
      <h2>1. Двор-колодец на Московском проспекте</h2>
      <p>Один из самых атмосферных дворов-колодцев находится в доме номер 112. Это место словно застыло во времени...</p>
      
      <h2>2. Музей-квартира Набокова</h2>
      <p>В отличие от переполненного музея Достоевского, квартира Набокова на Большой Морской редко бывает переполнена туристами...</p>
    `,
    tags: ['Санкт-Петербург', 'Достопримечательности', 'Секретные места'],
    views: 1250,
    likes: 89,
    comments: 23,
  }

  const relatedPosts = [
    {
      id: '2',
      title: 'Где поесть в Москве: гид по локальной кухне',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      category: 'Еда',
      readTime: '5 мин',
    },
    {
      id: '3',
      title: 'Как создать идеальную аудиоэкскурсию',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400',
      category: 'Советы',
      readTime: '10 мин',
    },
    {
      id: '4',
      title: 'Топ-5 маршрутов для осенних прогулок',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      category: 'Маршруты',
      readTime: '7 мин',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Breadcrumbs */}
        <div className="absolute top-8 left-4 md:left-8 z-10">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Блог
            </Link>
            <span>/</span>
            <span className="text-white">{post.category}</span>
          </div>
        </div>

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent-amber rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">{post.subtitle}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-600">{post.author.bio}</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600 ml-auto">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {post.views}
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="px-4 py-2 bg-primary-cream rounded-full text-sm text-gray-700 hover:bg-primary-teal hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Share & Like */}
        <div className="flex items-center justify-between py-8 border-y border-gray-200 mb-12">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Нравится ({post.likes})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-medium hover:border-primary-teal transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Комментарии ({post.comments})
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm">Поделиться:</span>
            {['vk', 'telegram', 'twitter'].map((social) => (
              <motion.button
                key={social}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-teal hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Author Card */}
        <div className="bg-gradient-to-br from-primary-teal/5 to-accent-amber/5 rounded-3xl p-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{post.author.name}</h3>
              <p className="text-gray-600 mb-4">{post.author.bio}</p>
              <Link
                href={`/author/${post.author.name}`}
                className="text-primary-teal hover:underline font-medium"
              >
                Посмотреть все статьи →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Вам также может понравиться</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/blog/${relatedPost.id}`}>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-teal transition-colors">
                    {relatedPost.title}
                  </h3>
                  <div className="text-sm text-gray-600">{relatedPost.readTime}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


