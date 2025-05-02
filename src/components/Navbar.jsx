import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">ExchangeKoro</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</Link>
              <Link to="/rates" className="text-gray-700 hover:text-blue-600 px-3 py-2">Exchange Rates</Link>
              <Link to="/agencies" className="text-gray-700 hover:text-blue-600 px-3 py-2">Agencies</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Home</Link>
            <Link to="/rates" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Exchange Rates</Link>
            <Link to="/agencies" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Agencies</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
