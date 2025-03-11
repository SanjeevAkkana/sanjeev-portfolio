'use client';

import { motion } from 'framer-motion';
import { services } from './data';

const ServiceSection = () => {
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
          My Services
        </motion.h2>

        {/* Grid for service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 rounded-lg border-l-4 border-green-800 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Service Title and Pricing */}
              <h3 className="text-xl font-sans font-medium text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-xs font-sans text-gray-500 mb-4">
                {service.pricing}
              </p>

              {/* Service Description */}
              <ul className="list-disc list-inside space-y-2 mb-6">
                {service.description.map((point, idx) => (
                  <li key={idx} className="font-sans text-sm text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Clients Section */}
              <div className="mb-6">
                <h4 className="font-sans font-medium text-gray-800 mb-2">
                  Ideal For:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {service.clients.map((client, idx) => (
                    <li key={idx} className="font-sans text-sm text-gray-700">
                      {client}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Section */}
              <div>
                <h4 className="font-sans font-medium text-gray-800 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="font-sans text-sm text-gray-700">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;