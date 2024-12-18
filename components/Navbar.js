'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-white fixed px-4 md:px-12 py-6 flex justify-between items-center z-50">
      {/* Left Section: Logo and Branding */}
      <div className="flex justify-center items-center gap-x-2">
        <p className="w-8 h-8 bg-black rounded-full"></p>
        <Link href="/" className="text-2xl font-bold font-mono">
          Portfolio.
        </Link>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="hidden lg:flex items-center gap-6">
        <Link href="#about" className="font-mono hover:underline">
          <span>1.</span> About
        </Link>
        <Link href="#skills" className="font-mono hover:underline">
          <span>2.</span> Skills
        </Link>
        <Link href="#projects" className="font-mono hover:underline">
          <span>3.</span> Projects
        </Link>
        <Link href="#services" className="font-mono hover:underline">
          <span>4.</span> Services
        </Link>
        <Link href="#contact" className="font-mono hover:underline">
          <span>5.</span> Contact
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden z-50 flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white h-screen flex flex-col justify-center items-center py-6 gap-4 transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Link
          href="#about"
          className="font-mono hover:underline"
          onClick={toggleMenu}
        >
          <span>1.</span> About
        </Link>
        <Link
          href="#skills"
          className="font-mono hover:underline"
          onClick={toggleMenu}
        >
          <span>2.</span> Skills
        </Link>
        <Link
          href="#projects"
          className="font-mono hover:underline"
          onClick={toggleMenu}
        >
          <span>3.</span> Projects
        </Link>
        <Link
          href="#services"
          className="font-mono hover:underline"
          onClick={toggleMenu}
        >
          <span>4.</span> Services
        </Link>
        <Link
          href="#contact"
          className="font-mono hover:underline"
          onClick={toggleMenu}
        >
          <span>5.</span> Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;