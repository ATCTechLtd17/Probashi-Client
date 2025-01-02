// RegistrationPurpose.jsx
import React from 'react';
import { Briefcase, Syringe, CheckCircle2 } from 'lucide-react';

const PurposeButton = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full px-6 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg transition-all hover:bg-teal-600 hover:border-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="text-lg font-medium">{label}</span>
    </button>
  );
};

const RegistrationPurpose = ({ onSelect }) => {
  const purposes = [
    { id: 'job', icon: Briefcase, label: 'For Job Purpose' },
    { id: 'vaccine', icon: Syringe, label: 'For Vaccine' },
    { id: 'both', icon: CheckCircle2, label: 'Both' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Why are you registering?
        </h2>
        <div className="grid gap-4">
          {purposes.map(({ id, icon, label }) => (
            <PurposeButton
              key={id}
              icon={icon}
              label={label}
              onClick={() => onSelect(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPurpose;