
import React from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappMessage = "hii! shreyas, Came accross your website & portfolio want to talk";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/918412971907?text=${encodedMessage}`;

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
              Performance Marketing Executive at <span className="font-semibold">Tipple Works Co.</span> — helping ambitious brands make their mark in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2 font-sf-pro-text">
                Get in Touch <ArrowRight size={18} />
              </a>
              <a 
                href="https://drive.google.com/file/d/1m4Mj_ioqkFMAsL2QIU6qFGsRsO2kwY2f/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline flex items-center gap-2 font-sf-pro-text"
              >
                Download Portfolio <Download size={18} />
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 font-sf-pro-text"
              >
                WhatsApp Me <MessageCircle size={18} />
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
          <p className="text-center text-gray-500 mb-8 font-sf-pro-text">Our Prime Clients:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 px-4">
            <div className="h-16 w-auto flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <img src="/lovable-uploads/029a7e04-0b4f-4047-bffe-d80abd183f0b.png" alt="Sula Vineyards" className="h-10 object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <img src="/lovable-uploads/be437b36-52d5-4f8a-bbb2-003080267730.png" alt="Zomato" className="h-10 object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <img src="/lovable-uploads/f1d0d43f-4f48-4a53-8abd-6a582ef66875.png" alt="Kiddopia" className="h-10 object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <img src="/lovable-uploads/30223106-d65d-47e7-bea5-5ac763a6f4b6.png" alt="Beyond by Sula" className="h-10 object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <img src="/lovable-uploads/f8448d9c-6c10-4b16-96b8-32c56cdbb71f.png" alt="Paul and Mike" className="h-10 object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <img src="/lovable-uploads/8109bc25-59ff-41d5-a5f7-51cb21b0abfc.png" alt="Kalpan Agro-Tech" className="h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
