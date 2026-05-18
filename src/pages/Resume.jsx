import React from 'react'

export default function Resume() {
  return (
    <div className="bg-cream min-h-screen">

      {/* Professional Summary */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-display text-dark mb-6">Professional Summary</h2>
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
          
          {/* Embedded PDF Viewer */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="/EmilyLi/resume1.pdf#toolbar=1&navpanes=0&scrollbar=1"
              className="w-full"
              style={{ minHeight: '800px' }}
              title="Resume PDF"
            />
          </div>
          
          {/* Fallback message */}
          <p className="text-center text-gray-600 mt-4 text-sm">
            If the PDF doesn't display, you can <a href="/EmilyLi/resume1.pdf" download className="text-navy font-medium hover:underline">download it here</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
