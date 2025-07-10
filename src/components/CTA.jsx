import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLinkedin, FiMail, FiGithub } = FiIcons;

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="https://linkedin.com/in/anndie-sood"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-shadow duration-300"
            >
              <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="mailto:anndie.sood@email.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-500 text-white px-10 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-white/10 transition-colors duration-300"
            >
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              <span>Send Email</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind? Let's discuss how we can work together to create something amazing.
            </p>
            
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://linkedin.com/in/anndie-sood"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-colors duration-200"
              >
                <SafeIcon icon={FiLinkedin} className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="mailto:anndie.sood@email.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-colors duration-200"
              >
                <SafeIcon icon={FiMail} className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://github.com/anndie-sood"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-colors duration-200"
              >
                <SafeIcon icon={FiGithub} className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;