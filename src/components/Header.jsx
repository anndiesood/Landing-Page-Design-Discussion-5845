import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiLinkedin } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-white font-bold text-xl">Anndie Sood</span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://linkedin.com/in/anndie-sood"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg transition-shadow duration-200"
            >
              <SafeIcon icon={FiLinkedin} className="w-4 h-4" />
              <span>Connect</span>
            </motion.a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-md"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <a
                href="https://linkedin.com/in/anndie-sood"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiLinkedin} className="w-4 h-4" />
                <span>Connect</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;