import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://samurai2306.github.io/MestoSlov_MVP_site'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/how-it-works',
    '/tours',
    '/blog',
    '/login',
    '/register',
    '/privacy',
    '/terms',
    '/search',
  ]

  // Generate tour pages (assuming we have tours with IDs 1-20)
  const tourPages = Array.from({ length: 20 }, (_, i) => ({
    url: `${baseUrl}/tours/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate blog pages (assuming we have blog posts with IDs 1-10)
  const blogPages = Array.from({ length: 10 }, (_, i) => ({
    url: `${baseUrl}/blog/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : 0.8,
  }))

  return [...staticPages, ...tourPages, ...blogPages]
}

