'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Quote, ExternalLink, Search } from 'lucide-react'
import { publications } from '@/app/data/publications'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function PublicationsSection() {
  const [filter, setFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPubs = publications.filter(pub => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'first-author' && pub.isFirstAuthor) ||
      pub.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())

    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const totalCitations = publications.reduce((sum, pub) => sum + (pub.citations || 0), 0)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-8"
        >
          Publications
        </motion.h2>

        {/* Metrics Panel */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <MetricPill icon={FileText} value="15+" label="Publications" />
          <MetricPill icon={Quote} value={totalCitations.toLocaleString()} label="Citations" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">h: 10 • i10: 11</div>
            <div className="text-sm text-gray-600">Index Metrics</div>
          </div>
          <a
            href="https://scholar.google.com/citations?user=PjPMy1gAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-teal-600 hover:text-teal-700 font-semibold"
          >
            View Google Scholar
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              All
            </FilterButton>
            <FilterButton active={filter === 'first-author'} onClick={() => setFilter('first-author')}>
              First Author (4)
            </FilterButton>
            <FilterButton active={filter === 'ai'} onClick={() => setFilter('ai')}>
              AI/ML
            </FilterButton>
            <FilterButton active={filter === 'biomarkers'} onClick={() => setFilter('biomarkers')}>
              Biomarkers
            </FilterButton>
            <FilterButton active={filter === 'imaging'} onClick={() => setFilter('imaging')}>
              Imaging
            </FilterButton>
          </div>
        </div>

        {/* Publications Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPubs.map((pub, index) => (
            <motion.div
              key={pub.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <PublicationCard pub={pub} />
            </motion.div>
          ))}
        </motion.div>

        {filteredPubs.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No publications found matching your criteria.
          </div>
        )}
      </div>
    </section>
  )
}

function MetricPill({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Icon className="w-5 h-5 text-teal-600" />
        <div className="text-2xl font-bold text-gray-900">{value}</div>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all ${
        active
          ? 'bg-teal-500 text-white shadow-md'
          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
      }`}
    >
      {children}
    </button>
  )
}

function PublicationCard({ pub }: { pub: typeof publications[0] }) {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        {pub.isFirstAuthor && <Badge variant="gold">First Author</Badge>}
        {pub.isCoFirst && <Badge variant="gold">Co-First</Badge>}
        <Badge variant="gray">{pub.year}</Badge>
        {(pub.journal.includes('Nature') || pub.journal.includes('Science') || pub.journal.includes('Cell')) && (
          <Badge variant="purple">Top Journal</Badge>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2 line-clamp-3 flex-shrink-0">
        {pub.doi ? (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 transition-colors"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>

      {/* Journal */}
      <p className="text-sm text-gray-600 mb-3">
        {pub.journal} • {pub.year}
      </p>

      {/* Impact Statement */}
      <p className="text-sm text-gray-700 mb-4 flex-1 line-clamp-3">
        {pub.impactStatement}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
        <div className="flex items-center text-sm text-gray-600">
          {pub.citations !== undefined && (
            <>
              <Quote className="w-4 h-4 mr-1" />
              {pub.citations} citations
            </>
          )}
        </div>

        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 text-sm font-semibold flex items-center"
          >
            View →
          </a>
        )}
      </div>
    </Card>
  )
}
