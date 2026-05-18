import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Left — name & tagline */}
        <div>
          <h3 className="font-display text-lg text-dark mb-1">Peizhen (Emily) Li</h3>
        </div>

        {/* Center — nav links */}
        <div className="flex gap-8">
          {[
            { to: '/', label: 'Home' },
            { to: '/projects', label: 'Work' },
            { to: '/about', label: 'About' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-secondary hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — social */}
        <div className="flex gap-6">
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-sm text-secondary hover:text-dark transition-colors"
          >
            Email
          </a>
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-dark transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border">
        <p className="text-xs text-tertiary text-center">
          © {currentYear} Emily Li. All rights reserved.
        </p>
      </div>
    </footer>
  )
}