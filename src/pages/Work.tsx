
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  slug: string;
  title: string;
  logo: string;
  category: string;
  client: string;
  metrics: {
    roas: string;
    conversion_increase: string;
    revenue_growth: string;
  };
  banner: string;
}

const Work = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    // In a real implementation, this would load all MD files
    // For now, we'll use the sample data
    const sampleCaseStudies: CaseStudy[] = [
      {
        slug: 'york-winery',
        title: 'York Winery - Digital Transformation & Performance Marketing',
        logo: '/lovable-uploads/63c2ace2-bdd8-40c8-b966-8fac7b9dd451.png',
        category: 'D2C Wine & Spirits',
        client: 'York Winery',
        metrics: {
          roas: '450%',
          conversion_increase: '280%',
          revenue_growth: '350%'
        },
        banner: '/lovable-uploads/york-winery-banner.jpg'
      }
    ];
    setCaseStudies(sampleCaseStudies);
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shreyasgharad.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Work",
        "item": "https://shreyasgharad.com/work"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore how we've helped brands achieve remarkable growth through strategic marketing and technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/work/${study.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                      {/* Banner Image */}
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <img
                          src={study.logo}
                          alt={study.client}
                          className="max-h-20 max-w-[60%] object-contain relative z-10"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                            {study.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {study.client}
                        </h3>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{study.metrics.roas}</div>
                            <div className="text-xs text-gray-500">ROAS</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{study.metrics.conversion_increase}</div>
                            <div className="text-xs text-gray-500">Conversion</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">{study.metrics.revenue_growth}</div>
                            <div className="text-xs text-gray-500">Growth</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">View Case Study</span>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your brand achieve similar results through strategic marketing and technology solutions.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Work;
