import React from 'react';

const ProcessStep = ({ title, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
        <Icon className="text-primary text-2xl" />
      </div>
      <p className="text-sm font-medium text-center">{title}</p>
    </div>
  );
};

export default ProcessStep;