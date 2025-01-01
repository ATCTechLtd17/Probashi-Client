import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const SkillsSection = ({ data }) => {
  const { language } = useLanguage();

  if (!data || data.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {language === 'bn' ? 'দক্ষতা' : 'Skills'}
      </h2>
      
      {data.map((category, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
              >
                {skill.name} ({skill.level})
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;