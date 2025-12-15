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
    subtitle: 'Harvard Medical School - Laboratory of Systems Pharmacology',
    description: 'Co-developed the **Cyclic Immunofluorescence (CyCIF)** platform, a breakthrough high-plex imaging technology enabling simultaneous visualization of **60+ protein markers** in tissue samples. Pioneered methods for **spatial tissue analysis** that became foundational for the **Human Tumor Atlas Network**.',
    impact: '$10M NIH funding secured',
    image: 'journey/2016-cycif.jpg',
    imageCaption: '[Photo: CyCIF imaging platform at Harvard]',
  },
  {
    year: '2019',
    track: 'education',
    title: 'MS, Harvard University',
    subtitle: 'Biomedical Informatics - Department of Biomedical Informatics',
    description: 'Graduated with **highest honors** from Harvard Medical School\'s Master of Science program in Biomedical Informatics. Thesis focused on **computational methods** for analyzing high-dimensional tissue imaging data. Recognized with the **Outstanding Master\'s Student Award** for academic excellence and research contributions.',
    impact: 'Top of graduating class',
    image: 'journey/2019-harvard-ms.jpg',
    imageCaption: '[Photo: Harvard graduation ceremony]',
  },
  {
    year: '2020',
    track: 'research',
    title: 'Minerva Viewer Platform',
    subtitle: 'Harvard Medical School - Open Source Software Development',
    description: 'Led development of **Minerva**, an interactive web-based viewer for exploring large-scale tissue imaging datasets. Adopted as the **official visualization tool** for the National Cancer Institute\'s **Human Tumor Atlas Network**, enabling researchers worldwide to interactively explore multi-scale tissue images.',
    impact: 'Used by 1000+ researchers globally',
    image: 'journey/2020-minerva.jpg',
    imageCaption: '[Photo: Minerva software interface demo]',
  },
  {
    year: '2020',
    track: 'education',
    title: 'MD/PhD Program Start',
    subtitle: 'University of Pittsburgh School of Medicine',
    description: 'Matriculated into the highly selective **Medical Scientist Training Program (MSTP)**, one of **45 students nationwide** to receive the prestigious **NIH T32 training grant**. Dual program combining clinical training in medicine with doctoral research in **computational biology** and **artificial intelligence** applications in oncology.',
    impact: 'NIH MSTP T32 funding',
    image: 'journey/2020-pitt-start.jpg',
    imageCaption: '[Photo: White coat ceremony at University of Pittsburgh]',
  },
  {
    year: '2021',
    track: 'venture',
    title: 'Nextech Invest Fellowship',
    subtitle: 'Healthcare Venture Capital - Investment Analysis',
    description: 'Selected for **competitive VC fellowship** focused on healthcare technology investments. Conducted comprehensive **due diligence** on **30+ early-stage startups** across diagnostics, therapeutics, and digital health sectors. Contributed to investment decisions allocating **$129M in capital** across portfolio companies.',
    impact: '$129M capital deployed',
    image: 'journey/2021-nextech.jpg',
    imageCaption: '[Photo: Nextech Invest team meeting]',
  },
  {
    year: '2021',
    track: 'venture',
    title: 'MD+ Director of Venture Capital',
    subtitle: 'Board Member - Student Investment Organization',
    description: 'Appointed to **leadership position** overseeing venture capital initiatives for University of Pittsburgh\'s premier student investment organization. Established partnerships with **regional VC firms**, developed **healthcare investment theses**, and mentored students in startup evaluation and deal sourcing strategies.',
    impact: 'Built 5+ VC partnerships',
    image: 'journey/2021-md-plus.jpg',
    imageCaption: '[Photo: MD+ board meeting presentation]',
  },
  {
    year: '2022',
    track: 'research',
    title: 'REPAIR AI Framework Development',
    subtitle: 'University of Pittsburgh & Harvard Medical School',
    description: 'Initiated development of **REPAIR** (REsponse Prediction through Analysis of Intratumoral Heterogeneity), a novel **AI framework** integrating spatial proteomics and machine learning to predict glioblastoma treatment response. Designed **28-marker multiplexed imaging panel** capturing DNA damage repair pathway activation across tumor microenvironments.',
    impact: 'Novel biomarker discovery',
    image: 'journey/2022-repair-start.jpg',
    imageCaption: '[Photo: REPAIR AI model development workspace]',
  },
  {
    year: '2023',
    track: 'venture',
    title: 'Dubai Future District Fund',
    subtitle: 'Healthcare Investment Strategy - MENA Region',
    description: 'Consulted for **Dubai Future District Fund** to develop comprehensive healthcare investment strategy targeting innovation across the **Middle East and North Africa** region. Analyzed **regional market dynamics**, regulatory landscapes, and emerging opportunities in **precision medicine**, digital health, and healthcare infrastructure.',
    impact: 'MENA healthcare thesis',
    image: 'journey/2023-dubai.jpg',
    imageCaption: '[Photo: Dubai Future District Fund consulting engagement]',
  },
  {
    year: '2023',
    track: 'venture',
    title: 'Ariel Precision Medicine',
    subtitle: 'Startup Fundraising Advisory',
    description: 'Provided **strategic fundraising support** for early-stage precision medicine startup developing novel diagnostic platforms. Created **investor pitch materials**, developed **go-to-market strategies**, and facilitated introductions to healthcare-focused venture capital firms and angel investors.',
    impact: 'Seed round preparation',
    image: 'journey/2023-ariel.jpg',
    imageCaption: '[Photo: Ariel Precision Medicine pitch presentation]',
  },
  {
    year: '2024',
    track: 'education',
    title: 'PhD Completed',
    subtitle: 'Biomedical Informatics - University of Pittsburgh',
    description: 'Successfully defended doctoral dissertation on "**Spatial Analysis of DNA Damage Response Heterogeneity for Predicting Therapeutic Outcomes in Glioblastoma**." Published **15+ peer-reviewed papers** in high-impact journals including **Nature Methods** and **Cell Reports**. Dissertation recognized for advancing the field of **computational pathology** and precision oncology.',
    impact: '15+ publications, 1,363 citations',
    image: 'journey/2024-phd.jpg',
    imageCaption: '[Photo: PhD defense presentation at University of Pittsburgh]',
  },
  {
    year: '2024',
    track: 'research',
    title: 'REPAIR Multi-Center Validation',
    subtitle: 'Clinical Translation Studies',
    description: 'Completed rigorous validation of REPAIR AI model across **350+ glioblastoma patient samples** from multiple medical centers. Achieved exceptional performance with **AUC of 0.94** for predicting treatment response, demonstrating **robust generalizability** across diverse patient populations and clinical settings. Results positioned REPAIR for clinical translation.',
    impact: 'AUC=0.94, 350+ patients',
    image: 'journey/2024-repair-validation.jpg',
    imageCaption: '[Photo: REPAIR validation study results presentation]',
  },
  {
    year: '2025',
    track: 'research',
    title: 'Companion Diagnostic Development',
    subtitle: 'Clinical Translation & Commercialization',
    description: 'Advanced REPAIR framework toward **FDA-approved companion diagnostic** status for glioblastoma therapy selection. Collaborating with **industry partners** to establish **clinical-grade assay protocols**, regulatory pathways, and commercialization strategies to bring **AI-driven precision medicine tools** to neurosurgical oncology practice.',
    impact: 'FDA pathway initiated',
    image: 'journey/2025-diagnostic.jpg',
    imageCaption: '[Photo: FDA regulatory submission preparation]',
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

// Helper function to render text with bold emphasis
function renderWithEmphasis(text: string, gradient: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2)
      return (
        <span key={index} className={`font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {content}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

export default function ExpertiseTimeline() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background matching hero theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-teal-50/40" />

        {/* Animated gradient orbs - single on mobile for performance, all on desktop */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl md:blur-3xl animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-blob" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(43, 158, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 158, 179, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            My Journey
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            A decade of innovation across medicine, research, and venture capital
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Track Legend - Mobile Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12 lg:hidden"
        >
          {Object.entries(trackConfig).map(([key, config]) => {
            const Icon = config.icon
            return (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-semibold text-gray-700">{config.name}</span>
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

// Desktop Vertical Timeline with Three Parallel Tracks
function HorizontalTimeline({ data, trackConfig }: any) {
  // Group items by year for better visualization
  const years = Array.from(new Set(data.map((item: any) => item.year))).sort() as string[]

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Track Column Headers - No boxes, floating style */}
      <div className="grid grid-cols-3 gap-8 mb-16 sticky top-0 pb-8 z-10">
        {['education', 'research', 'venture'].map((track) => {
          const config = trackConfig[track as keyof typeof trackConfig]
          const Icon = config.icon

          return (
            <motion.div
              key={track}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Vertical gradient line extending down */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-[2000px] bg-gradient-to-b ${config.gradient} opacity-15`} />

              {/* Track header - floating, no box */}
              <div className="relative flex flex-col items-center gap-4">
                {/* Icon with glow */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-full blur-2xl opacity-40`} />
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>

                {/* Track name with gradient line accent */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`h-0.5 w-12 bg-gradient-to-r ${config.gradient} rounded-full`} />
                  <h3 className={`text-2xl font-bold bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent text-center`}>
                    {config.name}
                  </h3>
                  <div className={`h-0.5 w-12 bg-gradient-to-r ${config.gradient} rounded-full`} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Vertical timeline with three columns */}
      <div className="space-y-20">
        {years.map((year, yearIndex) => {
          const yearItems = data.filter((item: any) => item.year === year)

          return (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
              className="relative"
            >
              {/* Year marker - large and centered */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                    {year}
                  </div>
                  <div className="h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mt-4" />
                </motion.div>
              </div>

              {/* Three tracks side by side */}
              <div className="grid grid-cols-3 gap-8">
                {['education', 'research', 'venture'].map((track) => {
                  const item = yearItems.find((i: any) => i.track === track)

                  if (!item) {
                    return (
                      <div key={track} className="relative min-h-[200px]">
                        {/* Empty slot with faded track indicator */}
                        <div className="h-full flex items-center justify-center opacity-10">
                          <div className={`w-0.5 h-full min-h-[200px] bg-gradient-to-b ${trackConfig[track as keyof typeof trackConfig].gradient}`} />
                        </div>
                      </div>
                    )
                  }

                  return (
                    <DesktopTimelineCard
                      key={`${year}-${track}`}
                      item={item}
                      trackConfig={trackConfig[track as keyof typeof trackConfig]}
                      delay={yearIndex * 0.1}
                    />
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// Desktop Timeline Card Component
function DesktopTimelineCard({ item, trackConfig, delay }: any) {
  const [imageOpen, setImageOpen] = useState(false)
  const gradient = trackConfig.gradient
  const Icon = trackConfig.icon

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="relative group h-full"
      >
        {/* Gradient accent line (left side) */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gradient} rounded-full`} />

        {/* Content - subtle background to cover line, no borders */}
        <div className="pl-6 pr-2 py-4 h-full flex flex-col bg-white/80 backdrop-blur-sm relative z-10">
          {/* Track icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative mb-4 w-fit"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-lg opacity-40`} />
            <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
              <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          <div className="flex-1">
            {/* Title */}
            <h4 className={`text-xl font-bold bg-gradient-to-br ${gradient} bg-clip-text text-transparent leading-tight mb-3`}>
              {item.title}
            </h4>

            <p className="text-sm text-gray-700 mb-3 font-medium">{item.subtitle}</p>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {renderWithEmphasis(item.description, gradient)}
            </p>

            {/* Impact badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 w-fit`}>
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
              <span className={`text-xs font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {item.impact}
              </span>
            </div>
          </div>
        </div>
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

// Mobile Timeline Card
function MobileTimelineCard({ item, gradient }: any) {
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <>
      <div className="relative">
        {/* Gradient accent line (top) */}
        <div className={`h-0.5 w-20 bg-gradient-to-r ${gradient} rounded-full mb-4`} />

        {/* Year - Large and prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-amber-600 bg-clip-text text-transparent mb-2">
            {item.year}
          </div>
        </motion.div>

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

          <p className="text-sm text-gray-600 font-medium mb-2">{item.subtitle}</p>
          <p className="text-sm text-gray-500 mb-3 leading-relaxed">
            {renderWithEmphasis(item.description, gradient)}
          </p>

          {/* Image caption button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setImageOpen(true)}
            className={`w-full mb-3 group/img relative overflow-hidden rounded-lg bg-gradient-to-br ${gradient} p-[1px] shadow-md`}
          >
            <div className="bg-white rounded-lg px-3 py-2 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={2} />
              <p className="text-xs text-gray-500 italic truncate flex-1 text-left">
                {item.imageCaption}
              </p>
            </div>
          </motion.button>

          {/* Impact */}
          <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 w-fit`}>
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
