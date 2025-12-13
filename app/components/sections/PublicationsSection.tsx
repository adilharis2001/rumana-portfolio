'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Quote, ExternalLink, Search, ChevronDown, ChevronRight, Award, BookOpen, Sparkles } from 'lucide-react'
import { publications } from '@/app/data/publications'

export default function PublicationsSection() {
  const [filter, setFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredPubs = publications.filter(pub => {
    const isTopJournal = pub.journal.includes('Nature') || pub.journal.includes('Science') || pub.journal.includes('Cell')

    const matchesFilter =
      filter === 'all' ||
      (filter === 'first-author' && pub.isFirstAuthor) ||
      (filter === 'top-journals' && isTopJournal) ||
      (filter === 'clinical' && pub.tags.some(tag => tag.toLowerCase().includes('clinical'))) ||
      (filter === 'glioblastoma' && pub.tags.some(tag => tag.toLowerCase() === 'glioblastoma')) ||
      (filter === 'technology' && (pub.tags.some(tag => ['technology', 'software', 'open source'].includes(tag.toLowerCase())))) ||
      (filter === 'highly-cited' && pub.citations && pub.citations >= 100) ||
      pub.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())

    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const totalCitations = publications.reduce((sum, pub) => sum + (pub.citations || 0), 0)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Publications
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Research spanning AI, precision medicine, and cancer biology
          </p>
        </motion.div>

        {/* Metrics Panel */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          <MetricCard icon={FileText} value="15+" label="Publications" gradient="from-teal-400 to-cyan-400" />
          <MetricCard icon={Quote} value={totalCitations.toLocaleString()} label="Citations" gradient="from-purple-400 to-pink-400" />
          <MetricCard icon={Sparkles} value="h: 10 • i10: 11" label="Index Metrics" gradient="from-amber-400 to-orange-400" />
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="https://scholar.google.com/citations?user=PjPMy1gAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all"
          >
            <BookOpen className="w-5 h-5 text-gray-600 group-hover:text-teal-600 transition-colors" />
            <span className="font-semibold text-gray-700 group-hover:text-teal-600 transition-colors">View Google Scholar</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
          </a>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              All
            </FilterButton>
            <FilterButton active={filter === 'first-author'} onClick={() => setFilter('first-author')}>
              First Author (4)
            </FilterButton>
            <FilterButton active={filter === 'top-journals'} onClick={() => setFilter('top-journals')}>
              Top Journals
            </FilterButton>
            <FilterButton active={filter === 'highly-cited'} onClick={() => setFilter('highly-cited')}>
              Highly Cited (100+)
            </FilterButton>
            <FilterButton active={filter === 'ai'} onClick={() => setFilter('ai')}>
              AI/ML
            </FilterButton>
            <FilterButton active={filter === 'imaging'} onClick={() => setFilter('imaging')}>
              Imaging
            </FilterButton>
            <FilterButton active={filter === 'biomarkers'} onClick={() => setFilter('biomarkers')}>
              Biomarkers
            </FilterButton>
            <FilterButton active={filter === 'glioblastoma'} onClick={() => setFilter('glioblastoma')}>
              Glioblastoma
            </FilterButton>
            <FilterButton active={filter === 'clinical'} onClick={() => setFilter('clinical')}>
              Clinical Trials
            </FilterButton>
            <FilterButton active={filter === 'technology'} onClick={() => setFilter('technology')}>
              Technology
            </FilterButton>
          </div>
        </div>

        {/* Compact Publications List */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header Row - Desktop only */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 text-sm font-semibold text-gray-600">
              <div className="col-span-1"></div>
              <div className="col-span-6">Title & Journal</div>
              <div className="col-span-2">Year</div>
              <div className="col-span-2">Citations</div>
              <div className="col-span-1"></div>
            </div>

            {/* Publications Rows */}
            <div className="divide-y divide-gray-100">
              {filteredPubs.map((pub, index) => (
                <PublicationRow
                  key={pub.id}
                  pub={pub}
                  index={index}
                  isExpanded={expandedId === pub.id}
                  onToggle={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                />
              ))}
            </div>
          </div>

          {filteredPubs.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              No publications found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function MetricCard({ icon: Icon, value, label, gradient }: { icon: any; value: string; label: string; gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="flex flex-col items-center gap-2">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}
        </div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </motion.div>
  )
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-medium transition-all ${
        active
          ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-teal-300'
      }`}
    >
      {children}
    </button>
  )
}

function PublicationRow({
  pub,
  index,
  isExpanded,
  onToggle
}: {
  pub: typeof publications[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isTopJournal = pub.journal.includes('Nature') || pub.journal.includes('Science') || pub.journal.includes('Cell')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02 }}
      className="relative group"
    >
      {/* Gradient accent line on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Main Row - Always Visible */}
      <div
        onClick={onToggle}
        className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-4 md:px-6 py-4 md:py-5 cursor-pointer hover:bg-gray-50/50 transition-colors"
      >
        {/* Expand Icon - Desktop */}
        <div className="hidden md:flex col-span-1 items-center justify-center">
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
          </motion.div>
        </div>

        {/* Title & Journal */}
        <div className="col-span-1 md:col-span-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {pub.isFirstAuthor && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-semibold rounded-full">
                <Award className="w-3 h-3" />
                First Author
              </span>
            )}
            {pub.isCoFirst && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-semibold rounded-full">
                <Award className="w-3 h-3" />
                Co-First
              </span>
            )}
            {isTopJournal && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-semibold rounded-full">
                <Sparkles className="w-3 h-3" />
                Top Journal
              </span>
            )}
          </div>
          <h3 className="font-bold text-gray-900 mb-1 leading-snug line-clamp-2 group-hover:text-teal-600 transition-colors">
            {pub.title}
          </h3>
          <p className="text-sm text-gray-600">{pub.journal}</p>
        </div>

        {/* Year - Desktop */}
        <div className="hidden md:flex col-span-2 items-center">
          <span className="text-gray-700 font-medium">{pub.year}</span>
        </div>

        {/* Citations - Desktop */}
        <div className="hidden md:flex col-span-2 items-center">
          {pub.citations !== undefined ? (
            <span className="flex items-center gap-1 text-gray-600">
              <Quote className="w-4 h-4" />
              <span className="font-medium">{pub.citations}</span>
            </span>
          ) : (
            <span className="text-gray-400 text-sm">—</span>
          )}
        </div>

        {/* Link Icon - Desktop */}
        <div className="hidden md:flex col-span-1 items-center justify-center">
          {pub.doi && (
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
          )}
        </div>

        {/* Mobile: Year & Citations */}
        <div className="flex md:hidden items-center gap-4 text-sm text-gray-600">
          <span className="font-medium">{pub.year}</span>
          {pub.citations !== undefined && (
            <span className="flex items-center gap-1">
              <Quote className="w-4 h-4" />
              {pub.citations}
            </span>
          )}
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-5 md:pl-20 bg-gradient-to-r from-gray-50/50 to-transparent">
              <div className="space-y-4">
                {/* Impact Statement */}
                <p className="text-gray-700 leading-relaxed">
                  {pub.impactStatement}
                </p>

                {/* Tags & Link */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
                    >
                      <span>Read Paper</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
