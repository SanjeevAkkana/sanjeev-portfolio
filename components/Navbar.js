'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white p-4 sm:px-6 lg:px-12 flex justify-between items-center z-50 shadow-sm">
      {/* Left Section: Logo and Branding */}
      <div className="flex justify-center items-center gap-x-1">
        <Link href="/" className="text-3xl font-medium text-green-950 font-sans transition-colors">
          Portfolio
        </Link>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="hidden lg:flex text-sm items-center gap-8">
        <Link href="#about" className="font-sans text-gray-900 hover:underline hover:text-black transition-colors">
           About
        </Link>
        <Link href="#skills" className="font-sans text-gray-900 hover:underline hover:text-black transition-colors">
           Skills
        </Link>
        <Link href="#projects" className="font-sans text-gray-900 hover:underline hover:text-black transition-colors">
           Projects
        </Link>
        <Link href="#services" className="font-sans text-gray-900 hover:underline hover:text-black transition-colors">
         Services
        </Link>
        <Link href="#contact" className="font-sans text-gray-900 hover:underline hover:text-black transition-colors">
           Contact
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden z-50 flex items-center">
        <button onClick={toggleMenu} className="text-base text-gray-900 hover:text-gray-700 transition-colors">
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-6 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Link
          href="#about"
          className="font-sans text-gray-900 hover:underline hover:text-black transition-colors text-base"
          onClick={toggleMenu}
        >
           About
        </Link>
        <Link
          href="#skills"
          className="font-sans text-gray-900 hover:underline hover:text-black transition-colors text-base"
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="font-sans text-gray-900 hover:underline hover:text-black transition-colors text-base"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          href="#services"
          className="font-sans text-gray-900 hover:underline hover:text-black transition-colors text-base"
          onClick={toggleMenu}
        >
           Services
        </Link>
        <Link
          href="#contact"
          className="font-sans text-gray-900 hover:underline hover:text-black transition-colors text-base"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
