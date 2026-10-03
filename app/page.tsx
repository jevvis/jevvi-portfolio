import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WorkGallery from '@/components/WorkGallery'
import { SkillsSection, AboutSection, AwardsSection, TrainingsSection } from '@/components/Sections'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WorkGallery />
      <SkillsSection />
      <AboutSection />
      <AwardsSection />
      <TrainingsSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)]">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Jevvi Supratama. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
