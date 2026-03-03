import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import WordCloud from '../components/wordcloud'
import WorldMap from '../components/WorldMap'
import { projects, experience } from '../data/portfolio'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-cream">
        <div className="max-w-6xl mx-auto w-full">
          {/* Title and Subtitle */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              <span className="relative group cursor-pointer inline-block">
                <span className="group-hover:opacity-0 transition-opacity duration-300">Peizhen Li</span>
                <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 text-navy transition-opacity duration-300">Emily</span>
              </span>
            </h1>
          </div>

          {/* Main Content - WordCloud on Left/Right, Photo in Center */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            {/* Left - WordCloud */}
            <div className="md:col-span-3 flex items-start justify-center">
              <WordCloud side="left" />
            </div>

            {/* Center - Professional Photo with Buttons Below */}
            <div className="md:col-span-6 flex flex-col items-center gap-6">
              <div className="w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-lg bg-beige">
                <img
                  src="https://i.imgur.com/1tdfdAE.jpeg"
                  alt="Peizhen (Emily) Li"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Buttons Below Photo */}
              <div className="flex flex-col gap-3 w-full max-w-lg">
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition text-center"
                >
                  View My Work
                </Link>
                <a
                  href="mailto:peizhenli723@gmail.com"
                  className="px-8 py-3 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy hover:text-cream transition text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right - WordCloud */}
            <div className="md:col-span-3 flex items-start justify-center">
              <WordCloud side="right" />
            </div>
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
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* World Map Section - Places Waited to be Unlocked */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Check Out My Journey through the World!
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '600px' }}>
            <WorldMap />
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
