'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Target, Briefcase, Lightbulb } from 'lucide-react'
import Card from '../ui/Card'

export default function CurrentFocus() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Current Focus
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatusCard
              icon={Calendar}
              label="Timeline"
              value="Graduating May 2026"
              description="MD degree completion"
              color="teal"
            />
            <StatusCard
              icon={MapPin}
              label="Location"
              value="Based in NYC"
              description="Available for in-person roles"
              color="navy"
            />
            <StatusCard
              icon={Briefcase}
              label="Availability"
              value="Starting January 2026"
              description="Full-time opportunities"
              color="amber"
            />
          </div>

          {/* Main Focus Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500 to-navy-600 rounded-2xl p-8 md:p-12 text-white mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <Target className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">What I'm Looking For</h3>
                <p className="text-xl leading-relaxed opacity-90">
                  A position where I can leverage <strong>clinical insight</strong>, <strong>technical expertise</strong>,
                  and <strong>investment acumen</strong> to identify and scale innovations that meaningfully improve patient outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interest Areas */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <Lightbulb className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ideal Roles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">•</span>
                    <span className="text-gray-700"><strong>Healthcare VC/Investment:</strong> Analyst, Associate, or Principal roles at biotech-focused funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">•</span>
                    <span className="text-gray-700"><strong>Biotech Strategy:</strong> Corporate development, scientific due diligence, or strategic initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">•</span>
                    <span className="text-gray-700"><strong>Clinical AI Development:</strong> Translating AI research to clinical products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">•</span>
                    <span className="text-gray-700"><strong>Precision Medicine:</strong> Biomarker development, companion diagnostics</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <Target className="w-10 h-10 text-navy-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-navy-500 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Clinical Perspective:</strong> 1,000+ patients across 12+ specialties - I understand what patients and doctors actually need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-500 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Technical Depth:</strong> Published AI researcher with proven track record (AUC=0.94 model)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-500 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Investment Experience:</strong> $129M deployed, 30+ startups evaluated, valuation frameworks built</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-500 font-bold">✓</span>
                    <span className="text-gray-700"><strong>Unique Vantage Point:</strong> Can evaluate not just what's scientifically possible, but what's clinically necessary and commercially viable</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Current Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-white rounded-lg shadow-md border-l-4 border-teal-500"
          >
            <h3 className="text-2xl font-bold mb-4">Ongoing Work (2024-2026)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🔬 Research</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Completing MD clinical training</li>
                  <li>• Advancing REPAIR AI framework to clinical validation</li>
                  <li>• Publishing remaining thesis work</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">✍️ Writing & Speaking</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Weekly Substack on healthcare innovation</li>
                  <li>• Available for conference speaking</li>
                  <li>• Advisory opportunities welcome</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface StatusCardProps {
  icon: any
  label: string
  value: string
  description: string
  color: 'teal' | 'navy' | 'amber'
}

function StatusCard({ icon: Icon, label, value, description, color }: StatusCardProps) {
  const colorClasses = {
    teal: 'bg-teal-100 text-teal-600',
    navy: 'bg-navy-100 text-navy-600',
    amber: 'bg-amber-100 text-amber-600',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 text-center"
    >
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      <div className="text-xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </motion.div>
  )
}
