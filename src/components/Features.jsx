import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiTarget, FiBarChart3, FiGlobe, FiSearch, FiMail, FiUsers, FiCpu } = FiIcons;

const Skills = () => {
  const skills = [
    {
      icon: FiTrendingUp,
      title: 'Digital Strategy & Roadmaps',
      description: 'GA4 transition, CRM integration, CRO tooling, and e-commerce migrations with strategic planning.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: FiTarget,
      title: 'Performance Marketing',
      description: 'SEM, SEO, automation, live chat, CRO, lead generation, and nurture journey optimization.',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: FiBarChart3,
      title: 'Analytics & Tag Management',
      description: 'Google Analytics, GA4, GTM, and Looker Studio implementation with comprehensive reporting.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: FiGlobe,
      title: 'CMS & Website Management',
      description: 'WordPress, Shopify, Pepper CMS expertise with UX testing and website migrations.',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: FiSearch,
      title: 'Search & Paid Media',
      description: 'SEO with Semrush & GSC, Google Ads management, and social media campaign optimization.',
      gradient: 'from-indigo-400 to-blue-500'
    },
    {
      icon: FiMail,
      title: 'Marketing Automation',
      description: 'Mailchimp, Marketo, lifecycle campaigns, and CRM/DAM system integration.',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      icon: FiUsers,
      title: 'Stakeholder Management',
      description: 'IT, compliance, procurement coordination, and agency partnership management.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiCpu,
      title: 'AI & Automation',
      description: 'Leveraging AI for reporting, audience targeting, and everyday marketing task automation.',
      gradient: 'from-violet-400 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing expertise spanning strategy, analytics, automation, and performance optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-r ${skill.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={skill.icon} className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;