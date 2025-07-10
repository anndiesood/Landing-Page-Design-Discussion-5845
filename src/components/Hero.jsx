import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLinkedin, FiMail } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <span className="text-purple-300 text-sm font-medium">Available for Opportunities</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anndie Sood
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Digital marketing strategist and performance optimization expert. 
            Driving growth through data-driven strategies and marketing automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="https://linkedin.com/in/anndie-sood"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-shadow duration-300"
          >
            <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </motion.a>
          
          <motion.a
            href="mailto:anndie.sood@email.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-white/10 transition-colors duration-300"
          >
            <SafeIcon icon={FiMail} className="w-5 h-5" />
            <span>Send Email</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
      ></motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"
      ></motion.div>
    </section>
  );
};

export default Hero;