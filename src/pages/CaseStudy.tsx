
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink, Target, TrendingUp, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudyData {
  title: string;
  slug: string;
  logo: string;
  banner: string;
  category: string;
  client: string;
  industry: string;
  timeline: string;
  budget: string;
  services: string[];
  metrics: {
    roas: string;
    conversion_increase: string;
    revenue_growth: string;
    cac_reduction: string;
  };
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  gallery: string[];
  content: string;
}

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would load and parse the MD file
    // For now, we'll use sample data for york-winery
    if (slug === 'york-winery') {
      const sampleData: CaseStudyData = {
        title: 'York Winery - Digital Transformation & Performance Marketing',
        slug: 'york-winery',
        logo: '/lovable-uploads/63c2ace2-bdd8-40c8-b966-8fac7b9dd451.png',
        banner: '/lovable-uploads/york-winery-banner.jpg',
        category: 'D2C Wine & Spirits',
        client: 'York Winery',
        industry: 'Wine & Beverages',
        timeline: '6 months',
        budget: '$50,000 - $100,000',
        services: ['Performance Marketing', 'Website Development', 'Social Media Management', 'Brand Strategy'],
        metrics: {
          roas: '450%',
          conversion_increase: '280%',
          revenue_growth: '350%',
          cac_reduction: '45%'
        },
        testimonial: {
          quote: 'Shreyas transformed our digital presence completely. Our ROI increased by 300% within 6 months of working with him.',
          author: 'Rajesh Kumar',
          position: 'Marketing Director',
          company: 'York Winery'
        },
        gallery: [
          '/lovable-uploads/york-winery-campaign-1.jpg',
          '/lovable-uploads/york-winery-campaign-2.jpg',
          '/lovable-uploads/york-winery-results.jpg'
        ],
        content: 'Sample content would be parsed from MD file here...'
      };
      setCaseStudy(sampleData);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/work" className="text-blue-600 hover:underline">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["BreadcrumbList", "CaseStudy"],
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": caseStudy.client,
        "item": `https://shreyasgharad.com/work/${caseStudy.slug}`
      }
    ],
    "name": caseStudy.title,
    "description": `Case study: ${caseStudy.client} achieved ${caseStudy.metrics.revenue_growth} revenue growth through strategic digital marketing.`,
    "url": `https://shreyasgharad.com/work/${caseStudy.slug}`,
    "image": caseStudy.banner,
    "author": {
      "@type": "Person",
      "name": "Shreyas Gharad"
    }
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
            >
              <Link to="/work" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Work
              </Link>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    {caseStudy.client}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    Digital transformation delivering {caseStudy.metrics.revenue_growth} revenue growth and {caseStudy.metrics.roas} ROAS
                  </p>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Industry</div>
                      <div className="font-semibold">{caseStudy.industry}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Timeline</div>
                      <div className="font-semibold">{caseStudy.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Budget</div>
                      <div className="font-semibold">{caseStudy.budget}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Services</div>
                      <div className="font-semibold">{caseStudy.services.length} Services</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <img
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="max-h-24 max-w-[80%] object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Key Results
              </h2>
              <p className="text-xl text-gray-600">
                Measurable impact across all key performance indicators
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, label: 'ROAS', value: caseStudy.metrics.roas, color: 'text-green-600' },
                { icon: Target, label: 'Conversion Increase', value: caseStudy.metrics.conversion_increase, color: 'text-blue-600' },
                { icon: ArrowRight, label: 'Revenue Growth', value: caseStudy.metrics.revenue_growth, color: 'text-orange-600' },
                { icon: Users, label: 'CAC Reduction', value: caseStudy.metrics.cac_reduction, color: 'text-purple-600' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <metric.icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
                      <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Services Delivered
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solution approach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                  <div className="h-1 w-12 bg-blue-600 rounded"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center text-white"
            >
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 max-w-4xl mx-auto">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <div className="font-semibold text-lg">{caseStudy.testimonial.author}</div>
                  <div className="text-blue-200">
                    {caseStudy.testimonial.position} at {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ready for Similar Results?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your brand achieve exceptional growth through strategic marketing and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="outline" size="lg" className="px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-blue-600 transition-colors">
                    View More Work
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
