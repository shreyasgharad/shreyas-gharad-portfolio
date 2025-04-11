
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'd2c', name: 'D2C Brands' },
    { id: 'sula', name: 'Sula Extensions' },
    { id: 'food', name: 'Food & Beverage' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sula Vineyards',
      category: 'd2c',
      description: 'Branding and performance marketing strategy for India\'s leading vineyard.',
      image: 'https://placehold.co/600x400?text=Sula+Vineyards',
    },
    {
      id: 2,
      title: 'Paul and Mike Chocolates',
      category: 'd2c',
      description: 'Website development and digital marketing campaign for premium chocolate brand.',
      image: 'https://placehold.co/600x400?text=Paul+and+Mike',
    },
    {
      id: 3,
      title: 'Sprig Gourmet',
      category: 'd2c',
      description: 'E-commerce strategy and social media management for gourmet food brand.',
      image: 'https://placehold.co/600x400?text=Sprig+Gourmet',
    },
    {
      id: 4,
      title: 'Space Coffee',
      category: 'd2c',
      description: 'Brand identity and website design for specialty coffee retailer.',
      image: 'https://placehold.co/600x400?text=Space+Coffee',
    },
    {
      id: 5,
      title: 'Beyond by Sula',
      category: 'sula',
      description: 'Launch campaign and digital strategy for Sula\'s premium wine collection.',
      image: 'https://placehold.co/600x400?text=Beyond+by+Sula',
    },
    {
      id: 6,
      title: 'Source by Sula',
      category: 'sula',
      description: 'Content strategy and social media management for Sula\'s sustainable initiative.',
      image: 'https://placehold.co/600x400?text=Source+by+Sula',
    },
    {
      id: 7,
      title: 'Momoland',
      category: 'food',
      description: 'Restaurant chain marketing strategy and website development.',
      image: 'https://placehold.co/600x400?text=Momoland',
    },
    {
      id: 8,
      title: 'Zomato Partnership',
      category: 'food',
      description: 'Platform collaboration strategy for food delivery integration.',
      image: 'https://placehold.co/600x400?text=Zomato',
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
          Featured projects and brands I've had the pleasure to work with.
        </p>
        
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
