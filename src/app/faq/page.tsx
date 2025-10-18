'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqCategories = [
    {
      category: 'Общие вопросы',
      icon: '❓',
      questions: [
        {
          q: 'Что такое МестоСлов?',
          a: 'МестоСлов — это платформа аудиоэкскурсий с геолокацией, которая позволяет путешественникам открывать города через личные рассказы местных жителей. Мы объединяем авторов и путешественников для создания уникального опыта познания России.',
        },
        {
          q: 'Как работает платформа?',
          a: 'Вы выбираете интересующую экскурсию, покупаете доступ к ней и начинаете путешествие. Приложение автоматически определяет вашу геолокацию и воспроизводит соответствующие аудио-рассказы, когда вы приближаетесь к точкам интереса.',
        },
        {
          q: 'Можно ли пользоваться без интернета?',
          a: 'Да! После покупки экскурсии вы можете скачать все аудиофайлы и офлайн-карты. Это позволит вам наслаждаться экскурсией даже без подключения к интернету.',
        },
      ],
    },
    {
      category: 'Для путешественников',
      icon: '🎒',
      questions: [
        {
          q: 'Сколько стоят экскурсии?',
          a: 'Цены варьируются от 199 до 999 рублей в зависимости от длительности и сложности маршрута. У нас также есть бесплатные демо-экскурсии для знакомства с платформой.',
        },
        {
          q: 'Как купить экскурсию?',
          a: 'Зарегистрируйтесь на платформе, выберите интересующую экскурсию и нажмите "Купить". Оплата принимается банковскими картами через безопасные платежные системы ЮKassa и Stripe.',
        },
        {
          q: 'Можно ли вернуть деньги?',
          a: 'Да, в течение 14 дней с момента покупки вы можете запросить возврат средств, если не начали прослушивание экскурсии. Для возврата свяжитесь с нашей службой поддержки.',
        },
        {
          q: 'Есть ли скидки?',
          a: 'Мы регулярно проводим акции и предоставляем скидки при покупке нескольких экскурсий. Подпишитесь на нашу рассылку, чтобы быть в курсе специальных предложений.',
        },
      ],
    },
    {
      category: 'Для авторов',
      icon: '🎤',
      questions: [
        {
          q: 'Как стать автором экскурсий?',
          a: 'Зарегистрируйтесь на платформе, выберите роль "Автор" и пройдите простую верификацию. После этого вы получите доступ к конструктору маршрутов и сможете создавать свои экскурсии.',
        },
        {
          q: 'Сколько я буду зарабатывать?',
          a: 'Вы получаете 70% от стоимости каждой проданной экскурсии. Платформа удерживает 30% на обслуживание, хостинг и продвижение. Вы самостоятельно устанавливаете цену на свои экскурсии.',
        },
        {
          q: 'Какие требования к аудио?',
          a: 'Аудио должно быть в формате MP3, качество не ниже 128 kbps. Рекомендуется использовать внешний микрофон для записи. Мы предоставляем рекомендации по созданию качественного контента.',
        },
        {
          q: 'Как часто происходят выплаты?',
          a: 'Выплаты производятся дважды в месяц: 5-го и 20-го числа. Минимальная сумма для вывода — 1000 рублей. Вы можете отслеживать свои доходы в реальном времени в личном кабинете.',
        },
        {
          q: 'Нужна ли лицензия гида?',
          a: 'Нет, для создания аудиоэкскурсий на нашей платформе лицензия экскурсовода не требуется. Однако мы рекомендуем тщательно проверять факты и информацию.',
        },
      ],
    },
    {
      category: 'Технические вопросы',
      icon: '⚙️',
      questions: [
        {
          q: 'На каких устройствах работает?',
          a: 'МестоСлов доступен как веб-приложение, работающее на любых устройствах с современным браузером. Также у нас есть PWA-версия для установки на смартфоны.',
        },
        {
          q: 'Какая точность геолокации?',
          a: 'Мы используем GPS и ГЛОНАСС для определения местоположения с точностью до 5-10 метров. Для корректной работы убедитесь, что геолокация включена в настройках вашего устройства.',
        },
        {
          q: 'Не работает воспроизведение аудио',
          a: 'Проверьте подключение к интернету (если не скачали экскурсию), убедитесь, что звук не выключен на устройстве, попробуйте перезапустить приложение. Если проблема сохраняется, обратитесь в поддержку.',
        },
        {
          q: 'Как обновить приложение?',
          a: 'Веб-версия обновляется автоматически. Для PWA-версии обновления также происходят автоматически при следующем запуске.',
        },
      ],
    },
    {
      category: 'Безопасность и конфиденциальность',
      icon: '🔒',
      questions: [
        {
          q: 'Безопасна ли оплата?',
          a: 'Да, мы используем надежные платежные системы ЮKassa и Stripe с поддержкой 3D Secure. Мы не храним данные ваших платежных карт на наших серверах.',
        },
        {
          q: 'Как вы используете мои данные?',
          a: 'Мы собираем только необходимые данные для работы сервиса и не передаем их третьим лицам. Подробнее в нашей <a href="/privacy" class="text-primary-teal hover:underline">Политике конфиденциальности</a>.',
        },
        {
          q: 'Могу ли я удалить аккаунт?',
          a: 'Да, вы можете удалить свой аккаунт в любое время через настройки профиля. При этом будут удалены все ваши персональные данные.',
        },
      ],
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
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-gray-600">
            Найдите ответы на популярные вопросы
          </p>
        </motion.div>

        {/* Поиск */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск по вопросам..."
              className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-2xl focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 transition-all"
            />
            <svg
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* FAQ по категориям */}
        {faqCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            className="mb-8"
          >
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-teal/10 to-accent-amber/10 px-8 py-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  {category.category}
                </h2>
              </div>

              <div className="p-2">
                {category.questions.map((item, index) => {
                  const globalIndex = categoryIndex * 100 + index
                  const isOpen = openIndex === globalIndex

                  return (
                    <div key={index} className="border-b border-gray-100 last:border-0">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="font-medium text-gray-900 pr-8">{item.q}</span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-6 h-6 text-primary-teal flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div
                              className="px-6 pb-5 text-gray-600 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item.a }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-teal/10 to-accent-amber/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Не нашли ответ?</h2>
          <p className="text-gray-600 mb-8">
            Свяжитесь с нами, и мы с радостью ответим на ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Связаться с нами
            </motion.a>
            <motion.a
              href="mailto:support@mestoslov.ru"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-teal text-primary-teal rounded-xl font-medium hover:bg-primary-teal hover:text-white transition-all"
            >
              Написать в поддержку
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

