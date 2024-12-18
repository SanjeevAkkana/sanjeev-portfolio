'use client'

import { services } from './data';

const ServiceSection = () => {
  return (
    <div id="services" className="w-full bg-white px-8 sm:px-14 pt-24">
      <h2 className="border-l-4 border-black pl-4 font-mono text-xl font-bold mb-8">
        4. Service Section
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white font-mono border-l-4 border-black rounded-lg p-6 hover:shadow-3xl shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{service.pricing}</p>

            <ul className="list-disc pl-5 mb-4">
              {service.description.map((point, idx) => (
                <li key={idx} className="text-gray-700 text-sm mb-2">
                  {point}
                </li>
              ))}
            </ul>
            
            {/* Clients and their Benefits */}
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Clients:</h4>
              <ul className="list-inside list-disc pl-5 text-gray-700">
                {service.clients.map((client, idx) => (
                  <li key={idx} className="text-sm">{client}</li>
                ))}
              </ul>
            </div>

            {/* Benefits section */}
            <div>
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Benefits:</h4>
              <ul className="list-inside list-disc pl-5 text-gray-700">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
