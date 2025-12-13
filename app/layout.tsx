import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import FloatingContactBar from './components/FloatingContactBar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['700']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rumanarashid.com'),

  title: {
    default: 'Rumana Rashid - MD/PhD | AI Researcher | Biotech Investor',
    template: '%s | Rumana Rashid'
  },

  description: 'MD/PhD candidate leveraging clinical medicine, AI research, and venture capital expertise to drive healthcare innovation. 1,363 citations, $129M allocated, 1,000+ patients.',

  keywords: [
    'MD/PhD',
    'AI healthcare',
    'biotech investor',
    'glioblastoma research',
    'precision medicine',
    'venture capital healthcare',
    'medical AI',
    'biomedical informatics',
    'cancer biomarkers',
    'REPAIR AI framework'
  ],

  authors: [{ name: 'Rumana (Ru) Rashid' }],

  creator: 'Rumana Rashid',

  icons: {
    icon: '/images/rumana.jpeg',
    shortcut: '/images/rumana.jpeg',
    apple: '/images/rumana.jpeg',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rumanarashid.com',
    title: 'Rumana Rashid - MD/PhD | AI Researcher | Biotech Investor',
    description: 'Transforming healthcare through clinical insight, AI innovation, and strategic investment',
    siteName: 'Rumana Rashid Portfolio',
    images: [
      {
        url: '/images/rumana.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Rumana Rashid',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rumana Rashid',
  alternateName: 'Ru Rashid',
  url: 'https://rumanarashid.com',
  sameAs: [
    'https://www.linkedin.com/in/rurashid001/',
    'https://scholar.google.com/citations?user=PjPMy1gAAAAJ',
    'https://biotechbytes10101.substack.com'
  ],
  jobTitle: 'MD/PhD Candidate',
  worksFor: {
    '@type': 'Organization',
    name: 'University of Pittsburgh'
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Harvard University'
    },
    {
      '@type': 'Organization',
      name: 'University of Pittsburgh'
    }
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Biomedical Informatics',
    'Venture Capital',
    'Precision Oncology',
    'Clinical Medicine'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <FloatingContactBar />
        {children}
      </body>
    </html>
  )
}
