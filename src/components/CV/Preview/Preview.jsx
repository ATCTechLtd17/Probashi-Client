import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaDownload, FaPrint } from 'react-icons/fa';
import PersonalSection from './Sections/PersonalSection';
import ExperienceSection from './Sections/ExperienceSection';
import EducationSection from './Sections/EducationSection';
import SkillsSection from './Sections/SkillsSection';
import LanguagesSection from './Sections/LanguageSection';

const Preview = ({ data }) => {
  const { language } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Implementation for PDF download will be added
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-xl font-semibold">
          {language === 'bn' ? 'সিভি প্রিভিউ' : 'CV Preview'}
        </h2>
        <div className="flex gap-2">
          <button onClick={handlePrint} className="btn btn-outline btn-sm">
            <FaPrint className="mr-2" />
            {language === 'bn' ? 'প্রিন্ট' : 'Print'}
          </button>
          <button onClick={handleDownload} className="btn btn-primary btn-sm">
            <FaDownload className="mr-2" />
            {language === 'bn' ? 'ডাউনলোড' : 'Download'}
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow print:shadow-none">
        <PersonalSection data={data.personal} />
        <ExperienceSection data={data.experience} />
        <EducationSection data={data.education} />
        <SkillsSection data={data.skills} />
        <LanguagesSection data={data.languages} />
      </div>
    </div>
  );
};

export default Preview;