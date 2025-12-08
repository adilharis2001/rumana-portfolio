import HeroSection from './components/sections/HeroSection'
import NarrativeSection from './components/sections/NarrativeSection'
import ImpactDashboard from './components/sections/ImpactDashboard'
import PublicationsSection from './components/sections/PublicationsSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NarrativeSection />
      <ImpactDashboard />
      <PublicationsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} Rumana Rashid. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a href="mailto:rumanarashid001@gmail.com" className="hover:text-teal-400 transition">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rurashid001/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=PjPMy1gAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                Google Scholar
              </a>
              <a
                href="https://biotechbytes10101.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
