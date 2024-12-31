import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex gap-2 absolute top-4 right-4">
      <button
        onClick={() => toggleLanguage('en')}
        className={`btn btn-sm ${language === 'en' ? 'btn-primary' : 'btn-outline'}`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLanguage('bn')}
        className={`btn btn-sm ${language === 'bn' ? 'btn-primary' : 'btn-outline'}`}
      >
        বাং
      </button>
    </div>
  );
};

export default LanguageToggle;