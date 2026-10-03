'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Boarding House Rental System',
    description: 'Developed a web-based boarding house rental platform for managing property listings, bookings, payments, and reviews, with separate access and features for students, landlords, and administrators.',
    image: '/projects/boarding-house.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'RFID-Based CPSC Student Monitoring System with Automated Photo Capture and Email Notification',
    description: 'Developed an RFID-based student monitoring system that automates attendance tracking through RFID scanning, photo capture, email notifications, Google Drive export, and administrative reporting. Awarded Best Capstone Paper and Best Capstone System.',
    image: '/projects/rfid-system.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'DocuTrack Document Tracking System',
    description: 'A comprehensive document tracking and management system for efficient file organization and workflow.',
    image: '/projects/docutrack.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Empowering Rapid Development',
    description: 'A platform designed to accelerate development workflows and team productivity.',
    image: '/projects/empowering.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'IT Management Portal',
    description: 'Web-based IT management platform for tracking resources, tickets, and team workflows.',
    image: '/projects/it-portal.jpg',
    link: '#',
  },
]

export default function WorkGallery() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2))

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
  }

  return (
    <section id="work" className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      {/* Floating 306 Widget */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[var(--card-bg)] border border-[var(--card-border)] border-l-0 rounded-r-xl px-4 py-2.5 flex items-center gap-3 shadow-xl opacity-90 hover:opacity-100 transition-opacity hidden md:flex cursor-pointer">
        <span className="text-lg">☕</span>
        <span className="text-sm font-bold font-mono text-[var(--foreground)]">306</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">SELECTED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Work Gallery</h2>
            <p className="text-[var(--muted)] text-sm max-w-md">
              A collection of systems, digital projects, and technical work I&apos;ve built.
            </p>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-90 transition-colors shrink-0"
          >
            View More Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 py-8">
            {projects.map((project, index) => {
              const offset = index - activeIndex
              const isActive = index === activeIndex
              const absOffset = Math.abs(offset)
              
              if (absOffset > 2) return null

              return (
                <div
                  key={project.id}
                  className="cursor-pointer transition-all duration-500 ease-out shrink-0"
                  style={{
                    transform: `translateX(${offset * 20}px) scale(${isActive ? 1 : 0.75 - absOffset * 0.05}) perspective(1000px) rotateY(${offset * -5}deg)`,
                    opacity: isActive ? 1 : 0.5 - absOffset * 0.1,
                    zIndex: 10 - absOffset,
                    width: isActive ? 'clamp(300px, 50vw, 600px)' : 'clamp(200px, 30vw, 400px)',
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`rounded-xl overflow-hidden shadow-2xl border ${
                    isActive ? 'border-[var(--card-border)]' : 'border-transparent'
                  }`}>
                    <div className="aspect-[16/10] bg-[var(--card-bg)] flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center p-6">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400">
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <path d="M3 9h18" />
                              <path d="M9 21V9" />
                            </svg>
                          </div>
                          <p className="text-xs font-medium">{project.title}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors z-20"
            aria-label="Previous project"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors z-20"
            aria-label="Next project"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Active project info */}
        <div className="text-center mt-8 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            {projects[activeIndex].title}
          </h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            {projects[activeIndex].description}
          </p>
          <a
            href={projects[activeIndex].link}
            className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            View Project →
          </a>
        </div>
      </div>
    </section>
  )
}
