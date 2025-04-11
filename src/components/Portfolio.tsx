
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
      image: 'https://placehold.co/600x400?text=Sula+Vineyards',
    },
    {
      id: 2,
      title: 'York Winery',
      category: 'beverages',
      description: 'Digital marketing and social media management for premium winery.',
      image: 'https://placehold.co/600x400?text=York+Winery',
    },
    {
      id: 3,
      title: 'Space',
      category: 'beverages',
      description: 'Brand identity and website design for beverage retailer.',
      image: 'https://placehold.co/600x400?text=Space',
    },
    {
      id: 4,
      title: 'Momoland',
      category: 'restaurants',
      description: 'Restaurant chain marketing strategy and website development.',
      image: 'https://placehold.co/600x400?text=Momoland',
    },
    {
      id: 5,
      title: 'Buns & Slices',
      category: 'restaurants',
      description: 'Social media strategy and content creation for fast-casual restaurant chain.',
      image: 'https://placehold.co/600x400?text=Buns+and+Slices',
    },
    {
      id: 6,
      title: 'Copper Grillhouse',
      category: 'restaurants',
      description: 'Brand positioning and digital presence for upscale dining establishment.',
      image: 'https://placehold.co/600x400?text=Copper+Grillhouse',
    },
    {
      id: 7,
      title: 'Beyond by Sula',
      category: 'hotels',
      description: 'Launch campaign and digital strategy for Sula\'s premium hospitality collection.',
      image: 'https://placehold.co/600x400?text=Beyond+by+Sula',
    },
    {
      id: 8,
      title: 'The Source',
      category: 'hotels',
      description: 'Marketing and online booking strategy for boutique hotel property.',
      image: 'https://placehold.co/600x400?text=The+Source',
    },
    {
      id: 9,
      title: 'Paul and Mike',
      category: 'fmcg',
      description: 'Website development and digital marketing campaign for premium chocolate brand.',
      image: 'https://placehold.co/600x400?text=Paul+and+Mike',
    },
    {
      id: 10,
      title: 'Sprig',
      category: 'fmcg',
      description: 'E-commerce strategy and social media management for gourmet food brand.',
      image: 'https://placehold.co/600x400?text=Sprig',
    },
    {
      id: 11,
      title: 'Provogue',
      category: 'fmcg',
      description: 'Digital marketing strategy and brand revitalization for fashion retail.',
      image: 'https://placehold.co/600x400?text=Provogue',
    },
    {
      id: 12,
      title: 'Kiddopia',
      category: 'educational',
      description: 'Marketing strategy and user acquisition for children\'s educational platform.',
      image: 'https://placehold.co/600x400?text=Kiddopia',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">
          Featured projects and brands I've had the pleasure to work with at Tipple Works Co.
        </p>
        
        <div className="text-center mb-10">
          <img 
            src="/lovable-uploads/e198213d-1744-42b4-b210-01e06cac3856.png" 
            alt="Brand Collaborations" 
            className="max-w-full h-auto inline-block"
          />
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
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
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium px-3 py-1 bg-blue-light/10 text-blue rounded-full">
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
