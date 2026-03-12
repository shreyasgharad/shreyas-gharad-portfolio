
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-2' 
          : 'bg-transparent backdrop-blur-none py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="h-8" />
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-500 font-sf-pro-text text-sm tracking-wide hover:scale-105 active:scale-95 ${
                scrolled ? 'text-gray-700 hover:text-blue' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/businesses"
            className={`font-medium transition-all duration-500 font-sf-pro-text text-sm tracking-wide hover:scale-105 active:scale-95 ${
              scrolled ? 'text-gray-700 hover:text-blue' : 'text-white/70 hover:text-white'
            }`}
          >
            Businesses
          </Link>
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-500 hover:scale-105 active:scale-95 ${
              scrolled 
                ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
            }`}
          >
            Get In Touch
          </a>
        </div>
        
        <button 
          className={`md:hidden p-2.5 rounded-xl transition-all duration-500 active:scale-90 ${
            scrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/10 backdrop-blur-sm border border-white/10 text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <button
          className="md:hidden fixed top-4 right-4 z-[60] p-2.5 rounded-xl bg-gray-100 shadow-md active:scale-90 transition-transform duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} className="text-gray-900" />
        </button>
      )}
      <div 
        className={`md:hidden fixed inset-0 bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="container py-20 flex flex-col space-y-6">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-gray-800 hover:text-blue transition-all duration-300 font-sf-pro active:scale-95"
              style={{ transitionDelay: mobileMenuOpen ? `${i * 50}ms` : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/businesses"
            className="text-xl font-medium text-gray-800 hover:text-blue transition-all duration-300 font-sf-pro active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            Businesses
          </Link>
          <a
            href="#contact"
            className="btn-primary shadow-lg text-center active:scale-95 transition-transform duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
