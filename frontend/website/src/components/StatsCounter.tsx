'use client'

import { useEffect, useRef, useState } from 'react'

interface StatsCounterProps {
  end: number
  label: string
  icon: React.ReactNode
  suffix?: string
  duration?: number
}

export default function StatsCounter({ end, label, icon, suffix = '', duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="glass-card p-6 md:p-8 text-center group">
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {isVisible ? count.toLocaleString() : '0'}
        <span className="gradient-text">{suffix}</span>
      </div>
      <p className="text-sm text-dark-400 font-medium">{label}</p>
    </div>
  )
}
