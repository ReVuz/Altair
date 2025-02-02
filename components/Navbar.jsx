/* eslint-disable react/button-has-type */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`${styles.xPaddings} py-8  sticky top-0 z-50`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <div className="flex items-center">
          <img
            src="/Altair_logo.png"
            alt="Altair Logo"
            className="h-[40px] object-contain hover:scale-105 transition-transform duration-300 filter contrast-125 drop-shadow-lg"
            style={{
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-300">
            About
          </a>
          <a href="#explore" className="text-white hover:text-gray-300 transition-colors duration-300">
            Explore
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-20"
        >
          <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-primary-black p-4 shadow-lg z-30"
        >
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors duration-300 py-2 px-4 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#explore"
              className="text-white hover:text-gray-300 transition-colors duration-300 py-2 px-4 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors duration-300 py-2 px-4 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
