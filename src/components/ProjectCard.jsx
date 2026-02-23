import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block overflow-hidden rounded-lg transition hover:shadow-lg"
    >
      <div className="relative overflow-hidden h-48 md:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-navy transition">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-beige text-dark rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="text-sm font-medium text-navy hover:text-dark transition">
          View Project →
        </button>
      </div>
    </Link>
  )
}
