import type { Metadata } from 'next'

const siteUrl = 'https://samurai2306.github.io/MestoSlov_MVP_site'
const siteName = 'МестоСлов'
const defaultDescription = 'Откройте для себя уникальные места России через личные истории местных жителей. Аудиоэкскурсии с геолокацией для самостоятельных путешествий.'

export interface PageMetadata {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function generateMetadata({
  title,
  description = defaultDescription,
  keywords,
  image = `${siteUrl}/assets/imgAndLogo/1.jpg`,
  type = 'website',
  noindex = false,
}: PageMetadata = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Аутентичная Россия через аудиоэкскурсии`
  
  return {
    title: fullTitle,
    description,
    keywords: keywords || 'аудиоэкскурсии, путешествия по России, геолокация, местные истории, туризм',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: fullTitle,
      description,
      url: siteUrl,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      type,
      locale: 'ru_RU',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: siteUrl,
    },
  }
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'Tour' | 'Article', data?: Record<string, unknown>) {
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'Organization':
      return {
        ...base,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/assets/imgAndLogo/1.jpg`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+7-495-123-45-67',
          contactType: 'customer service',
          email: 'hello@mestoslov.ru',
        },
        sameAs: [
          'https://vk.com/mestoslov',
          'https://t.me/mestoslov',
          'https://instagram.com/mestoslov',
        ],
      }
    case 'WebSite':
      return {
        ...base,
        name: siteName,
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }
    case 'Tour':
      return {
        ...base,
        ...data,
      }
    case 'Article':
      return {
        ...base,
        ...data,
      }
    default:
      return base
  }
}

