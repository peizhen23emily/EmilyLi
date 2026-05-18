import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group flex flex-col h-full overflow-hidden rounded-xl bg-beige
        transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,24,22,0.08)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6875rem] font-semibold tracking-[0.08em] uppercase text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-normal tracking-tight text-dark mb-2
          group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-secondary leading-relaxed flex-grow">
          {project.description}
        </p>
      </div>
    </Link>
  )
}