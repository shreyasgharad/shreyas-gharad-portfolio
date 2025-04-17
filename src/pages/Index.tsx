
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PartnerLogos />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
