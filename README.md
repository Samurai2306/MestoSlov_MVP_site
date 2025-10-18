# 🎧 МестоСлов - Платформа аудиоэкскурсий

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue) ![License](https://img.shields.io/badge/license-MIT-green)

Аутентичные путешествия по России через аудиорассказы местных жителей.

## 🚀 Быстрый старт

```bash
# 1. Установка
npm install
cd backend && npm install && cd ..

# 2. Env файлы
cp .env.example .env.local
cp backend/.env.example backend/.env

# 3. База данных
createdb mestoslov
psql -d mestoslov -f backend/src/db/schema.sql

# 4. Запуск
npm run dev:all
```

Откройте http://localhost:3000

## 📱 Основные возможности

### Для пользователей

- 🗺️ Геолокация в реальном времени
- 📱 Оффлайн режим
- 🎯 Персонализация
- 🏆 Система достижений

### Для авторов

- 💰 Монетизация (70% от продаж)
- 🎨 Конструктор маршрутов
- 📊 Аналитика в реальном времени
- 🎤 Загрузка аудио

## 🛠 Технологии

**Frontend:** Next.js 14, React 18, TypeScript, Redux, Framer Motion, Tailwind CSS
**Backend:** Node.js, Express, TypeScript, PostgreSQL + PostGIS
**Доп:** Leaflet, Howler.js, Cloudinary, ЮKassa

## 📁 Структура

```
MestoSlov_MVP_site/
├── src/
│   ├── app/           # 17 страниц
│   ├── components/    # 30+ компонентов
│   ├── lib/           # Redux store
│   └── types/         # TypeScript
├── backend/
│   └── src/           # Express API
└── [docs]/            # Документация
```

## 📖 Документация

- [QUICKSTART.md](./QUICKSTART.md) - Быстрый старт
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Структура
- [SITE_MAP.md](./SITE_MAP.md) - Карта сайта
- [API.md](./API.md) - API docs
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Деплой

## 🎨 Страницы

**Основные:** Главная, Каталог, Детальная, Блог  
**Инфо:** О нас, Контакты, FAQ, Как это работает  
**Auth:** Вход, Регистрация, Восстановление  
**Кабинеты:** Профиль, Автор  
**Юрид:** Privacy, Terms

## 🔧 Команды

```bash
npm run dev           # Frontend dev
npm run backend       # Backend dev
npm run dev:all       # Оба сервера
npm run build         # Build
npm run lint          # Lint check
```

## 📞 Поддержка

- 📧 Email: support@mestoslov.ru
- 💬 Telegram: @mestoslov_support
- 🐛 [Issues](https://github.com/yourusername/mestoslov-mvp-site/issues)

## 📄 Лицензия

MIT License - см. [LICENSE](LICENSE)

---

**Сделано с ❤️ в России**
