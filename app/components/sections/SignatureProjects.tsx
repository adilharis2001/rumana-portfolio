'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Brain, Monitor, TrendingUp, Globe, ArrowRight, Lightbulb, Zap, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 'repair',
    icon: Brain,
    tag: 'AI Research',
    title: 'REPAIR: AI for Glioblastoma',
    color: 'teal',
    problem: [
      'Glioblastoma has 15-month median survival',
      'Current treatment selection is guesswork',
      '60% of patients don\'t respond to standard therapy',
    ],
    solution: [
      'Developed 28-marker DNA damage imaging panel',
      'Built AI framework to predict therapeutic response',
      'Achieved AUC=0.94 (far exceeds clinical standard)',
    ],
    impact: {
      metrics: [
        { value: '350+', label: 'Tumors Profiled' },
        { value: '94%', label: 'Prediction Accuracy' },
        { value: 'Multiple', label: 'Cancer Types' },
      ],
      description: 'Currently in development as companion diagnostic. Could spare non-responders from ineffective, toxic therapy and enable patient stratification for clinical trials.',
    },
    publications: [
      { title: 'In Preparation', journal: 'Precision Medicine Framework' },
      { title: 'Sci Transl Med 2025', journal: 'MDM2 inhibitor trial', doi: '10.1126/scitranslmed.adn6274' },
    ],
  },
  {
    id: 'minerva',
    icon: Monitor,
    tag: 'Technology',
    title: 'Minerva: National Tumor Atlas Viewer',
    color: 'navy',
    problem: [
      'Gigapixel tissue images too large for standard viewers',
      'Need narrative context for complex multiplexed data',
      'Barrier to data sharing and collaboration',
    ],
    solution: [
      'Co-developed lightweight, web-based viewer',
      'Integrated narrative storytelling with data visualization',
      'Open-source for maximum accessibility',
    ],
    impact: {
      metrics: [
        { value: 'Official', label: 'NCI Viewer' },
        { value: '68', label: 'Citations' },
        { value: 'Nature', label: 'Biomed Eng' },
      ],
      description: 'Now the official viewer for the National Cancer Institute\'s Human Tumor Atlas Network. Democratized access to high-plex imaging data through innovative narrative approach.',
    },
    publications: [
      { title: 'Nat Biomed Eng 2021', journal: 'First-author paper', doi: '10.1038/s41551-021-00789-8' },
      { title: 'JOSS 2020', journal: 'Co-first-author', link: 'https://github.com/labsyspharm/minerva-story' },
    ],
  },
  {
    id: 'nextech',
    icon: TrendingUp,
    tag: 'Venture Capital',
    title: 'Nextech Invest: Healthcare VC',
    color: 'amber',
    problem: [
      'Evaluate cutting-edge biotech with scientific rigor',
      'Build frameworks for emerging technologies (AI, ADCs)',
      'Balance innovation potential with market reality',
    ],
    solution: [
      'Deep technical due diligence (data rooms, KOL calls)',
      'Created AI company valuation framework',
      'Authored strategy briefs on ADCs, AI drug discovery',
    ],
    impact: {
      metrics: [
        { value: '30+', label: 'Companies Evaluated' },
        { value: '8', label: 'Investments Made' },
        { value: '$129M', label: 'Capital Allocated' },
      ],
      description: 'Led due diligence across Series A, B, C, and post-IPO investments. Built systematic frameworks for evaluating AI-based companies and drug discovery startups.',
    },
    publications: [],
  },
  {
    id: 'dubai',
    icon: Globe,
    tag: 'Strategic Consulting',
    title: 'Dubai Future District Fund',
    color: 'purple',
    problem: [
      'Build healthcare investment thesis for UAE-backed VC',
      'Evaluate health tech in emerging MENA market',
      'Bridge Western innovation with regional needs',
    ],
    solution: [
      'Comprehensive healthcare sector thesis',
      'Due diligence framework for MENA startups',
      'Market landscape analysis',
    ],
    impact: {
      metrics: [
        { value: 'MENA', label: 'Region Focus' },
        { value: 'Gov-backed', label: 'UAE Fund' },
        { value: 'Health Tech', label: 'Sector' },
      ],
      description: 'Developed investment strategy for government-backed venture fund. Identified unique opportunities in healthcare delivery and digital health leapfrogging in the region.',
    },
    publications: [],
  },
]

