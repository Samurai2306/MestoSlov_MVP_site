# ⚡ Быстрый деплой на GitHub Pages

## 🚀 За 5 минут до живого сайта

### 1️⃣ **Создайте репозиторий на GitHub**

- Идите на [github.com](https://github.com) → **New repository**
- Название: `mestoslov-site` (или любое)
- Выберите **Public** ✅
- **НЕ** добавляйте README ❌

### 2️⃣ **Загрузите код**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/mestoslov-site.git
git branch -M main
git push -u origin main
```

### 3️⃣ **Включите GitHub Pages**

- Settings → Pages → Source: **"GitHub Actions"** ✅
- Сохраните

### 4️⃣ **Готово! 🎉**

- Сайт будет доступен через 2-3 минуты
- Адрес: `https://YOUR_USERNAME.github.io/mestoslov-site`

## 🔄 **Обновления**

```bash
git add .
git commit -m "Update"
git push origin main
```

**Автоматически задеплоится!** ⚡

## 📱 **Что получите:**

- ✅ Живой сайт на GitHub Pages
- ✅ Автоматический деплой
- ✅ HTTPS сертификат
- ✅ Мобильная версия
- ✅ Бесплатный хостинг

**Время деплоя: ~5 минут** ⏱️
