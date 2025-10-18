'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Search, MapPin, BookOpen, Headphones } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/tours', label: 'Экскурсии', icon: <MapPin className="w-4 h-4" /> },
    { href: '/blog', label: 'Блог', icon: <BookOpen className="w-4 h-4" /> },
    { href: '/about', label: 'О нас', icon: <User className="w-4 h-4" /> },
    { href: '/contact', label: 'Контакты', icon: <Headphones className="w-4 h-4" /> },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-sunset rounded-full flex items-center justify-center"
            >
              <Headphones className="w-5 h-5 text-white" />
            </motion.div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary-green' : 'text-white'
            }`}>
              МестоСлов
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-2 font-medium transition-colors hover:text-primary-teal ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
            >
              <Search className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </motion.button>

            {isAuthenticated ? (
              <Link href="/profile">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-teal text-white"
                >
                  <User className="w-4 h-4" />
                  <span>{user?.name}</span>
                </motion.div>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    Войти
                  </motion.button>
                </Link>
                <Link href="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full bg-gradient-sunset text-white font-medium shadow-lg"
                  >
                    Начать
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                {!isAuthenticated && (
                  <>
                    <Link href="/login" className="block">
                      <button className="w-full px-4 py-3 rounded-lg bg-gray-100 font-medium">
                        Войти
                      </button>
                    </Link>
                    <Link href="/register" className="block">
                      <button className="w-full px-4 py-3 rounded-lg bg-gradient-sunset text-white font-medium">
                        Начать
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation

