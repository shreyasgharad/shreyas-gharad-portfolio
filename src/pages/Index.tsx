
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PartnerLogos from '../components/PartnerLogos';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full relative">
      {/* Page-wide dark gradient that fades to white */}
      <div className="fixed inset-0 hero-gradient-bg z-0" />
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
        <div className="hero-orb hero-orb-5" />
      </div>
      <div className="fixed inset-0 hero-grain opacity-[0.03] pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="relative">
          {/* Smooth, long gradient transition from hero to white body */}
          <div className="w-full h-48 md:h-72 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          
          <div className="relative bg-white pb-1 z-10">
            <div className="-mt-12 md:-mt-16">
              <PartnerLogos />
            </div>
            <About />
            <Experience />
            <Portfolio />
            <Services />
            <Blog />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
