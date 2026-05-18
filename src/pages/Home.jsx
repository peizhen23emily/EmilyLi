import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'

/* ─── Reveal on Scroll ─── */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

/* ─── Arrow Icon ─── */
function ArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12L12 4M12 4H6M12 4V10" />
    </svg>
  )
}

/* ─── Marquee Word Cloud ─── */
function MarqueeCloud() {
  const words = [
    { text: 'Instructional Design', style: 'serif' },
    { text: 'UX Research', style: 'display' },
    { text: 'Learning Analytics', style: 'serif' },
    { text: 'Prototyping', style: 'display' },
    { text: 'Figma', style: 'normal' },
    { text: 'Data Visualization', style: 'serif' },
    { text: 'dashboards', style: 'normal' },
    { text: 'Personalization', style: 'display' },
    { text: 'Articulate 360', style: 'normal' },
    { text: 'usability testing', style: 'normal' },
    { text: 'self-regulated learning', style: 'serif' },
    { text: 'e-learning', style: 'normal' },
    { text: 'SQL', style: 'normal' },
    { text: 'design thinking', style: 'display' },
    { text: 'R Studio', style: 'normal' },
    { text: 'feedback loops', style: 'serif' },
    { text: 'trace data', style: 'normal' },
  ]
  const cls = (s) => {
    if (s === 'serif') return 'font-editorial italic text-xl md:text-[1.375rem]'
    if (s === 'display') return 'font-display text-xl md:text-2xl'
    return 'font-body font-medium text-base md:text-lg'
  }
  const color = (s) => {
    if (s === 'serif') return '#545454'
    if (s === 'display') return '#1A1816'
    return '#9B9389'
  }
  const renderGroup = (key) => (
    <div key={key} className="flex items-center shrink-0 py-4 md:py-5">
      {words.map((w, i) => (
        <React.Fragment key={`${key}-${i}`}>
          <span className={`px-4 md:px-6 whitespace-nowrap transition-colors duration-300 cursor-default ${cls(w.style)}`} style={{ color: color(w.style) }}>{w.text}</span>
          <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#DDD8D0' }} />
        </React.Fragment>
      ))}
    </div>
  )
  return (
    <div className="relative overflow-hidden" style={{ borderTop: '0.5px solid rgba(0,0,0,0.08)', borderBottom: '0.5px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.92)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }} />
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {renderGroup('a')}
        {renderGroup('b')}
      </div>
    </div>
  )
}

/* ─── Spiral Card ─── */
function SpiralCard({ number, project, size, marginLeft = '0%', delay = 0 }) {
  const sizeMap = {
    1: { padding: '22px 26px', numSize: '1.75rem', titleSize: '1.2rem', descSize: '0.875rem' },
    2: { padding: '20px 24px', numSize: '1.6rem', titleSize: '1.1rem', descSize: '0.85rem' },
    3: { padding: '18px 22px', numSize: '1.45rem', titleSize: '1.05rem', descSize: '0.84rem' },
    4: { padding: '18px 22px', numSize: '1.35rem', titleSize: '1.02rem', descSize: '0.83rem' },
    5: { padding: '16px 20px', numSize: '1.25rem', titleSize: '0.97rem', descSize: '0.82rem' },
    6: { padding: '14px 18px', numSize: '1.15rem', titleSize: '0.92rem', descSize: '0.8rem' },
  }
  const s = sizeMap[size]
  const num = String(number).padStart(2, '0')
  const [hovered, setHovered] = useState(false)

  return (
    <Reveal delay={delay}>
      <Link
        to={`/projects/${project.id}`}
        className="block group"
        style={{
          padding: s.padding,
          borderRadius: '12px',
          background: hovered ? 'rgba(255,255,255,0.98)' : 'rgba(246, 243, 238, 0.35)',
          border: hovered ? '0.5px solid rgba(196,85,58,0.2)' : '0.5px solid rgba(0,0,0,0.03)',
          cursor: 'pointer',
          transition: 'all 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)',
          transformStyle: 'preserve-3d',
          transform: hovered ? 'translateZ(50px) translateY(-5px) scale(1.03)' : 'translateZ(0) scale(1)',
          opacity: hovered ? 1 : 0.45,
          position: 'relative',
          zIndex: hovered ? 50 : 3,
          boxShadow: hovered ? '0 24px 48px rgba(26,24,22,0.18), 0 8px 20px rgba(26,24,22,0.08)' : 'none',
          marginLeft,
          marginBottom: '14px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center justify-between" style={{ marginBottom: '4px' }}>
          <div className="flex items-center gap-2">
            <span className="font-editorial italic" style={{ fontSize: s.numSize, color: hovered ? '#252525' : '#DDD8D0', lineHeight: 1, transition: 'color 0.3s' }}>{num}</span>
            <span className="font-body font-semibold uppercase tracking-wide" style={{ fontSize: '0.65rem', color: '#252525', letterSpacing: '0.06em', opacity: hovered ? 1 : 0.5, transition: 'opacity 0.3s' }}>
              {project.tags.join(' · ')}
            </span>
          </div>
          <span style={{ fontSize: '14px', color: '#252525', opacity: hovered ? 1 : 0, transition: 'all 0.3s', transform: hovered ? 'translate(2px, -2px)' : 'none' }}>↗</span>
        </div>
        <h3 className="font-display font-normal tracking-tight" style={{ fontSize: s.titleSize, color: '#1A1816', margin: 0, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {project.title}
        </h3>
        <p className="font-body" style={{ fontSize: s.descSize, color: '#9B9389', lineHeight: 1.6, marginTop: '6px' }}>
          {project.description}
        </p>
      </Link>
    </Reveal>
  )
}


/* ═══════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════ */
export default function Home() {
  const spiralOrder = [
    projects[5], // 01: Code to Learn
    projects[1], // 02: Physics 114
    projects[2], // 03: Cook Out
    projects[4], // 04: When Do Students
    projects[3], // 05: Identity Disparities
    projects[0], // 06: Vanguard
  ]

  const topProjects = spiralOrder.slice(0, 3)
  const bottomProjects = spiralOrder.slice(3)

  /* Top: right→left offsets */
  const topMargins = ['5%', '15%', '25%']
  /* Bottom: left→right offsets */
  const bottomMargins = ['5%', '15%', '25%']

  return (
    <div style={{ background: '#FFFFFF', overflowX: 'hidden' }}>

      {/* ═══ TOP SECTION: Hero (left) + Spiral 1–3 (right) ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">

        {/* Hero — left column */}
        <div className="md:col-span-5 px-6 md:px-12 pt-28 md:pt-36 pb-8 flex flex-col justify-center">
          <div className="text-xs font-semibold tracking-[0.12em] uppercase mb-6 animate-fade-up" style={{ color: '#252525', animationDelay: '0.2s' }}>
            Learning Analytics / ID / LXD
          </div>

          <h1 className="font-display font-normal leading-[1.12] tracking-tight mb-8 animate-fade-up" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', color: '#1A1816', animationDelay: '0.4s' }}>
            <span className="relative group cursor-pointer inline-block">
              <span className="group-hover:opacity-0 transition-opacity duration-300">Peizhen Li</span>
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap" style={{ color: '#252525' }}>Emily</span>
            </span>
            <br />
            <span className="font-editorial italic font-light" style={{ color: '#252525' }}>designing with</span>
            <br />
            intention
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 items-start mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 shadow-md">
              <img src="https://i.imgur.com/1tdfdAE.jpeg" alt="Peizhen (Emily) Li" className="w-full h-full object-cover" />
            </div>
            <p className="font-body text-sm md:text-base leading-relaxed max-w-[380px]" style={{ color: '#6B635A' }}>
              Hey!I'm Emily — a designer who cares about the details people feel but rarely notice. Currently developing a plugin that could be embed into LMS to provide real-time personalized feedback for students and instructors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-5 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/peizhen-li-156b5427b', external: true },
              { label: 'GitHub', href: 'https://github.com/peizhen23emily', external: true },
              { label: 'Email', href: 'mailto:peizhenli723@gmail.com' },
              { label: 'Resume', to: '/resume' },
            ].map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to} className="group inline-flex items-center gap-2 text-sm font-medium py-2 transition-colors" style={{ color: '#6B635A', borderBottom: '1px solid #DDD8D0' }}>
                  {link.label} <ArrowIcon />
                </Link>
              ) : (
                <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="group inline-flex items-center gap-2 text-sm font-medium py-2 transition-colors" style={{ color: '#6B635A', borderBottom: '1px solid #DDD8D0' }}>
                  {link.label} <ArrowIcon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Spiral 1–3 — right column, sweeping right→left */}
        <div className="md:col-span-7 px-4 md:px-8 pt-8 md:pt-28 pb-4 flex flex-col justify-center" style={{ perspective: '1000px' }}>
          {topProjects.map((project, idx) => (
            <SpiralCard
              key={project.id}
              number={idx + 1}
              project={project}
              size={idx + 1}
              marginLeft={topMargins[idx]}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>

      {/* ═══ WORD CLOUD DIVIDER ═══ */}
      <MarqueeCloud />

      {/* ═══ BOTTOM: Projects 4–6 sweeping left→right ═══ */}
      <div className="px-4 md:px-8 py-4 md:py-6" style={{ perspective: '1000px' }}>
        <div className="max-w-5xl ml-auto mr-0 md:mr-8">
          {bottomProjects.map((project, idx) => (
            <SpiralCard
              key={project.id}
              number={idx + 4}
              project={project}
              size={idx + 4}
              marginLeft={bottomMargins[idx]}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>

      {/* ═══ RECENT NEWS ═══ */}
      <section style={{ background: '#252525', padding: 'clamp(28px, 4vw, 44px) clamp(24px, 4vw, 64px)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display font-normal tracking-tight mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#ffffff' }}>
              Recent news about me
            </h2>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {[
              { date: 'June 2025', text: 'Attended graduation ceremony at UNC-Chapel Hill' },
              { date: 'May 2025', text: 'Presented at LAK\'26 conference in Norway, Bergen' },
              { date: 'Aug 2024', text: 'Started M.A. in Educational Innovation at UNC-Chapel Hill' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="text-left" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px 20px', maxWidth: '280px' }}>
                  <div className="font-body font-semibold uppercase mb-1" style={{ fontSize: '0.6875rem', color: '#CFCFCF', letterSpacing: '0.08em' }}>{item.date}</div>
                  <p className="font-body" style={{ fontSize: '0.875rem', color: '#ffffff', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}