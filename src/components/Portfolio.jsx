import React, { useState } from 'react';
import { Briefcase, ExternalLink, Eye, Filter } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Extract unique categories
  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
            Work & Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl text-base">
            Hands-on projects, practical development experiments, and real-world system support work.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mt-3" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md shadow-primary/25 scale-105'
                  : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-dark-cardBorder hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder hover-glow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Image & Quick Action Overlay */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-xs">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    title="View details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    title="GitHub Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg font-bold text-gray-900 dark:text-white font-heading hover:text-primary transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-[#182030] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-medium text-gray-500 dark:text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
