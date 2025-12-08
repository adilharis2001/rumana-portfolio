'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, GraduationCap, BookOpen, FileText, Send } from 'lucide-react'
import Button from '../ui/Button'

export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Let's Transform Healthcare Together
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Available for roles at the intersection of medicine, AI, and investment
            </p>
            <p className="text-gray-500">
              Based in NYC • Starting January 2026
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <ContactMethod
                icon={Mail}
                label="Email"
                value="rumanarashid001@gmail.com"
                href="mailto:rumanarashid001@gmail.com"
              />

              <ContactMethod
                icon={Phone}
                label="Phone"
                value="540-841-5261"
                href="tel:540-841-5261"
              />

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Connect Online</h4>
                <div className="flex gap-3">
                  <SocialButton
                    icon={Linkedin}
                    href="https://www.linkedin.com/in/rurashid001/"
                    label="LinkedIn"
                  />
                  <SocialButton
                    icon={GraduationCap}
                    href="https://scholar.google.com/citations?user=PjPMy1gAAAAJ"
                    label="Scholar"
                  />
                  <SocialButton
                    icon={BookOpen}
                    href="https://biotechbytes10101.substack.com"
                    label="Substack"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Download</h4>
                <div className="space-y-3">
                  <DownloadButton
                    icon={FileText}
                    label="Full CV (PDF)"
                    href="/pdfs/CV_Rumana_Rashid.pdf"
                  />
                  <DownloadButton
                    icon={FileText}
                    label="Cover Letter"
                    href="/pdfs/CL_Rumana_Rashid_Avoro_Capital.pdf"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="Company/Institution (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">I'm interested in:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Checkbox label="Collaboration" />
                    <Checkbox label="Speaking" />
                    <Checkbox label="Opportunities" />
                    <Checkbox label="Other" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactMethod({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors group"
    >
      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors">
        <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
      </div>
      <div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="font-semibold text-gray-900">{value}</div>
      </div>
    </a>
  )
}

function SocialButton({ icon: Icon, href, label }: { icon: any; href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex-1 h-12 flex items-center justify-center rounded-lg bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white transition-colors font-medium"
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </motion.a>
  )
}

function DownloadButton({ icon: Icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <a
      href={href}
      download
      className="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-all group"
    >
      <Icon className="w-5 h-5 text-gray-600 group-hover:text-teal-600" />
      <span className="font-medium text-gray-900">{label}</span>
    </a>
  )
}

function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500" />
      <span className="text-sm">{label}</span>
    </label>
  )
}
