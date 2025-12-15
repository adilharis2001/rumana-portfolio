'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, GraduationCap, BookOpen, FileText, Send, MapPin, Calendar, Briefcase } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background matching hero theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-teal-50/40" />

        {/* Animated gradient orbs - single on mobile for performance, all on desktop */}
        <div className="absolute top-0 -right-40 md:right-10 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-teal-200/15 to-cyan-200/15 rounded-full blur-2xl md:blur-3xl animate-blob" />
        <div className="hidden md:block absolute bottom-0 -left-40 md:left-10 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

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
            Let's Transform Healthcare Together
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-2">
            Available for roles at the intersection of medicine, AI, and investment
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Based in NYC • Starting January 2026
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-amber-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Quick Contact - Expanded */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full" />
              <div className="pl-5 md:pl-6 pr-2 py-2">
                <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Get in Touch
                </h3>

                {/* Email */}
                <a
                  href="mailto:rumanarashid001@gmail.com"
                  className="flex items-start gap-3 mb-6 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Email</div>
                    <div className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-teal-600 transition-colors break-all">
                      rumanarashid001@gmail.com
                    </div>
                  </div>
                </a>

                {/* Quick Info */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                    Quick Info
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-sm">
                        <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-sm">
                        <div className="text-xs text-gray-600">Location</div>
                        <div className="font-semibold text-gray-900">Based in NYC</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-sm">
                        <Calendar className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-sm">
                        <div className="text-xs text-gray-600">Timeline</div>
                        <div className="font-semibold text-gray-900">Graduating May 2026</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-sm">
                        <Briefcase className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-sm">
                        <div className="text-xs text-gray-600">Availability</div>
                        <div className="font-semibold text-gray-900">Starting January 2026</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect Online */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                    Connect Online
                  </h4>
                  <div className="flex flex-col gap-2">
                    <SocialLink
                      icon={Linkedin}
                      label="LinkedIn"
                      href="https://www.linkedin.com/in/rurashid001/"
                      gradient="from-teal-400 to-cyan-400"
                    />
                    <SocialLink
                      icon={GraduationCap}
                      label="Google Scholar"
                      href="https://scholar.google.com/citations?user=PjPMy1gAAAAJ"
                      gradient="from-purple-400 to-pink-400"
                    />
                    <SocialLink
                      icon={BookOpen}
                      label="Substack Blog"
                      href="https://biotechbytes10101.substack.com"
                      gradient="from-amber-400 to-orange-400"
                    />
                  </div>
                </div>

                {/* Download */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                    Download CV
                  </h4>
                  <DownloadLink
                    icon={FileText}
                    label="Full CV (PDF)"
                    href="/pdfs/CV_Rumana_Rashid.pdf"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
              <div className="pl-5 md:pl-6 pr-2 py-2">
                <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Send a Message
                </h3>

                <form action="https://formspree.io/f/xovgbbqd" method="POST" className="space-y-3.5">
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1.5 text-gray-700">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1.5 text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1.5 text-gray-700">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                      placeholder="Company/Institution (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1.5 text-gray-700">I'm interested in:</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Checkbox label="Collaboration" name="interest" />
                      <Checkbox label="Speaking" name="interest" />
                      <Checkbox label="Opportunities" name="interest" />
                      <Checkbox label="Other" name="interest" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1.5 text-gray-700">Message *</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" strokeWidth={2.5} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ icon: Icon, label, href, gradient }: { icon: any; label: string; href: string; gradient: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-sm"
    >
      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
        <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
      </div>
      <span className={`font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:underline`}>
        {label}
      </span>
    </a>
  )
}

function DownloadLink({ icon: Icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <a
      href={href}
      download
      className="group flex items-center gap-2 text-sm"
    >
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-sm group-hover:from-teal-400 group-hover:to-cyan-400 transition-all">
        <Icon className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors" strokeWidth={2.5} />
      </div>
      <span className="font-medium text-gray-700 group-hover:text-teal-600 transition-colors">
        {label}
      </span>
    </a>
  )
}

function Checkbox({ label, name }: { label: string; name?: string }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        value={label}
        className="w-3.5 h-3.5 text-purple-500 border-gray-300 rounded focus:ring-purple-400"
      />
      <span className="text-xs md:text-sm text-gray-700">{label}</span>
    </label>
  )
}
