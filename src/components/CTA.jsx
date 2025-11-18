export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600 to-rose-600 p-8 text-white shadow-xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">Ready to build what’s next?</h3>
            <p className="mt-3 text-white/90">Tell us about your goals. We’ll come back with a tailored plan, timeline and transparent pricing.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="grid gap-3">
            <input className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70 focus:outline-none" placeholder="Your name" />
            <input className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70 focus:outline-none" placeholder="Work email" type="email" />
            <textarea className="min-h-[100px] rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70 focus:outline-none" placeholder="Tell us about your project" />
            <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-red-600 hover:bg-red-50">
              Request a proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
