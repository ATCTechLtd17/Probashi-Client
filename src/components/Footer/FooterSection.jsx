import React from 'react';

const FooterSection = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
