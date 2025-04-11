
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'US-India Tariff Reduction: Impact on Digital Advertising',
      excerpt: 'A detailed analysis of the recent 6% tax reduction agreement between the US and India and how it affects the digital marketing landscape.',
      date: 'April 5, 2025',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'How D2C Brands Can Leverage Social Media in 2025',
      excerpt: 'Practical strategies for direct-to-consumer brands to maximize their social media presence and drive conversions.',
      date: 'March 15, 2025',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Integrating ERP Systems for Small to Medium Businesses',
      excerpt: 'A step-by-step guide on how smaller businesses can benefit from enterprise resource planning without breaking the bank.',
      date: 'February 22, 2025',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'The Future of Indian D2C Brands in Global Markets',
      excerpt: 'Exploring opportunities and challenges for Indian direct-to-consumer brands looking to expand internationally.',
      date: 'January 10, 2025',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="bg-[#f9f9f9]">
      <div className="container">
        <h2 className="section-title font-sf-pro">Latest Thoughts</h2>
        <p className="section-subtitle font-sf-pro-text">
          Insights and perspectives on marketing, systems, and strategy.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border-none"
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
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span className="font-sf-pro-text">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue transition-colors duration-300 font-sf-pro">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 font-sf-pro-text">{post.excerpt}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium text-blue group-hover:text-blue-dark transition-colors font-sf-pro-text"
                >
                  Read more
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-outline font-sf-pro-text">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
