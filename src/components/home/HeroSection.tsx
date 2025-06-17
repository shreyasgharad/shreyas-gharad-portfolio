
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="hero" className="h-[60vh] bg-gradient-to-br from-blue-50 via-white to-blue-50/50 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Helping Brands Grow through{' '}
            <span className="block">Tech, Marketing & Strategy</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Performance Marketing Executive delivering data-driven results that transform businesses and accelerate growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Banner Placeholder for future image upload */}
        <motion.div 
          className="mt-12 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-gray-500 text-sm mb-2">Featured Visual Content</div>
          <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-medium">Banner Placeholder - Upload Image Here</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
