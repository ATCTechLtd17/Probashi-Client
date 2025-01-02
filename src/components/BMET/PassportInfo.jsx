// PassportInfo.jsx
import React from 'react';
import { User, Book, Calendar } from 'lucide-react';

const InputField = ({ icon: Icon, label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-teal-600" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`${Icon ? 'pl-10' : 'pl-3'} w-full h-11 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent`}
          value={value || ''}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const DateField = ({ label, value, onChange }) => {
  return (
    <InputField
      icon={Calendar}
      label={label}
      type="date"
      value={value}
      onChange={onChange}
    />
  );
};

const RadioGroup = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Sex</label>
      <div className="flex gap-6">
        {['male', 'female'].map((gender) => (
          <label key={gender} className="inline-flex items-center">
            <input
              type="radio"
              name="sex"
              className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-600"
              checked={value === gender}
              onChange={() => onChange('sex', gender)}
            />
            <span className="ml-2 text-gray-700 capitalize">{gender}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const PassportInfo = ({ formData, onChange }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Passport Information
        </h2>
        
        <div className="space-y-6">
          <InputField
            icon={User}
            label="Full Name (as per passport)"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
          />

          <InputField
            icon={Book}
            label="Passport Number"
            placeholder="Enter passport number"
            value={formData.passportNumber}
            onChange={(e) => onChange('passportNumber', e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DateField
              label="Issue Date"
              value={formData.issueDate}
              onChange={(e) => onChange('issueDate', e.target.value)}
            />

            <DateField
              label="Expiry Date"
              value={formData.expiryDate}
              onChange={(e) => onChange('expiryDate', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Birth Place"
              placeholder="Enter birth place"
              value={formData.birthPlace}
              onChange={(e) => onChange('birthPlace', e.target.value)}
            />

            <DateField
              label="Birth Date"
              value={formData.birthDate}
              onChange={(e) => onChange('birthDate', e.target.value)}
            />
          </div>

          <RadioGroup
            value={formData.sex}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PassportInfo;