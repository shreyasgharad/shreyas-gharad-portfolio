
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-white/90 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-sf-pro hover:opacity-80 transition-opacity"
        >
          IndiaAds
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 hover:text-blue transition-colors duration-300 font-sf-pro-text text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/businesses"
            className="font-medium text-gray-700 hover:text-blue transition-colors duration-300 font-sf-pro-text text-sm lg:text-base"
          >
            Businesses
          </Link>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-medium shadow-lg hover:shadow-blue/25 transition-all duration-300 text-sm lg:text-base hover:scale-105 transform"
          >
            Get In Touch
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg bg-white/80 shadow-md hover:bg-white transition-colors duration-300" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} className="text-blue" /> : <Menu size={24} className="text-blue" />}
        </button>
      </div>
      
      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container py-20 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-gray-800 hover:text-blue transition-colors duration-300 font-sf-pro"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/businesses"
            className="text-xl font-medium text-gray-800 hover:text-blue transition-colors duration-300 font-sf-pro"
            onClick={() => setMobileMenuOpen(false)}
          >
            Businesses
          </Link>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-blue/25 transition-all duration-300 inline-block text-center hover:scale-105 transform"
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
