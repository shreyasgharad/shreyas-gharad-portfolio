import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, User, Share2, ChevronRight } from 'lucide-react';
import { blogPosts, BlogPost as BlogPostType } from '@/data/blogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState(0);
  const post = blogPosts.find(p => p.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section-index]');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) current = index;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/#blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToSection = (index: number) => {
    const el = document.querySelector(`[data-section-index="${index}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image,
    "author": { "@type": "Person", "name": post.author },
    "datePublished": post.date,
    "publisher": {
      "@type": "Person",
      "name": "Shreyas Gharad"
    },
    "keywords": post.tags.join(', ')
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Shreyas Gharad Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.metaKeywords} />
        <link rel="canonical" href={`https://gharads.in/blog/${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://gharads.in/blog/${post.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <header className="relative pt-20 md:pt-24">
          <div className="relative h-[280px] md:h-[420px] overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-12">
              <div className="max-w-4xl mx-auto">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                  {post.category}
                </span>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-sf-pro">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* Meta bar */}
        <div className="border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-5 py-4 flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span className="font-medium text-gray-700">{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={() => navigator.share?.({ title: post.title, url: window.location.href }).catch(() => {})}
              className="ml-auto flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Share2 size={14} />
              <span className="hidden md:inline">Share</span>
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="max-w-4xl mx-auto px-5 py-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="max-w-4xl mx-auto px-5 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Table of Contents - sidebar on desktop, collapsible on mobile */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <details className="lg:open group" open>
                  <summary className="lg:hidden flex items-center gap-2 text-sm font-semibold text-gray-800 cursor-pointer py-3 border-b border-gray-100">
                    <ChevronRight size={14} className="group-open:rotate-90 transition-transform" />
                    Table of Contents
                  </summary>
                  <nav className="py-3 lg:py-0">
                    <h3 className="hidden lg:block text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                      Contents
                    </h3>
                    <ul className="space-y-1">
                      {post.sections.map((section, i) => (
                        <li key={i}>
                          <button
                            onClick={() => scrollToSection(i)}
                            className={`w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${
                              activeSection === i
                                ? 'bg-blue-50 text-blue-700 font-medium'
                                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                            }`}
                          >
                            {section.heading}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </details>
              </div>
            </aside>

            {/* Article body */}
            <article className="flex-1 min-w-0">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-sf-pro-text border-l-4 border-blue-500 pl-5 italic">
                {post.excerpt}
              </p>

              {post.sections.map((section, i) => (
                <section key={i} data-section-index={i} className="mb-10 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-sf-pro">
                    {section.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg font-sf-pro-text">
                    {section.content}
                  </p>
                </section>
              ))}

              {/* Author card */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl flex flex-col sm:flex-row items-center gap-5">
                <img
                  src="/lovable-uploads/64a37dba-5fff-4970-8de2-b118bb84406a.png"
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <p className="font-bold text-gray-900 font-sf-pro">{post.author}</p>
                  <p className="text-sm text-gray-500 font-sf-pro-text">
                    Performance Marketing Executive helping Indian brands scale globally through tech and strategy.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Related posts */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-5">
            <h3 className="text-xl font-bold mb-6 font-sf-pro">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(related => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <img src={related.image} alt={related.title} className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs text-blue-600 font-semibold">{related.category}</span>
                      <h4 className="font-bold text-sm md:text-base text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 font-sf-pro">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{related.readTime}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Back to blog */}
        <div className="py-8 text-center">
          <Link to="/#blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
