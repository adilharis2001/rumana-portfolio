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
  },
  {
    year: '2020-2026',
    title: 'MSTP T32 Funding',
    organization: 'University of Pittsburgh & Carnegie Mellon',
    icon: Award,
    description: 'Full MD/PhD scholarship for physician-scientist training program',
  },
  {
    year: '2020',
    title: 'Pitt Challenge Hack-a-thon Winner',
    organization: 'University of Pittsburgh',
    icon: Trophy,
    description: 'Mobile Health Records Track - 1st place',
  },
  {
    year: '2020',
    title: 'Paul & Daisy Soros Fellowship Finalist',
    organization: 'Soros Foundation',
    icon: Medal,
    description: 'Prestigious fellowship for New Americans - Top finalist',
  },
  {
    year: '2019',
    title: 'Harvard Innovation Labs Venture Program',
    organization: 'Harvard University',
    icon: DollarSign,
    description: 'Startup funding for healthcare innovation project',
  },
  {
    year: '2019',
    title: 'Amazon Web Services Research Grant',
    organization: 'AWS',
    icon: Award,
    description: 'Cloud computing credits for biomedical research',
  },
  {
    year: '2019',
    title: 'Outstanding Master\'s Student',
    organization: 'Harvard University',
    icon: Trophy,
    description: 'Selected by faculty among all graduating students',
  },
  {
    year: '2015',
    title: 'Health Unbound Medical Design Competition',
    organization: 'University of Virginia',
    icon: Trophy,
    description: 'Winner and grant recipient',
  },
  {
    year: '2013',
    title: 'Sacagawea Award',
    organization: 'University of Virginia',
    icon: Medal,
    description: 'Excellence in leadership during fire emergency',
  },
]

const media = [
  {
    outlet: 'Pittsburgh Channel 4 News',
    title: 'MD/PhD Student Develops AI for Cancer Treatment',
    type: 'TV',
  },
  {
    outlet: 'MSTP Student Spotlight',
    title: 'From Bedside to Bench: Research Journey',
    type: 'Feature',
  },
  {
    outlet: 'Harvard Medical News',
    title: 'Outstanding Master\'s Student Profile',
    type: 'Article',
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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Awards & Recognition
        </motion.h2>

        {/* Awards Timeline */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-navy-500 to-amber-500" />

            <div className="space-y-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-24"
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-6 top-6 w-5 h-5 rounded-full bg-teal-500 border-4 border-white shadow-lg"
                  />

                  {/* Award card */}
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-2">
                          {award.year}
                        </span>
                        <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                        <p className="text-gray-600">{award.organization}</p>
                      </div>
                      <award.icon className="w-8 h-8 text-amber-500 flex-shrink-0" />
                    </div>
                    {award.description && (
                      <p className="text-gray-700 text-sm">{award.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Media, Speaking, Teaching Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Media Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Tv className="w-6 h-6 text-teal-600" />
                Media Coverage
              </h3>
              <div className="space-y-4">
                {media.map((item, i) => (
                  <div key={i} className="pb-4 border-b border-gray-200 last:border-0">
                    <div className="font-semibold text-gray-900 mb-1">{item.outlet}</div>
                    <div className="text-sm text-gray-600">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Invited Speaking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Mic className="w-6 h-6 text-navy-600" />
                Invited Talks
              </h3>
              <div className="space-y-4">
                {speaking.map((item, i) => (
                  <div key={i} className="pb-4 border-b border-gray-200 last:border-0">
                    <div className="font-semibold text-gray-900 mb-1">{item.event}</div>
                    <div className="text-sm text-gray-600 mb-1">{item.topic}</div>
                    <div className="text-xs text-teal-600 font-semibold">{item.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Teaching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-amber-600" />
                Teaching
              </h3>
              <div className="space-y-4">
                {teaching.map((item, i) => (
                  <div key={i} className="pb-4 border-b border-gray-200 last:border-0">
                    <div className="font-semibold text-gray-900 mb-1">{item.course}</div>
                    <div className="text-sm text-gray-600">{item.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
