'use client'

import { motion } from 'framer-motion'
import { GraduationCap, FlaskConical, TrendingUp } from 'lucide-react'

const timelineData = {
  education: [
    {
      year: '2019',
      title: 'MS, Harvard',
      subtitle: 'Biomedical Informatics',
      description: 'Outstanding Master\'s Student Award',
    },
    {
      year: '2020-2026',
      title: 'MD/PhD, Pittsburgh',
      subtitle: 'Clinical Medicine + AI',
      description: 'MSTP T32 Funding',
    },
    {
      year: '2024',
      title: 'PhD Completed',
      subtitle: 'Biomedical Informatics',
      description: 'DNA damage biomarkers & AI',
    },
  ],
  research: [
    {
      year: '2016-2020',
      title: 'CyCIF Technology',
      subtitle: 'Harvard',
      description: 'Co-developed novel high-plex imaging platform, $10M funding',
    },
    {
      year: '2020',
      title: 'Minerva Viewer',
      subtitle: 'Harvard',
      description: 'Official viewer for National Tumor Atlas Network',
    },
    {
      year: '2022-2024',
      title: 'REPAIR AI Framework',
      subtitle: 'Pitt & Harvard',
      description: '28-marker panel, AUC=0.94 for glioblastoma response',
    },
    {
      year: '2025',
      title: 'Companion Diagnostic',
      subtitle: 'In Development',
      description: 'Translation of REPAIR to clinical use',
    },
  ],
  venture: [
    {
      year: '2021-2022',
      title: 'Nextech Invest',
      subtitle: 'VC Fellow',
      description: '30+ startups evaluated, $129M allocated',
    },
    {
      year: '2021-2024',
      title: 'MD+ Director of VC',
      subtitle: 'Board Member',
      description: 'Built VC partnerships, investment theses',
    },
    {
      year: '2023',
      title: 'Dubai Future District Fund',
      subtitle: 'Healthcare Thesis',
      description: 'Investment strategy for MENA region',
    },
    {
      year: '2023',
      title: 'Ariel Precision Medicine',
      subtitle: 'Fundraising Support',
      description: 'Pitch decks & VC outreach strategy',
    },
  ],
}

export default function ExpertiseTimeline() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          My Journey
        </motion.h2>

        <div className="space-y-16">
          {/* Education Track */}
          <TimelineTrack
            title="Education"
            icon={GraduationCap}
            color="teal"
            items={timelineData.education}
          />

          {/* Research Track */}
          <TimelineTrack
            title="Research"
            icon={FlaskConical}
            color="navy"
            items={timelineData.research}
          />

          {/* Venture Track */}
          <TimelineTrack
            title="Venture Capital"
            icon={TrendingUp}
            color="amber"
            items={timelineData.venture}
          />
        </div>
      </div>
    </section>
  )
}

interface TimelineTrackProps {
  title: string
  icon: any
  color: 'teal' | 'navy' | 'amber'
  items: Array<{
    year: string
    title: string
    subtitle: string
    description: string
  }>
}

function TimelineTrack({ title, icon: Icon, color, items }: TimelineTrackProps) {
  const colorClasses = {
    teal: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      border: 'border-teal-500',
      line: 'bg-teal-200',
    },
    navy: {
      bg: 'bg-navy-100',
      text: 'text-navy-600',
      border: 'border-navy-500',
      line: 'bg-navy-200',
    },
    amber: {
      bg: 'bg-amber-100',
      text: 'text-amber-600',
      border: 'border-amber-500',
      line: 'bg-amber-200',
    },
  }

  const colors = colorClasses[color]

  return (
    <div>
      {/* Track Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal line */}
        <div className={`absolute top-8 left-0 right-0 h-1 ${colors.line}`} />

        {/* Timeline items */}
        <div className="relative flex overflow-x-auto gap-8 pb-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80"
            >
              {/* Timeline point */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center border-4 ${colors.border} bg-white shadow-lg cursor-pointer z-10`}
                >
                  <span className={`text-sm font-bold ${colors.text}`}>{item.year}</span>
                </motion.div>

                {/* Card */}
                <div className="mt-6 bg-white rounded-lg shadow-md p-6 border-t-4 border-current hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className={`text-sm ${colors.text} mb-3`}>{item.subtitle}</p>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
