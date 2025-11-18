import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden" aria-label="Axis Solutions hero">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/KjKmX-97fe4kJxxg/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-500 to-rose-500" />
          Enterprise IT – Strategy • Cloud • AI • Security
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Elevate your business with<br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-red-400 via-rose-300 to-red-200 bg-clip-text text-transparent"> Axis Solutions</span>
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-lg text-white/85 md:text-xl">
          We design, build and scale secure, high‑performance systems — from cloud-native platforms to AI‑powered products — with a relentless focus on outcomes.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-rose-600 px-6 py-3 text-white shadow-lg shadow-red-500/30">
            Start a project
          </a>
          <a href="#services" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white hover:bg-white/10">
            Explore services
          </a>
        </div>
      </div>
    </section>
  )
}
