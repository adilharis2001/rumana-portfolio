'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, ExternalLink, Brain, Monitor, TrendingUp, Globe } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Signature Projects
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCaseStudy({ project, reverse }: { project: typeof projects[0]; reverse: boolean }) {
  const Icon = project.icon

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-start ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}
      >
        <div>
          <Badge variant={project.color as any} className="mb-3">
            {project.tag}
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
        </div>

        {/* Problem */}
        <div className="bg-red-50 rounded-lg p-6">
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            The Problem
          </h4>
          <ul className="space-y-2">
            {project.problem.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            The Solution
          </h4>
          <ul className="space-y-2">
            {project.solution.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Publications */}
        {project.publications.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.publications.map((pub, i) => (
              <a
                key={i}
                href={pub.doi ? `https://doi.org/${pub.doi}` : ('link' in pub ? pub.link : '#')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-500 transition-colors text-sm"
              >
                <span className="font-semibold">{pub.title}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}
      </motion.div>

      {/* Impact Card */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={reverse ? 'lg:order-1' : ''}
      >
        <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200">
          <div className={`w-16 h-16 bg-gradient-to-br from-${project.color}-400 to-${project.color}-600 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h4 className="font-bold text-xl mb-6">The Impact</h4>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {project.impact.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">{project.impact.description}</p>
        </Card>
      </motion.div>
    </div>
  )
}
