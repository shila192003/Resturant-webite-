import { useMemo } from 'react'
import Reveal from './Reveal'

export default function GalleryGrid({ items = [], onOpen }) {
  const list = useMemo(() => items, [items])

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((it, idx) => (
        <Reveal key={it.title || idx} className="group">
          <button
            type="button"
            onClick={() => onOpen?.(idx)}
            className="text-left rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition"
            aria-label={`Open ${it.title || 'image'}`}
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/0" />
              {it.src && (
                <img
                  src={it.src}
                  alt={it.title || 'Gallery image'}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="p-4">
              <div className="text-gold-200/90 font-semibold">{it.title || 'Gallery'}</div>
              <div className="mt-1 text-sm text-white/65">{it.subtitle || 'Click to view'}</div>
            </div>
          </button>
        </Reveal>
      ))}
    </div>
  )
}

