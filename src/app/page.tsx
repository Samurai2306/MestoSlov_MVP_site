'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ToursWaveSection from '@/components/home/ToursWaveSection'
import InteractiveMapSection from '@/components/home/InteractiveMapSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <FeaturesSection />
      <ToursWaveSection />
      <InteractiveMapSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}


