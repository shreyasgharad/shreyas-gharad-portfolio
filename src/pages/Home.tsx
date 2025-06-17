
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ValuePropositionCards from '@/components/home/ValuePropositionCards';
import ClientsLogoWall from '@/components/home/ClientsLogoWall';
import FeaturedCaseStudy from '@/components/home/FeaturedCaseStudy';
import TestimonialsSwiper from '@/components/home/TestimonialsSwiper';
import NewsletterSignup from '@/components/home/NewsletterSignup';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropositionCards />
        <ClientsLogoWall />
        <FeaturedCaseStudy />
        <TestimonialsSwiper />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
