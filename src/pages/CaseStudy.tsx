import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Target, Compass, Lightbulb, TrendingUp, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies } from '@/data/caseStudies';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cs) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl font-bold mb-4 font-sf-pro">Case Study Not Found</h1>
            <Link to="/#case-studies" className="text-blue hover:underline font-sf-pro-text">
              ← Back to Work
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const sections = [
    { title: 'Problem', icon: Target, body: cs.problem },
    { title: 'Context', icon: Compass, body: cs.context },
    { title: 'Solution', icon: Lightbulb, body: cs.solution },
    { title: 'Result', icon: TrendingUp, body: cs.result },
    { title: 'Impact', icon: Sparkles, body: cs.impact },
  ];

  return (
    <>
      <Helmet>
        <title>{cs.brand} — Case Study | Shreyas Gharad</title>
        <meta name="description" content={cs.metaDescription} />
        <link rel="canonical" href={`https://gharads.in/work/${cs.slug}`} />
        <meta property="og:title" content={`${cs.brand} — Case Study`} />
        <meta property="og:description" content={cs.metaDescription} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />

        <article className="pt-28 pb-20">
          <div className="container max-w-4xl">
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue mb-8 font-sf-pro-text"
            >
              <ArrowLeft size={16} /> Back to Work
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 shrink-0">
                <img src={cs.logo} alt={`${cs.brand} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <span className="inline-block text-xs font-medium px-3 py-1 bg-blue/10 text-blue rounded-full mb-3 font-sf-pro-text">
                  {cs.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold font-sf-pro mb-3">{cs.brand}</h1>
                <p className="text-gray-600 font-sf-pro-text">{cs.tag}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-3 font-sf-pro-text">Scope</h2>
                <div className="flex flex-wrap gap-2">
                  {cs.scope.map((s) => (
                    <span key={s} className="text-sm px-3 py-1 bg-white border border-gray-200 rounded-full font-sf-pro-text">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-3 font-sf-pro-text">Objective</h2>
                <p className="text-gray-800 font-sf-pro-text">{cs.objective}</p>
              </div>
            </div>

            <div className="space-y-10">
              {sections.map(({ title, icon: Icon, body }) => (
                <section key={title}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue/10 text-blue">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-2xl font-bold font-sf-pro">{title}</h2>
                  </div>
                  {Array.isArray(body) ? (
                    <ul className="space-y-3 pl-2">
                      {body.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-700 font-sf-pro-text leading-relaxed">
                          <span className="text-blue mt-2 w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 font-sf-pro-text leading-relaxed">{body}</p>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue/5 to-blue/10 border border-blue/10 text-center">
              <h3 className="text-2xl font-bold mb-2 font-sf-pro">Building something similar?</h3>
              <p className="text-gray-600 mb-6 font-sf-pro-text">Let’s talk strategy, creative and growth.</p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white rounded-full font-medium hover:opacity-90 transition-opacity font-sf-pro-text"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudy;
