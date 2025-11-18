import { Cloud, Shield, Code2, Cpu, Database, LineChart } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Architecture, migration and automation on AWS, Azure and GCP with best‑in‑class reliability.',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Custom LLMs, copilots and intelligent workflows that reduce costs and accelerate delivery.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Zero‑trust architectures, audits and managed detection to protect your business end‑to‑end.',
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Full‑stack web and mobile development with modern frameworks and scalable patterns.',
  },
  {
    icon: Database,
    title: 'Data Platforms',
    desc: 'Data lakes, real‑time pipelines and analytics foundations to unlock actionable insights.',
  },
  {
    icon: LineChart,
    title: 'Consulting & Strategy',
    desc: 'Roadmaps, assessments and governance to align technology with measurable outcomes.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">What we do</h2>
        <p className="mt-3 text-white/80">Expert teams across cloud, AI, security and product engineering.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/30">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/80">{desc}</p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <a href="#contact" className="mt-4 inline-flex items-center text-sm text-red-200 hover:text-white">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
