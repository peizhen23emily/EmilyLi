import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-beige border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-navy mb-2">Peizhen (Emily) Li</h3>
            <p className="text-dark hover:text-navy transition font-medium">
              Instructional Designer and Learning Analyst crafting meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark hover:text-navy transition font-medium">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-dark hover:text-navy transition font-medium">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-dark hover:text-navy transition font-medium">About</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-dark mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-dark hover:text-navy transition font-medium"
                title="Email"
              >
                Email
              </a>
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-navy transition font-medium"
                  title="LinkedIn"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-sm text-dark">
            © {currentYear} Peizhen (Emily) Li. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
