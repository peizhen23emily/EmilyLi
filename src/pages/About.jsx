import React from 'react'
import Timeline from '../components/Timeline'
import { experience, skills, socialLinks } from '../data/portfolio'

export default function About() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-beige">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-dark mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-beige">
                <img
                  src="https://i.imgur.com/ojbrEr6.jpeg"
                  alt="Peizhen (Emily) Li"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Hi! I'm Peizhen, but most people call me Emily. I'm a instructional designer and leanrning analytics with 2 years of 
                experience creating personalized and adaptive digital experiences.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I'm passionate about understanding user needs through research and translating those insights 
                into thoughtful design solutions. My background spans Education, Educational Technology, and Data Analysis, 
                giving me expertise in complex problem spaces.
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
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-12">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Design Skills */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">Design</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-beige text-dark rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-beige text-dark rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Research */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">Research Methods</h3>
              <div className="flex flex-wrap gap-2">
                {skills.research.map((method) => (
                  <span
                    key={method}
                    className="px-4 py-2 bg-beige text-dark rounded-full text-sm font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Other */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">Other Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-beige text-dark rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Timeline */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-12">Experience & Education</h2>
          <Timeline items={experience} />
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-12">Beyond Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '☕️',
                title: 'Only Americano',
                description: 'In the past year, I figured out I can actually only drink Americano. Previously I am a big fan of matcha latte then I found out I am allergic to milk not caffeine... So now I am on a journey to find the best Americano in any city, any country I go to! If you have any recommendation, Please let me know :)'
              },
              {
                icon: '💿',
                title: 'CD & Vinyl Collector',
                description: 'I collect vintage and modern CDs and Vinyl records, the first thing I do when arrive a new city is to find out the record stores nearby!'
              },
              {
                icon: '🏓',
                title: 'Sports Enthusiast',
                description: 'Fun fact about me: I won the third place in Cross-country race in high school, and recently I am practicing table tennis(taught by my grandparents when I was only five). Sports make me feel alive and it will imrpove the kenel of my life. '
              }
            ].map((interest, idx) => (
              <div key={idx} className="p-6 bg-beige rounded-lg">
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{interest.title}</h3>
                <p className="text-gray-700">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-navy text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg mb-8 opacity-90">
            Interested in collaborating or just want to chat about design? I'd love to hear from you!
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
