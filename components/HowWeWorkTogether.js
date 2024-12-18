'use client';

import { steps } from './data';

const HowWeWorkTogether = () => {
    return (
        <div className="w-full bg-white px-8 sm:px-14 pt-24 pb-16">
            <h2 className="font-mono text-xl font-bold border-l-4 border-black px-2 mb-8">
                How We Can Work Together?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step) => (
                    <div
                        key={step.step}
                        className="relative font-mono bg-white border-l-4 border-black rounded-lg p-6 hover:shadow-3xl shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="font-mono font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowWeWorkTogether;