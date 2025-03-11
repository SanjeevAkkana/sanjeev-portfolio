'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full h-96 md:h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-white">
      {/* Left Section: Hero Introduction */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Hero Introduction Text */}
        <p className="font-sans text-sm text-gray-800">Hi, my name is</p>

        <motion.h1
          className="text-3xl font-medium border-l-8 border-green-800 border-black pl-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
        >
          Akkana Sanjeev.
        </motion.h1>

        <motion.p
          className="font-sans text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
        >
          Full Stack MERN & React Native Developer | Aspiring Entrepreneur | Open to Freelance Projects & Startup Collaborations
        </motion.p>

        {/* Resume Button to Download PDF */}
        <motion.a
          href="/Sanjeev-Resume.pdf"
          download="Sanjeev-Resume"
          className="mt-8 font-sans text-sm font-medium text-white bg-green-800 px-3 py-2 w-fit  hover:bg-green-950 transition-colors duration-300 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6, ease: 'easeOut' }}
        >
          Download Resume/CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;