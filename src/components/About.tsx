
import React from 'react';
import { BookOpen, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A passionate marketing strategist and website builder from Nagpur, India, helping brands connect with their audiences.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <div className="bg-gray-100 p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-blue flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5L13 5M21 12L9 12M21 19L5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">My Journey</h3>
              <p className="text-gray-600 mb-6">
                At 22, I've built a career in marketing strategy and tech integration. Currently at Tipple Works Co., 
                I contribute to performance marketing, branding, and automation for major D2C brands.
              </p>
              <p className="text-gray-600">
                My expertise in marketing, design, and technology helps bridge creative vision and technical execution,
                enabling brands to create cohesive digital experiences that drive measurable results.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-blue-light/20 p-3 rounded-lg">
                <Briefcase size={24} className="text-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Focus</h3>
                <p className="text-gray-600">
                  Creating data-driven marketing strategies and automated systems for D2C brands and startups.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-green-light/20 p-3 rounded-lg">
                <BookOpen size={24} className="text-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Education & Learning</h3>
                <p className="text-gray-600">
                  BTech in Electronics Engineering with certification in Business Communication from Symbiosis (Nov 2024).
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-orange-light/20 p-3 rounded-lg">
                <Award size={24} className="text-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Core Mission</h3>
                <p className="text-gray-600">
                  Building an MNC that elevates Indian businesses globally through innovative marketing strategies and technological solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
