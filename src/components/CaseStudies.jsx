export default function CaseStudies() {
  const cases = [
    {
      company: 'Fintech Scale-up',
      result: '99.95% uptime and 40% faster releases',
      summary: 'Modernized CI/CD and migrated core services to Kubernetes on AWS.',
    },
    {
      company: 'Global Retailer',
      result: '8-figure cost savings from AI automation',
      summary: 'Built internal copilots and process automations across 12 departments.',
    },
    {
      company: 'Healthcare Provider',
      result: 'HIPAA-compliant data platform in 10 weeks',
      summary: 'Implemented zero-trust access and real-time analytics pipelines.',
    },
  ]

  return (
    <section id="cases" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Proven outcomes</h2>
        <p className="mt-3 text-white/80">A sample of measurable impact we created for clients.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div key={c.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-widest text-white/60">{c.company}</div>
            <div className="mt-2 bg-gradient-to-r from-red-400 to-rose-300 bg-clip-text text-2xl font-semibold text-transparent">{c.result}</div>
            <p className="mt-3 text-sm text-white/80">{c.summary}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
