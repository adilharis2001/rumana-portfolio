'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, GraduationCap, Linkedin, BookOpen, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop version - modern gradient styling */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        {/* Subtle vertical gradient line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-300/30 to-transparent" />

        <div className="relative flex flex-col gap-4">
          {contactLinks.map((link, index) => {
            const gradients: Record<string, string> = {
              teal: 'from-teal-400 to-cyan-400',
              purple: 'from-purple-400 to-pink-400',
              amber: 'from-amber-400 to-orange-400',
            }
            const gradient = gradients[link.color] || gradients.teal

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.15, x: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

                {/* Icon container */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100 group-hover:border-transparent transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
                  <link.icon className={`w-5 h-5 relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300`} strokeWidth={2.5} />
                </div>

                {/* Tooltip with gradient */}
                <div className="absolute right-full mr-4 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-lg`} />
                  <span className="relative z-10 text-white text-sm font-medium">
                    {link.label}
                  </span>
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px]`} style={{
                    borderLeftColor: link.color === 'teal' ? '#2dd4bf' : link.color === 'purple' ? '#c084fc' : '#fb923c'
                  }} />
                </div>
              </motion.a>
            )
          })}
        </div>
      </motion.div>

      {/* Mobile version - expandable button */}
      <div className="lg:hidden">
        {/* Floating trigger button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring' }}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center active:scale-95 transition-transform border border-gray-100"
          aria-label="Contact options"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-gray-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Expanded contact menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              />

              {/* Contact options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed bottom-24 right-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-200 min-w-[200px]"
              >
                <div className="flex flex-col gap-3">
                  {contactLinks.map((link, index) => {
                    const gradients: Record<string, string> = {
                      teal: 'from-teal-400 to-cyan-400',
                      purple: 'from-purple-400 to-pink-400',
                      amber: 'from-amber-400 to-orange-400',
                    }
                    const gradient = gradients[link.color] || gradients.teal

                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-transparent transition-all active:scale-95 relative overflow-hidden"
                      >
                        {/* Glow effect on press */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-lg opacity-0 group-active:opacity-30 transition-opacity duration-200`} />

                        {/* Gradient background on press */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-active:opacity-100 transition-opacity duration-200`} />

                        <div className="relative w-10 h-10 rounded-lg bg-white shadow-md border border-gray-100 group-active:border-transparent flex items-center justify-center flex-shrink-0 transition-all">
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-active:opacity-100 rounded-lg transition-opacity duration-200`} />
                          <link.icon className="w-5 h-5 relative z-10 text-gray-600 group-active:text-white transition-colors duration-200" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 relative z-10 group-active:text-white transition-colors duration-200">{link.label}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
