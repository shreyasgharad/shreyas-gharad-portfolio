
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, BarChart3, Palette, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'paid-media',
      title: 'Paid Media Management',
      icon: Target,
      description: 'Strategic paid advertising campaigns across Google, Meta, and other platforms.',
      details: [
        'Google Ads campaign setup and optimization',
        'Meta Ads (Facebook & Instagram) management',
        'LinkedIn and Twitter advertising',
        'YouTube and video advertising',
        'Retargeting and lookalike audiences',
        'A/B testing and creative optimization',
        'Budget allocation and bid management'
      ]
    },
    {
      id: 'funnel-analytics',
      title: 'Funnel Analytics & Attribution',
      icon: BarChart3,
      description: 'Advanced analytics setup and customer journey optimization.',
      details: [
        'Google Analytics 4 (GA4) implementation',
        'Google Tag Manager (GTM) setup',
        'Conversion tracking and attribution modeling',
        'Customer journey mapping',
        'Funnel analysis and optimization',
        'Marketing mix modeling (MMM)',
        'Custom dashboard creation and reporting'
      ]
    },
    {
      id: 'creative-production',
      title: 'Creative Production',
      icon: Palette,
      description: 'High-converting ad creatives and brand assets.',
      details: [
        'Static ad creative design',
        'Video ad production and editing',
        'Landing page design and optimization',
        'Brand identity and visual systems',
        'Creative testing and iteration',
        'User-generated content campaigns',
        'Creative performance analysis'
      ]
    },
    {
      id: 'growth-consulting',
      title: 'Growth Consulting',
      icon: TrendingUp,
      description: 'Strategic consulting for sustainable business growth.',
      details: [
        'Growth strategy development',
        'Market research and competitive analysis',
        'Business model optimization',
        'Tech stack integration and automation',
        'Team training and knowledge transfer',
        'Performance audits and recommendations',
        'Long-term growth planning'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-white py-20">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive marketing solutions designed to accelerate your business growth through data-driven strategies and innovative execution.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {services.map((service, index) => (
                <AccordionItem 
                  key={service.id} 
                  value={service.id}
                  className="card p-0 border-none shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="bg-blue p-3 rounded-xl text-white group-hover:bg-blue-dark transition-colors">
                        <service.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-8 pb-8">
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-900">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col justify-center">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h4 className="font-semibold mb-3">Ready to Get Started?</h4>
                          <p className="text-gray-600 mb-4 text-sm">
                            Let's discuss how {service.title.toLowerCase()} can drive growth for your business.
                          </p>
                          <Link to="/contact">
                            <Button className="w-full bg-blue hover:bg-blue-dark text-white">
                              Book a Consultation
                              <ArrowRight size={16} className="ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
