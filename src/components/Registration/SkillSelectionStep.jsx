import React from 'react';
import { skillsList } from '../../data/registrationData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../../translations';

const SkillSelectionStep = ({ selectedSkills, onSkillSelect }) => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skillsList.map((skill) => (
          <button
            key={skill.id}
            onClick={() => onSkillSelect(skill.id)}
            className={`p-3 rounded-lg border ${
              selectedSkills.includes(skill.id)
                ? 'border-primary bg-primary/10'
                : 'border-gray-200'
            }`}
          >
            {skill[language]}
          </button>
        ))}
      </div>

      <button className="w-full p-3 rounded-lg border border-gray-200">
        {t.otherSkills}
      </button>
    </div>
  );
};

export default SkillSelectionStep;