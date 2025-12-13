'use client'

import { motion } from 'framer-motion'
import { Stethoscope, FlaskConical, TrendingUp, Sparkles } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'

const impactData = [
  {
    icon: Stethoscope,
    title: 'Clinical Impact',
    color: 'teal',
    gradient: 'from-teal-400 to-cyan-400',
    bgGradient: 'from-teal-50 to-cyan-50',
    metrics: [
      { value: 1000, suffix: '+', label: 'Patients', sparkline: [850, 900, 920, 950, 980, 1000] },
      { value: 12, suffix: '+', label: 'Specialties', sparkline: [8, 9, 10, 11, 11, 12] },
      { value: 4, label: 'Years Training', sparkline: [1, 2, 3, 3, 4, 4] },
    ],
  },
  {
    icon: FlaskConical,
    title: 'Research Impact',
    color: 'purple',
    gradient: 'from-purple-400 to-pink-400',
    bgGradient: 'from-purple-50 to-pink-50',
    metrics: [
      { value: 15, suffix: '+', label: 'Publications', sparkline: [5, 8, 10, 12, 14, 15] },
      { value: 1363, label: 'Citations', sparkline: [200, 450, 700, 950, 1150, 1363] },
      { value: 10, label: 'h-index', sparkline: [5, 7, 8, 9, 9, 10] },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Investment Impact',
    color: 'amber',
    gradient: 'from-amber-400 to-orange-400',
    bgGradient: 'from-amber-50 to-orange-50',
    metrics: [
      { value: 129, prefix: '$', suffix: 'M', label: 'Allocated', sparkline: [20, 45, 75, 95, 115, 129] },
      { value: 30, suffix: '+', label: 'Evaluated', sparkline: [10, 15, 20, 24, 28, 30] },
      { value: 8, label: 'Investments', sparkline: [2, 3, 5, 6, 7, 8] },
    ],
  },
  {
    icon: Sparkles,
    title: 'Innovation Impact',
    color: 'violet',
    gradient: 'from-violet-400 to-purple-400',
    bgGradient: 'from-violet-50 to-purple-50',
    metrics: [
      { value: 0.94, decimals: 2, label: 'AI Model AUC', sparkline: [0.75, 0.82, 0.87, 0.90, 0.92, 0.94] },
      { value: 10, prefix: '$', suffix: 'M', label: 'Funding', sparkline: [1, 3, 5, 7, 9, 10] },
      { value: 350, suffix: '+', label: 'Tumors', sparkline: [100, 150, 200, 250, 300, 350] },
    ],
  },
]

export default function ImpactDashboard() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background matching hero theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-teal-50/40" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-blob" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(43, 158, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 158, 179, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-8 lg:pr-32 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Impact by the Numbers
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto" />
        </motion.div>

        {/* Bento Grid Layout - Modern, No Boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {impactData.map((item, index) => (
            <ImpactColumn key={item.title} {...item} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ImpactColumnProps {
  icon: any
  title: string
  color: string
  gradient: string
  bgGradient: string
  metrics: Array<{
    value: number
    prefix?: string
    suffix?: string
    decimals?: number
    label: string
    sparkline: number[]
  }>
  delay: number
}

function ImpactColumn({ icon: Icon, title, color, gradient, bgGradient, metrics, delay }: ImpactColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
    >
      {/* Vertical gradient line accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Content */}
      <div className="pl-4 md:pl-6">
        {/* Icon with gradient */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative mb-4 md:mb-6 w-fit"
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-40`} />

          {/* Icon container */}
          <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className={`text-base md:text-2xl font-bold bg-gradient-to-br ${gradient} bg-clip-text text-transparent mb-4 md:mb-8`}>
          {title}
        </h3>

        {/* Metrics - Stacked vertically with sparklines */}
        <div className="space-y-4 md:space-y-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main metric */}
              <div className="flex items-end gap-2 md:gap-3">
                <div className="text-3xl md:text-5xl font-bold text-gray-900 leading-none">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </div>

                {/* Micro sparkline */}
                <div className="flex-1 pb-1 md:pb-2">
                  <Sparkline data={metric.sparkline} color={gradient} />
                </div>
              </div>

              {/* Label */}
              <p className="text-xs md:text-base text-gray-600 mt-1 md:mt-2 font-medium">
                {metric.label}
              </p>

              {/* Progress indicator */}
              <div className="mt-2 md:mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(metric.sparkline[metric.sparkline.length - 1] / Math.max(...metric.sparkline)) * 100}%` }}
                  transition={{ delay: delay + 0.5, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Mini sparkline component
function Sparkline({ data, color }: { data: number[], color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const normalize = (val: number) => ((val - min) / (max - min)) * 100

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - normalize(value)
    return `${x},${y}`
  }).join(' ')

  return (
    <svg
      width="100%"
      height="20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="opacity-40"
    >
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className={`${color.includes('teal') ? 'text-teal-400' : color.includes('purple') ? 'text-purple-400' : color.includes('amber') ? 'text-amber-400' : 'text-violet-400'}`} style={{ stopColor: 'currentColor', stopOpacity: 0.8 }} />
          <stop offset="100%" className={`${color.includes('teal') ? 'text-cyan-400' : color.includes('purple') ? 'text-pink-400' : color.includes('amber') ? 'text-orange-400' : 'text-purple-400'}`} style={{ stopColor: 'currentColor', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={`url(#gradient-${color})`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
