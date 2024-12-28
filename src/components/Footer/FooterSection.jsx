import React from 'react';

const FooterSection = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

export default FooterSection;