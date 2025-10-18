# 📁 Структура проекта МестоСлов

## 🌐 Страницы (Pages)

### Основные страницы

- **/** - Главная страница с героем, преимуществами, популярными турами
- **/tours** - Каталог всех экскурсий с фильтрами и поиском
- **/tours/[id]** - Детальная страница экскурсии с аудиоплеером и картой
- **/blog** - Блог с публикациями
- **/blog/[id]** - Детальная страница поста блога

### Информационные страницы

- **/about** - О нас (команда, миссия, ценности)
- **/contact** - Контакты (форма обратной связи, контактная информация)
- **/faq** - Часто задаваемые вопросы
- **/how-it-works** - Как это работает (пошаговая инструкция)

### Аутентификация

- **/login** - Вход в систему
- **/register** - Регистрация нового пользователя
- **/forgot-password** - Восстановление пароля

### Личные кабинеты

- **/profile** - Профиль пользователя (статистика, купленные туры, достижения)
- **/author** - Кабинет автора (создание туров, аналитика, доходы)

### Юридические страницы

- **/privacy** - Политика конфиденциальности
- **/terms** - Условия использования

### Утилиты

- **/search** - Страница поиска с расширенными фильтрами
- **/404** - Страница ошибки 404

---

## 🧩 Компоненты (Components)

### Layout компоненты (`src/components/layout/`)

- **Navigation.tsx** - Навигационная панель с мобильным меню
- **Footer.tsx** - Подвал сайта с ссылками и контактами

### Home компоненты (`src/components/home/`)

- **HeroSection.tsx** - Героическая секция с параллакс
- **FeaturesSection.tsx** - Преимущества платформы
- **ToursWaveSection.tsx** - Горизонтальный скролл популярных туров
- **InteractiveMapSection.tsx** - Интерактивная карта России
- **HowItWorksSection.tsx** - Как это работает (3 шага)
- **TestimonialsSection.tsx** - Отзывы пользователей
- **CTASection.tsx** - Призыв к действию

### Tours компоненты (`src/components/tours/`)

- **TourCard.tsx** - Карточка тура с 3D эффектами
- **TourSearchBar.tsx** - Поисковая строка
- **TourFilters.tsx** - Фильтры (город, категория, длительность)

### Tour Detail компоненты (`src/components/tour-detail/`)

- **AudioPlayer.tsx** - Аудиоплеер с визуализатором
- **InteractiveTourMap.tsx** - Карта маршрута с точками
- **ReviewsSection.tsx** - Секция отзывов
- **AuthorCard.tsx** - Карточка автора
- **RelatedTours.tsx** - Похожие туры

### Profile компоненты (`src/components/profile/`)

- **ProfileStats.tsx** - Статистика пользователя
- **PurchasedTours.tsx** - Купленные туры с прогрессом
- **FavoriteTours.tsx** - Избранные туры
- **Achievements.tsx** - Достижения и бейджи
- **TravelMap.tsx** - Карта путешествий

### Author компоненты (`src/components/author/`)

- **AuthorStats.tsx** - Статистика автора
- **ToursList.tsx** - Список туров автора
- **EarningsChart.tsx** - График доходов

### Common компоненты (`src/components/common/`)

- **Breadcrumbs.tsx** - Хлебные крошки
- **BackToTop.tsx** - Кнопка "Наверх"
- **LoadingSpinner.tsx** - Индикатор загрузки
- **ShareButtons.tsx** - Кнопки социальных сетей

---

## 📚 Библиотеки и утилиты

### Redux Store (`src/lib/`)

- **store.ts** - Конфигурация Redux store
- **slices/authSlice.ts** - Слайс аутентификации
- **slices/toursSlice.ts** - Слайс туров
- **slices/playerSlice.ts** - Слайс аудиоплеера
- **mockData.ts** - Моковые данные для разработки

### Types (`src/types/`)

- **index.ts** - TypeScript типы и интерфейсы

---

## 🎨 Стили

### Tailwind Config (`tailwind.config.ts`)

Кастомная конфигурация с:

- Цветовая палитра (primary-teal, accent-amber, и др.)
- Шрифты (Inter, Georgia)
- Кастомные анимации
- Градиенты

### Global CSS (`src/app/globals.css`)

- Tailwind импорты
- Глобальные стили
- CSS переменные

---

## 🔙 Backend (`backend/`)

### Сервер (`backend/src/`)

- **server.ts** - Express сервер с middleware
- **routes/** - API маршруты
  - auth.routes.ts - Аутентификация
  - tours.routes.ts - Туры
  - users.routes.ts - Пользователи
  - reviews.routes.ts - Отзывы
  - payments.routes.ts - Платежи
- **middleware/** - Middleware функции
  - errorHandler.ts - Обработка ошибок
- **db/** - База данных
  - schema.sql - SQL схема с PostGIS

---

## 📄 Конфигурационные файлы

### Frontend

- **next.config.js** - Конфигурация Next.js 14
- **tsconfig.json** - TypeScript конфигурация
- **postcss.config.js** - PostCSS конфигурация
- **.eslintrc.json** - ESLint правила
- **package.json** - Зависимости и скрипты

### Backend

- **backend/tsconfig.json** - TypeScript для backend
- **backend/package.json** - Backend зависимости

---

## 📖 Документация

- **README.md** - Основная документация
- **ARCHITECTURE.md** - Архитектура проекта
- **ANIMATIONS.md** - Руководство по анимациям
- **API.md** - API документация
- **DEPLOYMENT.md** - Инструкции по деплою
- **CONTRIBUTING.md** - Правила контрибуции
- **CHANGELOG.md** - История изменений
- **QUICKSTART.md** - Быстрый старт
- **PROJECT_STRUCTURE.md** - Этот файл

---

## 🚀 Основные функции

### Для пользователей

✅ Регистрация и авторизация
✅ Просмотр и покупка экскурсий
✅ Аудиоплеер с визуализацией
✅ Интерактивные карты маршрутов
✅ Система достижений
✅ Отзывы и рейтинги
✅ Избранное
✅ История прослушиваний
✅ Поиск и фильтрация

### Для авторов

✅ Создание экскурсий
✅ Загрузка аудио
✅ Визуальный редактор маршрутов
✅ Статистика и аналитика
✅ Отслеживание доходов
✅ Управление контентом

### Технические возможности

✅ Server-Side Rendering (SSR)
✅ Оптимизация изображений
✅ Адаптивный дизайн
✅ PWA ready
✅ TypeScript типизация
✅ Redux state management
✅ Анимации (Framer Motion)
✅ Геолокация
✅ Оффлайн режим

---

## 📱 Адаптивность

Все страницы и компоненты адаптированы для:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

---

## 🎨 Дизайн-система

### Цвета

- Primary Teal: #38B2AC
- Accent Amber: #F59E0B
- Primary Green: #22543D
- Burgundy: #742A2A
- Cream: #F7FAFC
- Raspberry: #DB2777

### Шрифты

- Основной: Inter (sans-serif)
- Акцентный: Georgia (serif)

### Анимации

- Page transitions
- Hover effects
- Loading states
- Scroll animations
- 3D transforms

---

## 🔐 Безопасность

- JWT аутентификация
- HTTPS
- CORS настройки
- Input validation
- SQL injection защита
- XSS защита
- Rate limiting

---

**Проект готов к разработке и деплою! 🚀**
