'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, ExternalLink, Newspaper, Pen } from 'lucide-react'

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
  contentSnippet?: string
  imageUrl?: string
}

export default function ThoughtLeadership() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch blog posts from API route (server-side RSS fetching)
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts')
        const data = await response.json()

        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts)
        } else {
          // Fallback if API returns empty
          setPosts([
            {
              title: 'Why Liquid Biopsy Startups Live or Die by Reimbursement',
              link: 'https://biotechbytes10101.substack.com',
              pubDate: new Date('2024-01-15').toISOString(),
              description: 'Exploring the critical intersection of innovation and healthcare economics. How reimbursement strategy determines the success of diagnostic companies.',
            },
            {
              title: 'I Thought Doctors Would Never Use AI - Then I Saw AI Scribes',
              link: 'https://biotechbytes10101.substack.com',
              pubDate: new Date('2024-01-08').toISOString(),
              description: 'A firsthand account of AI adoption in clinical practice. What makes some AI tools succeed where others fail.',
            },
          ])
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Fallback on error
        setPosts([
          {
            title: 'Why Liquid Biopsy Startups Live or Die by Reimbursement',
            link: 'https://biotechbytes10101.substack.com',
            pubDate: new Date('2024-01-15').toISOString(),
            description: 'Exploring the critical intersection of innovation and healthcare economics.',
          },
          {
            title: 'I Thought Doctors Would Never Use AI - Then I Saw AI Scribes',
            link: 'https://biotechbytes10101.substack.com',
            pubDate: new Date('2024-01-08').toISOString(),
            description: 'A firsthand account of AI adoption in clinical practice.',
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Biotech Bytes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Insights on healthcare innovation at the intersection of medicine, AI, and venture capital
            </p>
            <p className="text-sm text-gray-500 mb-8">A blog by Rumana Rashid</p>
            <a
              href="https://biotechbytes10101.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all font-semibold text-gray-700 hover:text-teal-600"
            >
              <Newspaper className="w-5 h-5" />
              <span>Visit Substack</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Blog Posts */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl h-64" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 mb-16">
              <p className="text-gray-500">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto mb-16">
              {posts.map((post, index) => (
                <BlogCard key={index} post={post} delay={index * 0.1} />
              ))}
            </div>
          )}

          {/* Topics I Write About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Topics I Write About</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                'Healthcare AI',
                'Biotech Ventures',
                'Clinical Innovation',
                'Drug Development',
                'Digital Health',
                'Market Analysis',
                'Precision Medicine',
                'Healthcare Economics'
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-full border border-gray-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: BlogPost
  delay: number
}

function BlogCard({ post, delay }: BlogCardProps) {
  // Extract plain text from HTML description
  const getPlainText = (html: string) => {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
  }

  const excerpt = post.description ? getPlainText(post.description).slice(0, 200) + '...' : post.description

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-8 border-b border-gray-200 hover:border-teal-300 transition-colors"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured Image (if available) */}
          {post.imageUrl && (
            <div className="relative w-full md:w-64 h-40 overflow-hidden rounded-lg flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-50">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Date */}
            <div className="flex items-center gap-2 mb-2 text-sm">
              <time className="text-gray-500 font-medium">{formatDate(post.pubDate)}</time>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all">
              <span className="text-teal-600">Read on Substack</span>
              <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  )
}
