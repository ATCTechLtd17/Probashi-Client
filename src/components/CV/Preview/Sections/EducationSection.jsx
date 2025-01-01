import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const EducationSection = ({ data }) => {
  const { language } = useLanguage();

  if (!data || data.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {language === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Education'}
      </h2>
      
      {data.map((edu, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">{edu.year}</p>
              {edu.grade && <p className="text-gray-600">Grade: {edu.grade}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;