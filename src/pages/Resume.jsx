import React, { useState } from 'react'

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false)

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 border-b border-beige">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-dark mb-6">Resume</h1>
          <p className="text-lg text-gray-700 mb-8">
            Download my full resume or view my qualifications below.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download="/resume.pdf"
              className="px-8 py-3 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            <a
              href="mailto:peizhenli723@gmail.com?subject=Resume%20Inquiry"
              className="px-8 py-3 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy hover:text-cream transition"
            >
              Request on Email
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-6">Professional Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Educational technology researcher and instructional designer with experience spanning learning analytics, 
            UX/UI design, and e-learning development. Currently pursuing an M.A. in Educational Innovation, 
            Technology and Entrepreneurship at UNC-Chapel Hill, with a BSc(Hons) in Education from the University of Manchester.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Skilled in translating complex data into educator-facing insights through tools like Figma, Looker Studio, 
            and Articulate 360. Experienced in learning analytics research, statistical analysis in R, and designing 
            interactive e-learning experiences. Fluent in English and Mandarin.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-8">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Learning Analytics Research',
                stat: '400+',
                description: 'Undergraduate students tracked via interactive Looker Studio dashboards in Physics 114'
              },
              {
                title: 'Conference Presentation',
                stat: 'LAK26',
                description: 'Presented research on self-regulated learning and exam performance in Bergen, Norway'
              },
              {
                title: 'E-Learning Development',
                stat: '80+',
                description: 'Interactive assessments and activities built in Articulate Rise for Cook Out the Exam'
              },
              {
                title: 'User-Centered Design',
                stat: '5+',
                description: 'In-depth 1-hour user testing sessions conducted for the Vanguard Year-in-Review redesign'
              }
            ].map((highlight, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg">
                <p className="text-sm font-semibold text-navy uppercase mb-2">
                  {highlight.title}
                </p>
                <p className="text-4xl font-bold text-dark mb-2">
                  {highlight.stat}
                </p>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Research Assistant',
                company: 'UNC-Chapel Hill Center of Learning Analytics',
                period: 'Sep 2025 - Present',
                achievements: [
                  'Engineered interactive Looker Studio dashboards to visualize engagement and performance metrics for 400+ undergraduate students in Physics 114',
                  'Utilized pivot tables to investigate event-level click-through patterns, generating insights into potential causes of misalignment',
                  'Applied advanced statistical methods in R to real-world datasets including biology course projects',
                  'Designed onboarding processes for internship projects, ensuring clarity and consistency in task execution'
                ]
              },
              {
                 title: 'Camp Counselor',
                company: "Steve and Kate's Camp",
                period: 'Jun 2025 - Jul 2025',
                achievements: [
                  'Led age-appropriate art-and-craft workshops for groups of 60+ per day, fostering creativity and cultural appreciation',
                  'Coordinated activity flow and transitions, helping the group stay organized and focused throughout the day',
                  'Resolved conflicts and encouraged positive behavior, fostering a collaborative and fun environment'
                ]
              },
              {
                title: 'Document Coordinator',
                company: 'FISU Summer Universiade Main Cooperation Center',
                period: 'Jun 2023 - Aug 2023',
                achievements: [
                  'Synthesized daily venue transition and mission-critical reports from all competition sites to provide the Executive Command with real-time situational awareness',
                  'Provided simultaneous interpretation and technical translation for FISU Games Director during strategic meetings between FISU and Main Corperation Center teams'
                ]
              }
            ].map((job, idx) => (
              <div key={idx} className="border-l-4 border-navy pl-6 pb-6">
                <h3 className="text-2xl font-bold text-dark mb-1">{job.title}</h3>
                <p className="text-lg text-navy font-semibold mb-1">{job.company}</p>
                <p className="text-sm text-gray-600 mb-4">{job.period}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="flex gap-3 text-gray-700">
                      <span className="text-navy mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-8">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: 'M.A. in Educational Innovation, Technology and Entrepreneurship',
                school: 'The University of North Carolina at Chapel Hill',
                year: 'Aug 2024 - Jul 2026',
                info: 'Expected'
              },
              {
                degree: 'BSc (Hons) in Education',
                school: 'The University of Manchester',
                year: 'Sep 2021 - Jun 2024',
                info: 'Completed'
              }
            ].map((edu, idx) => (
              <div key={idx} className="border-l-4 border-navy pl-6">
                <h3 className="text-xl font-bold text-dark mb-1">{edu.degree}</h3>
                <p className="text-lg text-navy font-semibold mb-1">{edu.school}</p>
                <p className="text-sm text-gray-600 mb-2">{edu.year}</p>
                <p className="text-gray-700">{edu.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-navy text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can work together to create meaningful design solutions.
          </p>
          <a
            href="mailto:emily@emilyli.com"
            className="inline-block px-8 py-3 bg-cream text-navy rounded-lg font-medium hover:bg-beige transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
