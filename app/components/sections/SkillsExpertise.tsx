'use client'

import { motion } from 'framer-motion'
import { Code, Microscope, TrendingUp, Stethoscope, Activity, Heart, Brain, Baby, Eye, Ear, Syringe, Pill } from 'lucide-react'

const specialties = [
  { name: 'Internal Medicine', icon: Stethoscope },
  { name: 'Surgery', icon: Activity },
  { name: 'Neurology', icon: Brain },
  { name: 'Oncology', icon: Heart },
  { name: 'Pediatrics', icon: Baby },
  { name: 'Psychiatry', icon: Brain },
  { name: 'OB/GYN', icon: Heart },
  { name: 'Urology', icon: Activity },
  { name: 'Emergency Medicine', icon: Syringe },
  { name: 'ENT', icon: Ear },
  { name: 'Ophthalmology', icon: Eye },
  { name: 'Family Medicine', icon: Heart },
]

export default function SkillsExpertise() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-gray-900 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* Clinical Section */}
          <ClinicalSection />

          {/* Research & Tech Section */}
          <ResearchSection />

          {/* Business Section */}
          <BusinessSection />
        </div>
      </div>
    </section>
  )
}

function ClinicalSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Section Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full" />
        <div className="pl-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Clinical Medicine</h3>
          <p className="text-gray-600 text-lg">1,000+ patients across 12+ specialties • UPMC clinical rotations</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pl-6">
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all group"
          >
            <specialty.icon className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-medium text-sm text-gray-700 group-hover:text-gray-900">{specialty.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ResearchSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Section Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
        <div className="pl-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Research & Technology</h3>
          <p className="text-gray-600 text-lg">Computational skills, laboratory expertise, and AI/ML proficiency</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 pl-6">
        {/* Computational */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-6 h-6 text-purple-600" />
            <h4 className="text-xl font-bold text-gray-900">Computational Skills</h4>
          </div>

          <SkillCategory title="Programming Languages">
            <SkillTag>Python</SkillTag>
            <SkillTag>R</SkillTag>
            <SkillTag>MATLAB</SkillTag>
            <SkillTag>Unix/Linux</SkillTag>
          </SkillCategory>

          <SkillCategory title="ML/AI">
            <SkillTag>Machine Learning</SkillTag>
            <SkillTag>Deep Learning</SkillTag>
            <SkillTag>TensorFlow/PyTorch</SkillTag>
          </SkillCategory>

          <SkillCategory title="Infrastructure">
            <SkillTag>Jupyter</SkillTag>
            <SkillTag>Cloud Computing</SkillTag>
            <SkillTag>AWS</SkillTag>
          </SkillCategory>
        </div>

        {/* Laboratory */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Microscope className="w-6 h-6 text-purple-600" />
            <h4 className="text-xl font-bold text-gray-900">Laboratory Skills</h4>
          </div>

          <SkillCategory title="Imaging Modalities">
            <SkillTag>Confocal Microscopy</SkillTag>
            <SkillTag>Fluorescence</SkillTag>
            <SkillTag>Electron Microscopy</SkillTag>
            <SkillTag>Live-cell Imaging</SkillTag>
            <SkillTag>FRAP</SkillTag>
            <SkillTag>Expansion Microscopy</SkillTag>
            <SkillTag>Focused Ion Beam</SkillTag>
          </SkillCategory>

          <SkillCategory title="Molecular Biology">
            <SkillTag>Cell Culture</SkillTag>
            <SkillTag>Sequencing</SkillTag>
            <SkillTag>Immunostaining</SkillTag>
          </SkillCategory>

          <SkillCategory title="Platforms">
            <SkillTag>CyCIF</SkillTag>
            <SkillTag>Multiplexed Imaging</SkillTag>
            <SkillTag>Single-cell Analysis</SkillTag>
          </SkillCategory>
        </div>
      </div>
    </motion.div>
  )
}

function BusinessSection() {
  const businessSkills = [
    {
      icon: TrendingUp,
      title: 'Due Diligence',
      skills: [
        'Data room analysis',
        'Scientific validation',
        'KOL interviews',
        'Competitive landscape',
        'Risk assessment',
      ],
    },
    {
      icon: Activity,
      title: 'Financial Analysis',
      skills: [
        'Valuation frameworks',
        'Market sizing',
        'Investment memos',
        'LP reporting',
        'Portfolio monitoring',
      ],
    },
    {
      icon: Brain,
      title: 'Strategy',
      skills: [
        'Investment thesis development',
        'Portfolio management',
        'Market analysis',
        'Pitch deck creation',
        'VC partnerships',
      ],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Section Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
        <div className="pl-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Business & Investment</h3>
          <p className="text-gray-600 text-lg">Venture capital experience and strategic analysis capabilities</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pl-6">
        {businessSkills.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-lg transition-all"
          >
            <category.icon className="w-10 h-10 text-amber-600 mb-4" />
            <h4 className="font-bold text-xl mb-4 text-gray-900">{category.title}</h4>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function SkillCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold mb-3 text-gray-900">{title}</h4>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 bg-gray-50 text-gray-700 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 transition-all cursor-default">
      {children}
    </span>
  )
}
