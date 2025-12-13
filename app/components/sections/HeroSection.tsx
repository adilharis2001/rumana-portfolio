'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, GraduationCap, Linkedin, BookOpen, Download, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import Image from 'next/image'

const roles = [
  "MD/PhD Candidate",
  "AI Researcher",
  "Biotech Investor",
  "Healthcare Innovator"
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-48 h-48 mx-auto lg:mx-0"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl">
                <Image
                  src="/images/rumana.jpeg"
                  alt="Rumana Rashid"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Name & Title */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold font-display mb-4"
              >
                RUMANA <span className="gradient-text">(RU)</span> RASHID
              </motion.h1>

              {/* Animated Taglines */}
              <div className="space-y-2">
                {roles.map((role, index) => (
                  <motion.p
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-xl md:text-2xl text-gray-700"
                  >
                    {role}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Contact Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex space-x-4"
            >
              <IconButton
                icon={Mail}
                href="mailto:rumanarashid001@gmail.com"
                label="Email"
              />
              <IconButton
                icon={Phone}
                href="tel:540-841-5261"
                label="Phone"
              />
              <IconButton
                icon={GraduationCap}
                href="https://scholar.google.com/citations?user=PjPMy1gAAAAJ"
                label="Google Scholar"
              />
              <IconButton
                icon={Linkedin}
                href="https://www.linkedin.com/in/rurashid001/"
                label="LinkedIn"
              />
              <IconButton
                icon={BookOpen}
                href="https://biotechbytes10101.substack.com"
                label="Substack"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Button variant="primary" size="lg" className="group">
                Download CV
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Venn Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <VennDiagram />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-teal-500" />
      </motion.div>
    </section>
  )
}

function IconButton({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  )
}

function VennDiagram() {
  const circles = [
    {
      id: 'clinical',
      label: 'Clinical Medicine',
      metric: '1,000+ patients',
      color: 'rgba(43, 158, 179, 0.7)',
      x: 180,
      y: 150,
    },
    {
      id: 'research',
      label: 'AI Research',
      metric: '1,363 citations',
      color: 'rgba(30, 58, 95, 0.7)',
      x: 320,
      y: 150,
    },
    {
      id: 'venture',
      label: 'Venture Capital',
      metric: '$129M allocated',
      color: 'rgba(212, 165, 116, 0.7)',
      x: 250,
      y: 280,
    },
  ]

  return (
    <svg width="500" height="500" viewBox="0 0 500 500" className="w-full h-full">
      {/* Circles */}
      {circles.map((circle, index) => (
        <motion.g
          key={circle.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
        >
          <motion.circle
            cx={circle.x}
            cy={circle.y}
            r="100"
            fill={circle.color}
            stroke="white"
            strokeWidth="3"
            whileHover={{ scale: 1.05, opacity: 1 }}
            className="cursor-pointer transition-all"
          />
          <text
            x={circle.x}
            y={circle.y - 10}
            textAnchor="middle"
            className="text-sm font-bold fill-white"
          >
            {circle.label}
          </text>
          <text
            x={circle.x}
            y={circle.y + 10}
            textAnchor="middle"
            className="text-xs fill-white"
          >
            {circle.metric}
          </text>
        </motion.g>
      ))}

      {/* Center Label */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <text
          x="250"
          y="210"
          textAnchor="middle"
          className="text-base font-bold fill-gray-800"
        >
          Healthcare
        </text>
        <text
          x="250"
          y="230"
          textAnchor="middle"
          className="text-base font-bold fill-gray-800"
        >
          Innovation
        </text>
      </motion.g>
    </svg>
  )
}
