# 🏗️ Архитектура проекта МестоСлов

## Обзор системы

МестоСлов построен на современном full-stack стеке с разделением на Frontend (Next.js) и Backend (Express + PostgreSQL).

## Архитектурные принципы

### 1. Separation of Concerns

- **Frontend**: Презентационный слой, UI/UX, клиентская логика
- **Backend**: Бизнес-логика, аутентификация, работа с БД
- **Database**: Хранение данных, геопространственные запросы

### 2. Component-Based Architecture

- Модульные React компоненты
- Переиспользуемые UI элементы
- Изолированная бизнес-логика

### 3. RESTful API

- Стандартизированные HTTP методы
- Понятная структура эндпоинтов
- Версионирование API

## Frontend архитектура

### Next.js App Router

\`\`\`
app/
├── layout.tsx # Root layout
├── page.tsx # Home page
├── tours/
│ ├── page.tsx # Tours catalog
│ └── [id]/
│ └── page.tsx # Tour detail
├── profile/
│ └── page.tsx # User profile
├── author/
│ └── page.tsx # Author dashboard
└── blog/
└── page.tsx # Blog
\`\`\`

### State Management (Redux Toolkit)

\`\`\`typescript
store/
├── authSlice # Аутентификация
├── toursSlice # Экскурсии и фильтры
└── playerSlice # Аудиоплеер
\`\`\`

**Принципы работы со state:**

- Global state для данных, используемых в нескольких компонентах
- Local state для UI состояния компонентов
- Server state через API запросы

### Component Structure

\`\`\`
components/
├── layout/ # Layout компоненты (Nav, Footer)
├── home/ # Главная страница
├── tours/ # Каталог и карточки
├── tour-detail/ # Детальная страница
├── profile/ # Профиль пользователя
└── author/ # Панель автора
\`\`\`

### Animation System

**Framer Motion** для сложных анимаций:

- Page transitions
- Component animations
- Gesture-based interactions

**CSS Animations** для простых эффектов:

- Hover states
- Loading indicators
- Micro-interactions

## Backend архитектура

### Layered Architecture

\`\`\`
backend/src/
├── server.ts # Express app setup
├── routes/ # Route definitions
│ ├── auth.routes.ts
│ ├── tours.routes.ts
│ ├── users.routes.ts
│ ├── reviews.routes.ts
│ └── payments.routes.ts
├── controllers/ # Business logic
├── services/ # External services
├── middleware/ # Express middleware
│ ├── auth.ts # JWT verification
│ ├── errorHandler.ts # Error handling
│ └── validation.ts # Input validation
├── models/ # Data models
└── db/ # Database
├── schema.sql # DB schema
└── migrations/ # DB migrations
\`\`\`

### API Design Pattern

\`\`\`
Route → Middleware → Controller → Service → Database
\`\`\`

**Пример потока запроса:**

1. **Route**: Определяет эндпоинт и HTTP метод
2. **Middleware**: Валидация, аутентификация
3. **Controller**: Обработка запроса, вызов сервисов
4. **Service**: Бизнес-логика
5. **Database**: CRUD операции

### Authentication Flow

\`\`\`

1. User Login → Generate JWT
2. Store JWT in HttpOnly cookie
3. Every request → Verify JWT
4. Refresh token mechanism
   \`\`\`

## База данных

### Schema Design

**PostgreSQL + PostGIS** для геопространственных данных:

\`\`\`sql
users
├── Basic info (email, name, avatar)
└── Role (user, author, admin)

tours
├── Tour metadata
├── Pricing & stats
└── Author reference

tour_points
├── Location (PostGIS GEOGRAPHY)
├── Audio URL
└── Order index

purchases
├── User ↔ Tour relationship
└── Payment info

reviews
└── Rating & comments
\`\`\`

### Indexes Strategy

\`\`\`sql
-- Full-text search
CREATE INDEX tours_search_idx ON tours
USING GIN (to_tsvector('russian', title || ' ' || description));

-- Geospatial
CREATE INDEX tour_points_location_idx ON tour_points
USING GIST(location);

-- Foreign keys
CREATE INDEX purchases_user_idx ON purchases(user_id);
CREATE INDEX reviews_tour_idx ON reviews(tour_id);
\`\`\`

## Интеграции

### Cloudinary (Медиа)

\`\`\`typescript
// Upload image
const uploadImage = async (file: File) => {
const formData = new FormData()
formData.append('file', file)
formData.append('upload_preset', 'mestoslov')

const response = await fetch(
'https://api.cloudinary.com/v1_1/YOUR_CLOUD/image/upload',
{ method: 'POST', body: formData }
)
return response.json()
}
\`\`\`

### ЮKassa (Платежи)

\`\`\`typescript
// Create payment
const createPayment = async (amount: number, tourId: string) => {
const payment = await yukassa.createPayment({
amount: { value: amount, currency: 'RUB' },
confirmation: { type: 'redirect', return_url: '...' },
metadata: { tourId }
})
return payment
}
\`\`\`

### Leaflet (Карты)

\`\`\`typescript
// Initialize map
const map = L.map('map').setView([55.7558, 37.6173], 13)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Add markers
points.forEach(point => {
L.marker([point.lat, point.lng])
.addTo(map)
.bindPopup(point.title)
})
\`\`\`

## Безопасность

### Frontend

- XSS protection (React sanitization)
- CSRF tokens для форм
- Secure cookies
- Input validation

### Backend

- Helmet.js для HTTP заголовков
- Rate limiting
- SQL injection prevention (параметризованные запросы)
- JWT с коротким сроком жизни
- Password hashing (bcrypt)

### Database

- Row-level security
- Prepared statements
- Encrypted connections

## Performance

### Frontend Optimization

\`\`\`typescript
// Code splitting
const TourDetail = dynamic(() => import('@/components/TourDetail'))

// Image optimization
<Image 
  src={tour.image}
  width={600}
  height={400}
  placeholder="blur"
  loading="lazy"
/>

// Memoization
const MemoizedComponent = React.memo(ExpensiveComponent)
\`\`\`

### Backend Optimization

\`\`\`typescript
// Compression
app.use(compression())

// Caching
const cache = new Map()
const getCachedData = (key) => {
if (cache.has(key)) return cache.get(key)
const data = fetchFromDB()
cache.set(key, data)
return data
}
\`\`\`

### Database Optimization

\`\`\`sql
-- Query optimization
EXPLAIN ANALYZE
SELECT \* FROM tours
WHERE city = 'Москва' AND status = 'published';

-- Materialized views
CREATE MATERIALIZED VIEW popular_tours AS
SELECT tour_id, COUNT(\*) as purchases
FROM purchases
GROUP BY tour_id
ORDER BY purchases DESC;
\`\`\`

## Масштабирование

### Horizontal Scaling

- Load balancer перед backend
- Stateless backend серверы
- Database replication (master-slave)

### Caching Strategy

\`\`\`

1. Browser cache (static assets)
2. CDN (images, videos)
3. Redis (API responses)
4. Database query cache
   \`\`\`

### CDN Strategy

- Cloudinary для медиа
- Vercel Edge для статики
- Geographic distribution

## Мониторинг

### Metrics

- Response time
- Error rate
- Database query performance
- User engagement

### Tools

- Sentry для error tracking
- Google Analytics для аналитики
- LogRocket для session replay

## Deployment

### CI/CD Pipeline

\`\`\`

1. Git push → GitHub
2. Automated tests
3. Build process
4. Deploy to staging
5. Manual approval
6. Deploy to production
   \`\`\`

### Infrastructure

\`\`\`
Frontend: Vercel
Backend: Railway/Render
Database: Supabase/Neon
CDN: Cloudinary
\`\`\`

## Будущие улучшения

1. **WebSocket** для real-time обновлений
2. **GraphQL** вместо REST
3. **Microservices** для масштабирования
4. **ML рекомендации** на основе предпочтений
5. **AR функции** через camera API
6. **Offline-first** архитектура с sync

---

Эта архитектура обеспечивает:

- ✅ Масштабируемость
- ✅ Производительность
- ✅ Безопасность
- ✅ Поддерживаемость
- ✅ Расширяемость
