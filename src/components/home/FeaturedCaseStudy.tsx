
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import clientsData from '@/content/clients.json';

const FeaturedCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  
  const featured = clientsData[0]; // York Winery as featured case study

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Featured Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we transformed a premium wine brand's digital presence and achieved exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
              <img 
                src={featured.logo} 
                alt={featured.name}
                className="max-h-20 filter brightness-0 invert opacity-90"
              />
              
              {/* Dynamic overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center"
              >
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            
            <div className="p-8 bg-white">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
                  <div className="text-gray-600">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">250%</div>
                  <div className="text-gray-600">Sales Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                  <div className="text-gray-600">Lead Quality</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{featured.name}</h3>
              <p className="text-gray-600 mb-4">{featured.description}</p>
              <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {featured.category}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
