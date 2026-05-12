import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-white">
      <div className="container">
        <h2 className="section-title font-sf-pro">Case Studies</h2>
        <p className="section-subtitle font-sf-pro-text">
          Selected brand work — strategy, creative, paid media and influencer-led growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              to={`/work/${cs.slug}`}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                <img
                  src={cs.logo}
                  alt={`${cs.brand} logo`}
                  className="max-h-24 max-w-[80%] object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block self-start text-xs font-medium px-3 py-1 bg-blue/10 text-blue rounded-full mb-3 font-sf-pro-text">
                  {cs.category}
                </span>
                <h3 className="text-xl font-bold mb-2 font-sf-pro">{cs.brand}</h3>
                <p className="text-sm text-gray-600 mb-6 font-sf-pro-text">{cs.tag}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-blue group-hover:gap-2 transition-all font-sf-pro-text">
                  View Case Study <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
