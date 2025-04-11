
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sf-pro">
              Helping Brands Grow through Tech, Marketing & Strategy 🚀
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg font-sf-pro-text">
              Marketing Strategist & Website Builder at <span className="font-semibold">Tipple Works Co.</span> — helping ambitious brands make their mark in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2 font-sf-pro-text">
                Get in Touch <ArrowRight size={18} />
              </a>
              <a 
                href="https://www.tippleworks.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline flex items-center gap-2 font-sf-pro-text"
              >
                Download Portfolio <Download size={18} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-light/20 absolute -top-5 -left-5"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue to-blue-dark rounded-full overflow-hidden shadow-xl relative z-10">
                <img 
                  src="/lovable-uploads/64a37dba-5fff-4970-8de2-b118bb84406a.png" 
                  alt="Shreyas Gharad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 py-8 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8 font-sf-pro-text">Trusted by brands:</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img src="/lovable-uploads/be437b36-52d5-4f8a-bbb2-003080267730.png" alt="Zomato" className="h-12 object-contain" />
            <img src="/lovable-uploads/3b20498c-5b22-4995-bdc2-a5073c83ddb3.png" alt="Kiddopia" className="h-10 object-contain" />
            <img src="/lovable-uploads/f2534e6a-ef6d-4468-a5bd-795c089fabef.png" alt="Beyond by Sula" className="h-12 object-contain" />
            <img src="/lovable-uploads/08d15b4e-6e34-416d-b3d6-e633b6545ed7.png" alt="The Source at Sula" className="h-11 object-contain" />
            <img src="/lovable-uploads/097e6649-9572-4f09-9af3-a27ced925364.png" alt="Sprig" className="h-7 object-contain" />
            <img src="/lovable-uploads/476dbb37-d879-4909-8f7d-c4fa9d6ecec1.png" alt="Sula Vineyards" className="h-10 object-contain" />
            <img src="/lovable-uploads/dd2d78b8-3f0b-4ea1-b26e-a2bc722c2f43.png" alt="Paul and Mike" className="h-12 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
