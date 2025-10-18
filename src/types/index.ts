export interface Tour {
  id: string
  title: string
  description: string
  city: string
  category: string
  duration: number
  distance: number
  price: number
  rating: number
  reviewsCount: number
  image: string
  audioPreview?: string
  author: Author
  points: TourPoint[]
  tags: string[]
  createdAt: string
  isPurchased?: boolean
}

export interface TourPoint {
  id: string
  title: string
  description: string
  latitude: number
  longitude: number
  audioUrl: string
  duration: number
  images: string[]
  order: number
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  toursCount: number
  rating: number
  verified: boolean
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  tourId: string
  rating: number
  comment: string
  audioReview?: string
  createdAt: string
}

export interface UserProfile {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'author' | 'admin'
  bio?: string
  purchasedTours: string[]
  favoriteTours: string[]
  badges: Badge[]
  stats: UserStats
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: string
}

export interface UserStats {
  toursCompleted: number
  citiesVisited: number
  totalDistance: number
  totalListeningTime: number
  pointsVisited: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: Author
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
}

export interface AudioVisualizerData {
  frequencyData: Uint8Array
  timeDomainData: Uint8Array
}

export interface MapMarker {
  id: string
  position: [number, number]
  title: string
  type: 'start' | 'point' | 'end'
  visited?: boolean
}

