'use client'

import { skills } from "./data";
import { motion } from 'framer-motion';

const SkillsSection = () => {
    return (
        <div id="skills" className="w-full bg-white pt-24 px-8 sm:px-14 z-0">
            <div className="h-full w-full">
                {/* Section Title with fade-in animation */}
                <motion.h2 
                  className="border-l-4 border-black px-2 font-mono text-xl font-bold mb-8"
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ duration: 1, ease: 'easeOut' }}>
                    2. Skills Section
                </motion.h2>

                {/* Grid for skill cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg hover:shadow-3xl border-l-4 border-black shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.025 }}>
                            {/* Skill Card Content */}
                            <h3 className="text-lg font-mono font-bold text-black mb-2">
                                {skill.skill}
                            </h3>
                            <p className="text-xs font-mono text-gray-500">{skill.year}</p>
                            <p className="mt-2 font-mono text-sm text-gray-900">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
