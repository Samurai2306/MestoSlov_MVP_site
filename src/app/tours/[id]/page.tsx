import { mockTours } from '@/lib/mockData'
import TourDetailClient from './TourDetailClient'

// Generate static params for all tours
export async function generateStaticParams() {
  const tours = mockTours.map(tour => ({
    id: tour.id
  }))
  
  return tours
}

export default function TourDetailPage() {
  return <TourDetailClient />
}