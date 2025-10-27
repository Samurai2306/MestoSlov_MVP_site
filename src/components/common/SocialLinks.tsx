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
      icon: 'https://drive.google.com/thumbnail?id=10HEPsP-6gPAP9Y-T7DASQ9ToDcipo9FE&sz=w1000', 
      href: 'https://vk.com/mestoslov', 
      label: 'VK',
      color: '#0077FF'
    },
    { 
      icon: 'https://drive.google.com/thumbnail?id=1-GY9rUh92U2QlVm6-b7SJ1z2GA3i7QfO&sz=w1000', 
      href: 'https://t.me/mestoslov', 
      label: 'Telegram',
      color: '#0088CC'
    },
    { 
      icon: 'https://drive.google.com/thumbnail?id=1Ct18j6EVosMJhbQZjOO71FPkbh6CIBcy&sz=w1000', 
      href: 'https://instagram.com/mestoslov', 
      label: 'Instagram',
      color: '#E4405F'
    },
    { 
      icon: 'https://drive.google.com/thumbnail?id=1zVQ0mINPnGbNJTr3HVHrGo_5pCu1vT-w&sz=w1000', 
      href: 'https://facebook.com/mestoslov', 
      label: 'Facebook',
      color: '#1877F2'
    },
    { 
      icon: 'https://drive.google.com/thumbnail?id=19RvOsHhBd_3lB_rl7IOmQKxXBHn_-9DE&sz=w1000', 
      href: 'https://github.com/mestoslov', 
      label: 'GitHub',
      color: '#333333'
    },
    { 
      icon: 'https://drive.google.com/thumbnail?id=1vOr9coAwb-e8aWRUB-8JSzYghCClLF5z&sz=w1000', 
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
