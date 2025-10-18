'use client'

import { motion } from 'framer-motion'

interface ShareButtonsProps {
  url: string
  title: string
  description?: string
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const shareLinks = [
    {
      name: 'VK',
      icon: '🔵',
      url: `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'hover:bg-blue-500',
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      color: 'hover:bg-green-600',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'hover:bg-blue-400',
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    alert('Ссылка скопирована!')
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Поделиться:</span>
      <div className="flex gap-2">
        {shareLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors ${social.color} hover:text-white`}
            title={`Поделиться в ${social.name}`}
          >
            <span>{social.icon}</span>
          </motion.a>
        ))}
        <motion.button
          onClick={copyToClipboard}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          title="Скопировать ссылку"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}

