import React, { useState } from 'react';
import SkillSelectionStep from '../components/Registration/SkillSelectionStep';
import PersonalInfoStep from '../components/Registration/PersonalInfoStep';
import AgeSelector from '../components/Registration/AgeSelector';
import EducationSelector from '../components/Registration/EducationSelector';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    skills: [],
    gender: '',
    age: '',
    education: '',
    employmentStatus: '',
    workingAbroad: '',
    showAgeSelector: false,
    showEducationSelector: false,
  });

  const handleSkillSelect = (skillId) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillId)
        ? prev.skills.filter(id => id !== skillId)
        : [...prev.skills, skillId]
    }));
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {formData.showAgeSelector && (
          <AgeSelector
            onSelect={(age) => {
              handleChange('age', age);
              handleChange('showAgeSelector', false);
            }}
            onBack={() => handleChange('showAgeSelector', false)}
          />
        )}

        {formData.showEducationSelector && (
          <EducationSelector
            onSelect={(education) => {
              handleChange('education', education);
              handleChange('showEducationSelector', false);
            }}
            onBack={() => handleChange('showEducationSelector', false)}
          />
        )}

        {step === 1 && (
          <SkillSelectionStep
            selectedSkills={formData.skills}
            onSkillSelect={handleSkillSelect}
          />
        )}

        {step === 2 && (
          <PersonalInfoStep
            formData={formData}
            onChange={handleChange}
            onSelectGender={(gender) => handleChange('gender', gender)}
          />
        )}

        <div className="mt-8">
          <button
            onClick={handleNext}
            className="w-full p-4 bg-primary text-white rounded-lg font-medium"
          >
            {step === 1 ? 'পরবর্তী' : 'সম্পূর্ণ'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;