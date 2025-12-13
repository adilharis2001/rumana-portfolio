'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { GraduationCap, FlaskConical, TrendingUp, Image as ImageIcon, X } from 'lucide-react'
import { useRef, useState } from 'react'

// Unified timeline data - chronologically ordered
const journeyData = [
  {
    year: '2016',
    track: 'research',
    title: 'CyCIF Technology',
    subtitle: 'Harvard Medical School',
    description: 'Co-developed novel high-plex imaging platform',
    impact: '$10M funding secured',
    image: 'journey/2016-cycif.jpg',
  },
  {
    year: '2019',
    track: 'education',
    title: 'MS, Harvard',
    subtitle: 'Biomedical Informatics',
    description: 'Outstanding Master\'s Student Award',
    impact: 'Top of graduating class',
    image: 'journey/2019-harvard-ms.jpg',
  },
  {
    year: '2020',
    track: 'research',
    title: 'Minerva Viewer',
    subtitle: 'Harvard Medical School',
    description: 'Official viewer for National Tumor Atlas Network',
    impact: 'Used by researchers worldwide',
    image: 'journey/2020-minerva.jpg',
  },
  {
    year: '2020',
    track: 'education',
    title: 'MD/PhD Program',
    subtitle: 'University of Pittsburgh',
    description: 'Clinical Medicine + AI Research',
    impact: 'MSTP T32 Funding',
    image: 'journey/2020-pitt-start.jpg',
  },
  {
    year: '2021',
    track: 'venture',
    title: 'Nextech Invest',
    subtitle: 'VC Fellowship',
    description: '30+ healthcare startups evaluated',
    impact: '$129M allocated',
    image: 'journey/2021-nextech.jpg',
  },
  {
    year: '2021',
    track: 'venture',
    title: 'MD+ Director of VC',
    subtitle: 'Board Member',
    description: 'Built VC partnerships at Pittsburgh',
    impact: 'Investment thesis development',
    image: 'journey/2021-md-plus.jpg',
  },
  {
    year: '2022',
    track: 'research',
    title: 'REPAIR AI Framework',
    subtitle: 'Pitt & Harvard',
    description: '28-marker panel for treatment response',
    impact: 'AUC=0.94 for glioblastoma',
    image: 'journey/2022-repair-start.jpg',
  },
  {
    year: '2023',
    track: 'venture',
    title: 'Dubai Future District Fund',
    subtitle: 'Healthcare Investment Strategy',
    description: 'Developed investment thesis for MENA region',
    impact: 'Regional healthcare innovation',
    image: 'journey/2023-dubai.jpg',
  },
  {
    year: '2023',
    track: 'venture',
    title: 'Ariel Precision Medicine',
    subtitle: 'Fundraising Support',
    description: 'Pitch decks & VC outreach strategy',
    impact: 'Strategic fundraising support',
    image: 'journey/2023-ariel.jpg',
  },
  {
    year: '2024',
    track: 'education',
    title: 'PhD Completed',
    subtitle: 'Biomedical Informatics',
    description: 'DNA damage biomarkers & AI',
    impact: 'Published 15+ papers',
    image: 'journey/2024-phd.jpg',
  },
  {
    year: '2024',
    track: 'research',
    title: 'REPAIR Validation',
    subtitle: 'Multi-center Studies',
    description: 'Validated AI model across 350+ tumors',
    impact: 'Clinical translation ready',
    image: 'journey/2024-repair-validation.jpg',
  },
  {
    year: '2025',
    track: 'research',
    title: 'Companion Diagnostic',
    subtitle: 'Clinical Development',
    description: 'Translation of REPAIR to clinical use',
    impact: 'Commercialization pathway',
    image: 'journey/2025-diagnostic.jpg',
  },
]

const trackConfig = {
  education: {
    icon: GraduationCap,
    gradient: 'from-teal-400 to-cyan-400',
    name: 'Education',
    position: 'top', // Desktop: top track
  },
  research: {
    icon: FlaskConical,
    gradient: 'from-purple-400 to-pink-400',
    name: 'Research',
    position: 'middle', // Desktop: middle track
  },
  venture: {
    icon: TrendingUp,
    gradient: 'from-amber-400 to-orange-400',
    name: 'Venture Capital',
    position: 'bottom', // Desktop: bottom track
  },
}

export default function ExpertiseTimeline() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            A decade of innovation across medicine, research, and venture capital
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Track Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-16"
        >
          {Object.entries(trackConfig).map(([key, config]) => {
            const Icon = config.icon
            return (
              <div key={key} className="flex items-center gap-2 md:gap-3">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-700">{config.name}</span>
              </div>
            )
          })}
        </motion.div>

        {/* Desktop: Horizontal Scroll Timeline */}
        <div className="hidden lg:block">
          <HorizontalTimeline data={journeyData} trackConfig={trackConfig} />
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <VerticalTimeline data={journeyData} trackConfig={trackConfig} />
        </div>
      </div>
    </section>
  )
}

