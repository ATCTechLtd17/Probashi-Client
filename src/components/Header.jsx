import React, { useState } from 'react';
import { FaGlobe, FaQrcode } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Ami Probashi</h1>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-primary">Home</a>
          <a href="/services" className="hover:text-primary">Services</a>
          <a href="/recruitment" className="hover:text-primary">Recruitment</a>
          <a href="/government" className="hover:text-primary">Government</a>
          <a href="/portals" className="hover:text-primary">Portals</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FaGlobe className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FaQrcode className="text-gray-600" />
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 hover:bg-gray-100 rounded">Home</a>
            <a href="/services" className="block px-3 py-2 hover:bg-gray-100 rounded">Services</a>
            <a href="/recruitment" className="block px-3 py-2 hover:bg-gray-100 rounded">Recruitment</a>
            <a href="/government" className="block px-3 py-2 hover:bg-gray-100 rounded">Government</a>
            <a href="/portals" className="block px-3 py-2 hover:bg-gray-100 rounded">Portals</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;