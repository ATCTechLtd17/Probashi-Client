import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PersonalDetails from './Sections/PersonalDetails';
import Education from './Sections/Education';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Languages from './Sections/Languages';
import Preview from './Preview/Preview';

const CVBuilder = () => {
  const { language } = useLanguage();
  const [cvData, setCvData] = useState({
    personal: {},
    education: [],
    experience: [],
    skills: [],
    languages: []
  });
  console.log(cvData)

  const [activeSection, setActiveSection] = useState('personal');

  const updateSection = (section, data) => {
    setCvData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const sections = [
    { id: 'personal', label: language === 'bn' ? 'ব্যক্তিগত তথ্য' : 'Personal' },
    { id: 'education', label: language === 'bn' ? 'শিক্ষা' : 'Education' },
    { id: 'experience', label: language === 'bn' ? 'অভিজ্ঞতা' : 'Experience' },
    { id: 'skills', label: language === 'bn' ? 'দক্ষতা' : 'Skills' },
    { id: 'languages', label: language === 'bn' ? 'ভাষা' : 'Languages' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalDetails data={cvData.personal} updateData={(data) => updateSection('personal', data)} />;
      case 'education':
        return <Education data={cvData.education} updateData={(data) => updateSection('education', data)} />;
      case 'experience':
        return <Experience data={cvData.experience} updateData={(data) => updateSection('experience', data)} />;
      case 'skills':
        return <Skills data={cvData.skills} updateData={(data) => updateSection('skills', data)} />;
      case 'languages':
        return <Languages data={cvData.languages} updateData={(data) => updateSection('languages', data)} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`btn px-4 ${
                activeSection === section.id ? 'flex items-center px-2 text-white bg-teal-600 rounded-md hover:bg-teal-700' : 'btn-ghost'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
        {renderSection()}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <Preview data={cvData} />
      </div>
    </div>
  );
};

export default CVBuilder;