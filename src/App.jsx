import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top navigation */}
      <Navbar />

      {/* Hero with Spline cover */}
      <Hero />

      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(244,63,94,0.15),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(239,68,68,0.12),transparent)]" />

      {/* Main sections */}
      <main className="relative z-10">
        <Services />
        <CaseStudies />
        <CTA />

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-red-500 to-rose-600" />
              <span className="text-white/80">© {new Date().getFullYear()} Axis Solutions. All rights reserved.</span>
            </div>
            <div className="text-white/60 text-sm">Built with performance, accessibility and security in mind.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
