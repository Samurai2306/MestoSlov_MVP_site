'use client'

import { motion } from 'framer-motion'
import { Clock, User, Tag, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogPosts = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' }
  ]
  
  return blogPosts
}

interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  image: string
  author: string
  category: string
  readTime: number
  publishedAt: string
  tags: string[]
  likes: number
  isLiked: boolean
  isBookmarked: boolean
}

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Как создать идеальную аудиоэкскурсию: гид для начинающих авторов',
    content: `
      <p>Создание качественной аудиоэкскурсии — это искусство, которое требует не только глубоких знаний о месте, но и понимания того, как удержать внимание слушателя на протяжении всего маршрута.</p>
      
      <h2>1. Планирование маршрута</h2>
      <p>Первый шаг — это тщательное планирование. Пройдитесь по маршруту пешком, отметьте ключевые точки, определите логическую последовательность рассказа. Помните: хорошая экскурсия — это история с началом, серединой и концом.</p>
      
      <h2>2. Подготовка контента</h2>
      <p>Исследуйте историю места, найдите интересные факты, легенды, малоизвестные детали. Ваша задача — не просто пересказать информацию из Википедии, а создать уникальный контент, который заинтересует слушателей.</p>
      
      <h2>3. Техническая сторона</h2>
      <p>Качество звука критически важно. Используйте хороший микрофон, записывайте в тихом месте, следите за уровнем громкости. Помните: слушатель может простить несовершенный контент, но плохое качество звука — никогда.</p>
      
      <h2>4. Структура рассказа</h2>
      <p>Начните с интригующего вступления, развивайте тему постепенно, используйте переходы между точками. Заканчивайте на высокой ноте — оставьте слушателя с желанием узнать больше.</p>
      
      <h2>5. Тестирование и улучшение</h2>
      <p>Протестируйте экскурсию на друзьях или коллегах. Соберите обратную связь, внесите корректировки. Помните: даже опытные авторы переписывают свои работы несколько раз.</p>
    `,
    excerpt: 'Подробное руководство по созданию увлекательных аудиоэкскурсий, которые понравятся путешественникам',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    author: 'Анна Петрова',
    category: 'Для авторов',
    readTime: 8,
    publishedAt: '15 января 2024',
    tags: ['аудиоэкскурсии', 'создание контента', 'советы авторам'],
    likes: 42,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 2,
    title: '10 секретных мест Петербурга, которые стоит посетить',
    content: `
      <p>Санкт-Петербург — город, который никогда не перестает удивлять. За парадными фасадами Невского проспекта скрываются удивительные места, о которых знают только местные жители.</p>
      
      <h2>1. Двор-колодец на Мойке</h2>
      <p>Спрятанный во дворе дома на Мойке, 28, этот удивительный двор-колодец создает ощущение, что вы попали в другую эпоху. Высокие стены, узкие проходы, атмосфера старого Петербурга.</p>
      
      <h2>2. Парк Екатерингоф</h2>
      <p>Один из старейших парков города, основанный Петром I. Здесь сохранились уникальные постройки XVIII века и удивительная атмосфера императорской резиденции.</p>
      
      <h2>3. Дом с башнями</h2>
      <p>Необычное здание на площади Льва Толстого, построенное в стиле северного модерна. Башни, напоминающие средневековые крепости, создают неповторимый облик.</p>
      
      <h2>4. Дворы Капеллы</h2>
      <p>Скрытые от глаз туристов дворы с уникальной архитектурой и атмосферой старого Петербурга. Здесь время словно остановилось.</p>
      
      <h2>5. Парк 300-летия Санкт-Петербурга</h2>
      <p>Современный парк с удивительными видами на Финский залив. Отличное место для прогулок и фотосессий.</p>
    `,
    excerpt: 'Малоизвестные локации с богатой историей',
    image: 'https://images.unsplash.com/photo-1555991438-b87d68cb3e1f?w=400',
    author: 'Дмитрий Соколов',
    category: 'Путешествия',
    readTime: 5,
    publishedAt: '12 января 2024',
    tags: ['Петербург', 'секретные места', 'достопримечательности'],
    likes: 38,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 3,
    title: 'История московского метро: от первых станций до наших дней',
    content: `
      <p>Московское метро — это не просто транспортная система, это подземный музей, где каждая станция рассказывает свою историю.</p>
      
      <h2>Первые станции</h2>
      <p>Сокольническая линия, открытая в 1935 году, стала первой в истории московского метро. Станции "Сокольники", "Красносельская", "Комсомольская" — каждая из них уникальна.</p>
      
      <h2>Архитектурные шедевры</h2>
      <p>Станция "Маяковская" с мозаиками Дейнеки, "Площадь Революции" со скульптурами Манизера, "Кропоткинская" в стиле ар-деко — каждая станция — произведение искусства.</p>
      
      <h2>Современные станции</h2>
      <p>Новые станции продолжают традиции, сочетая современные технологии с классической архитектурой. "Солнцево", "Новокосино", "Бунинская аллея" — примеры современного подхода к дизайну.</p>
    `,
    excerpt: 'Увлекательный рассказ о подземном дворце столицы',
    image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400',
    author: 'Елена Волкова',
    category: 'История',
    readTime: 12,
    publishedAt: '10 января 2024',
    tags: ['Москва', 'метро', 'архитектура', 'история'],
    likes: 56,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 4,
    title: 'Как монетизировать свои знания о городе',
    content: `
      <p>Ваши знания о родном городе могут стать источником дохода. Рассказываем, как превратить любовь к своему городу в прибыльное дело.</p>
      
      <h2>Создание уникального контента</h2>
      <p>Главное — найти свою нишу. Что вы знаете о своем городе лучше других? Какие места, истории, легенды известны только вам?</p>
      
      <h2>Платформы для монетизации</h2>
      <p>МестоСлов — идеальная платформа для авторов аудиоэкскурсий. Здесь вы можете создавать, публиковать и продавать свои маршруты.</p>
      
      <h2>Ценообразование</h2>
      <p>Стоимость экскурсии зависит от уникальности контента, качества записи и популярности маршрута. Начните с доступных цен и повышайте их по мере роста популярности.</p>
    `,
    excerpt: 'Практические советы по созданию и продвижению аудиоэкскурсий',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400',
    author: 'Михаил Уральский',
    category: 'Для авторов',
    readTime: 7,
    publishedAt: '8 января 2024',
    tags: ['монетизация', 'авторство', 'доход', 'контент'],
    likes: 29,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 5,
    title: 'Золотое кольцо: маршрут на выходные',
    content: `
      <p>Золотое кольцо России — это уникальная возможность за выходные погрузиться в историю Древней Руси и насладиться красотой белокаменной архитектуры.</p>
      
      <h2>День 1: Владимир</h2>
      <p>Начните с Владимира — древней столицы Северо-Восточной Руси. Успенский собор, Золотые ворота, Дмитриевский собор — каждый памятник рассказывает свою историю.</p>
      
      <h2>День 2: Суздаль</h2>
      <p>Суздаль — это музей под открытым небом. Кремль, монастыри, деревянная архитектура — здесь время остановилось.</p>
      
      <h2>Практические советы</h2>
      <p>Лучшее время для поездки — май-сентябрь. Забронируйте отель заранее, особенно в выходные. Не забудьте взять удобную обувь — много ходьбы!</p>
    `,
    excerpt: 'Оптимальный план посещения древних городов России',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400',
    author: 'Светлана Морская',
    category: 'Маршруты',
    readTime: 10,
    publishedAt: '5 января 2024',
    tags: ['Золотое кольцо', 'Владимир', 'Суздаль', 'выходные'],
    likes: 45,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 6,
    title: 'Технологии в туризме: будущее аудиоэкскурсий',
    content: `
      <p>Технологии кардинально меняют индустрию туризма. AR, VR, искусственный интеллект — что ждет нас в будущем?</p>
      
      <h2>Дополненная реальность</h2>
      <p>AR-очки позволят видеть исторические события прямо на улицах города. Представьте: вы идете по Красной площади и видите, как она выглядела 100 лет назад.</p>
      
      <h2>Виртуальная реальность</h2>
      <p>VR-экскурсии позволят "побывать" в местах, недоступных для обычных туристов. Заглянуть в закрытые дворцы, пройти по древним улицам.</p>
      
      <h2>Искусственный интеллект</h2>
      <p>ИИ будет создавать персонализированные экскурсии на основе ваших интересов и предпочтений. Уникальный маршрут для каждого путешественника.</p>
    `,
    excerpt: 'AR, VR и другие инновации в индустрии путешествий',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
    author: 'Рустам Ахметов',
    category: 'Технологии',
    readTime: 6,
    publishedAt: '3 января 2024',
    tags: ['технологии', 'AR', 'VR', 'будущее'],
    likes: 33,
    isLiked: false,
    isBookmarked: false
  }
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id)
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-primary-teal hover:text-primary-green transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад к блогу</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-teal text-white rounded-full text-sm font-medium">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-primary-green mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <span className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} мин чтения</span>
            </span>
            <span className="flex items-center space-x-2">
              <Tag className="w-5 h-5" />
              <span>{post.publishedAt}</span>
            </span>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-12"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Теги:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-teal transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>Сохранить</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-teal transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Поделиться</span>
            </button>
          </motion.div>
        </motion.article>
      </div>
    </div>
  )
}