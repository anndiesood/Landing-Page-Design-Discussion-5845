import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBriefcase, FiCalendar, FiMapPin } = FiIcons;

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Digital Marketing Manager',
      company: 'Digital Growth Agency',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading digital strategy and performance marketing initiatives. Managed GA4 transitions, CRM integrations, and e-commerce migrations. Achieved 40% increase in conversion rates through CRO optimization.',
      technologies: ['GA4', 'Google Ads', 'Mailchimp', 'Shopify', 'Semrush', 'GTM']
    },
    {
      title: 'Marketing Automation Specialist',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Implemented marketing automation workflows and CRM systems. Developed comprehensive reporting dashboards using Looker Studio. Managed multi-channel campaigns with 35% improvement in lead quality.',
      technologies: ['Marketo', 'Looker Studio', 'WordPress', 'Google Analytics', 'Jira']
    },
    {
      title: 'Digital Marketing Analyst',
      company: 'E-commerce Solutions',
      location: 'San Francisco, CA',
      period: '2018 - 2020',
      description: 'Analyzed campaign performance and optimized paid media strategies. Managed SEO initiatives and social media campaigns. Collaborated with stakeholders on website migrations and UX improvements.',
      technologies: ['Google Search Console', 'Facebook Ads', 'Asana', 'Pepper CMS', 'Semrush']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/50">
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through my digital marketing career, driving growth and optimization across various industries.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiBriefcase} className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400 mt-4 md:mt-0">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span className="font-semibold">{experience.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;