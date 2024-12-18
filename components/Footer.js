'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8 md:px-14">
      <div className="max-w-screen-xl mx-auto space-y-4 md:flex justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Akkana Sanjeev. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <Link href="https://github.com/SanjeevAkkana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-300">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/akkana-sanjeev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-300">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;