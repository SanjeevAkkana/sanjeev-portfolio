'use client';

import { motion } from 'framer-motion';
import { projects } from './data';

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with fade-in animation */}
        <motion.h2
          className="border-l-8 border-green-800 pl-2 font-sans text-3xl font-medium text-gray-900 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          3. My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border-l-4 border-green-800 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
            >
              {/* Project Title and Duration */}
              <h3 className="text-xl font-sans font-medium text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-xs font-sans text-gray-500 mb-4">
                {project.duration}
              </p>

              {/* Project Description */}
              <ul className="list-disc list-inside space-y-2 mb-4">
                {project.description.map((desc, i) => (
                  <li key={i} className="font-sans text-sm text-gray-700">
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Skills Used */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-800 text-xs font-sans px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm border px-2 py-1 border-green-800 text-green-600 hover:text-green-800 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                )}
                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm border px-2 py-1 border-green-800 text-green-600 hover:text-green-800 transition-colors duration-300"
                  >
                    GitHub (Frontend)
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm border px-2 py-1 border-green-800 text-green-600 hover:text-green-800 transition-colors duration-300"
                  >
                    GitHub (Backend)
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm border px-2 py-1 border-green-800  text-green-600 hover:text-green-800 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm border px-2 py-1 border-green-800 text-green-600 hover:text-green-800 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;