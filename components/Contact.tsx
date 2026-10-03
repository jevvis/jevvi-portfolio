'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4">GET IN TOUCH</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8">
              LET&apos;S<br />WORK<br />TOGETHER
            </h2>
            <p className="text-lg font-semibold mb-2">Looking for the next problem worth solving.</p>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-8 max-w-md">
              I&apos;m open to opportunities where I can contribute to software testing, web development, IT operations, and digital workflows.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold tracking-wider hover:opacity-90 transition-opacity"
            >
              DOWNLOAD RESUME →
            </a>
          </div>

          {/* Right side - Contact cards */}
          <div className="space-y-4">
            {/* Email */}
            <div className="relative p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center gap-4 hover:border-[var(--muted)] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[var(--card-border)] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-0.5">EMAIL</p>
                <p className="text-sm font-medium truncate">jevvisupratama@gmail.com</p>
              </div>
              <span className="absolute top-3 right-4 text-xs text-rose-500 font-medium">01</span>
            </div>

            {/* GitHub */}
            <div className="relative p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center gap-4 hover:border-[var(--muted)] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[var(--card-border)] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-0.5">GITHUB</p>
                <p className="text-sm font-medium truncate">github.com/jevvisupratama</p>
              </div>
              <a href="https://github.com/jevvisupratama" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--foreground)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <span className="absolute top-3 right-4 text-xs text-rose-500 font-medium">02</span>
            </div>

            {/* LinkedIn */}
            <div className="relative p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center gap-4 hover:border-[var(--muted)] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[var(--card-border)] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-0.5">LINKEDIN</p>
                <p className="text-sm font-medium truncate">linkedin.com/in/jevvi-supratama</p>
              </div>
              <a href="https://linkedin.com/in/jevvi-supratama" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--foreground)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <span className="absolute top-3 right-4 text-xs text-rose-500 font-medium">03</span>
            </div>

            {/* Send message button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-contact'));
              }}
              className="block w-full text-center py-4 rounded-2xl border border-[var(--card-border)] text-sm font-semibold tracking-wider hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
            >
              SEND ME A MESSAGE →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
