
import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappMessage = "Hi Shreyas! I came across your website & portfolio and would like to connect.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/918412971907?text=${encodedMessage}`;

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stagger = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 hero-gradient-bg" />
      
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 hero-grain opacity-[0.035] pointer-events-none" />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      <div className="container relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Text content */}
          <div className="md:w-3/5 order-2 md:order-1">
            {/* Mobile layout */}
            <div className="md:hidden flex flex-col items-center text-center space-y-5">
              <div style={stagger(0)} className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/80 font-medium text-sm">
                👋 Hi, I'm Shreyas Gharad
              </div>
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight font-sf-pro">
                <span style={stagger(1)} className="block text-white">
                  Helping Brands
                </span>
                <span style={stagger(2)} className="block">
                  <span className="text-white">Grow through </span>
                  <span className="hero-accent-text">Strategy</span>
                </span>
              </h1>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block">
              <div style={stagger(0)} className="inline-block px-5 py-2.5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-full text-white/70 font-medium mb-8 text-sm tracking-wide uppercase">
                👋 Hi, I'm Shreyas Gharad
              </div>
              <h1 className="hero-headline font-sf-pro overflow-visible">
                <span style={stagger(1)} className="block text-white leading-[0.95] tracking-[-0.04em]">
                  Helping Brands
                </span>
                <span style={stagger(2)} className="block leading-[0.95] tracking-[-0.04em]">
                  <span className="text-white">Grow through </span>
                  <span className="hero-accent-text">Strategy</span>
                </span>
                <span style={stagger(3)} className="block text-white/60 leading-[0.95] tracking-[-0.04em]">
                  Tech & Marketing
                </span>
              </h1>
              <p style={stagger(4)} className="text-lg text-white/50 mt-8 mb-10 max-w-lg font-sf-pro-text leading-relaxed">
                Performance Marketing Executive at{' '}
                <span className="font-semibold text-white/80">
                  Tipple Works Co.
                </span>{' '}
                — helping ambitious brands make their mark in the digital world.
              </p>
              <div style={stagger(5)} className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="hero-btn-primary flex items-center gap-2 font-sf-pro-text"
                >
                  Get in Touch <ArrowRight size={18} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1m4Mj_ioqkFMAsL2QIU6qFGsRsO2kwY2f/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn-outline flex items-center gap-2 font-sf-pro-text"
                >
                  Download Portfolio <Download size={18} />
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn-whatsapp flex items-center gap-2 font-sf-pro-text"
                >
                  WhatsApp Me <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Photo */}
          <div className="md:w-2/5 flex flex-col items-center order-1 md:order-2" style={stagger(3)}>
            <div className="relative mb-6 md:mb-0">
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[#F5A623]/20 to-purple-500/20 absolute -top-4 -left-4 animate-pulse blur-xl" />
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl shadow-black/40 relative z-10 ring-2 ring-white/10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/64a37dba-5fff-4970-8de2-b118bb84406a.png" 
                  alt="Shreyas Gharad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile job title and buttons */}
            <div className="md:hidden flex flex-col items-center text-center space-y-4 w-full px-4 mt-4">
              <p style={stagger(3)} className="text-sm text-white/50 font-sf-pro-text">
                Performance Marketing Executive at{' '}
                <span className="font-semibold text-white/80">
                  Tipple Works Co.
                </span>{' '}
                — helping ambitious brands make their mark in the digital world.
              </p>
              
              <div style={stagger(4)} className="grid grid-cols-3 gap-2 w-full max-w-sm">
                <a 
                  href="tel:+918412971907" 
                  className="bg-white/10 backdrop-blur-sm border border-white/10 text-white p-3 rounded-xl font-medium hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
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
                  className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 p-3 rounded-xl font-medium hover:bg-emerald-500/30 transition-colors duration-300 flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1m4Mj_ioqkFMAsL2QIU6qFGsRsO2kwY2f/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 backdrop-blur-sm border border-white/10 text-white p-3 rounded-xl font-medium hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
                  aria-label="Portfolio"
                >
                  <Download size={20} />
                </a>
              </div>

              <a 
                href="https://drive.google.com/file/d/1m4Mj_ioqkFMAsL2QIU6qFGsRsO2kwY2f/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn-outline flex items-center gap-2 font-sf-pro-text w-full justify-center text-sm py-2.5"
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
