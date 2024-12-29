import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownContent from './DropdownContent';

const DropdownMenu = ({ title, items, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to="/"
        className={`flex items-center space-x-1 text-sm font-medium ${
          isActive ? 'text-primary' : 'text-gray-700'
        } hover:text-primary transition-colors`}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {isOpen && <DropdownContent items={items} />}
    </div>
  );
};

export default DropdownMenu;