'use client'

import { projects } from './data';

const ProjectSection = () => {
  return (
    <div id="projects" className="w-full py-16 px-8 sm:px-14 z-0 mt-20 pt-24">
      <div>
        <h2 className="border-l-4 border-black px-4 font-mono text-xl font-bold mb-8">
          3. Projects Section
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white font-mono border-l-4 border-black rounded-lg p-6 hover:shadow-3xl shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
              <ul className="list-disc pl-5 mb-4">
                {project.description.map((point, idx) => (
                  <li key={idx} className="text-gray-700 text-sm mb-2">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;