// Desktop Horizontal Timeline with Multi-Track Visualization
function HorizontalTimeline({ data, trackConfig }: any) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  // Group items by year for better visualization
  const years = Array.from(new Set(data.map((item: any) => item.year))).sort() as string[]

  return (
    <div className="relative">
      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center mb-6 text-sm text-gray-500"
      >
        ← Scroll horizontally to explore the journey →
      </motion.div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-visible pb-8 -mx-4 px-4"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="relative min-w-max py-16">
          {/* Timeline tracks - 3 parallel lines */}
          <div className="absolute left-0 right-0 h-96 flex flex-col justify-around">
            {['education', 'research', 'venture'].map((track) => (
              <div key={track} className="relative">
                <div className={`h-0.5 bg-gradient-to-r ${trackConfig[track as keyof typeof trackConfig].gradient} opacity-20`} />
              </div>
            ))}
          </div>

          {/* Timeline content */}
          <div className="relative flex gap-24 px-12">
            {years.map((year, yearIndex) => {
              const yearItems = data.filter((item: any) => item.year === year)

              return (
                <div key={year} className="relative flex-shrink-0">
                  {/* Year marker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 z-20"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                      {year}
                    </div>
                  </motion.div>

                  {/* Items for this year across different tracks */}
                  <div className="flex flex-col justify-around h-96 gap-4">
                    {['education', 'research', 'venture'].map((track) => {
                      const item = yearItems.find((i: any) => i.track === track)

                      if (!item) {
                        return <div key={track} className="h-32" />
                      }

                      return (
                        <TimelineCard
                          key={`${year}-${track}`}
                          item={item}
                          trackConfig={trackConfig[track]}
                          delay={yearIndex * 0.1}
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500"
          style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

// Mobile Vertical Timeline
function VerticalTimeline({ data, trackConfig }: any) {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 via-purple-300 to-amber-300 opacity-30" />

      <div className="space-y-8">
        {data.map((item: any, index: number) => {
          const config = trackConfig[item.track]
          const Icon = config.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05 }}
              className="relative pl-20"
            >
              {/* Track icon */}
              <div className="absolute left-0 top-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-full blur-lg opacity-40`} />
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>
              </div>

              {/* Content card - NO BOX, just gradient accent */}
              <MobileTimelineCard item={item} gradient={config.gradient} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// Timeline Card Component (Desktop)
function TimelineCard({ item, trackConfig, delay }: any) {
  const [imageOpen, setImageOpen] = useState(false)
  const gradient = trackConfig.gradient

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="relative group h-32 w-80"
      >
        {/* Gradient accent line (left side) */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gradient} rounded-full`} />

        {/* Content */}
        <div className="pl-4 h-full flex flex-col justify-between">
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className={`text-lg font-bold bg-gradient-to-br ${gradient} bg-clip-text text-transparent leading-tight`}>
                {item.title}
              </h4>

              {/* Image indicator */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setImageOpen(true)}
                className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg opacity-60 hover:opacity-100 transition-opacity`}
              >
                <ImageIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </motion.button>
            </div>

            <p className="text-sm text-gray-600 mb-1 font-medium">{item.subtitle}</p>
            <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
          </div>

          {/* Impact badge */}
          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 w-fit mt-2`}>
            <span className={`text-xs font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {item.impact}
            </span>
          </div>
        </div>

        {/* Connection dot on timeline */}
        <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${gradient} shadow-lg border-2 border-white`} />
      </motion.div>

      {/* Image Modal */}
      <ImageModal
        isOpen={imageOpen}
        onClose={() => setImageOpen(false)}
        imagePath={item.image}
        title={item.title}
        year={item.year}
      />
    </>
  )
}

// Mobile Timeline Card
function MobileTimelineCard({ item, gradient }: any) {
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <>
      <div className="relative">
        {/* Gradient accent line (top) */}
        <div className={`h-0.5 w-16 bg-gradient-to-r ${gradient} rounded-full mb-3`} />

        {/* Year badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 mb-3`}>
          <span className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {item.year}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h4 className={`text-lg md:text-xl font-bold bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
              {item.title}
            </h4>

            {/* Image button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setImageOpen(true)}
              className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
            >
              <ImageIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
            </motion.button>
          </div>

          <p className="text-sm text-gray-600 font-medium">{item.subtitle}</p>
          <p className="text-sm text-gray-500">{item.description}</p>

          {/* Impact */}
          <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 mt-2`}>
            <span className={`text-xs font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {item.impact}
            </span>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={imageOpen}
        onClose={() => setImageOpen(false)}
        imagePath={item.image}
        title={item.title}
        year={item.year}
      />
    </>
  )
}

// Image Modal Component
function ImageModal({ isOpen, onClose, imagePath, title, year }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-900" strokeWidth={2.5} />
              </button>

              {/* Image placeholder */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
                <ImageIcon className="w-20 h-20 text-gray-400 mb-4" strokeWidth={1.5} />
                <p className="text-gray-500 text-center mb-2">
                  Image placeholder: <span className="font-mono text-sm">/images/{imagePath}</span>
                </p>
                <p className="text-gray-400 text-sm text-center">
                  Add your journey photo to public/images/{imagePath}
                </p>
              </div>

              {/* Caption */}
              <div className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-teal-600">{year}</span>
                  <div className="h-4 w-px bg-gray-300" />
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