export default function SignatureProjects() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Signature Projects
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            From precision medicine AI to national research infrastructure
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCaseStudy({ project, index }: { project: typeof projects[0]; index: number }) {
  const Icon = project.icon
  const reverse = index % 2 !== 0
  const [isExpanded, setIsExpanded] = useState(false)

  const gradients: Record<string, { gradient: string; light: string; icon: string }> = {
    teal: { gradient: 'from-teal-400 to-cyan-400', light: 'from-teal-50 to-cyan-50', icon: 'from-teal-500 to-cyan-500' },
    navy: { gradient: 'from-blue-400 to-indigo-400', light: 'from-blue-50 to-indigo-50', icon: 'from-blue-500 to-indigo-500' },
    purple: { gradient: 'from-purple-400 to-pink-400', light: 'from-purple-50 to-pink-50', icon: 'from-purple-500 to-pink-500' },
    amber: { gradient: 'from-amber-400 to-orange-400', light: 'from-amber-50 to-orange-50', icon: 'from-amber-500 to-orange-500' },
  }
  const colors = gradients[project.color] || gradients.teal

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Floating gradient line accent */}
      <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${colors.gradient} rounded-full hidden lg:block`} />

      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 lg:items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
        {/* Left Column - Header & Details */}
        <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
          {/* Project Header */}
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.icon} flex items-center justify-center shadow-lg`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${colors.light} rounded-full`}>
                {project.tag}
              </span>
            </motion.div>

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 flex-1">
                {project.title}
              </h3>
              {/* Mobile expand/collapse button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="lg:hidden flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
              >
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Impact Summary (always visible) */}
          <div className="lg:hidden mb-6">
            <div className="grid grid-cols-3 gap-4">
              {project.impact.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className={`text-xl font-bold mb-1 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-600 leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsible Details - Hidden on mobile unless expanded, always visible on desktop */}
          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block space-y-8`}>
            {/* Challenge → Solution Flow */}
            <div className="space-y-6">
              {/* Challenge */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-gray-600" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900">The Challenge</h4>
                </div>
                <div className="space-y-3 pl-11">
                  {project.problem.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gradient Arrow */}
              <div className="flex items-center gap-3 pl-3">
                <div className={`flex-1 h-px bg-gradient-to-r ${colors.gradient}`} />
                <ArrowRight className={`w-5 h-5 text-transparent bg-gradient-to-r ${colors.gradient} bg-clip-text`} strokeWidth={3} />
                <div className={`flex-1 h-px bg-gradient-to-r ${colors.gradient}`} />
              </div>

              {/* Approach */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-md`}>
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900">The Approach</h4>
                </div>
                <div className="space-y-3 pl-11">
                  {project.solution.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Publications */}
            {project.publications.length > 0 && (
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Publications</h5>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  {project.publications.map((pub, i) => (
                    <motion.a
                      key={i}
                      href={pub.doi ? `https://doi.org/${pub.doi}` : ('link' in pub ? pub.link : '#')}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <span className="font-semibold text-sm text-gray-700 relative z-10">{pub.title}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 relative z-10" />
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Impact (Desktop only - mobile shows summary above) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`hidden lg:block relative ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
        >
          {/* Impact card with gradient accent */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`} />

            {/* Subtle background glow */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-full blur-3xl`} />

            <div className="relative z-10">
              <h4 className="font-bold text-2xl mb-8 text-gray-900">The Impact</h4>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {project.impact.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className={`h-px bg-gradient-to-r ${colors.gradient} opacity-20 mb-6`} />

              {/* Impact Description */}
              <p className="text-gray-700 leading-relaxed">
                {project.impact.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
