
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ClientLogoButton from './ClientLogoButton';
import clientsData from '@/content/clients.json';

const ClientsLogoWall = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've helped diverse businesses across industries achieve remarkable growth through strategic marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientsData.map((client, index) => (
            <motion.div
              key={client.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ClientLogoButton
                logo={client.logo}
                name={client.name}
                category={client.category}
                onClick={() => {
                  // Future implementation for client case study modal
                  console.log(`Clicked on ${client.name}`);
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoWall;
