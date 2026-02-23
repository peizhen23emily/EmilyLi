import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState(null)

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  )

  // Filter projects by selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects

  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-dark mb-4">Selected Projects</h1>
          <p className="text-xl text-gray-600">
            A curated collection of my recent work in UX/Product design
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedTag === null
                ? 'bg-navy text-cream'
                : 'bg-white text-dark hover:bg-beige'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedTag === tag
                  ? 'bg-navy text-cream'
                  : 'bg-white text-dark hover:bg-beige'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">
              No projects found with that tag. Try selecting a different one!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
