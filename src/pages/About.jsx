import React, { useEffect, useState, useRef } from 'react'
import WorldMap from '../components/WorldMap'
import { experience, socialLinks } from '../data/portfolio'

/* ─── Shared: Reveal on Scroll ─── */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

/* ─── Section Header ─── */
function SectionHeader({ title, subtitle }) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-dark">
          {title}
        </h2>
        {subtitle && (
          <p className="text-secondary mt-3 text-base md:text-lg max-w-xl">{subtitle}</p>
        )}
      </div>
    </Reveal>
  )
}


export default function About() {
  return (
    <div className="bg-cream min-h-screen">

      {/* ─── PAGE HEADER ─── */}
      <section className="pt-32 pb-8 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-[2.5rem] md:text-6xl font-normal leading-[1.15] tracking-tight text-dark animate-fade-up" style={{ animationDelay: '0.15s' }}>
            The person behind <br/>
            <span className="font-editorial italic font-light text-#7D7D7D">the pixels</span>
          </h1>
        </div>
      </section>

      {/* ─── PROFESSIONAL BIO ─── */}
      <section className="py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Photo */}
            <Reveal>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://imgur.com/En1DTxL.jpeg"
                  alt="Peizhen (Emily) Li — Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tight text-dark mb-6">
                  Of course I'm academic!
                </h2>
                <p className="text-base md:text-[1.0625rem] text-secondary leading-[1.8] mb-5">
                  I remember the first time I left home and flew all the way to UK in 2021 to begin my journey in education. At that point, I'm very curious on how human-like robotics could impact neurodivergent kids's way of expressing themselves. After 3 years of research and practice into different eductaional topics,
                  I found out exploring pedagogical solutions in the intersection of education and technology is what I truly enjoy. Especially after writing so many academic essays, I realized I'm not the person who just curious about how the the educational policy and stuff going on each day, I'm more care about the outcome of students after they receive certain interventions. Which is now my current interest and focus as an learning analytcis. Where students' learning patterns and needs come first, and technology is just a tool to support that. I'm a
                  learning analytics with 2 years of experience creating personalized and
                  adaptive digital experiences.
                  (Photo shoot in Chapel Hill, NC)
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SPORTY / PERSONAL BIO ─── */}
      <section className="py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Text (left on desktop) */}
            <Reveal>
              <div className="md:order-1">
                <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tight text-dark mb-6">
                  But I'm also sporty and fun!
                </h2>
                <p className="text-base md:text-[1.0625rem] text-secondary leading-[1.8] mb-5">
                  Beyond my academic pursuits, I'm a passionate sports enthusiast who believes movement
                  and creativity go hand in hand. I won third place in a cross-country race in high school,
                  and recently I've been practicing table tennis — a skill my grandparents taught me when I
                  was just five years old.
                </p>
                <p className="text-base md:text-[1.0625rem] text-secondary leading-[1.8]">
                  I'm also a dedicated Americano lover (yes, just Americano!) and a CD & Vinyl collector.
                  I love discovering record stores in every city I visit. My friend once asked me what humans need to bring if someday we have to live on another planet, and I said 'music'. Music is the one thing that can always bring me comfort and joy, no matter where I am in the world.
                  (Photo shoot in Fethiye, Turkey)
                </p>
              </div>
            </Reveal>

            {/* Photo (right on desktop) */}
            <Reveal delay={0.1}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md md:order-2">
                <img
                  src="https://imgur.com/gKHTWJX.jpeg"
                  alt="Emily's sporty lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE & EDUCATION ─── */}
      <section className="py-16 md:py-20 px-6 md:px-16 bg-beige">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Experience & Education" />

          <div className="space-y-6">
            {experience.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="flex gap-6 md:gap-10 items-start group">
                  {/* Date column */}
                  <div className="w-28 md:w-36 shrink-0 pt-1">
                    <span className="text-xs font-semibold tracking-[0.08em] uppercase text-#7D7D7D">
                      {item.type}
                    </span>
                    <p className="text-sm text-tertiary mt-1 font-body">{item.date}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6 border-b border-border group-last:border-0">
                    <h3 className="font-display text-lg font-normal tracking-tight text-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-secondary mb-2">
                      {item.organization}
                    </p>
                    <p className="text-sm text-tertiary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORLD MAP ─── */}
      <section className="py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="My Journey"
            subtitle="Places I've called home and cities I've explored along the way."
          />
          <Reveal>
            <div className="rounded-xl overflow-hidden shadow-sm border border-border" style={{ height: '520px' }}>
              <WorldMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── MOST MEMORABLE MOMENTS ─── */}
      <section className="py-16 md:py-20 px-6 md:px-16 bg-dark text-cream">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-cream">
                Most Memorable Moments in Life
              </h1>
            </div>
          </Reveal>

          {/* Photo mosaic grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: 'https://i.imgur.com/TsR1nbz.jpeg', span: 'col-span-2 row-span-2' },
              { src: 'https://i.imgur.com/qqe6Q1X.jpeg', span: 'col-span-1' },
              { src: 'https://i.imgur.com/5H9JiMC.jpeg', span: 'col-span-1' },
              { src: 'https://i.imgur.com/dJWfoHG.jpeg', span: 'col-span-1' },
              { src: 'https://i.imgur.com/QRW31j9.jpeg', span: 'col-span-1' },
              { src: 'https://i.imgur.com/CXZAUo5.jpeg', span: 'col-span-1' },
              { src: 'https://i.imgur.com/yT8CNbb.jpeg', span: 'col-span-1' },
              { src: 'https://i.imgur.com/agIi2Mc.jpeg', span: 'col-span-2' },
            ].map((photo, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div
                  className={`${photo.span} group overflow-hidden rounded-lg cursor-pointer`}
                >
                  <div className={`w-full ${photo.span.includes('row-span-2') ? 'h-full min-h-[320px] md:min-h-[420px]' : photo.span.includes('col-span-2') ? 'h-48 md:h-64' : 'h-40 md:h-52'} overflow-hidden`}>
                    <img
                      src={photo.src}
                      alt="A memorable moment"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}