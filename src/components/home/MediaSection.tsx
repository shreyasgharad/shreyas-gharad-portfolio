
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

interface MediaSectionProps {
  type?: 'video' | 'image';
  src?: string;
  title?: string;
  description?: string;
  videoThumbnail?: string;
}

const MediaSection = ({ 
  type = 'image', 
  src = '/lovable-uploads/64a37dba-5fff-4970-8de2-b118bb84406a.png',
  title = 'Featured Content',
  description = 'Showcase your latest work, testimonials, or brand story',
  videoThumbnail 
}: MediaSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {type === 'video' ? (
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={videoThumbnail || src} 
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[21/9] bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={src} 
                alt="Featured content"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </motion.div>

        {/* Placeholder message for admin */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-6 opacity-60"
        >
          <p className="text-sm text-gray-500">
            💡 Admin: Update content via backend - supports images, videos, and custom descriptions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;
