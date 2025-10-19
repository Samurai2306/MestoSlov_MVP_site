# 🚀 Руководство по развертыванию МестоСлов

## Обзор

Это руководство описывает процесс развертывания приложения МестоСлов в production окружение.

## Стек для production

- **Frontend**: Vercel
- **Backend**: Railway / Render
- **Database**: Supabase / Neon
- **CDN**: Cloudinary
- **Monitoring**: Sentry

---

## Frontend Deployment (Vercel)

### 1. Подготовка

\`\`\`bash

# Сборка проекта

npm run build

# Проверка сборки

npm start
\`\`\`

### 2. Deploy через Vercel CLI

\`\`\`bash

# Установка CLI

npm i -g vercel

# Login

vercel login

# Deploy

vercel --prod
\`\`\`

### 3. Настройка через Web Interface

1. Зайдите на [vercel.com](https://vercel.com)
2. Import Git Repository
3. Выберите репозиторий МестоСлов
4. Configure Project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: \`npm run build\`
   - Output Directory: .next

### 4. Environment Variables

Добавьте в Vercel:
\`\`\`
NEXT_PUBLIC_API_URL=https://api.mestoslov.ru/api
NEXT_PUBLIC_MAPBOX_TOKEN=your_token
\`\`\`

### 5. Custom Domain

1. Settings → Domains
2. Добавьте домен: mestoslov.ru
3. Настройте DNS записи:
   \`\`\`
   A @ 76.76.21.21
   CNAME www cname.vercel-dns.com
   \`\`\`

---

## Backend Deployment (Railway)

### 1. Подготовка

\`\`\`bash
cd backend

# Убедитесь что TypeScript собирается

npm run build

# Проверка

node dist/server.js
\`\`\`

### 2. Railway Setup

1. Зайдите на [railway.app](https://railway.app)
2. New Project → Deploy from GitHub repo
3. Выберите репозиторий
4. Configure:
   - Root Directory: ./backend
   - Build Command: \`npm run build\`
   - Start Command: \`npm start\`

### 3. Environment Variables

\`\`\`
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
YUKASSA_SHOP_ID=...
YUKASSA_SECRET_KEY=...
CORS_ORIGIN=https://mestoslov.ru
\`\`\`

### 4. Database Connection

Railway автоматически предоставит PostgreSQL:
\`\`\`
DATABASE_URL будет автоматически добавлен
\`\`\`

Или подключите внешнюю БД:
\`\`\`
DATABASE_URL=postgresql://user:pass@host:5432/db
\`\`\`

---

## Database Setup (Supabase)

### 1. Создание проекта

1. Зайдите на [supabase.com](https://supabase.com)
2. New Project
3. Выберите регион (ближайший к пользователям)
4. Сохраните credentials

### 2. Enable PostGIS

\`\`\`sql
-- В SQL Editor
CREATE EXTENSION IF NOT EXISTS postgis;
\`\`\`

### 3. Применение схемы

\`\`\`bash

# Подключитесь к БД

psql "postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres"

# Выполните схему

\\i backend/src/db/schema.sql
\`\`\`

### 4. Backup Strategy

\`\`\`bash

# Автоматический backup через Supabase Dashboard

Settings → Database → Point-in-time Recovery

# Ручной backup

pg_dump "postgresql://..." > backup.sql
\`\`\`

---

## CDN Setup (Cloudinary)

### 1. Регистрация

1. [cloudinary.com](https://cloudinary.com)
2. Создайте аккаунт
3. Получите credentials

### 2. Настройка

\`\`\`javascript
// Upload preset
// Settings → Upload → Add upload preset
Name: mestoslov
Signing Mode: Unsigned
Folder: tours
\`\`\`

### 3. Интеграция

\`\`\`typescript
// Backend
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Upload
const result = await cloudinary.uploader.upload(file.path, {
folder: 'tours',
resource_type: 'auto',
})
\`\`\`

---

## Monitoring Setup (Sentry)

### 1. Frontend Monitoring

\`\`\`bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
\`\`\`

\`\`\`typescript
// sentry.client.config.ts
import \* as Sentry from '@sentry/nextjs'

Sentry.init({
dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
environment: process.env.NODE_ENV,
tracesSampleRate: 1.0,
})
\`\`\`

### 2. Backend Monitoring

\`\`\`typescript
// backend/src/server.ts
import \* as Sentry from '@sentry/node'

Sentry.init({
dsn: process.env.SENTRY_DSN,
environment: process.env.NODE_ENV,
})

// Error handler
app.use(Sentry.Handlers.errorHandler())
\`\`\`

---

## CI/CD Pipeline

### GitHub Actions

\`\`\`yaml

# .github/workflows/deploy.yml

name: Deploy

on:
push:
branches: [main]

jobs:
frontend:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v2 - name: Install dependencies
run: npm install - name: Run tests
run: npm test - name: Build
run: npm run build - name: Deploy to Vercel
run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}

backend:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v2 - name: Deploy to Railway
run: railway up
\`\`\`

---

## SSL/TLS

### Frontend (Vercel)

Vercel автоматически предоставляет SSL сертификат.

### Backend (Railway)

Railway также предоставляет автоматический SSL.

### Custom Domain

Если используете собственный домен, добавьте:
\`\`\`

# Let's Encrypt

certbot --nginx -d api.mestoslov.ru
\`\`\`

---

## Performance Optimization

### 1. Caching Strategy

\`\`\`typescript
// Frontend - next.config.js
module.exports = {
async headers() {
return [
{
source: '/static/:path\*',
headers: [
{
key: 'Cache-Control',
value: 'public, max-age=31536000, immutable',
},
],
},
]
},
}
\`\`\`

### 2. Image Optimization

\`\`\`typescript
// Use Next.js Image
<Image
src={tour.image}
width={600}
height={400}
placeholder="blur"
priority={index < 3}
/>
\`\`\`

### 3. Database Indexes

Убедитесь что все индексы созданы (см. schema.sql)

---

## Security Checklist

- [ ] HTTPS включен везде
- [ ] Environment variables защищены
- [ ] Rate limiting настроен
- [ ] CORS правильно настроен
- [ ] SQL injection защита (параметризованные запросы)
- [ ] XSS защита
- [ ] CSRF токены для форм
- [ ] Helmet.js настроен
- [ ] Secrets не в git
- [ ] Database backups настроены

---

## Post-Deployment

### 1. Health Checks

\`\`\`bash

# Frontend

curl https://mestoslov.ru

# Backend

curl https://api.mestoslov.ru/health
\`\`\`

### 2. Monitoring

Проверьте дашборды:

- Vercel Analytics
- Sentry Issues
- Database Performance (Supabase)

### 3. Load Testing

\`\`\`bash

# Apache Bench

ab -n 1000 -c 10 https://api.mestoslov.ru/api/tours

# Artillery

artillery quick --count 100 --num 10 https://mestoslov.ru
\`\`\`

---

## Rollback Strategy

### Frontend

\`\`\`bash

# Vercel - через dashboard

Deployments → Previous deployment → Promote to Production
\`\`\`

### Backend

\`\`\`bash

# Railway

railway rollback
\`\`\`

### Database

\`\`\`bash

# Restore from backup

psql "DATABASE_URL" < backup.sql
\`\`\`

---

## Scaling

### Horizontal Scaling

- Vercel автоматически масштабирует frontend
- Railway: увеличьте количество instances

### Database Scaling

- Supabase: обновите план
- Connection pooling через PgBouncer

### Caching Layer

Добавьте Redis:
\`\`\`bash

# Railway

railway add redis
\`\`\`

---

## Support & Maintenance

### Regular Tasks

- [ ] Еженедельные database backups
- [ ] Мониторинг error logs
- [ ] Performance metrics review
- [ ] Security updates
- [ ] Dependency updates

### Emergency Contacts

- DevOps: devops@mestoslov.ru
- Support: support@mestoslov.ru

---

Deployment checklist completed! 🎉

