import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Pakistan Tourism</h3>
            <p className="text-gray-300 mb-4">Discover the beauty and rich culture of Pakistan with our expertly curated tours and travel experiences.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-golden transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-golden transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-golden transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Destinations', 'Tour Packages', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-golden transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              {['Hunza Valley', 'Skardu', 'Swat Valley', 'Lahore', 'Islamabad'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-golden" />
                <span className="text-gray-300">Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-golden" />
                <span className="text-gray-300">+92 300 1234567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-golden" />
                <span className="text-gray-300">info@pakistantourism.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Pakistan Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;