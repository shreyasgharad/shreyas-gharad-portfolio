
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-light/10 rounded-full text-blue font-semibold mb-6">
              👋 Hi, I'm Shreyas Gharad
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Helping Brands Grow through Tech, Marketing & Strategy 🚀
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Marketing Strategist & Website Builder at <span className="font-semibold">Tipple Works Co.</span> — helping ambitious brands make their mark in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Get in Touch <ArrowRight size={18} />
              </a>
              <a href="#" className="btn-outline flex items-center gap-2">
                Download Portfolio <Download size={18} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-light/20 absolute -top-5 -left-5"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue to-blue-dark rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1587" 
                  alt="Shreyas Gharad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 py-8 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8">Trusted by brands:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="https://placehold.co/120x60?text=Sula+Vineyards" alt="Sula Vineyards" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=Paul+and+Mike" alt="Paul and Mike" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=Sprig" alt="Sprig" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=Zomato" alt="Zomato" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=Space+Coffee" alt="Space Coffee" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
