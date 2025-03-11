'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full"
    >

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Text Content */}
        <motion.div
          className="lg:w-2/3 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Section Title */}
      <motion.h2
        className="border-l-8 border-green-800 pl-2 font-sans font-medium text-3xl mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>
          <p className="font-sans text-sm leading-relaxed">
            I am a passionate <span className="text-green-800">Full-Stack Developer</span> specializing in building real-time web and mobile applications. With deep expertise in technologies like the <span className="text-green-800">MERN stack</span> and <span className="text-green-800">React Native</span>, I am driven by the desire to solve complex problems and create innovative solutions.
          </p>
          <p className="font-sans text-sm leading-relaxed">
            As an <span className="text-green-800">aspiring entrepreneur</span>, I am particularly interested in collaborating with startups to bring ideas to life.
          </p>
          <Link
            href="#contact"
            className="inline-block mt-8 font-sans text-sm text-green-800 hover:text-green-300 underline transition-colors duration-300"
          >
            Do you want to contact me?
          </Link>
        </motion.div>

        {/* Right Column - Personal Info */}
        <motion.div
          className="lg:w-1/3 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
        >
          <h3 className="border-l-8 border-green-800 pl-2 font-sans font-bold text-2xl md:text-3xl">
            Personal Info
          </h3>
          <div className="grid grid-cols-1 gap-4 text-sm">
            <p className="font-sans ">
              <span className="text-green-800">&gt; Full Name:</span> Akkana Sanjeev
            </p>
            <p className="font-sans ">
              <span className="text-green-800">&gt; Role:</span> Full-Stack Developer
            </p>
            <p className="font-sans ">
              <span className="text-green-800">&gt; Industry:</span> Software Development
            </p>
            <p className="font-sans ">
              <span className="text-green-800">&gt; City:</span> Ongole, India
            </p>
            <p className="font-sans ">
              <span className="text-green-800">&gt; Degree:</span> B-Tech, CSE
            </p>
            <p className="font-sans ">
              <span className="text-green-800">&gt; Experience:</span> 2+ Years
            </p>
            <p className="font-sans ">
              <span className="text-green-800">&gt; Languages:</span> Telugu, English
            </p>
            <p className="font-sans ">
              <span className="text-green-800">&gt; Email:</span>{' '}
              <a
                href="mailto:akkanasanjeev@gmail.com"
                className="hover:text-green-300 underline transition-colors duration-300"
              >
                akkanasanjeev@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-black via-green-900/10 to-black"></div>
      </motion.div>
    </section>
  );
};

export default AboutSection;