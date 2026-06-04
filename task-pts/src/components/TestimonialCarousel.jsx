import { useEffect, useMemo, useState } from 'react'
import Reveal from './Reveal'

const testimonials = [
  {
    quote:
      'The vibe here is unreal—amazing music, beautiful lights, and food that hits every time.',
    name: 'Ayesha Khan',
    role: 'Food Lover',
  },
  {
    quote:
      'Service was fast, cocktails were perfect, and the ambience feels like a movie scene.',
    name: 'Rahul Mehta',
    role: 'Weekend Regular',
  },
  {
    quote:
      'From the starters to desserts, everything felt fresh. The staff knows how to host.',
    name: 'Sana Rahman',
    role: 'Nightlife Fan',
  },
]

export default function TestimonialCarousel({ auto = true }) {
  const list = useMemo(() => testimonials, [])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setIdx((v) => (v + 1) % list.length), 5500)
    return () => clearInterval(t)
  }, [auto, list.length])

  const current = list[idx]

  return (
    <div className="relative">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1 hidden md:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/3 p-5">
            <div className="text-gold-200/90 text-sm font-semibold tracking-wider">REVIEWS</div>
            <div className="mt-2 text-2xl font-display font-bold">What people say</div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Crafted experience, bold flavors, and a night that keeps you coming back.
            </p>
            <div className="mt-4 flex gap-2">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={
                    i === idx
                      ? 'h-2.5 w-8 rounded-full bg-gold-500/70'
                      : 'h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-white/35'
                  }
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <Reveal className="rounded-2xl border border-white/10 bg-neutral-950/40 p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-white/60">{idx + 1} / {list.length}</div>
              <div className="flex items-center gap-2">
                <button
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40"
                  onClick={() => setIdx((v) => (v - 1 + list.length) % list.length)}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40"
                  onClick={() => setIdx((v) => (v + 1) % list.length)}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-white/90 text-lg leading-relaxed">“{current.quote}”</p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gold-500/30 to-white/5 border border-white/10 flex items-center justify-center font-black font-display text-gold-50">
                {current.name
                  .split(' ')
                  .slice(0, 2)
                  .map((s) => s[0])
                  .join('')}
              </div>
              <div>
                <div className="font-semibold">{current.name}</div>
                <div className="text-sm text-white/60">{current.role}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

