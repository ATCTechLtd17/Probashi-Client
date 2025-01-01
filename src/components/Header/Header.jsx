import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import { navigationData } from './navigationData';
import LanguageToggle from '../Registration/LanguageToggle';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-primary">
          Probashi - DhakaBoss
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary">
                Home
              </Link>
              
              <DropdownMenu
                title="Services"
                items={navigationData.services}
                isActive={activeMenu === 'services'}
                onMouseEnter={() => setActiveMenu('services')}
              />

              <DropdownMenu
                title="Recruitment"
                items={navigationData.recruitment}
                isActive={activeMenu === 'recruitment'}
                onMouseEnter={() => setActiveMenu('recruitment')}
              />

              <DropdownMenu
                title="Portals"
                items={navigationData.portals}
                isActive={activeMenu === 'portals'}
                onMouseEnter={() => setActiveMenu('portals')}
              />
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            
            <LanguageToggle />
            <div className="flex items-center space-x-2 text-gray-600">
              <img src="/qr-code.svg" alt="QR Code" className="w-6 h-6" />
              <span className="text-sm">Get Probashi App</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;