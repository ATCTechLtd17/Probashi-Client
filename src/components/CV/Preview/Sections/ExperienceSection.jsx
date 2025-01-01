import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const ExperienceSection = ({ data }) => {
  const { language } = useLanguage();

  if (!data || data.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {language === 'bn' ? 'কর্ম অভিজ্ঞতা' : 'Work Experience'}
      </h2>
      
      {data.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-700">{exp.company}</p>
            </div>
            <p className="text-gray-600 text-sm">
              {exp.startDate} - {exp.current ? (language === 'bn' ? 'বর্তমান' : 'Present') : exp.endDate}
            </p>
          </div>
          
          {exp.location && (
            <p className="text-gray-600 text-sm mt-1">{exp.location}</p>
          )}
          
          {exp.description && (
            <p className="text-gray-700 mt-2">{exp.description}</p>
          )}
          
          {exp.achievements && exp.achievements.length > 0 && (
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;