import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiLinkedin } = FiIcons;

const About = () => {
  const skills = [
    'Digital Strategy & Roadmap Development',
    'Performance & Conversion Marketing',
    'Google Analytics & Tag Management',
    'CMS & Website Management',
    'Search, Social & Paid Media',
    'Marketing Automation & CRM',
    'Stakeholder & Agency Management',
    'People & Project Management',
    'AI & Automation Integration'
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '100+', label: 'Campaigns Managed' },
    { number: '15+', label: 'Marketing Tools' },
    { number: '100%+', label: 'Growth' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm a passionate digital marketing strategist with expertise in performance marketing, 
              analytics, and automation. I help businesses optimize their digital presence and drive 
              measurable results through data-driven strategies.
            </p>
            
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="https://linkedin.com/in/anndie-sood"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-shadow duration-300 w-fit"
            >
              <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;