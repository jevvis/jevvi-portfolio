'use client'
import { useState } from 'react'

const awards = [
  { title: 'Best Capstone Paper', event: 'CPSC Capstone Presentation', year: '2024' },
  { title: 'Best Capstone System', event: 'CPSC Capstone Presentation', year: '2024' },
]

const trainings = [
  { title: 'Web Development Bootcamp', provider: 'Online Course', year: '2023' },
  { title: 'Software Testing Fundamentals', provider: 'Professional Training', year: '2023' },
  { title: 'IT Operations Certification', provider: 'Technical Institute', year: '2024' },
]

const techIcons = [
  { id: 'html', bg: 'bg-[#E34F26]/10', color: 'text-[#E34F26]', icon: 'H5' },
  { id: 'css', bg: 'bg-[#1572B6]/10', color: 'text-[#1572B6]', icon: 'C3' },
  { id: 'js', bg: 'bg-[#F7DF1E]/10', color: 'text-[#F7DF1E]', icon: 'JS' },
  { id: 'react', bg: 'bg-[#61DAFB]/10', color: 'text-[#61DAFB]', icon: 'Re' },
  { id: 'python', bg: 'bg-[#3776AB]/10', color: 'text-[#3776AB]', icon: 'Py' },
  { id: 'php', bg: 'bg-[#777BB4]/10', color: 'text-[#777BB4]', icon: 'PH' },
  { id: 'django', bg: 'bg-[#092E20]/10', color: 'text-[#092E20]', icon: 'Dj' },
  { id: 'tailwind', bg: 'bg-[#06B6D4]/10', color: 'text-[#06B6D4]', icon: 'Tw' },
  { id: 'meta', bg: 'bg-[#1877F2]/10', color: 'text-[#1877F2]', icon: 'Me' },
  { id: 'google', bg: 'bg-[#4285F4]/10', color: 'text-[#4285F4]', icon: 'Go' },
  { id: 'notion', bg: 'bg-[var(--foreground)]/10', color: 'text-[var(--foreground)]', icon: 'No' },
  { id: 'trello', bg: 'bg-[#0052CC]/10', color: 'text-[#0052CC]', icon: 'Tr' },
  { id: 'canva', bg: 'bg-[#00C4CC]/10', color: 'text-[#00C4CC]', icon: 'Ca' },
  { id: 'figma', bg: 'bg-[#F24E1E]/10', color: 'text-[#F24E1E]', icon: 'Fi' },
  { id: 'framer', bg: 'bg-[#0055FF]/10', color: 'text-[#0055FF]', icon: 'Fr' },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Side: Title & Icons */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">MY CAPABILITIES</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            What I Can Do<span className="animate-pulse opacity-50 font-light">|</span>
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-10 max-w-sm">
            <span className="text-sky-500 font-medium">I combine</span> technical, problem-solving, and digital skills to build reliable systems, test systems, manage data, and support efficient digital workflows.
          </p>
          
          <div className="grid grid-cols-4 gap-3 max-w-[240px]">
            {techIcons.map((tech) => (
              <div key={tech.id} className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm bg-[var(--card-bg)] border border-[var(--card-border)] ${tech.color} shadow-sm`}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 2 Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">01</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">IT, WEB<br/>DEVELOPMENT &<br/>QA</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              Building and testing functional digital systems, from database-driven web applications to RFID and QR-based solutions, with a focus on reliability, usability, and practical problem-solving.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Web Development', 'System Testing', 'Bug Identification', 'System Analysis', 'Database Management', 'MySQL', 'PHP', 'Python', 'HTML', 'CSS', 'JavaScript', 'RFID & QR Integration'].map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">02</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">VA & DIGITAL<br/>OPERATIONS</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              Supporting teams with organized data, documentation, research, and digital workflows while helping keep day-to-day operations accurate and efficient.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Data Entry', 'Data Validation', 'Document Management', 'Online Research', 'Administrative Support', 'Google Workspace', 'Social Media Management', 'Content Optimization'].map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  const traits = ['Organized', 'Curious', 'Adaptable', 'Detail-Oriented'];
  const [activeTraitIndex, setActiveTraitIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTraitIndex((prev) => (prev + 1) % traits.length);
      setIsAnimating(false);
    }, 150); // Small delay for visual feedback
  };

  const currentTrait = traits[activeTraitIndex];
  const nextTrait = traits[(activeTraitIndex + 1) % traits.length];
  const peekText = nextTrait.substring(0, 4) + '...';

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">ABOUT ME</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
          Problem Solver. Digital Generalist.<span className="animate-pulse opacity-50 font-light">|</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header: Photo + Name + Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <img src="/profile.png" alt="Jevvi Supratama" className="w-24 h-24 rounded-full object-cover object-top border-[3px] border-[var(--card-border)] bg-[var(--card-bg)] shrink-0 shadow-lg" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide">JEVVI SUPRATAMA</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-500 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">Projects</p>
                    <p className="text-sm font-bold">20+</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">Certificates</p>
                    <p className="text-sm font-bold">9</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">BSIT Graduated</p>
                    <p className="text-sm font-bold">2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[var(--muted)] text-sm md:text-base leading-loose mb-6 text-justify">
              I&apos;m a BSIT graduate focused on software testing, web development, and digital systems. I enjoy turning ideas and real-world problems into practical digital solutions, particularly through web applications, databases, and system testing. Throughout my studies, I gained hands-on experience building database-driven systems and working with technologies such as RFID and QR-based solutions. My work was recognized through awards including Dean&apos;s List, and Best Capstone Paper and System. I&apos;ve also completed training in virtual assistance and AI-powered workflows, giving me experience across both technical and digital operations.
            </p>
            <p className="text-[var(--muted)] text-sm md:text-base leading-loose mb-12">
              Want to know more about my experience? <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">Download my resume</a>.
            </p>

            {/* Currently */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-6 font-semibold">CURRENTLY</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Building</p>
                    <p className="text-xs text-[var(--muted)]">Web & digital projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v2M15 3v2M10 5a2 2 0 0 0-2 2v7.74a2 2 0 0 1-.2.87L5.33 21h13.34l-2.47-5.39a2 2 0 0 1-.2-.87V7a2 2 0 0 0-2-2h-4z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Exploring</p>
                    <p className="text-xs text-[var(--muted)]">Software testing & QA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Learning</p>
                    <p className="text-xs text-[var(--muted)]">Full-stack development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Trait Cards */}
          <div 
            className="hidden lg:flex lg:col-span-4 justify-end items-center relative pr-10 cursor-pointer group"
            onClick={handleCardClick}
          >
            {/* Background Card */}
            <div className="absolute w-56 h-72 bg-zinc-900 rounded-3xl rotate-[15deg] translate-x-8 translate-y-8 border border-white/5 shadow-2xl dark:bg-[#1A1C20] transition-transform duration-300 group-hover:rotate-[20deg] group-hover:translate-x-12 group-hover:translate-y-12"></div>
            {/* Foreground Card */}
            <div className={`relative w-56 h-72 bg-zinc-800 rounded-3xl rotate-[8deg] border border-white/10 shadow-2xl p-7 flex flex-col justify-between overflow-hidden dark:bg-[#22242A] transition-all duration-300 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100 group-hover:rotate-[5deg]'}`}>
              <div>
                <p className="text-[9px] tracking-widest uppercase text-white/50 mb-6 font-semibold">TRAIT</p>
                <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300">{currentTrait}</h3>
              </div>
              <h3 className="text-2xl font-bold text-white/20 translate-y-6">{peekText}</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export function AwardsSection() {
  const awardsList = [
    { title: "Dean's Lister", type: 'academic', link: '#' },
    { title: 'Best Capstone Paper', type: 'award', link: '#' },
    { title: 'Best Capstone System', type: 'award', link: '#' },
  ];

  return (
    <section id="awards" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">RECOGNITION</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Awards and Achievements<span className="animate-pulse opacity-50 font-light">|</span>
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">
            A collection of academic and professional recognitions that reflect my dedication to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left: Collage Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pr-0 lg:pr-8">
            <div className="flex flex-col gap-3 sm:gap-4 -translate-y-6">
              <div className="w-full aspect-[4/5] bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-sm">
                <img src="/projects/boarding-house.jpg" alt="Recognition 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="w-full aspect-square bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-sm">
                <img src="/projects/rfid-system.jpg" alt="Recognition 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 translate-y-2">
              <div className="w-full aspect-square bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-sm">
                <img src="/projects/docutrack.jpg" alt="Recognition 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="w-full aspect-[4/5] bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-sm">
                <img src="/projects/empowering.jpg" alt="Recognition 4" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 -translate-y-8">
              <div className="w-full aspect-[4/5] bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-sm">
                <img src="/projects/it-portal.jpg" alt="Recognition 5" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="w-full aspect-square bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-sm">
                <img src="/projects/boarding-house.jpg" alt="Recognition 6" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Right: Awards List */}
          <div className="flex flex-col gap-4">
            {awardsList.map((award, idx) => (
              <a 
                key={idx}
                href={award.link}
                className="group flex items-center justify-between p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] transition-colors shadow-sm"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                    {award.type === 'academic' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                    )}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg text-[var(--foreground)]">{award.title}</h3>
                </div>
                <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function TrainingImageSlider({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-[var(--card-border)] bg-[var(--card-bg)] group"
      onClick={nextImage}
    >
      {images.map((img, idx) => (
        <img 
          key={idx}
          src={img} 
          alt={`Training ${idx}`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
        />
      ))}
      {/* Hint Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-20 flex items-center justify-center">
        <div className="bg-black/50 backdrop-blur-md text-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold shadow-xl translate-y-4 group-hover:translate-y-0">
          Next Image
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  );
}

export function TrainingsSection() {
  const trainingsData = [
    {
      title: "General Virtual Assistance 2.0",
      subtitle: "A Paradigm Shift in AI-Powered Interaction",
      organization: "Department of Information and Communications Technology",
      date: "April to May 2026",
      description: "Completed a 20-day intensive virtual assistance training focused on VA fundamentals, client communication, productivity, AI-powered workflows, and social media management. Gained hands-on experience in niche development, content creation, page management, post scheduling, client outreach, and improving workflows to deliver efficient virtual assistance services.",
      linkText: "CERTIFICATE OF COMPLETION",
      images: ['/projects/boarding-house.jpg', '/projects/rfid-system.jpg', '/projects/docutrack.jpg'],
      align: 'right'
    },
    {
      title: "Tech-Tuesdays",
      subtitle: "",
      organization: "Department of Information and Communications Technology",
      date: "March 31, 2026",
      description: "Participated in a team-based digital solution development activity focused on addressing the needs of local MSMEs and the tourism sector. Contributed to the development and presentation of an online platform designed to showcase and promote local MSME products. Gained experience in collaborative problem-solving, digital solution design, and pitching technology-based solutions.",
      linkText: "CERTIFICATE OF APPRECIATION",
      images: ['/projects/empowering.jpg', '/projects/it-portal.jpg', '/projects/boarding-house.jpg'],
      align: 'left'
    },
    {
      title: "HACK FOR GOV 4",
      subtitle: "",
      organization: "Department of Information and Communications Technology",
      date: "November 10, 2025",
      description: "Participated in a 9-hour Capture the Flag (CTF) cybersecurity competition involving hands-on challenges in identifying vulnerabilities, analyzing systems, and finding hidden flags. Developed practical skills in cybersecurity, ethical hacking, logical reasoning, troubleshooting, and time-constrained problem-solving.",
      linkText: "CERTIFICATE OF PARTICIPATION",
      images: ['/projects/docutrack.jpg', '/projects/rfid-system.jpg', '/projects/empowering.jpg'],
      align: 'right'
    }
  ];

  return (
    <section id="trainings" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">GROWTH & EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Trainings & Hackathons
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">
            A collection of trainings, workshops, and hackathons that shaped my technical and collaborative skills.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {trainingsData.map((item, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${item.align === 'left' ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                  <span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-mono font-semibold mt-2 sm:mt-0 shrink-0">{item.date}</span>
                </div>
                {item.subtitle && (
                  <h4 className="text-lg md:text-xl font-bold mb-3">{item.subtitle}</h4>
                )}
                <p className="text-sm font-semibold text-[var(--foreground)] opacity-90 mb-5">
                  {item.organization}
                </p>
                <p className="text-[var(--muted)] text-sm leading-loose mb-8 text-justify">
                  {item.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold hover:text-[var(--muted)] transition-colors w-max group">
                  {item.linkText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>

              {/* Image Slider */}
              <div className="w-full lg:w-1/2 relative">
                <TrainingImageSlider images={item.images} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
