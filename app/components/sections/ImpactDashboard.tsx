'use client'

import { motion } from 'framer-motion'
import { Stethoscope, FlaskConical, TrendingUp, Sparkles } from 'lucide-react'
import Card from '../ui/Card'
import AnimatedCounter from '../ui/AnimatedCounter'

const impactData = [
  {
    icon: Stethoscope,
    title: 'Clinical Impact',
    color: 'teal',
    metrics: [
      { value: 1000, suffix: '+', label: 'Patients' },
      { value: 12, suffix: '+', label: 'Specialties' },
      { value: 4, label: 'Years Training' },
    ],
  },
  {
    icon: FlaskConical,
    title: 'Research Impact',
    color: 'navy',
    metrics: [
      { value: 15, suffix: '+', label: 'Publications' },
      { value: 1363, label: 'Citations' },
      { value: 10, label: 'h-index' },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Investment Impact',
    color: 'amber',
    metrics: [
      { value: 129, prefix: '$', suffix: 'M', label: 'Allocated' },
      { value: 30, suffix: '+', label: 'Evaluated' },
      { value: 8, label: 'Investments' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Innovation Impact',
    color: 'purple',
    metrics: [
      { value: 0.94, decimals: 2, label: 'AI Model AUC' },
      { value: 10, prefix: '$', suffix: 'M', label: 'Funding' },
      { value: 350, suffix: '+', label: 'Tumors' },
    ],
  },
]

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-500' },
  navy: { bg: 'bg-navy-100', text: 'text-navy-600', border: 'border-navy-500' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-500' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-500' },
}

export default function ImpactDashboard() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Impact by the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {impactData.map((item, index) => (
            <ImpactCard key={item.title} {...item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ImpactCardProps {
  icon: any
  title: string
  color: string
  metrics: Array<{
    value: number
    prefix?: string
    suffix?: string
    decimals?: number
    label: string
  }>
  delay: number
}

function ImpactCard({ icon: Icon, title, color, metrics, delay }: ImpactCardProps) {
  const colors = colorClasses[color] || colorClasses.teal

  return (
    <Card delay={delay} className={`border-l-4 ${colors.border}`}>
      <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`w-8 h-8 ${colors.text}`} />
      </div>

      <h3 className="text-xl font-bold mb-6">{title}</h3>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              <AnimatedCounter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals}
              />
            </div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
