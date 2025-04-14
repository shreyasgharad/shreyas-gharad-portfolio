
import React from 'react';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/918412971907?text=${encodeURIComponent("Hii! Shreyas, Came across your website & portfolio want to talk")}`,
      '_blank'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    
    // Create email body
    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    
    // Open email client
    window.location.href = `mailto:shreyasgharad8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start a project or have a question? Reach out and let's discuss how I can help your brand grow.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-light/10 rounded-lg text-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:shreyasgharad@tippleworks.com" className="text-gray-600 hover:text-blue transition-colors">
                    shreyasgharad@tippleworks.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-light/10 rounded-lg text-green">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+918412971907" className="text-gray-600 hover:text-green transition-colors">
                    +91 8412 971907
                  </a>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="ml-4 px-3 py-1 bg-green-500 text-white rounded-full text-xs hover:bg-green-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-light/10 rounded-lg text-blue">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/shreyas_gharad/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue transition-colors">
                    @shreyas_gharad
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-light/10 rounded-lg text-orange">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">
                    Mumbai, Maharashtra, India
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Also available in Nagpur and Pune
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                <a href="https://github.com/shreyasgharad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue flex items-center justify-center rounded-full text-white hover:bg-blue-dark transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/shreyas_gharad/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue flex items-center justify-center rounded-full text-white hover:bg-blue-dark transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/hiishreyas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue flex items-center justify-center rounded-full text-white hover:bg-blue-dark transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </a>
                <a href="https://peerlist.io/shreyasgharad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue flex items-center justify-center rounded-full text-white hover:bg-blue-dark transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <form className="card p-8 animate-fade-in" style={{ animationDelay: "0.2s" }} onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 w-full btn-primary"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
