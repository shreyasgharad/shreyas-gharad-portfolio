
import React from 'react';
import { Calendar, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Marketing Strategist & Website Builder",
      company: "Tipple Works Co.",
      period: "2022 - Present",
      description: "Contributing to branding, performance marketing, tech integration, and strategic development for high-profile D2C clients including Sula Vineyards, Paul and Mike Chocolates, and more.",
      icon: Building,
      iconBg: "bg-blue-light/20",
      iconColor: "text-blue"
    },
    {
      id: 2,
      role: "Marketing Intern",
      company: "Echo Marketing Agency",
      period: "2021 - 2022",
      description: "Assisted in developing marketing strategies, content creation, and social media campaigns for local businesses in Nagpur.",
      icon: Calendar,
      iconBg: "bg-orange-light/20",
      iconColor: "text-orange"
    },
    {
      id: 3,
      role: "Certification in Marketing",
      company: "Symbiosis Institute",
      period: "2021",
      description: "Completed specialized certification in digital marketing strategies, brand management, and consumer behavior analysis.",
      icon: GraduationCap,
      iconBg: "bg-green-light/20",
      iconColor: "text-green"
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <p className="section-subtitle">
          My professional journey working with creative agencies and prestigious brands.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? 'md:pr-12' : 'md:flex-row-reverse md:pl-12'}`}>
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-gray-200 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-blue' : 'bg-orange'}`}></div>
                  </div>
                  
                  {/* Content box */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 card p-6 ${index % 2 === 0 ? 'animate-fade-in-right' : 'md:text-right'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${exp.iconBg}`}>
                        <exp.icon size={24} className={exp.iconColor} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-gray-500">{exp.company}</p>
                      </div>
                    </div>
                    <div className="mb-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {exp.period}
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
