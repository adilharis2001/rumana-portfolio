'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Target, Briefcase, Lightbulb, Sparkles, TrendingUp } from 'lucide-react'

export default function CurrentFocus() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background matching hero theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-purple-50/40" />

        {/* Animated gradient orbs - single on mobile for performance, all on desktop */}
        <div className="absolute top-0 -right-40 md:right-10 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-2xl md:blur-3xl animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute bottom-0 -left-40 md:left-10 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-teal-200/15 to-cyan-200/15 rounded-full blur-3xl animate-blob" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(43, 158, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 158, 179, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Current Focus
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Actively seeking opportunities starting January 2026
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Status - Compact inline on desktop, stacked on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8 text-center md:text-left">
              <StatusBadge icon={Calendar} label="Timeline" value="Graduating May 2026" gradient="from-teal-400 to-cyan-400" />
              <StatusBadge icon={MapPin} label="Location" value="Based in NYC" gradient="from-purple-400 to-pink-400" />
              <StatusBadge icon={Briefcase} label="Availability" value="Starting January 2026" gradient="from-amber-400 to-orange-400" />
            </div>
          </motion.div>

          {/* Main Focus Statement - Hero style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-amber-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-br from-teal-500 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-10">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">What I'm Looking For</h3>
                  <p className="text-base md:text-xl leading-relaxed text-white/95">
                    A position where I can leverage <strong>clinical insight</strong>, <strong>technical expertise</strong>,
                    and <strong>investment acumen</strong> to identify and scale innovations that meaningfully improve patient outcomes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two-Column: Ideal Roles & What I Bring - NO BOXES */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-12">
            {/* Ideal Roles */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full" />
              <div className="pl-5 md:pl-6 pr-2 py-4">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Ideal Roles
                  </h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  <RoleItem
                    label="Healthcare VC/Investment"
                    description="Analyst, Associate, or Principal roles at biotech-focused funds"
                    gradient="from-teal-400 to-cyan-400"
                  />
                  <RoleItem
                    label="Biotech Strategy"
                    description="Corporate development, scientific due diligence, or strategic initiatives"
                    gradient="from-teal-400 to-cyan-400"
                  />
                  <RoleItem
                    label="Clinical AI Development"
                    description="Translating AI research to clinical products"
                    gradient="from-teal-400 to-cyan-400"
                  />
                  <RoleItem
                    label="Precision Medicine"
                    description="Biomarker development, companion diagnostics"
                    gradient="from-teal-400 to-cyan-400"
                  />
                </ul>
              </div>
            </motion.div>

            {/* What I Bring */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
              <div className="pl-5 md:pl-6 pr-2 py-4">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    What I Bring
                  </h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  <ValueItem
                    label="Clinical Perspective"
                    description="1,000+ patients across 12+ specialties - I understand what patients and doctors actually need"
                    gradient="from-purple-400 to-pink-400"
                  />
                  <ValueItem
                    label="Technical Depth"
                    description="Published AI researcher with proven track record (AUC=0.94 model)"
                    gradient="from-purple-400 to-pink-400"
                  />
                  <ValueItem
                    label="Investment Experience"
                    description="$129M deployed, 30+ startups evaluated, valuation frameworks built"
                    gradient="from-purple-400 to-pink-400"
                  />
                  <ValueItem
                    label="Unique Vantage Point"
                    description="Can evaluate not just what's scientifically possible, but what's clinically necessary and commercially viable"
                    gradient="from-purple-400 to-pink-400"
                  />
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Ongoing Work - Compact horizontal layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full" />
            <div className="pl-5 md:pl-6 pr-2 py-4 md:py-5">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Ongoing Work (2024-2026)
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
                    Research
                  </h4>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1 pl-3.5">
                    <li>• Completing MD clinical training</li>
                    <li>• Advancing REPAIR AI framework to clinical validation</li>
                    <li>• Publishing remaining thesis work</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
                    Writing & Speaking
                  </h4>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1 pl-3.5">
                    <li>• Weekly Substack on healthcare innovation</li>
                    <li>• Available for conference speaking</li>
                    <li>• Advisory opportunities welcome</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Status Badge Component
function StatusBadge({ icon: Icon, label, value, gradient }: any) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
        <Icon className="w-4 h-4 md:w-4.5 md:h-4.5 text-white" strokeWidth={2.5} />
      </div>
      <div className="text-left">
        <div className="text-xs text-gray-600">{label}</div>
        <div className={`text-sm md:text-base font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}
        </div>
      </div>
    </div>
  )
}

// Role Item Component
function RoleItem({ label, description, gradient }: any) {
  return (
    <li className="flex items-start gap-2">
      <div className={`flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${gradient} mt-1.5`} />
      <div>
        <span className={`font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{label}:</span>
        <span className="text-sm md:text-base text-gray-700 ml-1">{description}</span>
      </div>
    </li>
  )
}

// Value Item Component
function ValueItem({ label, description, gradient }: any) {
  return (
    <li className="flex items-start gap-2">
      <div className={`flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${gradient} mt-1.5`} />
      <div>
        <span className={`font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{label}:</span>
        <span className="text-sm md:text-base text-gray-700 ml-1">{description}</span>
      </div>
    </li>
  )
}
