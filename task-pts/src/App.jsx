import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import Reveal from './components/Reveal'
import GalleryGrid from './components/GalleryGrid'
import GalleryModal from './components/GalleryModal'
import TestimonialCarousel from './components/TestimonialCarousel'
import heroImg from './assets/hero.png'

const galleryItems = [
  { title: 'Signature Cocktails', subtitle: 'Golden pours & neon nights', src: heroImg },
  { title: 'Live Music', subtitle: 'Feel the bass, lose the clock', src: heroImg },
  { title: 'Chef’s Specials', subtitle: 'Bold flavors, fast delivery', src: heroImg },
  { title: 'Dessert Moments', subtitle: 'Sweet finish, late-night vibe', src: heroImg },
  { title: 'Ambience', subtitle: 'Lights that make memories', src: heroImg },
  { title: 'Group Nights', subtitle: 'Perfect for birthdays & dates', src: heroImg },
]

const menuSections = [
  {
    items: [
      { t: 'Neon Nachos', d: 'Cheesy crunch, spicy drizzle, smoky chill.' },
      { t: 'Firecracker Wings', d: 'Crisp heat with a sweet gold finish.' },
      { t: 'Chef’s Flatbread', d: 'Fresh dough, bold toppings, house sauce.' },
    ],
  },
]

