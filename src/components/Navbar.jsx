import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-cream bg-opacity-95 backdrop-blur-sm border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-navy hover:text-dark transition">
            PZL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition ${
                  isActive(path)
                    ? 'text-navy border-b-2 border-navy'
                    : 'text-dark hover:text-navy'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:emily@emilyli.com"
              className="text-sm font-medium text-dark hover:text-navy transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-dark hover:text-navy transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-medium transition ${
                  isActive(path)
                    ? 'bg-beige text-navy'
                    : 'text-dark hover:bg-beige'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:emily@emilyli.com"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-dark hover:bg-beige transition"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
