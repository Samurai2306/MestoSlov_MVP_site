# 🤝 Руководство по внесению вклада в МестоСлов

Спасибо за интерес к развитию проекта МестоСлов! Мы приветствуем вклад от сообщества.

## Как внести вклад

### 1. Fork репозитория

Нажмите кнопку "Fork" в правом верхнем углу страницы GitHub.

### 2. Клонируйте свой fork

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/mestoslov-mvp-site.git
cd mestoslov-mvp-site
\`\`\`

### 3. Создайте ветку для новой функции

\`\`\`bash
git checkout -b feature/amazing-feature
\`\`\`

Именование веток:

- \`feature/\` - новая функциональность
- \`fix/\` - исправление бага
- \`docs/\` - изменения в документации
- \`refactor/\` - рефакторинг кода
- \`test/\` - добавление тестов

### 4. Внесите изменения

Следуйте стайл-гайду проекта:

#### TypeScript/JavaScript

- Используйте TypeScript
- ESLint должен проходить без ошибок
- Именуйте переменные понятно (camelCase)
- Добавляйте JSDoc комментарии для функций

#### React Components

- Функциональные компоненты с hooks
- Props типизированы через interface
- Используйте memo для оптимизации

#### CSS/Tailwind

- Используйте Tailwind utility classes
- Кастомные классы в globals.css
- Следуйте дизайн-системе

### 5. Commit изменений

\`\`\`bash
git add .
git commit -m "feat: добавлена новая функция"
\`\`\`

Формат commit messages (Conventional Commits):

- \`feat:\` - новая функция
- \`fix:\` - исправление бага
- \`docs:\` - изменения в документации
- \`style:\` - форматирование кода
- \`refactor:\` - рефакторинг
- \`test:\` - добавление тестов
- \`chore:\` - обновление зависимостей

### 6. Push в ваш fork

\`\`\`bash
git push origin feature/amazing-feature
\`\`\`

### 7. Создайте Pull Request

1. Перейдите в свой fork на GitHub
2. Нажмите "New Pull Request"
3. Выберите вашу ветку
4. Заполните описание PR:
   - Что было сделано
   - Почему это нужно
   - Как тестировали
   - Screenshots (если UI изменения)

## Code Review Process

1. Maintainer рассмотрит ваш PR
2. Могут быть запрошены изменения
3. После одобрения PR будет смержен
4. Ваш вклад появится в списке contributors!

## Что можно улучшить

### Приоритетные задачи

- [ ] Добавление тестов (Jest, React Testing Library)
- [ ] Улучшение accessibility (ARIA labels, keyboard navigation)
- [ ] Оптимизация производительности
- [ ] Новые анимации
- [ ] Переводы (i18n)

### Баги

Проверьте [Issues](https://github.com/yourusername/mestoslov-mvp-site/issues) с меткой "bug"

### Новые функции

Сначала создайте Issue с описанием предложения

## Стандарты кода

### Проверка перед commit

\`\`\`bash

# Lint

npm run lint

# Type check

npx tsc --noEmit

# Format

npx prettier --write .
\`\`\`

### Pre-commit hooks (recommended)

\`\`\`bash
npm install -D husky lint-staged
npx husky install
\`\`\`

\`\`\`json
// package.json
{
"lint-staged": {
"_.{ts,tsx}": ["eslint --fix", "prettier --write"],
"_.{css,md}": ["prettier --write"]
}
}
\`\`\`

## Тестирование

### Unit Tests

\`\`\`bash
npm test
\`\`\`

### E2E Tests

\`\`\`bash
npm run test:e2e
\`\`\`

### Manual Testing

1. Проверьте функциональность в браузере
2. Тестируйте на разных размерах экрана
3. Проверьте консоль на ошибки

## Документация

Если вы добавляете новую функцию:

1. Обновите README.md
2. Добавьте JSDoc комментарии
3. Обновите API.md (если API изменения)
4. Добавьте примеры использования

## Вопросы?

- 💬 Telegram: @mestoslov_dev
- 📧 Email: dev@mestoslov.ru
- 🐛 GitHub Issues

## Кодекс поведения

- Будьте уважительны к другим участникам
- Конструктивная критика приветствуется
- Помогайте новичкам
- Следуйте стандартам сообщества

## Лицензия

Внося вклад, вы соглашаетесь с тем, что ваш код будет лицензирован под MIT License.

---

Спасибо за вклад в МестоСлов! 🎉
