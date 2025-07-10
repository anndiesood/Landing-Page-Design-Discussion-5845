import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Features';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <Header />
      <Hero />
      <Skills />
      <About />
      <CTA />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;