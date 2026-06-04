import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', once = true, threshold = 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) obs.disconnect()
        } else {
          if (!once) setVisible(false)
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [once, threshold])

  return (
    <div
      ref={ref}
      className={
        visible
          ? className
          : `opacity-0 translate-y-6 ${className}`
      }
      style={{ transition: 'opacity 700ms ease, transform 700ms ease' }}
    >
      {children}
    </div>
  )
}

