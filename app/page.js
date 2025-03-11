'use client';

import { motion } from 'framer-motion';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowWeWorkTogether from '@/components/HowWeWorkTogether';
import Navbar from '@/components/Navbar';
import ProjectSection from '@/components/ProjectSection';
import ServiceSection from '@/components/ServiceSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="md:px-12 sm:px-6 px-4"
      >
        <HeroSection />
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="md:px-12 py-20 sm:px-6 px-4"
      >
        <AboutSection />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="md:px-12 py-20 sm:px-6 px-4"
        id="skills"
      >
        <SkillsSection />
      </motion.div>

      {/* Project Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="md:px-12 py-20 sm:px-6 px-4"
        id="projects"
      >
        <ProjectSection />
      </motion.div>

      {/* Service Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="md:px-12 py-20 sm:px-6 px-4"
        id="services" 
      >
        <ServiceSection />
      </motion.div>

      {/* How We Work Together Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="md:px-12 md:py-20 p-4"
      >
        <HowWeWorkTogether />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="md:px-12 py-20 sm:px-6 px-4"
         id="contact"
      >
        <ContactSection />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}