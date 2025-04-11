
import React from 'react';
import { BarChart, Globe, Palette, Database, Server } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Digital & Performance Marketing',
      description: 'Strategic campaign development, social media management, SEO optimization, and performance tracking to maximize your marketing ROI.',
      icon: BarChart,
      color: 'bg-blue',
    },
    {
      id: 2,
      title: 'PR & Communication',
      description: 'Brand messaging, media relations, content strategy, and reputation management to build and maintain a positive brand image.',
      icon: Globe,
      color: 'bg-green',
    },
    {
      id: 3,
      title: 'Website Development',
      description: 'Custom websites, e-commerce platforms, and CMS solutions crafted with modern design principles and responsive layouts.',
      icon: Palette,
      color: 'bg-orange',
    },
    {
      id: 4,
      title: 'Branding & Analytics',
      description: 'Brand identity development, visual design systems, market research, and data-driven insights to guide strategic decisions.',
      icon: Database,
      color: 'bg-purple-600',
    },
    {
      id: 5,
      title: 'Tech Systems & ERP Integration',
      description: 'Implementing and optimizing business technology systems, database management, and enterprise resource planning solutions.',
      icon: Server,
      color: 'bg-red-600',
    },
  ];

  return (
    <section id="services" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions to help your brand grow and thrive in the digital landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="card p-8 flex flex-col items-start group hover:translate-y-[-5px] transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${service.id * 0.1}s` }}
            >
              <div className={`${service.color} p-4 rounded-xl text-white mb-6`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mt-auto">
                <a 
                  href="#contact" 
                  className="text-blue font-medium flex items-center group-hover:text-blue-dark transition-colors"
                >
                  <span>Learn More</span>
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
