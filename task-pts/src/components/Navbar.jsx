import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const items = useMemo(() => navItems, [])

  useEffect(() => {
    const ids = items.map((i) => i.id)
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { threshold: [0.2, 0.35, 0.5] }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [items])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-neutral-950/55 backdrop-blur-xl shadow-soft">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              className="group flex items-center gap-2"
              onClick={() => {
                setOpen(false)
                scrollToId('home')
              }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/90 to-gold-700/60 border border-white/10 shadow-glow">
                <span className="text-gold-50 font-black">B</span>
              </span>
              <div className="leading-tight text-left">
                <div className="font-display text-gold-50 font-bold tracking-wide">Baba Reeba</div>
                <div className="text-xs text-white/60">Nightlife & Dining</div>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {items.map((it) => (
                <button
                  key={it.id}
                  onClick={() => scrollToId(it.id)}
                  className={
                    active === it.id
                      ? 'px-4 py-2 rounded-xl text-sm font-medium text-gold-50 bg-white/5 border border-white/10'
                      : 'px-4 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }
                >
                  {it.label}
                </button>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 h-11 w-11"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="relative h-5 w-5">
                <span
                  className={
                    'absolute left-0 top-1 h-0.5 w-full bg-white transition-transform ' +
                    (open ? 'translate-y-1.5 rotate-45 w-full' : '')
                  }
                />
                <span
                  className={
                    'absolute left-0 top-2.5 h-0.5 w-full bg-white/80 transition-opacity ' +
                    (open ? 'opacity-0' : 'opacity-100')
                  }
                />
                <span
                  className={
                    'absolute left-0 top-4 h-0.5 w-full bg-white transition-transform ' +
                    (open ? '-translate-y-1.5 -rotate-45' : '')
                  }
                />
              </div>
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {items.map((it) => (
                  <button
                    key={it.id}
                    onClick={() => {
                      setOpen(false)
                      scrollToId(it.id)
                    }}
                    className={
                      active === it.id
                        ? 'w-full text-left px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gold-50 font-medium'
                        : 'w-full text-left px-4 py-3 rounded-xl bg-transparent border border-white/10 text-white/70 hover:text-white hover:bg-white/5'
                    }
                  >
                    {it.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

