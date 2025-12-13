'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'

// Featured blog posts - in production, these would come from Substack RSS
const featuredPosts = [
  {
    title: 'Why Liquid Biopsy Startups Live or Die by Reimbursement',
    excerpt: 'Exploring the critical intersection of innovation and healthcare economics. How reimbursement strategy determines the success of diagnostic companies...',
    readTime: '8 min',
    tags: ['Diagnostics', 'Business Models', 'Reimbursement'],
    url: 'https://biotechbytes10101.substack.com',
  },
  {
    title: 'I Thought Doctors Would Never Use AI - Then I Saw AI Scribes',
    excerpt: 'A firsthand account of AI adoption in clinical practice. What makes some AI tools succeed where others fail, and lessons for healthcare innovation...',
    readTime: '6 min',
    tags: ['AI', 'Clinical Workflow', 'Adoption'],
    url: 'https://biotechbytes10101.substack.com',
  },
  {
    title: 'The Real Value of Clinical Insight in Biotech Investment',
    excerpt: 'Why physician-investors see opportunities others miss. Understanding clinical unmet needs drives better investment decisions...',
    readTime: '7 min',
    tags: ['Venture Capital', 'Healthcare', 'Strategy'],
    url: 'https://biotechbytes10101.substack.com',
  },
]

export default function ThoughtLeadership() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Biotech Bytes</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Exploring healthcare innovation at the intersection of medicine, AI, and venture capital
              </p>
            </motion.div>

            <motion.a
              href="https://biotechbytes10101.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              View All Posts
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <BlogCard key={index} post={post} delay={index * 0.1} />
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 md:p-12 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 rounded-2xl"
          >
            <div className="max-w-2xl mx-auto text-center">
              <BookOpen className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Get Healthcare Innovation Insights</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Weekly deep dives on biotech, AI, and venture capital. From someone who's worked at the bedside, the bench, and the boardroom.
              </p>

              {/* Substack Subscribe Button */}
              <div className="flex justify-center">
                <a
                  href="https://biotechbytes10101.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white rounded-lg font-bold text-lg hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Subscribe on Substack
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-gray-600 mt-4">Free • No spam • Unsubscribe anytime</p>
            </div>
          </motion.div>

          {/* Topics Covered */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-600 mb-3">Topics I Write About:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Healthcare AI', 'Biotech Ventures', 'Clinical Innovation', 'Drug Development', 'Digital Health', 'Market Analysis', 'Precision Medicine', 'Healthcare Economics'].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
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
  post: typeof featuredPosts[0]
  delay: number
}

function BlogCard({ post, delay }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all group overflow-hidden"
    >
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
        {/* Gradient header */}
        <div className="h-2 bg-gradient-to-r from-teal-500 to-blue-500" />

        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
            <BookOpen className="w-4 h-4" />
            <span>{post.readTime} read</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read more */}
          <span className="text-teal-600 font-semibold inline-flex items-center text-sm">
            Read on Substack
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </a>
    </motion.article>
  )
}
