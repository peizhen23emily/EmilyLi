import React, { useState, useEffect, useRef } from 'react'
import Timeline from '../components/Timeline'
import { experience, skills, socialLinks } from '../data/portfolio'

export default function About() {
  const [visibleItems, setVisibleItems] = useState([])
  const timelineRef = useRef(null)

  // Scroll animation for timeline
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => [...new Set([...prev, entry.target.dataset.index])])
        }
      })
    }, { threshold: 0.1 })

    const items = timelineRef.current?.querySelectorAll('[data-index]')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-cream min-h-screen">
      {/* Bio Section - Two Parts */}
      <section className="py-20 px-4 border-b border-beige">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-dark mb-12">About Me</h1>
          
          {/* Professional Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-beige">
                <img
                  src="https://i.imgur.com/ojbrEr6.jpeg"
                  alt="Peizhen (Emily) Li - Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Professional Bio Text */}
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-dark mb-4">My Professional Journey</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Hi! I'm Peizhen, but most people call me Emily. I'm an instructional designer and learning analytics specialist with 2 years of experience creating personalized and adaptive digital experiences.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm passionate about understanding user needs through research and translating those insights into thoughtful design solutions. My background spans Education, Educational Technology, and Data Analysis, giving me expertise in complex problem spaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="px-6 py-2 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition"
                >
                  Email Me
                </a>
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy hover:text-cream transition"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Sporty & Personal Lifestyle Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Personal Bio Text */}
            <div className="md:col-span-1 md:order-2">
              <h2 className="text-3xl font-bold text-dark mb-4">The Sporty Side of Me</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Beyond my work as a designer, I'm a passionate sports enthusiast who believes movement and creativity go hand in hand. I won third place in a cross-country race in high school, and recently I've been practicing table tennis—a skill my grandparents taught me when I was just five years old.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm also a dedicated Americano lover (yes, just Americano!) and a CD & Vinyl collector. I love discovering record stores in every city I visit. For me, sports, music, and good coffee aren't just hobbies—they're what keep my life balanced and grounded. They remind me that design is just one part of living fully and authentically.
              </p>
            </div>

            {/* Photo Placeholder */}
            <div className="md:col-span-1 md:order-1">
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://i.imgur.com/s0exbZl.jpeg"
                  alt="Emily's sporty lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Timeline */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-12">Experience & Education</h2>
          <div 
            ref={timelineRef}
            className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {experience.map((item, idx) => (
              <div
                key={idx}
                data-index={idx}
                className={`flex-shrink-0 w-full md:w-96 transition-all duration-500 transform ${
                  visibleItems.includes(String(idx))
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-navy h-full">
                  <div className="flex items-center gap-2 mb-3">
                    {item.type === 'education' || item.type === 'Education' ? (
                      <span className="text-2xl">🎓</span>
                    ) : (
                      <span className="text-2xl">💼</span>
                    )}
                    <span className="text-xs font-bold text-navy uppercase">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-navy font-semibold mb-1">{item.organization}</p>
                  <p className="text-sm text-gray-600 mb-3">{item.date}</p>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">← Scroll to see more →</p>
        </div>
      </section>

      {/* Personal Interests - Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-12">Beyond Work</h2>
          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
            {[
              {
                image: 'https://i.imgur.com/TsR1nbz.jpeg',
              },
              {
                image: 'https://i.imgur.com/qqe6Q1X.jpeg',
              },
              {
                image: 'https://i.imgur.com/5H9JiMC.jpeg',
              },
              {
                image: 'https://i.imgur.com/dJWfoHG.jpeg',
              },
              {
                image: 'https://i.imgur.com/QRW31j9.jpeg',
              },
              {
                image: 'https://i.imgur.com/CXZAUo5.jpeg',
              },
              {
                image: 'https://i.imgur.com/yT8CNbb.jpeg',
              },
              {
                image: 'https://i.imgur.com/agIi2Mc.jpeg',
              },
            ].map((interest, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-96 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl h-80 md:h-96">
                  <img
                    src={interest.image}
                    alt="Emily's lifestyle moment"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="text-white">
                      <p className="text-3xl mb-2">{interest.emoji}</p>
                      <h3 className="text-xl font-bold">{interest.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">← Scroll to see more →</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-navy text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg mb-8 opacity-90">
            Interested in collaborating or just want to chat about design, sports, or good coffee? I'd love to hear from you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${socialLinks.email}`}
              className="px-8 py-3 bg-cream text-navy rounded-lg font-medium hover:bg-beige transition"
            >
              Send Email
            </a>
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-cream text-cream rounded-lg font-medium hover:bg-cream hover:text-navy transition"
              >
                Visit LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
