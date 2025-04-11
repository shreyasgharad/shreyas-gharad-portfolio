
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'restaurants', name: 'Restaurants' },
    { id: 'hotels', name: 'Hotels' },
    { id: 'fmcg', name: 'FMCG' },
    { id: 'educational', name: 'Educational' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sula Vineyards',
      category: 'beverages',
      description: 'Branding and performance marketing strategy for India\'s leading vineyard.',
      image: '/lovable-uploads/476dbb37-d879-4909-8f7d-c4fa9d6ecec1.png',
      logo: true,
    },
    {
      id: 2,
      title: 'York Winery',
      category: 'beverages',
      description: 'Digital marketing and social media management for premium winery.',
      image: 'https://placehold.co/600x400?text=York+Winery',
      logo: false,
    },
    {
      id: 3,
      title: 'Sprig',
      category: 'beverages',
      description: 'Brand identity and website design for gourmet food brand.',
      image: '/lovable-uploads/097e6649-9572-4f09-9af3-a27ced925364.png',
      logo: true,
    },
    {
      id: 4,
      title: 'Zomato',
      category: 'restaurants',
      description: 'Marketing campaign strategy and analytics implementation.',
      image: '/lovable-uploads/be437b36-52d5-4f8a-bbb2-003080267730.png',
      logo: true,
    },
    {
      id: 5,
      title: 'Momoland',
      category: 'restaurants',
      description: 'Restaurant chain marketing strategy and website development.',
      image: 'https://placehold.co/600x400?text=Momoland',
      logo: false,
    },
    {
      id: 6,
      title: 'Copper Grillhouse',
      category: 'restaurants',
      description: 'Brand positioning and digital presence for upscale dining establishment.',
      image: 'https://placehold.co/600x400?text=Copper+Grillhouse',
      logo: false,
    },
    {
      id: 7,
      title: 'Beyond by Sula',
      category: 'hotels',
      description: 'Launch campaign and digital strategy for Sula\'s premium hospitality collection.',
      image: '/lovable-uploads/f2534e6a-ef6d-4468-a5bd-795c089fabef.png',
      logo: true,
    },
    {
      id: 8,
      title: 'The Source',
      category: 'hotels',
      description: 'Marketing and online booking strategy for boutique hotel property.',
      image: '/lovable-uploads/08d15b4e-6e34-416d-b3d6-e633b6545ed7.png',
      logo: true,
    },
    {
      id: 9,
      title: 'Paul and Mike',
      category: 'fmcg',
      description: 'Website development and digital marketing campaign for premium chocolate brand.',
      image: '/lovable-uploads/dd2d78b8-3f0b-4ea1-b26e-a2bc722c2f43.png',
      logo: true,
    },
    {
      id: 10,
      title: 'Space',
      category: 'fmcg',
      description: 'E-commerce strategy and brand identity for beverage retailer.',
      image: 'https://placehold.co/600x400?text=Space',
      logo: false,
    },
    {
      id: 11,
      title: 'Provogue',
      category: 'fmcg',
      description: 'Digital marketing strategy and brand revitalization for fashion retail.',
      image: 'https://placehold.co/600x400?text=Provogue',
      logo: false,
    },
    {
      id: 12,
      title: 'Kiddopia',
      category: 'educational',
      description: 'Marketing strategy and user acquisition for children\'s educational platform.',
      image: '/lovable-uploads/3b20498c-5b22-4995-bdc2-a5073c83ddb3.png',
      logo: true,
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white">
      <div className="container">
        <h2 className="section-title font-sf-pro">My Portfolio</h2>
        <p className="section-subtitle font-sf-pro-text">
          Featured projects and brands I've had the pleasure to work with at Tipple Works Co.
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors font-sf-pro-text ${
                  activeCategory === category.id 
                    ? 'bg-blue text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={project.logo ? "w-3/4 h-auto object-contain" : "w-full h-full object-cover"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <a href="#" className="p-2 bg-white rounded-full inline-block mb-4">
                      <ExternalLink size={20} className="text-blue" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-sf-pro">{project.title}</h3>
                <p className="text-gray-600 mb-4 font-sf-pro-text">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium px-3 py-1 bg-blue-light/10 text-blue rounded-full font-sf-pro-text">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
