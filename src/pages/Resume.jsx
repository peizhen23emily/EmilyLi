import React from 'react'

export default function Resume() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 border-b border-beige">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-dark mb-6">Resume</h1>
          <p className="text-lg text-gray-700">
            Browse my resume below or download a copy.
          </p>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-6">Professional Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I am the kind of person who asks "but what's actually broken?" before jumping to solutions. As an educational technology researcher and instructional designer, I sit at the intersection of data, design, and human behavior — fascinated by how people learn, why they sometimes don't, and what we can build to close that gap.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I do not believe training is always the answer — but when it is, I want it to be intentional, measurable, and worth someone's time. My goal is to grow into an organizational learning and development role where I can design experiences that genuinely move people and performance forward, backed by evidence and built with care.
            Bilingual in English and Mandarin, equally comfortable in spreadsheets and Figma, and yes — I probably have a city-pop vinyl playing in the background while I work.
          </p>
        </div>
      </section>

      {/* Resume PDF Viewer */}
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-dark">My Resume</h2>
            <a
              href="/EmilyLi/resume.pdf"
              download="Peizhen_Emily_Li_Resume.pdf"
              className="px-6 py-2 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </div>
          
          {/* Embedded PDF Viewer */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="/EmilyLi/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
              className="w-full"
              style={{ minHeight: '800px' }}
              title="Resume PDF"
            />
          </div>
          
          {/* Fallback message */}
          <p className="text-center text-gray-600 mt-4 text-sm">
            If the PDF doesn't display, you can <a href="/EmilyLi/resume.pdf" download className="text-navy font-medium hover:underline">download it here</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-navy text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can work together to create meaningful educational experiences.
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
