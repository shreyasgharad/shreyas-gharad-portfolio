
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import MediaSection from '@/components/home/MediaSection';
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
        <MediaSection 
          type="image"
          title="Our Impact in Action"
          description="See how we've transformed businesses across industries with data-driven marketing strategies"
        />
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
