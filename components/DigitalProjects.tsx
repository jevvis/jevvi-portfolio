'use client'

const digitalProjects = [
  {
    number: '01',
    title: 'Infographic Design Collection',
    description: 'A series of informational graphics designed for educational and promotional purposes.',
  },
  {
    number: '02',
    title: 'Brand Identity Package',
    description: 'Complete brand identity design including logos, color palettes, and brand guidelines.',
  },
  {
    number: '03',
    title: 'UI/UX Design Portfolio',
    description: 'Collection of user interface and user experience designs for various applications.',
  },
  {
    number: '04',
    title: 'Content Planning & Scheduling',
    description: 'A visual content planning system designed to organize social media posts, schedules, and publishing activities for consistent content delivery.',
  },
  {
    number: '05',
    title: 'Social Media Content Kit',
    description: 'A collection of social media templates, graphics, and caption frameworks designed to maintain consistent and engaging brand content.',
  },
]

export default function DigitalProjects() {
  return (
    <section id="digital" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">DIGITAL PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold italic mb-3">Beyond Code</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Creative, visual, content, and digital projects developed alongside my technical work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {digitalProjects.map((project) => (
            <div
              key={project.number}
              className="relative group rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden p-6 min-h-[300px] flex flex-col justify-end hover:border-[var(--muted)] transition-colors"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 text-[120px] font-black text-[var(--foreground)] opacity-[0.03] leading-none select-none">
                {project.number}
              </span>

              {/* Placeholder image area */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[var(--card-border)] to-transparent flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--muted)] opacity-30">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Let's build something useful CTA */}
        <div className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4">HAVE A PROJECT IN MIND?</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let&apos;s build<br />something useful.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--card-border)] text-sm font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all shrink-0"
          >
            Hire Me →
          </a>
        </div>
      </div>
    </section>
  )
}
