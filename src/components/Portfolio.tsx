
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
    // Make Sula first as the prime client
    {
      id: 1,
      title: 'Sula Vineyards',
      category: 'beverages',
      description: 'Branding and performance marketing strategy for India\'s leading vineyard.',
      image: '/lovable-uploads/029a7e04-0b4f-4047-bffe-d80abd183f0b.png',
      url: 'https://sulawines.com',
      logo: true,
    },
    {
      id: 2,
      title: 'York Winery',
      category: 'beverages',
      description: 'Digital marketing and social media management for premium winery.',
      image: '/lovable-uploads/aa3bd555-477c-4d43-9723-519e496e8859.png',
      url: 'https://yorkwinery.com',
      logo: true,
    },
    {
      id: 3,
      title: 'Sprig',
      category: 'beverages',
      description: 'Brand identity and website design for gourmet food brand.',
      image: '/lovable-uploads/cbbc2c43-c4db-440a-bb80-c4b090690081.png',
      url: 'https://spriggourmet.com',
      logo: true,
    },
    {
      id: 4,
      title: 'Zomato',
      category: 'restaurants',
      description: 'Marketing campaign strategy and analytics implementation.',
      image: '/lovable-uploads/be437b36-52d5-4f8a-bbb2-003080267730.png',
      url: 'https://zomato.com',
      logo: true,
    },
    {
      id: 5,
      title: 'Momoland',
      category: 'restaurants',
      description: 'Restaurant chain marketing strategy and website development.',
      image: '/lovable-uploads/c91b61a1-bf0f-43da-bbe9-4a1d608ecac1.png',
      url: 'https://momoland.com',
      logo: true,
    },
    {
      id: 6,
      title: 'Copper Grillhouse',
      category: 'restaurants',
      description: 'Brand positioning and digital presence for upscale dining establishment.',
      image: '/lovable-uploads/ca478634-399e-440f-a80c-1ade1b6c0877.png',
      url: 'https://coppergrillhouse.com',
      logo: true,
    },
    {
      id: 7,
      title: 'Beyond by Sula',
      category: 'hotels',
      description: 'Launch campaign and digital strategy for Sula\'s premium hospitality collection.',
      image: '/lovable-uploads/30223106-d65d-47e7-bea5-5ac763a6f4b6.png',
      url: 'https://sulawines.com/beyond',
      logo: true,
    },
    {
      id: 8,
      title: 'The Source',
      category: 'hotels',
      description: 'Marketing and online booking strategy for boutique hotel property.',
      image: '/lovable-uploads/6d5cd239-feca-4c90-9736-5c3610c27335.png',
      url: 'https://thesource.co.in',
      logo: true,
    },
    {
      id: 9,
      title: 'Paul and Mike',
      category: 'fmcg',
      description: 'Website development and digital marketing campaign for premium chocolate brand.',
      image: '/lovable-uploads/f8448d9c-6c10-4b16-96b8-32c56cdbb71f.png',
      url: 'https://paulandmike.co',
      logo: true,
    },
    {
      id: 10,
      title: 'Space',
      category: 'fmcg',
      description: 'E-commerce strategy and brand identity for beverage retailer.',
      image: '/lovable-uploads/14e3415e-1c8b-470b-9ac8-47983ca958ee.png',
      url: 'https://spaceindia.com',
      logo: true,
    },
    {
      id: 11,
      title: 'Provogue',
      category: 'fmcg',
      description: 'Digital marketing strategy and brand revitalization for fashion retail.',
      image: '/lovable-uploads/5e755bf9-e879-4200-8e3c-5cf7602952fa.png',
      url: 'https://provogue.com',
      logo: true,
    },
    {
      id: 12,
      title: 'Kiddopia',
      category: 'educational',
      description: 'Marketing strategy and user acquisition for children\'s educational platform.',
      image: '/lovable-uploads/f1d0d43f-4f48-4a53-8abd-6a582ef66875.png',
      url: 'https://kiddopia.com',
      logo: true,
    },
    {
      id: 13,
      title: 'Estate Monkeys',
      category: 'coffee',
      description: 'Branding and digital marketing for innovative coffee brand.',
      image: '/lovable-uploads/abf379dd-f7c6-4352-afb0-ecec79a53878.png',
      url: 'https://estatemonkeys.com',
      logo: true,
    },
    {
      id: 14,
      title: 'Matero',
      category: 'fmcg',
      description: 'Brand strategy and digital presence for consumer goods company.',
      image: '/lovable-uploads/27210c65-f5e0-45d4-8113-5dce84c5a013.png',
      url: 'https://matero.com',
      logo: true,
    },
    {
      id: 15,
      title: 'Shakakan',
      category: 'beverages',
      description: 'Marketing strategy and brand development for beverage company.',
      image: '/lovable-uploads/3e936e8c-4151-4886-81de-b7f366d12a43.png',
      url: 'https://shakakan.com',
      logo: true,
    },
    {
      id: 16,
      title: 'Elaan',
      category: 'fmcg',
      description: 'Digital presence and marketing campaign for luxury brand.',
      image: '/lovable-uploads/bddcfd31-393d-4193-9b56-aea03234f59f.png',
      url: 'https://elaan.com',
      logo: true,
    },
    {
      id: 17,
      title: 'Naar',
      category: 'fmcg',
      description: 'Brand identity and digital strategy for consumer goods company.',
      image: '/lovable-uploads/d3a7ff0f-27a9-44bc-8c87-1a6664d57414.png',
      url: 'https://naar.com',
      logo: true,
    },
    {
      id: 18,
      title: 'B&S Burgers',
      category: 'restaurants',
      description: 'Social media strategy and website development for burger chain.',
      image: '/lovable-uploads/a37fbc9c-fdeb-469e-bb1d-8a3550d84678.png',
      url: 'https://bunsandslices.com',
      logo: true,
    },
    {
      id: 19,
      title: 'DSG Partners',
      category: 'fmcg',
      description: 'Marketing strategy and digital presence for consumer goods distributor.',
      image: '/lovable-uploads/1e76d229-143a-4bcb-a93c-f99b8025daf5.png',
      url: 'https://dsgpartners.com',
      logo: true,
    },
    {
      id: 20,
      title: 'Rasa Wines',
      category: 'beverages',
      description: 'Brand development and digital marketing for wine company.',
      image: '/lovable-uploads/2428e18f-1ddb-4368-90d1-78131b60e4f7.png',
      url: 'https://rasawines.com',
      logo: true,
    },
    {
      id: 21,
      title: 'BB Sourced',
      category: 'fmcg',
      description: 'E-commerce strategy and brand development for food sourcing company.',
      image: '/lovable-uploads/543ed4ed-8068-4848-8b32-39682a869ed6.png',
      url: 'https://bbsourced.com',
      logo: true,
    },
    {
      id: 22,
      title: 'Kalpan Agro-Tech',
      category: 'agrotech',
      description: 'Digital marketing and brand strategy for agro-technology company.',
      image: '/lovable-uploads/8109bc25-59ff-41d5-a5f7-51cb21b0abfc.png',
      url: 'https://kalpanagrotech.com',
      logo: true,
    },
    {
      id: 23,
      title: 'Echo Education',
      category: 'educational',
      description: 'Marketing strategy and digital presence for educational institution.',
      image: '/lovable-uploads/07996eb2-d2c7-47fd-b18c-7234d5d0c1f5.png',
      url: 'https://echoeducation.in',
      logo: true,
    },
    {
      id: 24,
      title: 'Symbiosis University',
      category: 'educational',
      description: 'Digital marketing strategy for educational institution.',
      image: '/lovable-uploads/309ecc1a-2687-46a7-8b51-25ad0339a613.png',
      url: 'https://siu.edu.in',
      logo: true,
    },
    {
      id: 25,
      title: 'YCCE Engineering',
      category: 'educational',
      description: 'Digital presence and marketing strategy for engineering college.',
      image: '/lovable-uploads/72bdd661-5d0b-413e-bfc1-6b099df16b7b.png',
      url: 'https://ycce.edu',
      logo: true,
    },
    {
      id: 26,
      title: 'Bühler Group',
      category: 'agrotech',
      description: 'Marketing strategy and brand development for agricultural technology company.',
      image: '/lovable-uploads/93a0d241-23d4-410c-b93c-6291f8bad986.png',
      url: 'https://buhlergroup.com',
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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors font-sf-pro-text ${
                  activeCategory === category.id 
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
              style={{ animationDelay: `${project.id * 0.1}s` }}
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
