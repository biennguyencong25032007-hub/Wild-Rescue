'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FaPaw } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/rescue', label: 'Cứu hộ' },
  { href: '/hospitals', label: 'Bệnh viện' },
  { href: '/volunteers', label: 'Tình nguyện' },
  { href: '/about', label: 'Về chúng tôi' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Liên hệ' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-500">
                <FaPaw className="text-white text-lg" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
            </div>
            <div>
              <span className="text-xl font-bold gradient-text">Wild Rescue</span>
              <span className="hidden sm:block text-[10px] text-dark-500 font-medium tracking-widest uppercase">
                Giải cứu Động vật
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-link-${link.href.replace('/', '') || 'home'}`}
                className="relative px-4 py-2 text-sm font-medium text-dark-400 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/donate"
              id="nav-donate-btn"
              className="px-5 py-2.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
            >
              Quyên góp
            </Link>
            <Link
              href="/rescue"
              id="nav-rescue-btn"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 active:scale-[0.98]"
            >
              🆘 Báo cáo ngay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark-400 hover:text-white transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-2 pb-4 space-y-1 border-t border-dark-800/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-dark-400 hover:text-white hover:bg-dark-800/50 rounded-xl transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4 space-y-3">
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-medium text-accent-400 border border-accent-500/30 rounded-xl hover:bg-accent-500/10 transition-all"
              >
                💛 Quyên góp
              </Link>
              <Link
                href="/rescue"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-500/25"
              >
                🆘 Báo cáo cứu hộ ngay
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
