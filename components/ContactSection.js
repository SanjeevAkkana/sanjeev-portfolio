'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with fade-in animation */}
        <motion.h2
          className="border-l-8 border-green-800 pl-4 font-sans text-3xl font-medium mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          5. Contact Me
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="font-sans text-sm max-w-2xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
        >
          If you’d like to collaborate, ask a question, or just want to say hello, feel free to reach out!
        </motion.p>

        {/* Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h3 className="border-l-8 border-green-800 pl-2 font-sans text-xl font-medium">
              Contact Details
            </h3>
            <div className="space-y-4 text-sm">
              <p className="font-sans text-gray-800">
                <span className="text-green-800">&gt; Full Name:</span> Akkana Sanjeev
              </p>
              <p className="font-sans text-gray-800">
                <span className="text-green-800">&gt; Phone Number:</span> +91 7075972027
              </p>
              <p className="font-sans text-gray-800">
                <span className="text-green-800">&gt; Role:</span> Full-Stack Developer
              </p>
              <p className="font-sans text-gray-800">
                <span className="text-green-800">&gt; City:</span> Ongole, India
              </p>
              <p className="font-sans text-gray-800">
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
      </div>
    </section>
  );
};

export default ContactSection;