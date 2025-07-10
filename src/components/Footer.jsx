import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGithub, FiTwitter, FiLinkedin, FiMail, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Navigation: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' }
    ],
    Connect: [
      { name: 'LinkedIn', href: 'https://linkedin.com/in/anndie-sood' },
      { name: 'GitHub', href: 'https://github.com/anndie-sood' },
      { name: 'Email', href: 'mailto:anndie.sood@email.com' },
      { name: 'Twitter', href: 'https://twitter.com/anndie_sood' }
    ]
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/anndie-sood', label: 'GitHub' },
    { icon: FiTwitter, href: 'https://twitter.com/anndie_sood', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/anndie-sood', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:anndie.sood@email.com', label: 'Email' }
  ];

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-white font-bold text-xl">Anndie Sood</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Digital marketing strategist creating innovative solutions and exceptional growth strategies. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="col-span-1"
            >
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Anndie Sood. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 sm:mt-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
            aria-label="Back to top"
          >
            <SafeIcon icon={FiArrowUp} className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;