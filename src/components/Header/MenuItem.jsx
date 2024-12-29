import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ text, isActive = false }) => {
  return (
    <Link
      to="/"
      className={`text-sm font-medium ${
        isActive ? 'text-primary' : 'text-gray-700'
      } hover:text-primary transition-colors`}
    >
      {text}
    </Link>
  );
};

export default MenuItem;