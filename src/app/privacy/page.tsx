'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Какую информацию мы собираем',
      content: `
        <p>Мы собираем следующие типы информации:</p>
        <ul>
          <li><strong>Личные данные:</strong> имя, email, телефон при регистрации</li>
          <li><strong>Геолокационные данные:</strong> для работы функции аудиоэкскурсий</li>
          <li><strong>Данные об использовании:</strong> история прослушивания, избранные экскурсии</li>
          <li><strong>Технические данные:</strong> IP-адрес, тип устройства, браузер</li>
          <li><strong>Платежные данные:</strong> обрабатываются через защищенные платежные системы</li>
        </ul>
      `,
    },
    {
      title: '2. Как мы используем вашу информацию',
      content: `
        <p>Ваши данные используются для:</p>
        <ul>
          <li>Предоставления доступа к платформе и её функциям</li>
          <li>Персонализации рекомендаций экскурсий</li>
          <li>Обработки платежей и транзакций</li>
          <li>Связи с вами по вопросам сервиса</li>
          <li>Улучшения качества услуг</li>
          <li>Выполнения юридических обязательств</li>
        </ul>
      `,
    },
    {
      title: '3. Геолокационные данные',
      content: `
        <p>Мы используем данные о вашем местоположении для:</p>
        <ul>
          <li>Автоматического воспроизведения аудио при приближении к точкам интереса</li>
          <li>Отображения вашего местоположения на карте маршрута</li>
          <li>Предоставления рекомендаций поблизости</li>
        </ul>
        <p>Вы можете отключить доступ к геолокации в настройках устройства, но это ограничит функциональность приложения.</p>
      `,
    },
    {
      title: '4. Передача данных третьим лицам',
      content: `
        <p>Мы не продаем ваши личные данные. Передача возможна только:</p>
        <ul>
          <li><strong>Платежным системам:</strong> для обработки платежей (ЮKassa, Stripe)</li>
          <li><strong>Сервисам аналитики:</strong> для улучшения сервиса (анонимизированные данные)</li>
          <li><strong>Облачным хранилищам:</strong> для хранения контента (Cloudinary)</li>
          <li><strong>По требованию закона:</strong> при наличии законных оснований</li>
        </ul>
      `,
    },
    {
      title: '5. Безопасность данных',
      content: `
        <p>Мы применяем следующие меры безопасности:</p>
        <ul>
          <li>Шифрование данных при передаче (SSL/TLS)</li>
          <li>Безопасное хранение паролей (хеширование)</li>
          <li>Регулярные аудиты безопасности</li>
          <li>Ограничение доступа к данным</li>
          <li>Резервное копирование</li>
        </ul>
      `,
    },
    {
      title: '6. Ваши права',
      content: `
        <p>В соответствии с законодательством вы имеете право:</p>
        <ul>
          <li><strong>Доступ:</strong> запросить копию ваших данных</li>
          <li><strong>Исправление:</strong> исправить неточные данные</li>
          <li><strong>Удаление:</strong> запросить удаление ваших данных</li>
          <li><strong>Отзыв согласия:</strong> отозвать согласие на обработку</li>
          <li><strong>Экспорт данных:</strong> получить данные в машиночитаемом формате</li>
          <li><strong>Ограничение обработки:</strong> ограничить способы использования данных</li>
        </ul>
        <p>Для реализации ваших прав обратитесь по адресу: <a href="mailto:privacy@mestoslov.ru" class="text-primary-teal hover:underline">privacy@mestoslov.ru</a></p>
      `,
    },
    {
      title: '7. Cookies и аналогичные технологии',
      content: `
        <p>Мы используем cookies для:</p>
        <ul>
          <li>Сохранения ваших предпочтений</li>
          <li>Аналитики использования сайта</li>
          <li>Улучшения функциональности</li>
        </ul>
        <p>Вы можете управлять cookies в настройках браузера. Отключение может ограничить функциональность сайта.</p>
      `,
    },
    {
      title: '8. Хранение данных',
      content: `
        <p>Мы храним ваши данные:</p>
        <ul>
          <li>Пока вы используете наш сервис</li>
          <li>В течение периода, требуемого законом</li>
          <li>До момента запроса на удаление</li>
        </ul>
        <p>После удаления аккаунта данные удаляются в течение 30 дней, за исключением данных, которые мы обязаны хранить по закону.</p>
      `,
    },
    {
      title: '9. Дети',
      content: `
        <p>Наш сервис предназначен для лиц старше 18 лет. Мы сознательно не собираем данные детей младше 18 лет без согласия родителей.</p>
      `,
    },
    {
      title: '10. Изменения в политике',
      content: `
        <p>Мы можем обновлять эту политику. При значительных изменениях мы уведомим вас по email или через уведомление на сайте.</p>
        <p>Последнее обновление: 18 октября 2024</p>
      `,
    },
    {
      title: '11. Контакты',
      content: `
        <p>По вопросам конфиденциальности обращайтесь:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@mestoslov.ru" class="text-primary-teal hover:underline">privacy@mestoslov.ru</a></li>
          <li>Почтовый адрес: Москва, ул. Примерная, д. 123</li>
          <li>Телефон: +7 (495) 123-45-67</li>
        </ul>
      `,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
            Политика конфиденциальности
          </h1>
          <p className="text-xl text-gray-600">
            Мы заботимся о защите ваших персональных данных
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Последнее обновление: 18 октября 2024
          </p>
        </motion.div>

        {/* Содержание */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
        >
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Настоящая Политика конфиденциальности описывает, как МестоСлов собирает, использует и защищает вашу персональную информацию при использовании нашего сервиса.
            </p>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{section.title}</h2>
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </motion.div>
            ))}

            <div className="mt-12 p-6 bg-primary-teal/5 rounded-2xl border border-primary-teal/20">
              <h3 className="text-xl font-bold mb-3">📧 Остались вопросы?</h3>
              <p>
                Если у вас есть вопросы по поводу этой политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу{' '}
                <a href="mailto:privacy@mestoslov.ru" className="text-primary-teal hover:underline font-medium">
                  privacy@mestoslov.ru
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Дополнительные ссылки */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center text-sm"
        >
          <a href="/terms" className="text-primary-teal hover:underline">
            Условия использования
          </a>
          <span className="text-gray-400">•</span>
          <a href="/contact" className="text-primary-teal hover:underline">
            Связаться с нами
          </a>
          <span className="text-gray-400">•</span>
          <a href="/faq" className="text-primary-teal hover:underline">
            FAQ
          </a>
        </motion.div>
      </div>
    </div>
  )
}


