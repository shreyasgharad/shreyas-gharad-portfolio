
import React from 'react';
import { motion } from 'framer-motion';

interface ClientLogoButtonProps {
  logo: string;
  name: string;
  category: string;
  onClick?: () => void;
}

const ClientLogoButton: React.FC<ClientLogoButtonProps> = ({ logo, name, category, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 h-16 flex items-center justify-center w-full">
          <img 
            src={logo} 
            alt={`${name} logo`}
            className="max-h-12 max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </motion.button>
  );
};

export default ClientLogoButton;
