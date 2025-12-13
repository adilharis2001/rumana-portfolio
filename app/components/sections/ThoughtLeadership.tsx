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
            <div className={`grid gap-8 mb-16 ${posts.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : posts.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {posts.map((post, index) => (
                <BlogCard key={index} post={post} delay={index * 0.1} />
              ))}
            </div>
          )}

          {/* Topics Covered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Topics I Write About</h3>
            <div className="flex flex-wrap justify-center gap-3">
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
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
                >
                  {topic}
                </motion.span>
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
      month: 'long',
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
      <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
        {/* Gradient accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-purple-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative bg-white rounded-2xl p-8 transition-all border border-gray-100 hover:border-transparent hover:shadow-xl overflow-hidden">
          {/* Subtle gradient glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-purple-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative z-10">
            {/* Date */}
            <div className="flex items-center gap-2 mb-4 text-sm">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <time className="text-gray-500">{formatDate(post.pubDate)}</time>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:via-purple-600 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
              {excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
              <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Read on Substack</span>
              <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  )
}
