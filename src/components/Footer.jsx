import React from 'react'
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
            <p className="text-sm text-dark">
              Instructional Designer and Learning Analyst crafting meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-dark hover:text-navy transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-dark hover:text-navy transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark hover:text-navy transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-dark mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-dark hover:text-navy transition"
                title="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-navy transition"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.893v4.622h-2.578V9.337h2.477c.12 0 .24-.023.356-.007 1.04.0 1.296 0 1.933 0 .728 0 1.745.245 2.468 1.013.722.767 1.338 2.306 1.338 4.652v4.35zM5.009 7.998c-.428.405-.922.608-1.445.608-.522 0-1.017-.203-1.445-.608C1.692 7.612 1.5 6.95 1.5 6.297c0-.655.192-1.315.564-1.701.428-.405.922-.608 1.445-.608.522 0 1.017.203 1.445.608.372.386.564 1.046.564 1.701 0 .653-.192 1.315-.564 1.701zm11.26 9.276h-2.667v-4.592c0-.79.028-1.811-.1-2.57-.237-.787-.78-1.374-1.544-1.374-.779 0-1.274.521-1.594 1.356-.21.605-.262 1.22-.262 1.993v4.787H7.947V9.305h2.565v1.043h.035c.281-.537.703-1.237 1.91-1.237 1.735 0 2.868 1.268 2.868 3.837v4.59zM3.752 6.495c.584 0 1.06-.476 1.06-1.061 0-.584-.476-1.06-1.06-1.06-.584 0-1.061.476-1.061 1.06 0 .585.477 1.061 1.061 1.061zm8.586-1.06c0 .585-.476 1.061-1.06 1.061-.585 0-1.061-.476-1.061-1.061 0-.584.476-1.06 1.06-1.06.585 0 1.061.476 1.061 1.06z" />
                  </svg>
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
