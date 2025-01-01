import React from 'react';
import CVBuilder from '../components/CV/CVBuilder';

const MakeCV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Create Your Professional CV</h1>
        <CVBuilder />
      </div>
    </div>
  );
};

export default MakeCV;