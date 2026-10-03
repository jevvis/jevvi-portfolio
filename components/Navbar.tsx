'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const mainLinks = [
  { label: 'WORK', href: '/#work' },
  { label: 'WHAT I CAN DO', href: '/#skills' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'AWARDS', href: '/#awards' },
  { label: 'TRAININGS', href: '/#trainings' },
]

const projectLinks = [
  { label: 'TECHNICAL', href: '#technical' },
  { label: 'DIGITAL', href: '#digital' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isProjectSection = pathname?.startsWith('/projects')
  const [activeProjectTab, setActiveProjectTab] = useState('technical')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isProjectSection) return

    const handleScroll = () => {
      const digitalEl = document.getElementById('digital')
      if (digitalEl && window.scrollY >= digitalEl.offsetTop - 100) {
        setActiveProjectTab('digital')
      } else {
        setActiveProjectTab('technical')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isProjectSection])

  const currentLinks = isProjectSection ? projectLinks : mainLinks

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <nav className="flex items-center justify-between px-4 py-2.5 rounded-full bg-[var(--background)]/80 backdrop-blur-xl border border-[var(--card-border)] shadow-lg">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[var(--foreground)] flex items-center justify-center">
            <span className="text-[var(--background)] font-serif text-sm italic font-bold">J</span>
          </div>
          <span className="font-semibold text-sm tracking-wider hidden sm:block">JEVVI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {currentLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs tracking-wider font-medium transition-colors hover:text-[var(--foreground)] ${
                isProjectSection && link.label.toLowerCase() === activeProjectTab
                  ? 'text-[var(--foreground)] border-b-2 border-[var(--foreground)] pb-0.5'
                  : 'text-[var(--muted)]'
              }`}
              onClick={() => {
                if (isProjectSection) {
                  setActiveProjectTab(link.label.toLowerCase())
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <a
            href="/contact"
            className="px-5 py-2 text-xs font-semibold tracking-wider rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-1 p-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[var(--background)]/95 backdrop-blur-xl border border-[var(--card-border)] shadow-lg">
          {currentLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-sm tracking-wider font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
