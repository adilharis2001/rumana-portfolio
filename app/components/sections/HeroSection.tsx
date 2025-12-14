'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const roles = [
  "MD/PhD Candidate",
  "AI Researcher",
  "Biotech Investor",
  "Healthcare Innovator"
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background with Visual Interest */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50/40" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Enhanced grid pattern with animation */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(43, 158, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 158, 179, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Floating dots pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(43, 158, 179, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Subtle diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="rgba(43, 158, 179, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-4 py-8 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,1.2fr] gap-6 md:gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Compact Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4 lg:space-y-4 text-center md:text-left"
          >
            {/* Profile Image - Larger on mobile */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-52 h-52 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto md:mx-0"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-purple-200 rounded-full blur-2xl opacity-30" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/rumana.jpeg"
                  alt="Rumana Rashid"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Name & Title - Better mobile styling */}
            <div className="space-y-4 lg:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center md:items-start"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-3 leading-tight text-gray-900">
                  RUMANA{' '}
                  <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-purple-600 bg-clip-text text-transparent">
                    (RU)
                  </span>{' '}
                  RASHID
                </h1>
                <div className="h-1 w-24 lg:w-24 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full" />
              </motion.div>

              {/* Animated Taglines - Better spacing */}
              <div className="space-y-2 lg:space-y-2">
                {roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-center md:justify-start gap-2.5 group"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:scale-150 transition-transform" />
                    <p className="text-lg md:text-lg lg:text-xl text-gray-700 group-hover:text-gray-900 group-hover:translate-x-2 transition-all">
                      {role}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Subtitle - Better readability */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-base lg:text-base text-gray-600 max-w-xl leading-relaxed mx-auto md:mx-0"
              >
                Leveraging clinical medicine, AI research, and venture capital to drive innovations that transform healthcare.
              </motion.p>
            </div>

            {/* CTA Buttons - Centered on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
            >
              <a
                href="/pdfs/CV_Rumana_Rashid.pdf"
                download
                className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-bold text-white overflow-hidden hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-lg text-sm lg:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <Download className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="#contact"
                className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 hover:border-teal-500 transition-all inline-block text-sm lg:text-base"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Venn Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] md:h-[450px] lg:h-[550px] flex items-center justify-center"
          >
            {/* Clean white card with subtle shadow */}
            <div className="relative w-full h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 p-4 md:p-6 lg:p-8 shadow-xl flex items-center justify-center">
              <VennDiagramEnhanced />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile to avoid overlap */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-8 h-8" />
        </div>
      </motion.div>
    </section>
  )
}

function VennDiagramEnhanced() {
  const circles = [
    {
      id: 'clinical',
      label: 'Clinical Medicine',
      metric: '1,000+',
      subMetric: 'patients',
      color: '#5EEAD4', // Teal-300 for lighter pastel
      glowColor: 'rgba(94, 234, 212, 0.3)',
    },
    {
      id: 'research',
      label: 'AI Research',
      metric: '1,363',
      subMetric: 'citations',
      color: '#C084FC', // Purple-400 for lighter pastel
      glowColor: 'rgba(192, 132, 252, 0.3)',
    },
    {
      id: 'venture',
      label: 'Venture Capital',
      metric: '$129M',
      subMetric: 'allocated',
      color: '#FBBF24', // Amber-400 for lighter pastel
      glowColor: 'rgba(251, 191, 36, 0.3)',
    },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 600 550" className="drop-shadow-lg" preserveAspectRatio="xMidYMid meet">
        <defs>
          {circles.map((circle) => (
            <filter key={`glow-${circle.id}`} id={`glow-${circle.id}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          ))}

          {/* Gradient definitions */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: circles[0].color, stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: circles[0].color, stopOpacity: 0.3 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: circles[1].color, stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: circles[1].color, stopOpacity: 0.3 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: circles[2].color, stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: circles[2].color, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>

        {/* Circles with enhanced styling */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Clinical Medicine - Top Left */}
          <motion.circle
            cx="220"
            cy="190"
            r="140"
            fill="url(#grad1)"
            stroke={circles[0].color}
            strokeWidth="3"
            filter={`url(#glow-clinical)`}
            whileHover={{ scale: 1.05, strokeWidth: 5 }}
            className="cursor-pointer transition-all"
          />

          {/* AI Research - Top Right */}
          <motion.circle
            cx="380"
            cy="190"
            r="140"
            fill="url(#grad2)"
            stroke={circles[1].color}
            strokeWidth="3"
            filter={`url(#glow-research)`}
            whileHover={{ scale: 1.05, strokeWidth: 5 }}
            className="cursor-pointer transition-all"
          />

          {/* Venture Capital - Bottom */}
          <motion.circle
            cx="300"
            cy="330"
            r="140"
            fill="url(#grad3)"
            stroke={circles[2].color}
            strokeWidth="3"
            filter={`url(#glow-venture)`}
            whileHover={{ scale: 1.05, strokeWidth: 5 }}
            className="cursor-pointer transition-all"
          />
        </motion.g>

        {/* Labels with better positioning */}
        <g className="font-bold">
          {/* Clinical Medicine */}
          <text x="220" y="150" textAnchor="middle" className="text-lg fill-gray-800" style={{ fontSize: '18px' }}>
            Clinical Medicine
          </text>
          <text x="220" y="180" textAnchor="middle" className="text-3xl fill-gray-900" style={{ fontSize: '32px', fontWeight: 'bold' }}>
            {circles[0].metric}
          </text>
          <text x="220" y="205" textAnchor="middle" className="text-sm fill-gray-600" style={{ fontSize: '14px' }}>
            {circles[0].subMetric}
          </text>

          {/* AI Research */}
          <text x="380" y="150" textAnchor="middle" className="text-lg fill-gray-800" style={{ fontSize: '18px' }}>
            AI Research
          </text>
          <text x="380" y="180" textAnchor="middle" className="text-3xl fill-gray-900" style={{ fontSize: '32px', fontWeight: 'bold' }}>
            {circles[1].metric}
          </text>
          <text x="380" y="205" textAnchor="middle" className="text-sm fill-gray-600" style={{ fontSize: '14px' }}>
            {circles[1].subMetric}
          </text>

          {/* Venture Capital */}
          <text x="300" y="310" textAnchor="middle" className="text-lg fill-gray-800" style={{ fontSize: '18px' }}>
            Venture Capital
          </text>
          <text x="300" y="340" textAnchor="middle" className="text-3xl fill-gray-900" style={{ fontSize: '32px', fontWeight: 'bold' }}>
            {circles[2].metric}
          </text>
          <text x="300" y="365" textAnchor="middle" className="text-sm fill-gray-600" style={{ fontSize: '14px' }}>
            {circles[2].subMetric}
          </text>

          {/* Center intersection label */}
          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <circle cx="300" cy="240" r="50" fill="rgba(94, 234, 212, 0.1)" stroke="#5EEAD4" strokeWidth="2" />
            <text x="300" y="235" textAnchor="middle" className="text-base fill-gray-800" style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Healthcare
            </text>
            <text x="300" y="255" textAnchor="middle" className="text-base fill-gray-800" style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Innovation
            </text>
          </motion.g>
        </g>
      </svg>

      {/* Stats around the diagram */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200 shadow-md">
        <p className="text-gray-800 text-sm font-semibold">h-index: 10</p>
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200 shadow-md">
        <p className="text-gray-800 text-sm font-semibold">12+ Specialties</p>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200 shadow-md">
        <p className="text-gray-800 text-sm font-semibold">15+ Publications</p>
      </div>
    </div>
  )
}
