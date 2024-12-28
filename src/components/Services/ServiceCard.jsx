import React from 'react';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-primary text-xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="text-primary mt-4 hover:underline">Learn more</button>
    </div>
  );
};

export default ServiceCard;