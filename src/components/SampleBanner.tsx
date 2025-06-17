
import React from 'react';

const SampleBanner = () => {
  return (
    <div className="w-full h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Case Study Banner</h2>
        <p className="text-lg opacity-90">Recommended size: 1200x400px</p>
        <div className="mt-4 text-sm opacity-75">
          <div>Optimal formats: JPG, PNG, WebP</div>
          <div>Max file size: 2MB</div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/20 rounded-lg rotate-45"></div>
      <div className="absolute top-1/2 left-8 w-4 h-4 bg-white/20 rounded-full"></div>
    </div>
  );
};

export default SampleBanner;