export default function App() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const list = useMemo(() => galleryItems, [])
  const active = list[galleryIndex]

  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.phone.trim()) e.phone = 'Phone is required.'
    if (!form.date) e.date = 'Date is required.'
    if (!form.time) e.time = 'Time is required.'
    if (!form.guests) e.guests = 'Guests is required.'
    return e
  }

  function onSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length) return
    setSubmitted(true)
    // Front-end only: no backend required for the evaluation.
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative pt-[108px] pb-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_10%,rgba(255,191,25,0.20),transparent_55%),radial-gradient(700px_circle_at_80%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-gold-500/80 shadow-glow" />
                  <span className="text-sm text-white/70">Nightlife • Dining • Neon Energy</span>
                </div>

                <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                  Baba Reeba
                  <span className="text-gold-300"> Nightlife</span>
                  <br />
                  in your city
                </h1>

                <p className="mt-4 text-white/70 leading-relaxed">
                  A cinematic experience—music, lighting, and bold flavors. Come for the drinks, stay for the
                  atmosphere.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button
                    className="rounded-2xl bg-gradient-to-r from-gold-500 to-gold-700 px-6 py-3 font-semibold text-black shadow-glow hover:brightness-110 transition"
                    onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Menu
                  </button>
                  <button
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Reserve a Table
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { k: '4.8', v: 'Avg Rating' },
                    { k: '500+', v: 'Happy Guests' },
                    { k: 'Live', v: 'Weekly Shows' },
                  ].map((s) => (
                    <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="text-gold-200 font-bold font-display text-2xl leading-none">{s.k}</div>
                      <div className="mt-1 text-xs text-white/65">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold-500/20 to-white/0 blur-xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-neutral-950/40 backdrop-blur-xl p-3 overflow-hidden">
                  <div className="aspect-[4/3] rounded-[1.6rem] overflow-hidden">
                    <img src={heroImg} alt="Baba Reeba vibe" className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                    <div className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3">
                      <div className="text-xs text-white/65">Tonight’s Highlight</div>
                      <div className="text-gold-200 font-semibold">Neon Cocktails • Live DJ</div>
                    </div>
                    <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                      ✦
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 text-white/60">
                  <span className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    ⬇
                  </span>
                  <div className="text-sm">Scroll for the menu, gallery & reviews</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-14 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="TASTES"
                title="Signature menu"
                subtitle="From starters to late-night desserts—crafted for bold nights."
              />

              <div className="mt-6 space-y-4">
                {menuSections[0].items.map((x) => (
                  <Reveal key={x.t}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/8 transition">
                      <div className="font-semibold">{x.t}</div>
                      <div className="mt-2 text-sm text-white/70 leading-relaxed">{x.d}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Cocktails', sub: 'Golden pours & classics' },
                  { title: 'Starters', sub: 'Shareable and loud' },
                  { title: 'Main Course', sub: 'Big flavors, fast service' },
                  { title: 'Desserts', sub: 'Sweet endings, neon nights' },
                ].map((c) => (
                  <Reveal key={c.title}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition">
                      <div className="text-gold-200/90 font-semibold">{c.title}</div>
                      <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.sub}</div>
                      <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-gold-500/60 to-transparent" />
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
                <Reveal>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="text-sm text-white/60">Chef’s pick</div>
                      <div className="mt-1 font-display text-2xl font-bold">Neon Nachos + Firecracker Wings</div>
                      <div className="mt-2 text-sm text-white/70 leading-relaxed">
                        Add a golden mocktail and you’ve got the perfect start for the night.
                      </div>
                    </div>
                    <button
                      className="self-start md:self-auto rounded-2xl bg-gold-500/90 px-6 py-3 font-semibold text-black shadow-glow hover:brightness-110 transition"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Reservation
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-14 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="GALLERY"
              title="Neon nights in photos"
              subtitle="Tap a card to open the lightbox."
            />
          </Reveal>

          <div className="mt-10">
            <GalleryGrid
              items={list}
              onOpen={(i) => {
                setGalleryIndex(i)
                setGalleryOpen(true)
              }}
            />
          </div>

          <GalleryModal
            open={galleryOpen}
            onClose={() => setGalleryOpen(false)}
            images={list}
            initialIndex={galleryIndex}
          />

          {/* small hidden anchor showing active image title */}
          <div className="sr-only" aria-live="polite">
            {active?.title}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-14 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CONTACT / RESERVATION */}
      <section id="contact" className="py-14 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="RESERVE"
                  title="Book your table"
                  subtitle="Send your details—this demo saves on the front-end only."
                />
              </Reveal>

              <div className="mt-6 space-y-4">
                {[
                  { k: 'Location', v: 'Downtown • Neon District' },
                  { k: 'Hours', v: '6:00 PM – 1:00 AM (Daily)' },
                  { k: 'Shows', v: 'Live DJ every weekend' },
                ].map((x) => (
                  <Reveal key={x.k}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-xs text-white/60">{x.k}</div>
                      <div className="mt-1 font-semibold">{x.v}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <form
                  onSubmit={onSubmit}
                  className="rounded-3xl border border-white/10 bg-neutral-950/40 backdrop-blur-xl p-6 md:p-8"
                >
                  {submitted ? (
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-gold-500/30 bg-gold-500/10 px-4 py-3">
                        <span className="text-gold-200">✓</span>
                        <div className="font-semibold">Reservation request saved</div>
                      </div>
                      <div className="text-white/70 leading-relaxed">
                        We’ll contact you shortly. (Front-end demo: no backend connected.)
                      </div>
                      <button
                        type="button"
                        className="rounded-2xl bg-white/5 border border-white/10 px-6 py-3 font-semibold hover:bg-white/10 transition"
                        onClick={() => {
                          setSubmitted(false)
                          setForm({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' })
                          setErrors({})
                        }}
                      >
                        Make another request
                      </button>
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm text-white/70">Name</label>
                        <input
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-gold-500/50"
                          placeholder="Your name"
                        />
                        {errors.name && <div className="mt-1 text-xs text-red-400">{errors.name}</div>}
                      </div>

                      <div>
                        <label className="text-sm text-white/70">Phone</label>
                        <input
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-gold-500/50"
                          placeholder="e.g. 9876543210"
                        />
                        {errors.phone && <div className="mt-1 text-xs text-red-400">{errors.phone}</div>}
                      </div>

                      <div>
                        <label className="text-sm text-white/70">Date</label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-gold-500/50"
                        />
                        {errors.date && <div className="mt-1 text-xs text-red-400">{errors.date}</div>}
                      </div>

                      <div>
                        <label className="text-sm text-white/70">Time</label>
                        <input
                          type="time"
                          value={form.time}
                          onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-gold-500/50"
                        />
                        {errors.time && <div className="mt-1 text-xs text-red-400">{errors.time}</div>}
                      </div>

                      <div>
                        <label className="text-sm text-white/70">Guests</label>
                        <select
                          value={form.guests}
                          onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-gold-500/50"
                        >
                          {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                        {errors.guests && <div className="mt-1 text-xs text-red-400">{errors.guests}</div>}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-sm text-white/70">Notes (optional)</label>
                        <textarea
                          rows={3}
                          value={form.notes}
                          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-gold-500/50"
                          placeholder="Allergies, occasion, seating preference..."
                        />
                      </div>

                      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="text-xs text-white/60 leading-relaxed">
                          By submitting, you agree to be contacted for reservation confirmation.
                        </div>
                        <button
                          type="submit"
                          className="rounded-2xl bg-gradient-to-r from-gold-500 to-gold-700 px-8 py-3 font-semibold text-black shadow-glow hover:brightness-110 transition"
                        >
                          Submit Reservation
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gold-500/90 to-gold-700/50 border border-white/10 shadow-glow flex items-center justify-center font-black">
                B
              </div>
              <div>
                <div className="font-display font-bold text-xl">Baba Reeba</div>
                <div className="text-sm text-white/60">Nightlife & Dining</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'menu', label: 'Menu' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'contact', label: 'Contact' },
              ].map((x) => (
                <button
                  key={x.id}
                  onClick={() => document.getElementById(x.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm text-white/80"
                >
                  {x.label}
                </button>
              ))}
            </div>

            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} PTS • Front-end clone demo
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

