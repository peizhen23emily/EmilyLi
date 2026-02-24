import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Timeline from '../components/Timeline'
import { projects, experience } from '../data/portfolio'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)
  const timelineItems = experience.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Peizhen <span className="text-navy">(Emily)</span> Li
            </h1>
            <p className="text-xl md:text-2xl text-dark mb-2 font-light">
              Instructional Designer & Learning Analytics
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I design digital experiences that both benefit the instructors and students in different aspects. 
              Currently focused on trace the raw data of students click streams and ultmately build mastry leanirng paths for students.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition"
              >
                View My Work
              </Link>
              <a
                href="mailto:peizhenli723@gmail.com"
                className="px-8 py-3 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy hover:text-cream transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Content - Professional Photo Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-lg bg-beige">
              <img
                src="https://i.imgur.com/1tdfdAE.jpeg"
                alt="Peizhen (Emily) Li"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:block hidden">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-navy"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '📁', title: 'Projects', link: '/projects' },
              { icon: '🏃🏻‍♀️', title: 'About Me', link: '/about' },
              { icon: '📄', title: 'Resume', link: '/resume'},
              { icon: '✉️', title: 'Contact', link: '/', onClick: () => window.location.href = 'mailto:emily@emilyli.com' },
            ].map((card, idx) => (
              <Link
                key={idx}
                to={card.link}
                onClick={card.onClick}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition text-center group"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-navy transition">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Featured Projects</h2>
            <Link
              to="/projects"
              className="text-navy hover:text-dark font-medium transition"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-16 text-center">
            Experience & Education
          </h2>
          <Timeline items={timelineItems} />
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-block px-8 py-3 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy hover:text-cream transition"
            >
              View Full Timeline
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-navy text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8 opacity-90">
            I'm always interested in hearing about new projects and interesting design challenges.
          </p>
          <a
            href="mailto:peizhenli723@gmail.com"
            className="inline-block px-8 py-3 bg-cream text-navy rounded-lg font-medium hover:bg-beige transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
