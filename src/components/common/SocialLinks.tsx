'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface SocialLinksProps {
  className?: string
}

const SocialLinks = ({ 
  className = ''
}: SocialLinksProps) => {
  const socialLinks = [
    { 
      icon: '/assets/imgAndLogo/icons8-vk.svg', 
      href: 'https://vk.com/mestoslov', 
      label: 'VK',
      color: '#0077FF'
    },
    { 
      icon: '/assets/imgAndLogo/icons8-телеграм.svg', 
      href: 'https://t.me/mestoslov', 
      label: 'Telegram',
      color: '#0088CC'
    },
    { 
      icon: '/assets/imgAndLogo/icons8-instagram.svg', 
      href: 'https://instagram.com/mestoslov', 
      label: 'Instagram',
      color: '#E4405F'
    },
    { 
      icon: '/assets/imgAndLogo/icons8-facebook.svg', 
      href: 'https://facebook.com/mestoslov', 
      label: 'Facebook',
      color: '#1877F2'
    },
    { 
      icon: '/assets/imgAndLogo/icons8-github.svg', 
      href: 'https://github.com/mestoslov', 
      label: 'GitHub',
      color: '#333333'
    },
    { 
      icon: '/assets/imgAndLogo/icons8-gmail.svg', 
      href: 'mailto:hello@mestoslov.ru', 
      label: 'Email',
      color: '#EA4335'
    },
  ]


  return (
    <div className={`flex space-x-3 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 flex items-center justify-center"
          aria-label={social.label}
        >
          <Image
            src={social.icon}
            alt={social.label}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
