'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

const narrativeLines = [
  "From the bedside to the bench to the boardroom,",
  "I bridge three worlds to transform healthcare.",
  "",
  "As a physician, I see patients' unmet needs.",
  "As a scientist, I develop AI solutions.",
  "As an investor, I identify innovations that scale.",
  "",
  "This unique vantage point allows me to evaluate",
  "not just what's scientifically possible,",
  "but what's clinically necessary",
  "and commercially viable.",
]

export default function NarrativeSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images (could be added later) */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-teal-800 to-navy-900">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Text Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {narrativeLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
                className={`text-white ${
                  line === "" ? "h-4" : index < 2 ? "text-3xl md:text-4xl font-bold" : "text-xl md:text-2xl"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
