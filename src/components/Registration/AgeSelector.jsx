import React from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

const AgeSelector = ({ onSelect, onBack }) => {
  const ages = Array.from({ length: 43 }, (_, i) => i + 16); // 16 to 58 years

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="p-4">
        <button onClick={onBack} className="mb-4">
          <FaArrowLeft className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold mb-4">বয়স</h2>

        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="খোঁজ করুন"
            className="w-full p-3 pl-10 rounded-lg bg-gray-100"
          />
        </div>

        <div className="space-y-2">
          {ages.map((age) => (
            <button
              key={age}
              onClick={() => onSelect(age)}
              className="w-full p-3 text-left rounded-lg hover:bg-gray-50"
            >
              {age}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgeSelector;