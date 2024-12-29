import React from 'react';

const StatCard = ({ number, text }) => {
  return (
    <div className="bg-sky-200 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-primary">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default StatCard;