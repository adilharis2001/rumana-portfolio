'use client'

import { motion } from 'framer-motion'
import { Award, Tv, Mic, BookOpen, Trophy, DollarSign, Medal } from 'lucide-react'

const awards = [
  {
    year: '2022-2024',
    title: 'National Library of Medicine T15 Funding',
    organization: 'NIH',
    icon: DollarSign,
    description: 'Predoctoral training grant for biomedical informatics research',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    year: '2020-2026',
    title: 'MSTP T32 Funding',
    organization: 'University of Pittsburgh & Carnegie Mellon',
    icon: Award,
    description: 'Full MD/PhD scholarship for physician-scientist training program',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    year: '2020',
    title: 'Pitt Challenge Hack-a-thon Winner',
    organization: 'University of Pittsburgh',
    icon: Trophy,
    description: 'Mobile Health Records Track - 1st place',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    year: '2020',
    title: 'Paul & Daisy Soros Fellowship Finalist',
    organization: 'Soros Foundation',
    icon: Medal,
    description: 'Prestigious fellowship for New Americans - Top finalist',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    year: '2019',
    title: 'Harvard Innovation Labs Venture Program',
    organization: 'Harvard University',
    icon: DollarSign,
    description: 'Startup funding for healthcare innovation project',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    year: '2019',
    title: 'Amazon Web Services Research Grant',
    organization: 'AWS',
    icon: Award,
    description: 'Cloud computing credits for biomedical research',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    year: '2019',
    title: 'Outstanding Master\'s Student',
    organization: 'Harvard University',
    icon: Trophy,
    description: 'Selected by faculty among all graduating students',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    year: '2015',
    title: 'Health Unbound Medical Design Competition',
    organization: 'University of Virginia',
    icon: Trophy,
    description: 'Winner and grant recipient',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    year: '2013',
    title: 'Sacagawea Award',
    organization: 'University of Virginia',
    icon: Medal,
    description: 'Excellence in leadership during fire emergency',
    gradient: 'from-amber-400 to-orange-400',
  },
]

const media = [
  {
    outlet: 'Pittsburgh Channel 4 News',
    title: 'MD/PhD Student Develops AI for Cancer Treatment',
  },
  {
    outlet: 'MSTP Student Spotlight',
    title: 'From Bedside to Bench: Research Journey',
  },
  {
    outlet: 'Harvard Medical News',
    title: 'Outstanding Master\'s Student Profile',
  },
]

const speaking = [
  {
    event: 'Washington University Brain Tumor Symposium',
    topic: 'DNA Damage Biomarkers in Glioblastoma',
    year: '2024',
  },
  {
    event: 'Harvard Ludwig Cancer Center',
    topic: 'AI Applications in Precision Oncology',
    year: '2023',
  },
]

const teaching = [
  {
    course: 'Deep Learning for Biomedical Applications',
    role: 'Instructor',
  },
  {
    course: 'Computationally-Enabled Medicine',
    role: 'Instructor',
  },
]

export default function AwardsRecognition() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background matching hero theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-purple-50/40" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Awards & Recognition
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Honors, grants, media features, and academic contributions
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Awards Grid - Compact 2-column on desktop, 1-column on mobile */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative group"
              >
                {/* Gradient accent line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${award.gradient} rounded-full`} />

                {/* Content */}
                <div className="pl-5 pr-3 py-3 bg-white/80 backdrop-blur-sm relative z-10">
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${award.gradient} flex items-center justify-center shadow-md`}>
                      <award.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className={`text-base md:text-lg font-bold bg-gradient-to-br ${award.gradient} bg-clip-text text-transparent leading-tight`}>
                          {award.title}
                        </h3>
                        <span className={`flex-shrink-0 text-xs font-bold bg-gradient-to-r ${award.gradient} bg-clip-text text-transparent`}>
                          {award.year}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 font-medium mb-1">{award.organization}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Recognition - Compact 3-column grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Media Coverage */}
            <div className="relative group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full" />
              <div className="pl-5 pr-3 py-4 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-md">
                    <Tv className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-br from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Media
                  </h3>
                </div>
                <div className="space-y-3">
                  {media.map((item, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-sm font-semibold text-gray-900">{item.outlet}</div>
                      <div className="text-xs text-gray-600 leading-relaxed">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Invited Speaking */}
            <div className="relative group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
              <div className="pl-5 pr-3 py-4 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-md">
                    <Mic className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Invited Talks
                  </h3>
                </div>
                <div className="space-y-3">
                  {speaking.map((item, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-sm font-semibold text-gray-900">{item.event}</div>
                      <div className="text-xs text-gray-600 leading-relaxed mb-1">{item.topic}</div>
                      <div className="text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {item.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Teaching */}
            <div className="relative group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full" />
              <div className="pl-5 pr-3 py-4 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md">
                    <BookOpen className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-br from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Teaching
                  </h3>
                </div>
                <div className="space-y-3">
                  {teaching.map((item, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-sm font-semibold text-gray-900">{item.course}</div>
                      <div className="text-xs text-gray-600">{item.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
