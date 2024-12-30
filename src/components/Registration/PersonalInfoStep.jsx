import React from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../../translations';

const PersonalInfoStep = ({ formData, onChange, onSelectGender }) => {
  const { language } = useLanguage();
  const t = translations[language].personal;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{t.title}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="mb-2">{t.gender}</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onSelectGender('male')}
              className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${
                formData.gender === 'male' ? 'border-primary bg-primary/10' : 'border-gray-200'
              }`}
            >
              <FaMars /> {t.male}
            </button>
            <button
              onClick={() => onSelectGender('female')}
              className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${
                formData.gender === 'female' ? 'border-primary bg-primary/10' : 'border-gray-200'
              }`}
            >
              <FaVenus /> {t.female}
            </button>
          </div>
        </div>

        <div>
          <p className="mb-2">{t.age}</p>
          <button
            onClick={() => onChange('showAgeSelector', true)}
            className="w-full p-3 rounded-lg border border-gray-200 flex justify-between items-center"
          >
            <span>{formData.age || t.age}</span>
            <span>›</span>
          </button>
        </div>

        <div>
          <p className="mb-2">{t.education}</p>
          <button
            onClick={() => onChange('showEducationSelector', true)}
            className="w-full p-3 rounded-lg border border-gray-200 flex justify-between items-center"
          >
            <span>{formData.education || t.education}</span>
            <span>›</span>
          </button>
        </div>

        <div>
          <p className="mb-2">{t.employmentStatus}</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { key: 'jobSeeker', value: t.jobSeeker },
              { key: 'underProcess', value: t.underProcess },
              { key: 'employed', value: t.employed }
            ].map(({ key, value }) => (
              <button
                key={key}
                onClick={() => onChange('employmentStatus', key)}
                className={`p-3 rounded-lg border ${
                  formData.employmentStatus === key
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2">{t.workingAbroad}</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { key: 'yes', value: t.yes },
              { key: 'no', value: t.no }
            ].map(({ key, value }) => (
              <button
                key={key}
                onClick={() => onChange('workingAbroad', key)}
                className={`p-3 rounded-lg border ${
                  formData.workingAbroad === key
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;