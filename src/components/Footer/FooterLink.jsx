import React from 'react';

const FooterLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="block text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
};

export default FooterLink;
