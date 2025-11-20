
import React from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappMessage = "Hi Shreyas! I came across your website & portfolio and would like to connect.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/918412971907?text=${encodedMessage}`;

  return (
    <section id="home" className="pt-20 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 min-h-screen md:min-h-0 flex items-center">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 animate-fade-in order-2 md:order-1">
            {/* Mobile-first layout */}
            <div className="md:hidden flex flex-col items-center text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-600/10 rounded-full text-blue-600 font-semibold text-sm">
                👋 Hi, I'm Shreyas Gharad
              </div>
              <h1 className="text-2xl font-bold leading-tight font-sf-pro">
                <span className="inline-block animate-slide-in-text bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                  Helping Brands Grow through Tech, Marketing & Strategy
                </span>
              </h1>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block">
              <div className="inline-block px-4 py-2 bg-blue-600/10 rounded-full text-blue-600 font-semibold mb-6 shadow-sm hover:shadow-md transition-all duration-300">
                👋 Hi, I'm Shreyas Gharad
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sf-pro overflow-hidden">
                <span className="inline-block animate-slide-in-text bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                  Helping Brands Grow through Tech, Marketing & Strategy{' '}
                </span>
                <span className="inline-block transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '1.2s' }}>🚀</span>
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
          </div>
          
          <div className="md:w-1/2 flex flex-col items-center animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="relative mb-6 md:mb-0">
              <div className="w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 absolute -top-5 -left-5 animate-pulse"></div>
              <div className="w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full overflow-hidden shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/64a37dba-5fff-4970-8de2-b118bb84406a.png" 
                  alt="Shreyas Gharad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile job title and buttons */}
            <div className="md:hidden flex flex-col items-center text-center space-y-4 w-full px-4">
              <p className="text-sm text-gray-600 font-sf-pro-text">
                Performance Marketing Executive at{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Tipple Works Co.
                </span>{' '}
                — helping ambitious brands make their mark in the digital world.
              </p>
              
              <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
                <a 
                  href="tel:+918412971907" 
                  className="bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-lg"
                  aria-label="Call"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 text-white p-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 flex items-center justify-center shadow-lg"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1m4Mj_ioqkFMAsL2QIU6qFGsRsO2kwY2f/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 text-white p-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center shadow-lg"
                  aria-label="Portfolio"
                >
                  <Download size={20} />
                </a>
              </div>

              <a 
                href="https://drive.google.com/file/d/1m4Mj_ioqkFMAsL2QIU6qFGsRsO2kwY2f/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline flex items-center gap-2 font-sf-pro-text shadow-md w-full justify-center text-sm py-2"
              >
                Download Portfolio <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
