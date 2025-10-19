# 🔌 API Документация МестоСлов

## Base URL

\`\`\`
Development: http://localhost:5000/api
Production: https://api.mestoslov.ru/api
\`\`\`

## Аутентификация

Все защищенные эндпоинты требуют JWT токен в заголовке:
\`\`\`
Authorization: Bearer <token>
\`\`\`

---

## Auth Endpoints

### POST /auth/register

Регистрация нового пользователя

**Request:**
\`\`\`json
{
"email": "user@example.com",
"password": "password123",
"name": "Иван Иванов"
}
\`\`\`

**Response (201):**
\`\`\`json
{
"message": "User registered successfully",
"userId": "uuid",
"token": "jwt_token"
}
\`\`\`

### POST /auth/login

Вход в систему

**Request:**
\`\`\`json
{
"email": "user@example.com",
"password": "password123"
}
\`\`\`

**Response (200):**
\`\`\`json
{
"token": "jwt_token",
"user": {
"id": "uuid",
"email": "user@example.com",
"name": "Иван Иванов",
"role": "user"
}
}
\`\`\`

---

## Tours Endpoints

### GET /tours

Получение списка экскурсий с фильтрами

**Query Parameters:**

- \`city\` - фильтр по городу
- \`category\` - фильтр по категории
- \`search\` - поиск по названию/описанию
- \`sortBy\` - сортировка (popular, rating, price-low, price-high, newest)
- \`page\` - номер страницы (default: 1)
- \`limit\` - количество на странице (default: 12)

**Response (200):**
\`\`\`json
{
"tours": [
{
"id": "uuid",
"title": "Название экскурсии",
"description": "Описание...",
"city": "Москва",
"category": "История",
"duration": 90,
"distance": 3.5,
"price": 499,
"rating": 4.9,
"reviewsCount": 234,
"image": "url",
"author": {
"id": "uuid",
"name": "Автор",
"avatar": "url",
"verified": true
}
}
],
"total": 50,
"page": 1,
"totalPages": 5
}
\`\`\`

### GET /tours/:id

Получение детальной информации об экскурсии

**Response (200):**
\`\`\`json
{
"id": "uuid",
"title": "Название",
"description": "Полное описание...",
"city": "Москва",
"category": "История",
"duration": 90,
"distance": 3.5,
"price": 499,
"rating": 4.9,
"reviewsCount": 234,
"viewsCount": 1250,
"image": "url",
"audioPreview": "url",
"tags": ["история", "архитектура"],
"author": {
"id": "uuid",
"name": "Автор",
"avatar": "url",
"bio": "О себе",
"toursCount": 12,
"rating": 4.9,
"verified": true
},
"points": [
{
"id": "uuid",
"title": "Точка 1",
"description": "Описание точки",
"latitude": 55.7558,
"longitude": 37.6173,
"audioUrl": "url",
"duration": 120,
"images": ["url1", "url2"],
"order": 1
}
]
}
\`\`\`

### POST /tours

Создание новой экскурсии (только для авторов)

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Request:**
\`\`\`json
{
"title": "Название экскурсии",
"description": "Описание",
"city": "Москва",
"category": "История",
"duration": 90,
"distance": 3.5,
"price": 499,
"image": "url",
"audioPreview": "url",
"tags": ["история", "архитектура"],
"points": [
{
"title": "Точка 1",
"description": "Описание",
"latitude": 55.7558,
"longitude": 37.6173,
"audioUrl": "url",
"duration": 120,
"images": ["url1"],
"order": 1
}
]
}
\`\`\`

**Response (201):**
\`\`\`json
{
"message": "Tour created successfully",
"tourId": "uuid"
}
\`\`\`

### PUT /tours/:id

Обновление экскурсии

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Request:** (same as POST)

**Response (200):**
\`\`\`json
{
"message": "Tour updated successfully",
"tourId": "uuid"
}
\`\`\`

### DELETE /tours/:id

Удаление экскурсии

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response (200):**
\`\`\`json
{
"message": "Tour deleted successfully"
}
\`\`\`

---

## Users Endpoints

### GET /users/profile

Получение профиля текущего пользователя

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response (200):**
\`\`\`json
{
"id": "uuid",
"email": "user@example.com",
"name": "Иван Иванов",
"avatar": "url",
"role": "user",
"bio": "О себе",
"memberSince": "2024-01-15",
"stats": {
"toursCompleted": 12,
"citiesVisited": 5,
"totalDistance": 45.3,
"totalListeningTime": 720
}
}
\`\`\`

### PUT /users/profile

Обновление профиля

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Request:**
\`\`\`json
{
"name": "Новое имя",
"bio": "Новое описание",
"avatar": "new_url"
}
\`\`\`

**Response (200):**
\`\`\`json
{
"message": "Profile updated successfully"
}
\`\`\`

### GET /users/purchased-tours

Получение купленных экскурсий

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response (200):**
\`\`\`json
{
"tours": [
{
"id": "uuid",
"title": "Название",
"progress": 75,
"lastPlayed": "2024-01-20T10:30:00Z",
"downloaded": true,
"purchasedAt": "2024-01-15T12:00:00Z"
}
]
}
\`\`\`

### GET /users/favorites

Получение избранных экскурсий

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response (200):**
\`\`\`json
{
"tours": [...]
}
\`\`\`

### POST /users/favorites/:tourId

Добавление в избранное

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response (200):**
\`\`\`json
{
"message": "Tour added to favorites"
}
\`\`\`

### DELETE /users/favorites/:tourId

Удаление из избранного

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response (200):**
\`\`\`json
{
"message": "Tour removed from favorites"
}
\`\`\`

---

## Reviews Endpoints

### GET /reviews/tour/:tourId

Получение отзывов для экскурсии

**Query Parameters:**

- \`page\` - номер страницы
- \`limit\` - количество на странице
- \`sortBy\` - сортировка (newest, highest, lowest)

**Response (200):**
\`\`\`json
{
"reviews": [
{
"id": "uuid",
"user": {
"id": "uuid",
"name": "Иван",
"avatar": "url"
},
"rating": 5,
"comment": "Отличная экскурсия!",
"audioReview": "url",
"images": ["url1"],
"helpfulCount": 24,
"createdAt": "2024-01-15T12:00:00Z"
}
],
"averageRating": 4.9,
"total": 234
}
\`\`\`

### POST /reviews

Создание отзыва

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Request:**
\`\`\`json
{
"tourId": "uuid",
"rating": 5,
"comment": "Отличная экскурсия!",
"audioReview": "url",
"images": ["url1", "url2"]
}
\`\`\`

**Response (201):**
\`\`\`json
{
"message": "Review created successfully",
"reviewId": "uuid"
}
\`\`\`

---

## Payments Endpoints

### POST /payments/create

Создание платежа

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Request:**
\`\`\`json
{
"tourId": "uuid",
"amount": 499,
"returnUrl": "https://mestoslov.ru/payment/success"
}
\`\`\`

**Response (200):**
\`\`\`json
{
"paymentId": "payment_123",
"confirmationUrl": "https://payment.provider.com/confirm",
"status": "pending"
}
\`\`\`

### POST /payments/webhook

Webhook от платежной системы (ЮKassa)

**Request:**
\`\`\`json
{
"event": "payment.succeeded",
"object": {
"id": "payment_123",
"status": "succeeded",
"amount": { "value": "499.00", "currency": "RUB" },
"metadata": { "tourId": "uuid", "userId": "uuid" }
}
}
\`\`\`

**Response (200):**
\`\`\`json
{
"received": true
}
\`\`\`

### GET /payments/history

История платежей

**Headers:**
\`\`\`
Authorization: Bearer <token>
\`\`\`

**Response (200):**
\`\`\`json
{
"payments": [
{
"id": "uuid",
"tourId": "uuid",
"tourTitle": "Название",
"amount": 499,
"status": "completed",
"paymentMethod": "card",
"createdAt": "2024-01-15T12:00:00Z"
}
]
}
\`\`\`

---

## Error Responses

### 400 Bad Request

\`\`\`json
{
"status": "error",
"message": "Invalid input data",
"errors": [
{
"field": "email",
"message": "Invalid email format"
}
]
}
\`\`\`

### 401 Unauthorized

\`\`\`json
{
"status": "error",
"message": "Invalid or expired token"
}
\`\`\`

### 403 Forbidden

\`\`\`json
{
"status": "error",
"message": "Access denied"
}
\`\`\`

### 404 Not Found

\`\`\`json
{
"status": "error",
"message": "Resource not found"
}
\`\`\`

### 500 Internal Server Error

\`\`\`json
{
"status": "error",
"message": "Internal server error"
}
\`\`\`

---

## Rate Limiting

API имеет следующие лимиты:

- 100 запросов в минуту для авторизованных пользователей
- 20 запросов в минуту для неавторизованных

При превышении лимита:
\`\`\`json
{
"status": "error",
"message": "Rate limit exceeded",
"retryAfter": 60
}
\`\`\`

---

## Pagination

Все эндпоинты со списками поддерживают пагинацию:
\`\`\`
?page=1&limit=12
\`\`\`

Response включает метаданные:
\`\`\`json
{
"data": [...],
"page": 1,
"limit": 12,
"total": 50,
"totalPages": 5
}
\`\`\`

---

## Webhooks

### Payment Success

При успешном платеже отправляется webhook на ваш URL.

### Tour Published

При публикации экскурсии подписчикам отправляется уведомление.

---

## SDK Examples

### JavaScript/TypeScript

\`\`\`typescript
import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:5000/api',
headers: {
'Authorization': \`Bearer \${token}\`
}
})

// Get tours
const tours = await api.get('/tours', {
params: { city: 'Москва', category: 'История' }
})

// Create tour
const newTour = await api.post('/tours', {
title: 'Моя экскурсия',
// ...
})
\`\`\`

### cURL

\`\`\`bash

# Get tours

curl -X GET "http://localhost:5000/api/tours?city=Москва"

# Login

curl -X POST "http://localhost:5000/api/auth/login" \\
-H "Content-Type: application/json" \\
-d '{"email":"user@example.com","password":"password123"}'
\`\`\`

---

## Testing

Используйте Postman collection для тестирования API:
[Download Postman Collection](./postman_collection.json)

---

## Versioning

API использует версионирование через URL:

- v1: /api/v1/\* (текущая версия)
- v2: /api/v2/\* (будущая версия)

