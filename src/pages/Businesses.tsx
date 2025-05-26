import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const companies = [
  {
    name: 'IndiAds',
    description:
      'IndiAds delivers data-driven performance marketing for D2C and B2B brands, combining analytics with creative strategy to maximize results.',
    image: '/lovable-uploads/040cb552-0995-44a9-aaef-f6d276755274.png',
  },
  {
    name: 'Indigrand Foods',
    description:
      'Indigrand Foods crafts authentic FMCG products, bringing bold Indian flavours to households through a modern distribution network.',
    image: '/lovable-uploads/103c1e12-4f65-4cd2-84d1-8a21790b351c.png',
  },
  {
    name: 'Indigrand Reality',
    description:
      'Indigrand Reality develops residential and commercial spaces with a focus on sustainable design and community growth.',
    image: '/lovable-uploads/34b37801-d8fa-4c9c-b2ed-2ac6ea710250.png',
  },
  {
    name: 'IndiRepair',
    description:
      'IndiRepair provides reliable electronic device repairs, offering quick turnaround times and quality workmanship across India.',
    image: '/lovable-uploads/3511b92c-3db8-40ac-a2d9-aa09abd2be88.png',
  },
  {
    name: 'Indigrand Technologies',
    description:
      'Indigrand Technologies delivers innovative software and system integration services that help businesses thrive in the digital era.',
    image: '/lovable-uploads/4653f451-ae64-4029-aa56-c11d1ab183d6.png',
  },
];

const Businesses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Our Businesses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse ventures that span marketing, food, real estate, technology and more.
          </p>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, idx) => (
              <div
                key={company.name}
                className="card overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                  <p className="text-gray-600">{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Businesses;
