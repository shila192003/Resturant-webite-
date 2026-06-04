import Modal from './Modal'
import { useMemo, useState } from 'react'

export default function GalleryModal({ open, onClose, images = [] }) {
  const list = useMemo(() => images, [images])
  const [activeIndex, setActiveIndex] = useState(0)

  const active = list[activeIndex]

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-white/70 text-sm">{active?.title || 'Gallery'}</div>
          <div className="flex items-center gap-2">
            <button
              className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              onClick={() => setActiveIndex((v) => (v - 1 + list.length) % list.length)}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              onClick={() => setActiveIndex((v) => (v + 1) % list.length)}
              aria-label="Next image"
            >
              →
            </button>
            <button
              className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
          {active?.src ? (
            <img src={active.src} alt={active?.title || 'Gallery image'} className="w-full h-[360px] md:h-[460px] object-cover" />
          ) : (
            <div className="h-[360px] md:h-[460px] bg-white/5 flex items-center justify-center text-white/60">
              No image
            </div>
          )}
        </div>

        {list.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-auto pb-1">
            {list.map((img, i) => (
              <button
                key={img.title || i}
                onClick={() => setActiveIndex(i)}
                className={
                  i === activeIndex
                    ? 'h-2.5 w-10 rounded-full bg-gold-500/70'
                    : 'h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-white/35'
                }
                aria-label={`Select image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Modal>
  )
}


