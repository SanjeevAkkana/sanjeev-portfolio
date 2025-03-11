'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <motion.p
            className="text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            © {new Date().getFullYear()} Akkana Sanjeev. All rights reserved.
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
          >
            <Link
              href="https://github.com/SanjeevAkkana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-sm hover:text-green-800 transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/akkana-sanjeev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-sm hover:text-green-800 transition-colors duration-300"
            >
              LinkedIn
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;