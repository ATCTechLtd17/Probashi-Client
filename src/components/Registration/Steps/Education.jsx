import React from 'react';

const educationLevels = [
  { id: 'primary', label: 'Primary Education' },
  { id: 'ssc', label: 'SSC' },
  { id: 'hsc', label: 'HSC/A-Level' },
  { id: 'bachelor', label: 'Bachelor' },
  { id: 'master', label: 'Master' },
  { id: 'phd', label: 'PhD' }
];

const Education = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Educational Background</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {educationLevels.map((level) => (
          <button
            key={level.id}
            type="button"
            onClick={() => onChange('education', level.id)}
            className={`btn ${
              formData.education === level.id ? 'btn-primary' : 'btn-outline'
            }`}
          >
            {level.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Education;