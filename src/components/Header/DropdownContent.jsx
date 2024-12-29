import React from 'react';
import { Link } from 'react-router-dom';

const DropdownContent = ({ items }) => {
  return (
    <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
      {items.map((section, index) => (
        <div key={index} className="px-4 py-2">
          <h3 className="text-primary font-medium mb-2">{section.title}</h3>
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                to={item.path}
                className="block text-sm text-gray-700 hover:text-primary"
              >
                {item.label}
                {item.badge && (
                  <span className="ml-2 text-xs text-gray-500">({item.badge})</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownContent;