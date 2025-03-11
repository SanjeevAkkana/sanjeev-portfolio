'use client';

import { motion } from 'framer-motion';
import { steps } from './data';

const HowWeWorkTogether = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with fade-in animation */}
        <motion.h2
          className="border-l-8 border-green-800 pl-2 font-sans text-3xl font-medium text-gray-900 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          How We Can Work Together
        </motion.h2>

        {/* Grid for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.step}
              className="bg-white p-6 rounded-lg border-l-4 border-green-800 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Step Number */}
              <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center mb-4">
                <span className="font-sans font-medium text-white text-lg">
                  {step.step}
                </span>
              </div>

              {/* Step Title and Description */}
              <h3 className="text-xl font-sans font-medium text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTogether;