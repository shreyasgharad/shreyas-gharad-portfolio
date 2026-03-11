import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Blog | Latest Strategies & Insights - Shreyas Gharad</title>
        <meta name="description" content="Explore expert insights on performance marketing, SEO, paid advertising, and digital strategy. Learn proven tactics to grow your business online." />
        <meta name="keywords" content="digital marketing blog, performance marketing, SEO strategies, paid advertising, marketing automation, conversion optimization, growth marketing" />
        <link rel="canonical" href="https://gharads.in/blog" />
        <meta property="og:title" content="Digital Marketing Blog - Expert Strategies & Insights" />
        <meta property="og:description" content="Get the latest digital marketing strategies, SEO tips, and performance marketing insights to grow your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gharads.in/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Blog - Expert Strategies" />
        <meta name="twitter:description" content="Expert insights on performance marketing, SEO, and digital growth strategies." />
      </Helmet>
      <section id="blog" className="bg-[#f9f9f9]">
        <div className="container">
          <h2 className="section-title font-sf-pro">Latest Thoughts</h2>
          <p className="section-subtitle font-sf-pro-text">
            Insights and perspectives on marketing, systems, and strategy.
          </p>
        
          {/* Featured post */}
          <Link to={`/blog/${blogPosts[0].id}`} className="block mb-10 group">
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
              <div className="md:flex">
                <div className="md:w-1/2 h-56 md:h-80 overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12} /> {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-700 transition-colors font-sf-pro">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-500 mb-4 font-sf-pro-text text-sm md:text-base">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogPosts[0].tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-3 gap-2 transition-all font-sf-pro-text">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Other posts grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border-none h-full">
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-gray-400 text-xs mb-2">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-base font-bold mb-2 group-hover:text-blue-700 transition-colors font-sf-pro line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-3 font-sf-pro-text line-clamp-2">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded-full">{tag}</span>
                      ))}
                    </div>
                    
                    <span className="inline-flex items-center font-medium text-blue-600 text-sm group-hover:gap-2 gap-1 transition-all font-sf-pro-text">
                      Read more <ArrowRight size={14} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
