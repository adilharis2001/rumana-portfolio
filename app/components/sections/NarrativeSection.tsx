'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { Stethoscope, Brain, TrendingUp } from 'lucide-react'

const narrativeContent = {
  headline: "From the bedside to the bench to the boardroom,",
  subheadline: "I bridge three worlds to transform healthcare.",

  perspectives: [
    {
      icon: Stethoscope,
      role: "As a physician",
      insight: "I see patients' unmet needs.",
      color: "teal",
      gradient: "from-teal-400 to-cyan-400",
      bgGradient: "from-teal-500/20 to-cyan-500/20"
    },
    {
      icon: Brain,
      role: "As a scientist",
      insight: "I develop AI solutions.",
      color: "purple",
      gradient: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: TrendingUp,
      role: "As an investor",
      insight: "I identify innovations that scale.",
      color: "amber",
      gradient: "from-amber-400 to-orange-400",
      bgGradient: "from-amber-500/20 to-orange-500/20"
    }
  ],

  conclusion: [
    "This unique vantage point allows me to evaluate",
    "not just what's scientifically possible,",
    "but what's clinically necessary",
    "and commercially viable."
  ]
}

export default function NarrativeSection() {
  return (
    <section className="relative py-20 lg:py-32 pb-10 lg:pb-16 overflow-hidden">
      <div className="flex items-center justify-center min-h-screen">
        {/* Enhanced Background matching hero theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* White base with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-teal-50/40" />

          {/* Animated gradient orbs - single on mobile for performance, all 3 on desktop */}
          <div className="absolute top-20 -right-20 md:right-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-2xl md:blur-3xl animate-blob" />
          <div className="hidden md:block absolute bottom-20 -left-20 md:left-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(43, 158, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 158, 179, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

          {/* Floating dots pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, rgba(43, 158, 179, 0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-8 lg:pr-32">
          <div className="max-w-6xl mx-auto">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-center mb-16 lg:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {narrativeContent.headline}
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-teal-600 via-purple-600 to-amber-600 bg-clip-text text-transparent font-semibold">
                {narrativeContent.subheadline}
              </p>
            </motion.div>

            {/* Three Perspectives - Flowing Layout */}
            <div className="relative mb-16 lg:mb-20">
              {/* Desktop: Horizontal flow with connecting lines */}
              <div className="hidden md:flex items-start justify-between gap-12 lg:gap-16 relative">
                {/* Connecting line */}
                <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-300 via-purple-300 to-amber-300 opacity-30" />

                {narrativeContent.perspectives.map((perspective, index) => (
                  <motion.div
                    key={perspective.role}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: false, margin: "-50px" }}
                    className="flex-1 relative"
                  >
                    {/* Icon with gradient glow */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative mb-6 mx-auto w-fit"
                    >
                      {/* Gradient glow background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${perspective.gradient} rounded-full blur-2xl opacity-40`} />

                      {/* Icon container */}
                      <div className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${perspective.gradient} flex items-center justify-center shadow-xl`}>
                        <perspective.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={2.5} />
                      </div>

                      {/* Pulsing ring */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className={`absolute inset-0 rounded-full border-2 border-gradient-to-br ${perspective.gradient}`}
                        style={{ borderImage: `linear-gradient(to bottom right, ${perspective.color}) 1` }}
                      />
                    </motion.div>

                    {/* Text content - floating */}
                    <div className="text-center space-y-3">
                      <h3 className={`text-xl lg:text-2xl font-bold bg-gradient-to-br ${perspective.gradient} bg-clip-text text-transparent`}>
                        {perspective.role}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        {perspective.insight}
                      </p>
                    </div>

                    {/* Decorative dots */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-br ${perspective.gradient}`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Mobile: Vertical flow */}
              <div className="md:hidden space-y-12">
                {narrativeContent.perspectives.map((perspective, index) => (
                  <motion.div
                    key={perspective.role}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    viewport={{ once: false, margin: "-30px" }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Vertical connecting line */}
                    {index < narrativeContent.perspectives.length - 1 && (
                      <div className={`absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b ${perspective.gradient} opacity-20 translate-y-8`} />
                    )}

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative flex-shrink-0"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${perspective.gradient} rounded-full blur-xl opacity-40`} />
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${perspective.gradient} flex items-center justify-center shadow-lg`}>
                        <perspective.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className={`text-xl font-bold bg-gradient-to-br ${perspective.gradient} bg-clip-text text-transparent mb-2`}>
                        {perspective.role}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {perspective.insight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Conclusion - Minimal design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: false, margin: "-50px" }}
              className="text-center relative"
            >
              {/* Decorative gradient line above */}
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto mb-8" />

              <div className="max-w-3xl mx-auto space-y-2">
                {narrativeContent.conclusion.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: false }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              {/* Decorative gradient line below */}
              <div className="w-32 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-teal-500 rounded-full mx-auto mt-8" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
