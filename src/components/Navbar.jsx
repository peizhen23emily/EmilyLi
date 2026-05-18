import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/projects', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between
        px-6 md:px-16 backdrop-blur-xl transition-colors duration-300
        ${scrolled ? 'border-b border-border' : 'border-b border-transparent'}`}
      style={{ backgroundColor: 'rgba(246, 243, 238, 0.85)' }}
    >
      {/* Bold Emily Li */}
      <Link
        to="/"
        className="font-display text-lg tracking-tight text-dark hover:text-accent transition-colors"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 700 }}
      >
        Emily Li
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="relative py-1"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: isActive(path) ? '#1A1816' : '#6B635A',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#1A1816' }}
            onMouseLeave={(e) => { if (!isActive(path)) e.currentTarget.style.color = '#6B635A' }}
          >
            {label}
            {/* Underline */}
            <span
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                height: '1.5px',
                width: isActive(path) ? '100%' : '0',
                backgroundColor: isActive(path) ? '#1A1816' : '#252525',
                transition: 'width 0.3s ease',
              }}
              ref={(el) => {
                if (!el) return
                const parent = el.parentElement
                const enter = () => { if (!isActive(path)) el.style.width = '100%' }
                const leave = () => { if (!isActive(path)) el.style.width = '0' }
                parent.addEventListener('mouseenter', enter)
                parent.addEventListener('mouseleave', leave)
              }}
            />
          </Link>
        ))}
        <a
          href="mailto:peizhenli723@gmail.com"
          className="relative py-1"
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#6B635A',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#1A1816' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#6B635A' }}
        >
          Contact
          <span
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              height: '1.5px',
              width: '0',
              backgroundColor: '#252525',
              transition: 'width 0.3s ease',
            }}
            ref={(el) => {
              if (!el) return
              const parent = el.parentElement
              parent.addEventListener('mouseenter', () => { el.style.width = '100%' })
              parent.addEventListener('mouseleave', () => { el.style.width = '0' })
            }}
          />
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-7 h-5 flex flex-col justify-between"
        aria-label="Toggle menu"
      >
        <span className={`block w-full h-[1.5px] bg-dark transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
        <span className={`block w-full h-[1.5px] bg-dark transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-full h-[1.5px] bg-dark transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 px-6 pt-12 flex flex-col gap-6 md:hidden"
          style={{ backgroundColor: '#F6F3EE' }}>
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '2rem',
                letterSpacing: '-0.01em',
                color: isActive(path) ? '#252525' : '#1A1816',
                transition: 'color 0.3s ease',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:peizhenli723@gmail.com"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '2rem',
              color: '#1A1816',
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}