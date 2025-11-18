'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ToursWaveSection from '@/components/home/ToursWaveSection'
import InteractiveMapSection from '@/components/home/InteractiveMapSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'
import LoadingSpinner from '@/components/common/LoadingSpinner'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <FeaturesSection />
      <Suspense fallback={<div className="py-24 flex justify-center"><LoadingSpinner /></div>}>
        <ToursWaveSection />
      </Suspense>
      <Suspense fallback={<div className="py-24 flex justify-center"><LoadingSpinner /></div>}>
        <InteractiveMapSection />
      </Suspense>
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}


