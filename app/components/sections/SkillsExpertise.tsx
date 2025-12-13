'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Microscope, TrendingUp, Stethoscope, Activity, Heart, Brain, Baby, Eye, Ear, Syringe, Pill } from 'lucide-react'
import Card from '../ui/Card'

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
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 text-center"
        >
          Skills & Expertise
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
            Overview
          </TabButton>
          <TabButton active={activeTab === 'clinical'} onClick={() => setActiveTab('clinical')}>
            Clinical
          </TabButton>
          <TabButton active={activeTab === 'research'} onClick={() => setActiveTab('research')}>
            Research & Tech
          </TabButton>
          <TabButton active={activeTab === 'business'} onClick={() => setActiveTab('business')}>
            Business
          </TabButton>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'clinical' && <ClinicalTab />}
          {activeTab === 'research' && <ResearchTab />}
          {activeTab === 'business' && <BusinessTab />}
        </div>
      </div>
    </section>
  )
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
        active
          ? 'bg-teal-500 text-white shadow-lg'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  )
}

function OverviewTab() {
  const expertiseAreas = [
    {
      title: 'Clinical Medicine',
      color: 'from-teal-400 to-cyan-500',
      icon: Stethoscope,
      highlights: [
        '1,000+ patients across 12+ specialties',
        'UPMC clinical rotations',
        'Real-world healthcare insights'
      ]
    },
    {
      title: 'AI & Machine Learning',
      color: 'from-purple-400 to-pink-500',
      icon: Brain,
      highlights: [
        'Deep learning & neural networks',
        'Medical imaging analysis',
        'Computational research'
      ]
    },
    {
      title: 'Biotech Investment',
      color: 'from-amber-400 to-orange-500',
      icon: TrendingUp,
      highlights: [
        'Due diligence & market analysis',
        'Portfolio management',
        'Venture capital experience'
      ]
    },
    {
      title: 'Data Science',
      color: 'from-blue-400 to-indigo-500',
      icon: Code,
      highlights: [
        'Python, R, MATLAB',
        'Statistical modeling',
        'Large-scale data analysis'
      ]
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Multidisciplinary Expertise</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A unique combination of clinical medicine, AI research, and venture capital experience enables
          comprehensive evaluation of healthcare innovations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Gradient accent line on left */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${area.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${area.color}`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 pt-2">{area.title}</h4>
              </div>

              <ul className="space-y-2">
                {area.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.color} mt-1.5 flex-shrink-0`} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ClinicalTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">1,000+ Patients Across 12+ Specialties</h3>
        <p className="text-gray-600">4-8 week clinical rotations at UPMC hospitals</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card hover className="text-center">
              <specialty.icon className="w-10 h-10 mx-auto mb-3 text-teal-600" />
              <h4 className="font-semibold text-sm">{specialty.name}</h4>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-teal-50 rounded-lg">
        <h4 className="font-bold mb-2">Clinical Experience Highlights:</h4>
        <ul className="space-y-2 text-gray-700">
          <li>• Performed interviews, physical exams, procedures, and EHR documentation</li>
          <li>• Contributed to diagnosis and management across diverse clinical contexts</li>
          <li>• Gained insight into clinical unmet needs and real-world integration of innovations</li>
        </ul>
      </div>
    </motion.div>
  )
}

function ResearchTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid lg:grid-cols-2 gap-8"
    >
      {/* Computational */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code className="w-6 h-6 text-teal-600" />
          Computational Skills
        </h3>

        <div className="space-y-6">
          <SkillCategory title="Programming Languages">
            <SkillTag level="expert">Python</SkillTag>
            <SkillTag level="expert">R</SkillTag>
            <SkillTag level="advanced">MATLAB</SkillTag>
            <SkillTag level="advanced">Unix/Linux</SkillTag>
          </SkillCategory>

          <SkillCategory title="ML/AI">
            <SkillTag level="expert">Machine Learning</SkillTag>
            <SkillTag level="expert">Deep Learning</SkillTag>
            <SkillTag level="advanced">TensorFlow/PyTorch</SkillTag>
          </SkillCategory>

          <SkillCategory title="Infrastructure">
            <SkillTag level="expert">Jupyter</SkillTag>
            <SkillTag level="advanced">Cloud Computing</SkillTag>
            <SkillTag level="advanced">AWS</SkillTag>
          </SkillCategory>
        </div>
      </div>

      {/* Laboratory */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Microscope className="w-6 h-6 text-navy-600" />
          Laboratory Skills
        </h3>

        <div className="space-y-6">
          <SkillCategory title="Imaging Modalities">
            <SkillTag level="expert">Confocal Microscopy</SkillTag>
            <SkillTag level="expert">Fluorescence</SkillTag>
            <SkillTag level="advanced">Electron Microscopy</SkillTag>
            <SkillTag level="advanced">Live-cell Imaging</SkillTag>
            <SkillTag level="intermediate">FRAP</SkillTag>
            <SkillTag level="intermediate">Expansion Microscopy</SkillTag>
            <SkillTag level="intermediate">Focused Ion Beam</SkillTag>
          </SkillCategory>

          <SkillCategory title="Molecular Biology">
            <SkillTag level="expert">Cell Culture</SkillTag>
            <SkillTag level="advanced">Sequencing</SkillTag>
            <SkillTag level="advanced">Immunostaining</SkillTag>
          </SkillCategory>

          <SkillCategory title="Platforms">
            <SkillTag level="expert">CyCIF</SkillTag>
            <SkillTag level="expert">Multiplexed Imaging</SkillTag>
            <SkillTag level="expert">Single-cell Analysis</SkillTag>
          </SkillCategory>
        </div>
      </div>
    </motion.div>
  )
}

function BusinessTab() {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-3 gap-8"
    >
      {businessSkills.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <category.icon className="w-12 h-12 text-amber-600 mb-4" />
            <h4 className="font-bold text-xl mb-4">{category.title}</h4>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                  <span className="text-amber-500">✓</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
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

function SkillTag({ level, children }: { level: 'expert' | 'advanced' | 'intermediate'; children: React.ReactNode }) {
  const colors = {
    expert: 'bg-green-100 text-green-800 border-green-300',
    advanced: 'bg-blue-100 text-blue-800 border-blue-300',
    intermediate: 'bg-gray-100 text-gray-800 border-gray-300',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${colors[level]} hover:scale-105 transition-transform cursor-default`}>
      {children}
    </span>
  )
}

function getColorValue(color: string) {
  const colors: Record<string, string> = {
    teal: '#2B9EB3',
    navy: '#1E3A5F',
    amber: '#D4A574',
    purple: '#9333ea',
  }
  return colors[color] || colors.teal
}
