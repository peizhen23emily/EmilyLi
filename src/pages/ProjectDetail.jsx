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
      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-cream bg-opacity-95 backdrop-blur-sm border-b border-beige py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/projects')}
            className="text-navy hover:text-dark font-medium transition flex items-center gap-2"
          >
            ← Back to Projects
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title and Tags */}
          <div className="mb-12">
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

          {/* Problem Statement */}
          <section className="mb-16 pb-16 border-b border-beige">
            <h2 className="text-3xl font-bold text-dark mb-6">Problem Statement</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          {/* Process */}
          <section className="mb-16 pb-16 border-b border-beige">
            <h2 className="text-3xl font-bold text-dark mb-6">My Process</h2>
            <ol className="space-y-4">
              {project.process.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-navy text-cream rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-lg text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
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
              {project.outcomes.map((outcome, idx) => (
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
