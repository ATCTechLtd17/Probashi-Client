import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const LanguagesSection = ({ data }) => {
  const { language } = useLanguage();

  if (!data || data.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {language === 'bn' ? 'ভাষা' : 'Languages'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((lang, index) => (
          <div key={index} className="border rounded-lg p-3">
            <h3 className="font-semibold text-gray-900">{lang.name}</h3>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-gray-600">
                {language === 'bn' ? 'কথা বলা' : 'Speaking'}: {lang.proficiency.speaking}
              </p>
              <p className="text-sm text-gray-600">
                {language === 'bn' ? 'লেখা' : 'Writing'}: {lang.proficiency.writing}
              </p>
              <p className="text-sm text-gray-600">
                {language === 'bn' ? 'পড়া' : 'Reading'}: {lang.proficiency.reading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;