
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { VALUE_PROPS } from '@/constants/valueProps';

const ValuePropositionCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Why Choose Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine strategic thinking with tactical execution to deliver measurable results for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{prop.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{prop.description}</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <span className="text-blue font-semibold text-sm">{prop.metrics}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionCards;
