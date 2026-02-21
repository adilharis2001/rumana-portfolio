'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Code2, Microscope, TrendingUp, Stethoscope, Activity, Heart,
  Brain, Baby, Eye, Ear, Syringe, FlaskConical, Database,
} from 'lucide-react'

/* ─── Data (unchanged from original) ─────────────────────────── */

const clinicalSpecialties = [
  { name: 'Internal Medicine', icon: Stethoscope },
  { name: 'Surgery', icon: Activity },
  { name: 'Neurology', icon: Brain },
  { name: 'Oncology', icon: Heart },
  { name: 'Pediatrics', icon: Baby },
  { name: 'Psychiatry', icon: Brain },
  { name: 'OB/GYN', icon: Heart },
  { name: 'Urology', icon: Activity },
  { name: 'Emergency Medicine', icon: Syringe },
  { name: 'ENT', icon: Ear },
  { name: 'Ophthalmology', icon: Eye },
  { name: 'Family Medicine', icon: Heart },
]

const investmentSkills = [
  { label: 'Due Diligence', tags: ['Data room analysis', 'Scientific validation', 'KOL interviews', 'Risk assessment'] },
  { label: 'Financial Analysis', tags: ['Valuation frameworks', 'Market sizing', 'Investment memos', 'LP reporting'] },
  { label: 'Strategy', tags: ['Investment thesis', 'Portfolio management', 'Market analysis', 'VC partnerships'] },
]

/* ─── Neural canvas (subtle background for computational card) ── */
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()

    const nodes = [
      { x: 0.12, y: 0.25 }, { x: 0.12, y: 0.5 }, { x: 0.12, y: 0.75 },
      { x: 0.38, y: 0.18 }, { x: 0.38, y: 0.42 }, { x: 0.38, y: 0.65 }, { x: 0.38, y: 0.88 },
      { x: 0.65, y: 0.28 }, { x: 0.65, y: 0.52 }, { x: 0.65, y: 0.76 },
      { x: 0.88, y: 0.38 }, { x: 0.88, y: 0.62 },
    ]
    const edges = [
      [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [2, 6],
      [3, 7], [3, 8], [4, 7], [4, 8], [4, 9], [5, 8], [5, 9], [6, 9],
      [7, 10], [7, 11], [8, 10], [8, 11], [9, 11],
    ]

    let t = 0, animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const w = canvas.width, h = canvas.height
      edges.forEach(([a, b], i) => {
        const pulse = (Math.sin(t * 0.04 + i * 0.6) + 1) / 2
        ctx.beginPath()
        ctx.moveTo(nodes[a].x * w, nodes[a].y * h)
        ctx.lineTo(nodes[b].x * w, nodes[b].y * h)
        ctx.strokeStyle = `rgba(139,92,246,${0.06 + pulse * 0.14})`
        ctx.lineWidth = 1; ctx.stroke()
      })
      nodes.forEach((n, i) => {
        const pulse = (Math.sin(t * 0.05 + i * 0.8) + 1) / 2
        const r = 3 + pulse * 2
        const grd = ctx.createRadialGradient(n.x * w, n.y * h, 0, n.x * w, n.y * h, r * 3)
        grd.addColorStop(0, `rgba(167,139,250,${0.55 + pulse * 0.35})`)
        grd.addColorStop(1, 'rgba(139,92,246,0)')
        ctx.beginPath(); ctx.arc(n.x * w, n.y * h, r, 0, Math.PI * 2)
        ctx.fillStyle = grd; ctx.fill()
      })
      t++; animId = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-70" />
}

/* ─── Shared helpers ──────────────────────────────────────────── */

function BentoCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}

function Tag({ children, color = 'gray' }: { children: React.ReactNode; color?: 'gray' | 'teal' | 'purple' | 'amber' }) {
  const styles = {
    gray: 'bg-gray-50   border-gray-200   text-gray-700   hover:border-gray-400',
    teal: 'bg-teal-50   border-teal-200   text-teal-700   hover:border-teal-400',
    purple: 'bg-purple-50 border-purple-200 text-purple-700 hover:border-purple-400',
    amber: 'bg-amber-50  border-amber-200  text-amber-700  hover:border-amber-400',
  }
  return (
    <span className={`inline-block px-3 py-1.5 rounded-lg text-sm font-medium border transition-all cursor-default ${styles[color]}`}>
      {children}
    </span>
  )
}

