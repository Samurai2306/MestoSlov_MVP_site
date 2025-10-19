# ⚡ Быстрый старт МестоСлов

## 🚀 Запуск за 5 минут

### Шаг 1: Клонирование

```bash
git clone <repository-url>
cd MestoSlov_MVP_site
```

### Шаг 2: Установка зависимостей

#### Frontend

```bash
npm install
```

#### Backend

```bash
cd backend
npm install
cd ..
```

### Шаг 3: Переменные окружения

#### Frontend: `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here
```

#### Backend: `backend/.env`

```env
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mestoslov
DB_USER=postgres
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d

# Cloudinary (опционально)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ЮKassa (опционально)
YUKASSA_SHOP_ID=your_shop_id
YUKASSA_SECRET_KEY=your_secret_key

# CORS
CORS_ORIGIN=http://localhost:3000
```

### Шаг 4: База данных

```bash
# Создать БД
createdb mestoslov

# Применить схему
psql -d mestoslov -f backend/src/db/schema.sql
```

### Шаг 5: Запуск

#### Вариант 1: Параллельный запуск

```bash
npm run dev:all
```

#### Вариант 2: Раздельный запуск

В первом терминале (Frontend):

```bash
npm run dev
```

Во втором терминале (Backend):

```bash
npm run backend
```

### Шаг 6: Открыть в браузере

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health check: http://localhost:5000/health

---

## 🎯 Основные команды

### Development

```bash
npm run dev              # Frontend dev server
npm run backend          # Backend dev server
npm run dev:all          # Оба сервера параллельно
```

### Build

```bash
npm run build            # Frontend build
npm run build:backend    # Backend build
```

### Production

```bash
npm start                # Frontend production
npm run start:backend    # Backend production
```

### Linting

```bash
npm run lint             # Проверка кода
npm run lint:fix         # Автофикс
```

---

## 📋 Доступные страницы

После запуска вы можете открыть:

### Основные

- http://localhost:3000/ - Главная
- http://localhost:3000/tours - Каталог экскурсий
- http://localhost:3000/blog - Блог

### Информационные

- http://localhost:3000/about - О нас
- http://localhost:3000/contact - Контакты
- http://localhost:3000/faq - FAQ
- http://localhost:3000/how-it-works - Как это работает

### Аутентификация

- http://localhost:3000/login - Вход
- http://localhost:3000/register - Регистрация

### Кабинеты

- http://localhost:3000/profile - Профиль
- http://localhost:3000/author - Кабинет автора

---

## 🛠️ Troubleshooting

### Проблема: Порт уже занят

```bash
# Найти процесс
lsof -i :3000  # для frontend
lsof -i :5000  # для backend

# Убить процесс
kill -9 <PID>
```

### Проблема: База данных не подключается

```bash
# Проверить статус PostgreSQL
psql --version
pg_isready

# Перезапустить PostgreSQL
# macOS
brew services restart postgresql

# Linux
sudo systemctl restart postgresql
```

### Проблема: Ошибки TypeScript

```bash
# Очистить кеш
rm -rf .next
rm -rf node_modules
npm install
```

---

## 📚 Следующие шаги

1. ✅ Проект запущен
2. 📖 Изучите [ARCHITECTURE.md](./ARCHITECTURE.md)
3. 🎨 Посмотрите [ANIMATIONS.md](./ANIMATIONS.md)
4. 🔌 Ознакомьтесь с [API.md](./API.md)
5. 🚀 Начните разработку!

---

## 💡 Полезные ссылки

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

**Готово! Приятной разработки! 🎉**
