
import React from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappMessage = "Hi Shreyas! I came across your website & portfolio and would like to connect.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/918412971907?text=${encodedMessage}`;

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-600/10 rounded-full text-blue-600 font-semibold mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              👋 Hi, I'm Shreyas Gharad
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sf-pro bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent animate-fade-in">
              Helping Brands Grow through Tech, Marketing & Strategy{' '}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">🚀</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg font-sf-pro-text animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Performance Marketing Executive at{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Tipple Works Co.
              </span>{' '}
              — helping ambitious brands make their mark in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn-primary flex items-center gap-2 font-sf-pro-text shadow-lg hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch <ArrowRight size={18} />
              </a>
              <a 
                href="https://drive.google.com/file/d/1m4Mj_ioqkFMAsL2QIU6qFGsRsO2kwY2f/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline flex items-center gap-2 font-sf-pro-text shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Portfolio <Download size={18} />
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 font-sf-pro-text shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1"
              >
                WhatsApp Me <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 absolute -top-5 -left-5 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full overflow-hidden shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/64a37dba-5fff-4970-8de2-b118bb84406a.png" 
                  alt="Shreyas Gharad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
