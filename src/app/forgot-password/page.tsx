'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: Интеграция с API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSuccess(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-cream via-white to-primary-teal/10 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Icon */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-teal to-accent-amber rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {isSuccess ? 'Проверьте почту' : 'Забыли пароль?'}
          </h2>
          <p className="text-gray-600">
            {isSuccess
              ? 'Мы отправили вам письмо с инструкциями по восстановлению пароля'
              : 'Введите ваш email, и мы отправим инструкции'}
          </p>
        </div>

        {/* Form / Success Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          {isSuccess ? (
            <div className="text-center">
              <div className="text-6xl mb-4">✉️</div>
              <p className="text-gray-600 mb-6">
                Письмо отправлено на <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Не получили письмо? Проверьте папку "Спам" или попробуйте снова
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsSuccess(false)
                    setEmail('')
                  }}
                  className="w-full px-6 py-3 border-2 border-primary-teal text-primary-teal rounded-xl font-medium hover:bg-primary-teal hover:text-white transition-all"
                >
                  Отправить снова
                </button>
                <Link
                  href="/login"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-primary-teal to-accent-amber text-white rounded-xl font-medium text-center hover:shadow-lg transition-all"
                >
                  Вернуться к входу
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email адрес
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-teal to-accent-amber text-white py-3 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Отправка...' : 'Восстановить пароль'}
              </motion.button>

              <div className="text-center">
                <Link
                  href="/login"
                  className="text-sm text-primary-teal hover:underline"
                >
                  ← Вернуться к входу
                </Link>
              </div>
            </form>
          )}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-600"
        >
          <p>
            Нужна помощь?{' '}
            <Link href="/contact" className="text-primary-teal hover:underline">
              Свяжитесь с поддержкой
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

