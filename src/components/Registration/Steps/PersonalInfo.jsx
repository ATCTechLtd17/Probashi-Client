import React from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';

const PersonalInfo = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Personal Information</h2>
      
      <div className="space-y-4">
        <div>
          <label className="label">Sex</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onChange('sex', 'male')}
              className={`btn ${formData.sex === 'male' ? 'btn-primary' : 'btn-outline'}`}
            >
              <FaMars className="mr-2" /> Male
            </button>
            <button
              type="button"
              onClick={() => onChange('sex', 'female')}
              className={`btn ${formData.sex === 'female' ? 'btn-primary' : 'btn-outline'}`}
            >
              <FaVenus className="mr-2" /> Female
            </button>
          </div>
        </div>

        <div>
          <label className="label">Age</label>
          <input
            type="range"
            min="18"
            max="70"
            value={formData.age || 18}
            onChange={(e) => onChange('age', e.target.value)}
            className="range range-primary"
          />
          <div className="text-center mt-2">{formData.age || 18} years</div>
        </div>

        <div>
          <label className="label">Currently Working Abroad?</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onChange('workingAbroad', true)}
              className={`btn ${formData.workingAbroad ? 'btn-primary' : 'btn-outline'}`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => onChange('workingAbroad', false)}
              className={`btn ${formData.workingAbroad === false ? 'btn-primary' : 'btn-outline'}`}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;