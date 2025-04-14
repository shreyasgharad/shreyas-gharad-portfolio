
import React from 'react';
import { Calendar, Building, GraduationCap, Server, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Performance Marketing Executive",
      company: "Tipple Works Co.",
      period: "September 2024 - Present (8 months)",
      description: "Creating data-driven strategies using tools like Google Ads, Meta Ads, GA4, and GTM. Building automated marketing systems and supporting D2C and B2B brands with end-to-end solutions for E-commerce listings, Q-commerce, branding, and digital marketing.",
      location: "Mumbai, Maharashtra, India",
      icon: Building,
      iconBg: "bg-blue-light/20",
      iconColor: "text-blue"
    },
    {
      id: 2,
      role: "Server & Administration Room Engineer",
      company: "Kalpan Agro-Tech Industries Pvt. Ltd.",
      period: "November 2023 - February 2024 (4 months)",
      description: "Maintained high-performance servers with 24/7 operational efficiency. Operated advanced Bühler Group Sortex Machinery and supported management, marketing, branding, and advertising efforts.",
      location: "Gumthala, Nagpur, Maharashtra",
      icon: Server,
      iconBg: "bg-green-light/20",
      iconColor: "text-green"
    },
    {
      id: 3,
      role: "Performance Marketing Intern",
      company: "Echo Education - Digital Marketing Course",
      period: "March 2024 - August 2024 (6 months)",
      description: "Transformed businesses digitally by boosting online presence. Designed and optimized websites, applied SEO and SEM techniques, and created high-impact ad campaigns across Meta and Facebook platforms.",
      location: "Nagpur, Maharashtra, India",
      icon: Code,
      iconBg: "bg-orange-light/20",
      iconColor: "text-orange"
    },
    {
      id: 4,
      role: "Certification in Business Communication",
      company: "Symbiosis International University",
      period: "June 2024 - August 2024",
      description: "Completed specialized certification in professional business communication strategies.",
      icon: GraduationCap,
      iconBg: "bg-blue-light/20",
      iconColor: "text-blue"
    },
    {
      id: 5,
      role: "Bachelor of Technology (BTech)",
      company: "Yashwantrao Chavan College of Engineering",
      period: "January 2020 - December 2024",
      description: "Completed bachelor's degree in Electronics Engineering, building a strong foundation in technical knowledge and problem-solving skills.",
      icon: GraduationCap,
      iconBg: "bg-green-light/20",
      iconColor: "text-green"
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title font-sf-pro">My Experience</h2>
        <p className="section-subtitle font-sf-pro-text">
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
                        <h3 className="text-xl font-bold font-sf-pro">{exp.role}</h3>
                        <p className="text-gray-500 font-sf-pro-text">{exp.company}</p>
                        {exp.location && (
                          <p className="text-gray-400 text-sm font-sf-pro-text">{exp.location}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-sf-pro-text">
                      {exp.period}
                    </div>
                    <p className="text-gray-600 font-sf-pro-text">{exp.description}</p>
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
