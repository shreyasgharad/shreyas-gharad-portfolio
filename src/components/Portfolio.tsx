import React, { useState } from 'react';
import { ExternalLink, Github, Linkedin, Instagram } from 'lucide-react';

const Portfolio = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'restaurants', name: 'Restaurants' },
    { id: 'hotels', name: 'Hotels' },
    { id: 'fmcg', name: 'FMCG' },
    { id: 'educational', name: 'Educational' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'agrotech', name: 'AgroTech' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sula Vineyards',
      category: 'beverages',
      description: '360° Marketing Branding and Performance Marketing Strategy for India\'s Leading Vineyard',
      image: "/lovable-uploads/0d783eca-68b8-4c9f-85d3-760bc1910de8.png",
      url: 'https://sulawines.com',
      logo: true,
    },
    {
      id: 2,
      title: 'York Winery',
      category: 'beverages',
      description: 'Digital marketing and social media management for premium winery.',
      image: '/lovable-uploads/63c2ace2-bdd8-40c8-b966-8fac7b9dd451.png',
      url: 'https://yorkwinery.com',
      logo: true,
    },
    {
      id: 3,
      title: 'The Source',
      category: 'hotels',
      description: 'Marketing and online booking strategy for boutique hotel property.',
      image: '/lovable-uploads/2b1b229e-0a60-4970-9993-f84b70b5145d.png',
      url: 'https://thesource.co.in',
      logo: true,
    },
    {
      id: 4,
      title: 'Paul and Mike',
      category: 'fmcg',
      description: 'Website development and digital marketing campaign for premium chocolate brand.',
      image: '/lovable-uploads/83a848eb-49dd-4fc9-a019-6a57aa954995.png',
      url: 'https://paulandmike.co',
      logo: true,
    },
    {
      id: 5,
      title: 'Provogue',
      category: 'fmcg',
      description: 'D2C lifestyle brand - Digital marketing strategy and brand revitalization for fashion retail.',
      image: '/lovable-uploads/9a3e8bc6-992a-4732-9789-880da66040e4.png',
      url: 'https://provogue.com',
      logo: true,
    },
    {
      id: 6,
      title: 'Matero',
      category: 'fmcg',
      description: 'Brand strategy and digital presence for consumer goods company.',
      image: '/lovable-uploads/3c7e22b2-1f59-4b77-8550-3f2855cdec2e.png',
      url: 'https://matero.com',
      logo: true,
    },
    {
      id: 7,
      title: 'Shakakan',
      category: 'beverages',
      description: 'Marketing strategy and brand development for beverage company.',
      image: '/lovable-uploads/e167262e-3c80-4779-8f2e-343f2cbe5838.png',
      url: 'https://shakakan.com',
      logo: true,
    },
    {
      id: 8,
      title: 'Elaan',
      category: 'fmcg',
      description: 'Digital presence and marketing campaign for luxury brand.',
      image: '/lovable-uploads/5b4f342d-9e2c-4c6e-88a1-9f7207ded483.png',
      url: 'https://elaan.com',
      logo: true,
    },
    {
      id: 9,
      title: 'Naar',
      category: 'fmcg',
      description: 'Brand identity and digital strategy for consumer goods company.',
      image: '/lovable-uploads/4a50907b-1741-4d11-94f7-ee62637fc8f6.png',
      url: 'https://naar.com',
      logo: true,
    },
    {
      id: 10,
      title: 'DSG Partners',
      category: 'fmcg',
      description: 'Marketing strategy and digital presence for consumer goods distributor.',
      image: '/lovable-uploads/213d428d-f13e-42c3-990e-0d537de40ec6.png',
      url: 'https://dsgpartners.com',
      logo: true,
    },
    {
      id: 11,
      title: 'Sprig',
      category: 'fmcg',
      description: 'FMCG gourmet brand - Brand identity and website design for premium food products.',
      image: '/lovable-uploads/c687cfdb-57cb-48a8-94e4-1db8961f034f.png',
      url: 'https://spriggourmet.com',
      logo: true,
    },
    {
      id: 12,
      title: 'Momoland',
      category: 'restaurants',
      description: 'Restaurant chain marketing strategy and website development.',
      image: '/lovable-uploads/df800f42-3dd1-4e69-9e41-91e590e63d6b.png',
      url: 'https://momoland.com',
      logo: true,
    },
    {
      id: 13,
      title: 'Copper Grillhouse',
      category: 'restaurants',
      description: 'Brand positioning and digital presence for upscale dining establishment.',
      image: '/lovable-uploads/9089bf45-aa01-41e4-90ef-f3f108d56d4f.png',
      url: 'https://coppergrillhouse.com',
      logo: true,
    },
    {
      id: 14,
      title: 'Buns & Slices',
      category: 'restaurants',
      description: 'Social media strategy and website development for burger chain.',
      image: "/lovable-uploads/b615ba15-8e51-4fbe-9c3d-c40dba0b76c0.png",
      url: 'https://bunsandslices.com',
      logo: true,
    },
    {
      id: 15,
      title: 'Rasa Wines',
      category: 'beverages',
      description: 'Brand development and digital marketing for wine company.',
      image: '/lovable-uploads/4adee1c9-544e-43f3-ae4f-2b7213b4db22.png',
      url: 'https://rasawines.com',
      logo: true,
    },
    {
      id: 16,
      title: 'BB Sourced',
      category: 'fmcg',
      description: 'E-commerce strategy and brand development for food sourcing company.',
      image: "/lovable-uploads/fd59bab5-2ff2-4ec7-99bf-fdfaebf2ec2f.png",
      url: 'https://bbsourced.com',
      logo: true,
    },
    {
      id: 17,
      title: 'Estate Monkeys',
      category: 'coffee',
      description: 'Performance marketing and D2C strategy for premium coffee brand.',
      image: "/lovable-uploads/4b47eb31-0f03-47a4-8cb5-642dc40c013a.png",
      url: 'https://estatemonkeys.com',
      logo: true,
    },
    {
      id: 18,
      title: 'Zealo',
      category: 'fmcg',
      description: 'D2C and B2B performance marketing strategy for corporate gifting solutions.',
      image: "/lovable-uploads/7fdd6af0-3ec7-45a7-a3c3-8664d95a6f09.png",
      url: 'https://zealo.in',
      logo: true,
    },
    {
      id: 19,
      title: 'Beyond by Sula',
      category: 'hotels',
      description: 'Digital marketing and booking system for luxury villas, achieving 90% ROAS.',
      image: "/lovable-uploads/a89a7818-b235-4129-819e-3784d8fd654a.png",
      url: 'https://beyondbysula.com',
      logo: true,
    },
    {
      id: 20,
      title: 'Kidopia',
      category: 'educational',
      description: 'Educational platform development and digital marketing strategy for children\'s learning.',
      image: "/lovable-uploads/c687cfdb-57cb-48a8-94e4-1db8961f034f.png",
      url: 'https://kidopia.com',
      logo: true,
    },
    {
      id: 21,
      title: 'Maha Feed',
      category: 'agrotech',
      description: 'Website development, WhatsApp AI automation, and API integration for farmer-focused agtech solutions.',
      image: "/lovable-uploads/c687cfdb-57cb-48a8-94e4-1db8961f034f.png",
      url: 'https://mahafeed.com',
      logo: true,
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shreyasgharad',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hiishreyas',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shreyas_gharad/',
      icon: <Instagram size={20} />
    },
    {
      name: 'Peerlist',
      url: 'https://peerlist.io/shreyasgharad',
      icon: <ExternalLink size={20} />
    },
    {
      name: 'Echai Ventures',
      url: 'https://echai.ventures/@shreyas-gharad',
      icon: <ExternalLink size={20} />
    }
  ];

  return (
    <section id="portfolio" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title font-sf-pro">My Portfolio</h2>
        <p className="section-subtitle font-sf-pro-text">
          Featured projects and brands I've had the pleasure to work with at Tipple Works Co.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-sm font-medium text-gray-700 hover:text-blue font-sf-pro-text"
            >
              <span className="text-blue">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors font-sf-pro-text ${activeCategory === category.id
                  ? 'bg-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${(project.id % 10) * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className={project.logo ? "max-h-32 max-w-[85%] w-auto object-contain" : "w-full h-full object-cover"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full inline-block">
                        <ExternalLink size={20} className="text-blue" />
                      </a>
                      <span className="text-xs font-medium px-3 py-1 bg-white/90 text-blue rounded-full font-sf-pro-text">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-sf-pro">{project.title}</h3>
                <p className="text-gray-600 mb-4 font-sf-pro-text">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue hover:underline flex items-center gap-1 font-sf-pro-text"
                >
                  Visit Website <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
