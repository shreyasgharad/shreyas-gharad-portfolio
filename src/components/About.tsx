
import React from 'react';
import { BookOpen, Briefcase, Award, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <section id="about" className="bg-white py-12 md:py-20">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A performance marketing specialist helping brands connect with their audiences through technology and strategy
        </p>
        
        {/* Mobile Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="journey" className="bg-gray-50 rounded-lg px-4">
              <AccordionTrigger className="text-left font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 5L13 5M21 12L9 12M21 19L5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  My Journey
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                <p className="mb-4">
                  At TippleWorks, I integrate technology with marketing to deliver measurable results. I specialize in performance marketing, automation, analytics, and e-commerce solutions for D2C and B2B brands.
                </p>
                <p>
                  My expertise in marketing strategy, technical implementation, and data analysis helps brands achieve impactful growth in the competitive digital landscape.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="focus" className="bg-gray-50 rounded-lg px-4">
              <AccordionTrigger className="text-left font-bold">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-light/20 p-2 rounded-lg flex-shrink-0">
                    <Briefcase size={16} className="text-blue" />
                  </div>
                  Professional Focus
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                Creating data-driven marketing strategies and automated systems for brands using Google Ads, Meta Ads, GA4, and GTM.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education" className="bg-gray-50 rounded-lg px-4">
              <AccordionTrigger className="text-left font-bold">
                <div className="flex items-center gap-2">
                  <div className="bg-green-light/20 p-2 rounded-lg flex-shrink-0">
                    <BookOpen size={16} className="text-green" />
                  </div>
                  Education & Learning
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                BTech in Electronics Engineering with certification in Business Communication from Symbiosis (Nov 2024).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mission" className="bg-gray-50 rounded-lg px-4">
              <AccordionTrigger className="text-left font-bold">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-light/20 p-2 rounded-lg flex-shrink-0">
                    <Award size={16} className="text-orange" />
                  </div>
                  Core Mission
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                Building an MNC that elevates Indian businesses globally through innovative marketing strategies and technological solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <div className="bg-gray-100 p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-blue flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5L13 5M21 12L9 12M21 19L5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">My Journey</h3>
              <p className="text-gray-600 mb-6">
                At TippleWorks, I integrate technology with marketing to deliver measurable results. I specialize in performance marketing, automation, analytics, and e-commerce solutions for D2C and B2B brands.
              </p>
              <p className="text-gray-600">
                My expertise in marketing strategy, technical implementation, and data analysis helps brands achieve impactful growth in the competitive digital landscape.
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
                  Creating data-driven marketing strategies and automated systems for brands using Google Ads, Meta Ads, GA4, and GTM.
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
