import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolio'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Project Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the project you're looking for.
          </p>
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Back Button - Not Sticky */}
      <div className="bg-cream border-b border-beige py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/projects')}
            className="text-navy hover:text-dark font-medium transition flex items-center gap-2"
          >
            ← Back to Projects
          </button>
        </div>
      </div>

      {/* Main Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title and Tags with Shadow */}
          <div className="mb-12 pb-8 rounded-lg shadow-md bg-white p-8 -mx-8 px-8">
            <h1 className="text-5xl font-bold text-dark mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-beige text-dark rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16 pb-16 border-b border-beige">
            <h2 className="text-3xl font-bold text-dark mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
          </section>

          {/* Interactive View / Prototype */}
          <section className="mb-16 pb-16 border-b border-beige">
            <h2 className="text-3xl font-bold text-dark mb-6">Interactive View</h2>
            
            {/* Vanguard Redesign - Figma */}
            {project.id === 'project-1' && (
              <div className="w-full rounded-lg overflow-hidden shadow-md">
                <iframe 
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', minHeight: '600px' }} 
                  src="https://embed.figma.com/proto/2HyzlIREhEa4clYPaBhlXP/Peizhen-581-final-project?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&embed-host=share" 
                  allowFullScreen
                  title="Vanguard Year-in-Review Redesign"
                />
              </div>
            )}

            {/* Physics 114 - Looker Studio */}
            {project.id === 'project-2' && (
              <div className="w-full rounded-lg overflow-hidden shadow-md">
                <iframe 
                  width="100%" 
                  height="1000" 
                  src="https://lookerstudio.google.com/embed/reporting/32389de7-6dd5-4e35-8cda-d0babd4948e9/page/p_m940x0vl0d" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  title="Physics 114 Instructor Dashboard"
                />
              </div>
            )}

            {/* Cook Out Course - Articulate Link */}
            {project.id === 'project-3' && (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-lg text-gray-700 mb-6">
                  This interactive e-learning course is built in Articulate Storyline. Click the button below to explore the course checkpoint in a new window.
                </p>
                <a
                  href="https://share.articulate.com/f2jn-tLEFCV77tp8WMqdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition"
                >
                  Open Interactive Course →
                </a>
              </div>
            )}

            {/* PDF Projects (4, 5, 6) */}
            {(project.id === 'project-4' || project.id === 'project-5' || project.id === 'project-6') && project.pdfFile && (
              <div>
                <div className="flex justify-end mb-4">
                  <a
                    href={`/EmilyLi/${project.pdfFile}`}
                    download
                    className="px-6 py-2 bg-navy text-cream rounded-lg font-medium hover:bg-dark transition flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </div>
                <div className="w-full rounded-lg overflow-hidden shadow-md bg-white">
                  <iframe 
                    width="100%" 
                    style={{ minHeight: '800px' }}
                    src={`/EmilyLi/${project.pdfFile}#toolbar=1&navpanes=0&scrollbar=1`}
                    frameBorder="0"
                    title={project.title}
                  />
                </div>
              </div>
            )}
          </section>

          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <section className="mb-16 pb-16 border-b border-beige">
              <h2 className="text-3xl font-bold text-dark mb-6">Project Showcase</h2>
              <div className="space-y-6">
                {project.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full rounded-lg shadow-md"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Outcomes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Key Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.outcomes?.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-navy"
                >
                  <p className="text-lg font-semibold text-navy mb-2">Result {idx + 1}</p>
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* Navigation to Other Projects */}
      <section className="bg-beige py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-dark mb-8">More Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/projects/${otherProject.id}`}
                  className="group block rounded-lg overflow-hidden transition hover:shadow-lg"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={otherProject.image}
                      alt={otherProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-semibold text-dark group-hover:text-navy transition">
                      {otherProject.title}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Interested in working together?</h3>
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
