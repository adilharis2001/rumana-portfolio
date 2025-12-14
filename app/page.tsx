import NavigationHeader from './components/NavigationHeader'
import HeroSection from './components/sections/HeroSection'
import NarrativeSection from './components/sections/NarrativeSection'
import ImpactDashboard from './components/sections/ImpactDashboard'
import ExpertiseTimeline from './components/sections/ExpertiseTimeline'
import SignatureProjects from './components/sections/SignatureProjects'
import PublicationsSection from './components/sections/PublicationsSection'
import ThoughtLeadership from './components/sections/ThoughtLeadership'
import SkillsExpertise from './components/sections/SkillsExpertise'
import AwardsRecognition from './components/sections/AwardsRecognition'
import CurrentFocus from './components/sections/CurrentFocus'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationHeader />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <NarrativeSection />
      </div>
      <div id="impact">
        <ImpactDashboard />
      </div>
      <div id="expertise">
        <SkillsExpertise />
      </div>
      <div id="journey">
        <ExpertiseTimeline />
      </div>
      <div id="projects">
        <SignatureProjects />
      </div>
      <div id="publications">
        <PublicationsSection />
      </div>
      <div id="blog">
        <ThoughtLeadership />
      </div>
      <AwardsRecognition />
      <div id="focus">
        <CurrentFocus />
      </div>
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Name with gradient */}
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Rumana Rashid
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              MD/PhD Candidate • AI Researcher • Healthcare Innovator
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="mailto:rumanarashid001@gmail.com"
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rurashid001/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=PjPMy1gAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                Scholar
              </a>
              <a
                href="https://biotechbytes10101.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                Substack
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Rumana Rashid. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
