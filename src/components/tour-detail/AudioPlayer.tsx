'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, Pause, SkipForward, SkipBack, 
  Volume2, VolumeX, List, Maximize2 
} from 'lucide-react'
import { Tour } from '@/types'

interface AudioPlayerProps {
  tour: Tour
}

const AudioPlayer = ({ tour }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // demo duration
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showPlaylist, setShowPlaylist] = useState(false)

  // Audio visualization
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, duration])

  // Audio Visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const bars = 40
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const barWidth = canvas.width / bars
      for (let i = 0; i < bars; i++) {
        const height = isPlaying 
          ? Math.random() * canvas.height * 0.8 + canvas.height * 0.1
          : canvas.height * 0.1
        
        const x = i * barWidth
        const y = (canvas.height - height) / 2
        
        const gradient = ctx.createLinearGradient(0, y, 0, y + height)
        gradient.addColorStop(0, '#38B2AC')
        gradient.addColorStop(1, '#F59E0B')
        
        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth - 2, height)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value))
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Предпросмотр аудио</h3>
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowPlaylist(!showPlaylist)}
            className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            <List className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            <Maximize2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Audio Visualizer */}
      <div className="mb-6 bg-black/30 rounded-xl overflow-hidden">
        <canvas
          ref={canvasRef}
          width={800}
          height={120}
          className="w-full h-32"
        />
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-teal"
          style={{
            background: `linear-gradient(to right, #38B2AC 0%, #38B2AC ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%, #374151 100%)`
          }}
        />
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <SkipBack className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayPause}
            className="p-6 bg-gradient-to-br from-primary-teal to-accent-amber rounded-full text-white shadow-glow"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <SkipForward className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMuted(!isMuted)}
            className="text-white"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-teal"
          />
        </div>
      </div>

      {/* Playlist */}
      <AnimatePresence>
        {showPlaylist && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-gray-700"
          >
            <h4 className="text-white font-bold mb-4">Точки маршрута</h4>
            <div className="space-y-2">
              {[
                { title: 'Введение', duration: '2:30' },
                { title: 'Главная площадь', duration: '5:45' },
                { title: 'Исторический центр', duration: '7:20' },
                { title: 'Набережная', duration: '4:15' },
                { title: 'Финал', duration: '1:30' },
              ].map((point, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 4 }}
                  className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-primary-teal font-bold">#{index + 1}</span>
                    <span className="text-white">{point.title}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{point.duration}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AudioPlayer

