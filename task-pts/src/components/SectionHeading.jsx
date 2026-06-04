export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const a = align === 'center' ? 'text-center' : 'text-left'
  return (
    <div className={`${a} mx-auto max-w-2xl`}>
      {eyebrow && <div className="text-gold-200/90 font-semibold tracking-wider text-sm">{eyebrow}</div>}
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