function CardHeader({ icon: Icon, label, gradient }: { icon: React.ElementType; label: string; gradient: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm flex-shrink-0`}>
        <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-base font-semibold text-gray-500 uppercase tracking-wide">{label}</span>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{children}</h4>
}

/* ─── Main component ──────────────────────────────────────────── */

export default function SkillsExpertise() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background — identical to rest of site */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-teal-50/40" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-2xl md:blur-3xl animate-blob" />
        <div className="hidden md:block absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(43,158,179,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(43,158,179,0.1) 1px,transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Skills &amp; Expertise</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-4">

          {/* ── Row 1: 3 symmetric research columns ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* ① Computational Skills */}
            <BentoCard delay={0} className="p-6 bg-gradient-to-br from-purple-50/70 to-white border-purple-200/60">
              <NeuralCanvas />
              <div className="relative z-10">
                <CardHeader icon={Code2} label="Computational Skills" gradient="from-purple-400 to-pink-400" />

                <div className="space-y-4">
                  <div>
                    <SubHeading>Programming Languages</SubHeading>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'R', 'MATLAB', 'Unix/Linux'].map(s => <Tag key={s} color="purple">{s}</Tag>)}
                    </div>
                  </div>
                  <div>
                    <SubHeading>ML / AI</SubHeading>
                    <div className="flex flex-wrap gap-1.5">
                      {['Machine Learning', 'Deep Learning', 'TensorFlow/PyTorch'].map(s => <Tag key={s} color="purple">{s}</Tag>)}
                    </div>
                  </div>
                  <div>
                    <SubHeading>Infrastructure</SubHeading>
                    <div className="flex flex-wrap gap-1.5">
                      {['Jupyter', 'Cloud Computing', 'AWS'].map(s => <Tag key={s} color="purple">{s}</Tag>)}
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* ② Laboratory Skills */}
            <BentoCard delay={0.08} className="p-6 bg-gradient-to-br from-violet-50/50 to-white border-violet-200/50">
              <CardHeader icon={Microscope} label="Laboratory Skills" gradient="from-violet-400 to-purple-500" />

              <div className="space-y-4">
                <div>
                  <SubHeading>Imaging Modalities</SubHeading>
                  <div className="flex flex-wrap gap-1.5">
                    {['Multiplexed Fluorescence Imaging', 'Confocal Microscopy', 'Fluorescence', 'Electron Microscopy', 'Live-cell Imaging', 'FRAP', 'Expansion Microscopy', 'Focused Ion Beam'].map(s => <Tag key={s} color="purple">{s}</Tag>)}
                  </div>
                </div>
                <div>
                  <SubHeading>Molecular Biology</SubHeading>
                  <div className="flex flex-wrap gap-1.5">
                    {['Cell Culture', 'Sequencing', 'Immunostaining'].map(s => <Tag key={s} color="purple">{s}</Tag>)}
                  </div>
                </div>
                <div>
                  <SubHeading>Platforms</SubHeading>
                  <div className="flex flex-wrap gap-1.5">
                    {['CyCIF', 'Multiplexed Imaging', 'Single-cell Analysis'].map(s => <Tag key={s} color="purple">{s}</Tag>)}
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* ③ Biological Focus Areas */}
            <BentoCard delay={0.16} className="p-6 bg-gradient-to-br from-gray-50/80 to-white">
              <CardHeader icon={FlaskConical} label="Biological Focus Areas" gradient="from-gray-500 to-gray-600" />

              <div className="flex flex-wrap gap-2">
                {[
                  'Oncology', 'Cancer', 'DNA Damage', 'Replication Stress',
                  'Biomarkers', 'Spatial Analysis', 'Pathology', 'Glioblastoma',
                  'Brain Tumors', 'Clinical Trials', 'Diagnostics',
                ].map(s => <Tag key={s} color="gray">{s}</Tag>)}
              </div>
            </BentoCard>
          </div>

          {/* ── Row 2: Clinical Specialties — full width ── */}
          <BentoCard delay={0.22} className="p-6 bg-gradient-to-r from-teal-50/60 via-white to-cyan-50/40 border-teal-200/50">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-52 flex-shrink-0">
                <CardHeader icon={Stethoscope} label="Clinical Specialties" gradient="from-teal-400 to-cyan-400" />
                <div className="space-y-0.5">
                  <div className="text-3xl font-bold bg-gradient-to-br from-teal-500 to-cyan-500 bg-clip-text text-transparent">1,000+</div>
                  <p className="text-xs text-gray-500">patients across 12+ specialties</p>
                  <p className="text-xs text-gray-400 italic">UPMC Clinical Rotations</p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {clinicalSpecialties.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.28 + i * 0.04, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-center gap-2 p-2.5 border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/50 hover:shadow-sm transition-all cursor-default"
                  >
                    <s.icon className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-700 leading-tight">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* ── Row 3: Business & Investment — full width ── */}
          <BentoCard delay={0.28} className="p-6 md:p-8 bg-gradient-to-r from-amber-50/70 via-white to-orange-50/40 border-amber-200/50">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-52 flex-shrink-0">
                <CardHeader icon={TrendingUp} label="Business & Investment" gradient="from-amber-400 to-orange-400" />
                <div className="space-y-0.5">
                  <div className="text-3xl font-bold bg-gradient-to-br from-amber-500 to-orange-500 bg-clip-text text-transparent">$129M</div>
                  <p className="text-xs text-gray-500">deployed across 8 investments</p>
                  <p className="text-xs text-gray-400 italic">100+ companies evaluated</p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {investmentSkills.map(cat => (
                  <div key={cat.label}>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" />{cat.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map(t => <Tag key={t} color="amber">{t}</Tag>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  )
}
