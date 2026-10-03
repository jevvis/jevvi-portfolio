'use client'


export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Marquee text behind profile */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="flex w-max whitespace-nowrap animate-marquee">
          <div className="flex shrink-0">
            <span className="text-outline font-oswald text-[clamp(150px,20vw,350px)] font-bold tracking-normal pr-16 select-none">
              JEVVI SUPRATAMA
            </span>
            <span className="text-outline font-oswald text-[clamp(150px,20vw,350px)] font-bold tracking-normal pr-16 select-none">
              JEVVI SUPRATAMA
            </span>
          </div>
          <div className="flex shrink-0">
            <span className="text-outline font-oswald text-[clamp(150px,20vw,350px)] font-bold tracking-normal pr-16 select-none">
              JEVVI SUPRATAMA
            </span>
            <span className="text-outline font-oswald text-[clamp(150px,20vw,350px)] font-bold tracking-normal pr-16 select-none">
              JEVVI SUPRATAMA
            </span>
          </div>
        </div>
      </div>

      {/* Profile photo */}
      <div className="relative z-10 flex items-end justify-center h-full pt-20">
        <div className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px]">
          <img
            src="/profile.png"
            alt="Jevvi Supratama"
            className="w-full h-auto object-contain"
            style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))' }}
          />
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute right-6 bottom-10 z-20 flex items-center gap-2">
        <span
          className="text-[10px] tracking-[0.3em] font-medium text-[var(--muted)] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL DOWN
        </span>
      </div>
    </section>
  )
}
