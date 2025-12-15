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
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background matching hero theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-teal-50/40" />

        {/* Animated gradient orbs - single on mobile for performance, all on desktop */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-2xl md:blur-3xl animate-blob" />
        <div className="hidden md:block absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(43, 158, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 158, 179, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-gray-900 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
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
      className="space-y-4 md:space-y-8"
    >
      {/* Section Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full" />
        <div className="pl-4 md:pl-6">
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-gray-900">Clinical Medicine</h3>
          <p className="text-gray-600 text-sm md:text-lg">1,000+ patients across 12+ specialties • UPMC clinical rotations</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 pl-4 md:pl-6">
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="flex items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition-all group"
          >
            <specialty.icon className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0" />
            <span className="font-medium text-xs md:text-sm text-gray-700 group-hover:text-gray-900">{specialty.name}</span>
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
      className="space-y-4 md:space-y-8"
    >
      {/* Section Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
        <div className="pl-4 md:pl-6">
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-gray-900">Research & Technology</h3>
          <p className="text-gray-600 text-sm md:text-lg">Computational skills, laboratory expertise, and AI/ML proficiency</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 pl-4 md:pl-6">
        {/* Computational */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Code className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            <h4 className="text-lg md:text-xl font-bold text-gray-900">Computational Skills</h4>
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
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Microscope className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            <h4 className="text-lg md:text-xl font-bold text-gray-900">Laboratory Skills</h4>
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
    { category: 'Due Diligence', skills: ['Data room analysis', 'Scientific validation', 'KOL interviews', 'Competitive landscape', 'Risk assessment'] },
    { category: 'Financial Analysis', skills: ['Valuation frameworks', 'Market sizing', 'Investment memos', 'LP reporting', 'Portfolio monitoring'] },
    { category: 'Strategy', skills: ['Investment thesis development', 'Portfolio management', 'Market analysis', 'Pitch deck creation', 'VC partnerships'] },
  ]

  const allSkills = businessSkills.flatMap(cat => cat.skills.map(skill => ({ category: cat.category, skill })))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4 md:space-y-8"
    >
      {/* Section Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
        <div className="pl-4 md:pl-6">
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-gray-900">Business & Investment</h3>
          <p className="text-gray-600 text-sm md:text-lg">Venture capital experience and strategic analysis capabilities</p>
        </div>
      </div>

      {/* Skills organized by category - flowing layout */}
      <div className="pl-4 md:pl-6 space-y-4 md:space-y-6">
        {businessSkills.map((category, catIndex) => (
          <div key={category.category} className="space-y-2 md:space-y-3">
            <h4 className="text-base md:text-lg font-bold text-amber-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + index * 0.03 }}
                  className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 bg-gray-50 text-gray-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function SkillCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-gray-900">{title}</h4>
      <div className="flex flex-wrap gap-1.5 md:gap-2">{children}</div>
    </div>
  )
}

function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-xs md:text-sm font-medium border border-gray-200 bg-gray-50 text-gray-700 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 transition-all cursor-default">
      {children}
    </span>
  )
}
