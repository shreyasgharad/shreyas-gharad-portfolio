
import React, { useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecentPosts from '../components/RecentPosts';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFuse } from '../hooks/useFuse';

// Mock data - in a real app, this would be loaded from MDX files
const mockPosts = [
  {
    title: "Digital Marketing Trends to Watch in 2025",
    date: "2024-12-15",
    category: "Strategy",
    excerpt: "Explore the emerging digital marketing trends that will shape business growth in 2025, from AI-powered personalization to privacy-first advertising.",
    author: "Arjun Sharma",
    readTime: "8 min read",
    slug: "digital-marketing-trends-2025",
    featured: true
  },
  {
    title: "The Complete Guide to Conversion Rate Optimization",
    date: "2024-12-10",
    category: "Analytics",
    excerpt: "Master the art and science of conversion rate optimization with proven strategies, tools, and case studies that drive measurable results.",
    author: "Rahul Kumar",
    readTime: "12 min read",
    slug: "conversion-rate-optimization-guide",
    featured: false
  },
  {
    title: "Building High-Converting Landing Pages",
    date: "2024-12-05",
    category: "Design",
    excerpt: "Learn the essential elements of landing page design that convert visitors into customers through strategic layout and persuasive copy.",
    author: "Priya Patel",
    readTime: "6 min read",
    slug: "high-converting-landing-pages",
    featured: false
  },
  {
    title: "Google Analytics 4: Advanced Setup Guide",
    date: "2024-11-28",
    category: "Analytics",
    excerpt: "Deep dive into GA4 implementation, custom events, and advanced reporting features for comprehensive marketing attribution.",
    author: "Rahul Kumar",
    readTime: "15 min read",
    slug: "ga4-advanced-setup",
    featured: false
  }
];

const Insights = () => {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(mockPosts.map(post => post.category)));
    return ['All', ...cats];
  }, []);

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredPosts = useMemo(() => {
    return selectedCategory === 'All' 
      ? mockPosts 
      : mockPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  const { query, setQuery, results } = useFuse(filteredPosts, {
    keys: ['title', 'excerpt', 'category', 'author'],
    threshold: 0.4
  });

  const featuredPost = mockPosts.find(post => post.featured);
  const regularPosts = results.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="container">
          <h1 className="section-title">Insights & Resources</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Strategic insights, industry trends, and practical guides to help you navigate the evolving digital marketing landscape.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'bg-blue hover:bg-blue-dark' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {featuredPost && selectedCategory === 'All' && !query && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                    <div className="h-64 bg-gradient-to-r from-blue-100 to-blue-200"></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <Link to={`/insights/${featuredPost.slug}`}>
                        <Button className="bg-blue hover:bg-blue-dark text-white">
                          Read Full Article
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div>
                <h2 className="text-2xl font-bold mb-8">
                  {query ? `Search Results (${results.length})` : 'Latest Articles'}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {regularPosts.map((post, index) => (
                    <Card 
                      key={post.slug} 
                      className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200"></div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-blue/10 text-blue text-xs font-semibold px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Calendar size={12} className="mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-blue transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock size={12} className="mr-1" />
                            {post.readTime}
                          </div>
                          <Link 
                            to={`/insights/${post.slug}`}
                            className="text-blue hover:text-blue-dark text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform"
                          >
                            Read more
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <RecentPosts posts={mockPosts} />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Insights;
