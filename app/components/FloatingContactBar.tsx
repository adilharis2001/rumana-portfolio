'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, GraduationCap, Linkedin, BookOpen } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    href: 'mailto:rumanarashid001@gmail.com',
    label: 'Email',
    color: 'teal'
  },
  {
    icon: Phone,
    href: 'tel:540-841-5261',
    label: 'Phone',
    color: 'teal'
  },
  {
    icon: GraduationCap,
    href: 'https://scholar.google.com/citations?user=PjPMy1gAAAAJ',
    label: 'Google Scholar',
    color: 'purple'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rurashid001/',
    label: 'LinkedIn',
    color: 'teal'
  },
  {
    icon: BookOpen,
    href: 'https://biotechbytes10101.substack.com',
    label: 'Substack',
    color: 'amber'
  },
]

export default function FloatingContactBar() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-3 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-gray-200">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-purple-50 border border-gray-200 text-gray-700 hover:from-teal-100 hover:to-purple-100 hover:border-teal-400 transition-all shadow-md"
          >
            <link.icon className="w-5 h-5 group-hover:text-teal-600 transition-colors" />

            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {link.label}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
