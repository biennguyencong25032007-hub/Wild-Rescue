'use client'

import { useState, useEffect } from 'react'
import { HiOutlinePhone, HiOutlineX } from 'react-icons/hi'

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="relative group">
        {/* Pulse glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 animate-pulse-glow" />
        
        <div className="relative glass-card bg-dark-900/90 p-4 pr-10 flex items-center gap-4 !rounded-2xl border-rose-500/30 hover:border-rose-400/50 cursor-pointer" style={{ transform: 'none' }}>
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 p-1 text-dark-500 hover:text-dark-300 transition-colors"
            aria-label="Close"
          >
            <HiOutlineX size={14} />
          </button>

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/25 flex-shrink-0">
            <HiOutlinePhone className="text-white text-xl" />
          </div>

          <div>
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Đường dây nóng</p>
            <a href="tel:19009453" className="text-lg font-bold text-white hover:text-rose-300 transition-colors">
              1900 - WILD
            </a>
            <p className="text-[11px] text-dark-400">Hỗ trợ cứu hộ 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}
