'use client';

import { skills } from './data';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with fade-in animation */}
        <motion.h2
          className="border-l-8 border-green-800 pl-2 font-sans text-3xl font-medium text-gray-900 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          My Skills
        </motion.h2>

        {/* Grid for skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border-l-4 border-green-800 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
            >
              {/* Skill Card Content */}
              <h3 className="text-xl font-sans font-medium text-gray-900 mb-2">
                {skill.skill}
              </h3>
              <p className="text-xs font-sans text-gray-500 mb-4">
                {skill.year}
              </p>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;