import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Brand */}
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/30"></div>
              <div className="text-white">
                <span className="block text-sm uppercase tracking-widest text-white/70">axis</span>
                <span className="-mt-1 block text-xl font-semibold tracking-tight">Solutions</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2 text-white shadow-lg shadow-red-500/30">
                Get a quote
              </a>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-white/90" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2 text-white">
                  Get a quote
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
