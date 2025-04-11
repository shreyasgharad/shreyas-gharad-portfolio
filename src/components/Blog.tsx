
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How D2C Brands Can Leverage Social Media in 2023',
      excerpt: 'Practical strategies for direct-to-consumer brands to maximize their social media presence and drive conversions.',
      date: 'April 15, 2023',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Integrating ERP Systems for Small to Medium Businesses',
      excerpt: 'A step-by-step guide on how smaller businesses can benefit from enterprise resource planning without breaking the bank.',
      date: 'March 22, 2023',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'The Future of Indian D2C Brands in Global Markets',
      excerpt: 'Exploring opportunities and challenges for Indian direct-to-consumer brands looking to expand internationally.',
      date: 'February 10, 2023',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="bg-white">
      <div className="container">
        <h2 className="section-title">Latest Thoughts</h2>
        <p className="section-subtitle">
          Insights and perspectives on marketing, systems, and strategy.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="card group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${post.id * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium text-blue group-hover:text-blue-dark transition-colors"
                >
                  Read more
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-outline">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
