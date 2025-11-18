'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SocialLinks from '@/components/common/SocialLinks'
import toast from 'react-hot-toast'

const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа').max(50, 'Имя слишком длинное'),
  email: z.string().email('Введите корректный email адрес'),
  subject: z.string().min(1, 'Выберите тему сообщения'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов').max(1000, 'Сообщение слишком длинное'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Интеграция с API
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.')
      reset()
    } catch (error) {
      toast.error('Произошла ошибка. Пожалуйста, попробуйте снова.')
    }
  }

  const contactInfo = [
    {
      icon: 'https://drive.google.com/thumbnail?id=1vOr9coAwb-e8aWRUB-8JSzYghCClLF5z&sz=w1000',
      title: 'Email',
      value: 'hello@mestoslov.ru',
      link: 'mailto:hello@mestoslov.ru',
      ariaLabel: 'Отправить email на hello@mestoslov.ru',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
      ariaLabel: 'Позвонить по номеру +7 (495) 123-45-67',
    },
    {
      icon: 'https://drive.google.com/thumbnail?id=1-GY9rUh92U2QlVm6-b7SJ1z2GA3i7QfO&sz=w1000',
      title: 'Telegram',
      value: '@mestoslov',
      link: 'https://t.me/mestoslov',
      ariaLabel: 'Открыть Telegram канал МестоСлов',
    },
    {
      icon: 'https://drive.google.com/thumbnail?id=10HEPsP-6gPAP9Y-T7DASQ9ToDcipo9FE&sz=w1000',
      title: 'VK',
      value: 'vk.com/mestoslov',
      link: 'https://vk.com/mestoslov',
      ariaLabel: 'Открыть страницу ВКонтакте МестоСлов',
    },
    {
      icon: 'https://drive.google.com/thumbnail?id=1Ct18j6EVosMJhbQZjOO71FPkbh6CIBcy&sz=w1000',
      title: 'Instagram',
      value: '@mestoslov',
      link: 'https://instagram.com/mestoslov',
      ariaLabel: 'Открыть Instagram профиль МестоСлов',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Адрес',
      value: 'Москва, ул. Примерная, д. 123',
      link: null,
      ariaLabel: undefined,
    },
  ]

  const faqItems = [
    {
      question: 'Как стать автором экскурсий?',
      answer: 'Зарегистрируйтесь на платформе, выберите роль "Автор" и начните создавать свои маршруты через удобный конструктор.',
    },
    {
      question: 'Можно ли слушать экскурсии оффлайн?',
      answer: 'Да! После покупки экскурсии вы можете скачать все аудио и карты для оффлайн прослушивания.',
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Мы принимаем оплату банковскими картами через безопасные платежные системы ЮKassa и Stripe.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-cream to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-teal to-accent-amber bg-clip-text text-transparent">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600">
            Мы всегда рады ответить на ваши вопросы
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя <span className="text-red-500" aria-label="обязательное поле">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all ${
                    errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Иван Иванов"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500" aria-label="обязательное поле">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all ${
                    errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Тема <span className="text-red-500" aria-label="обязательное поле">*</span>
                </label>
                <select
                  id="subject"
                  {...register('subject')}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all ${
                    errors.subject ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Выберите тему</option>
                  <option value="general">Общий вопрос</option>
                  <option value="author">Вопрос об авторстве</option>
                  <option value="technical">Техническая поддержка</option>
                  <option value="partnership">Партнерство</option>
                  <option value="other">Другое</option>
                </select>
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение <span className="text-red-500" aria-label="обязательное поле">*</span>
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={6}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all resize-none ${
                    errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Расскажите нам, чем мы можем помочь..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-teal to-accent-amber text-white py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isSubmitting ? 'Отправка сообщения...' : 'Отправить сообщение'}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </motion.button>
            </form>
          </motion.div>

          {/* Контактная информация */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary-teal/5 to-accent-amber/5 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-teal shadow-md" aria-hidden="true">
                      {typeof info.icon === 'string' ? (
                        <Image
                          src={info.icon}
                          alt=""
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      ) : (
                        info.icon
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-teal hover:underline"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          aria-label={info.ariaLabel}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Часто задаваемые вопросы */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Частые вопросы</h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
              <a
                href="/faq"
                className="inline-block mt-6 text-primary-teal hover:underline font-medium"
                aria-label="Перейти к странице с часто задаваемыми вопросами"
              >
                Больше вопросов →
              </a>
            </motion.div>

            {/* Социальные сети */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-accent-amber/5 to-primary-teal/5 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Следите за нами</h2>
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
