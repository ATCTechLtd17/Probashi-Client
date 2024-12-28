import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaQrcode } from 'react-icons/fa';
import NavDropdown from './NavDropdown';
import { navigationItems } from './navigationData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Ami Probashi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavDropdown title="Services" items={navigationItems.services} />
            <NavDropdown title="Recruitment" items={navigationItems.recruitment} />
            <NavDropdown title="Government" items={navigationItems.government} />
            <NavDropdown title="Portals" items={navigationItems.portals} />
            <NavDropdown title="Download Cards" items={navigationItems.cards} />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaGlobe className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaQrcode className="text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {Object.entries(navigationItems).map(([key, items]) => (
              <div key={key} className="py-2">
                <h3 className="px-4 py-2 font-semibold text-gray-800 capitalize">{key}</h3>
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;