import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ExchangeKoro</h3>
            <p className="text-gray-300">Your trusted currency exchange platform</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/rates" className="text-gray-300 hover:text-white">Exchange Rates</Link></li>
              <li><Link to="/agencies" className="text-gray-300 hover:text-white">Agencies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Live Exchange Rates</li>
              <li>Currency Conversion</li>
              <li>Agency Listings</li>
              <li>Location Search</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>support@exchangekoro.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} ExchangeKoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
