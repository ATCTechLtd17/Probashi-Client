import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, ChevronLeft, Upload } from 'lucide-react';
import PersonalInfo from './Steps/PersonalInfo';
import Education from './Steps/Education';
import JobInfo from './Steps/JobInfo';
import Skills from './Steps/Skills';
import LanguageToggle from './LanguageToggle';

// New component for Contact/ID information
const ContactInfo = ({ formData, onChange }) => {
  const { language } = useLanguage();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange('photo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'bn' ? 'ইমেইল' : 'Email'}*
        </label>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={language === 'bn' ? 'আপনার ইমেইল' : 'Your email'}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}*
        </label>
        <input
          type="tel"
          value={formData.phone || ''}
          onChange={(e) => onChange('phone', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={language === 'bn' ? 'আপনার ফোন নম্বর' : 'Your phone number'}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'bn' ? 'পাসপোর্ট নম্বর' : 'Passport Number'}*
        </label>
        <input
          type="text"
          value={formData.passport || ''}
          onChange={(e) => onChange('passport', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={language === 'bn' ? 'আপনার পাসপোর্ট নম্বর' : 'Your passport number'}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'bn' ? 'ছবি' : 'Photo'}*
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          {formData.photo ? (
            <div className="space-y-2">
              <img
                src={formData.photo}
                alt="Preview"
                className="h-40 w-40 object-cover rounded-lg mx-auto"
              />
              <button
                onClick={() => onChange('photo', null)}
                className="text-sm text-red-600 hover:text-red-800"
              >
                {language === 'bn' ? 'ছবি মুছুন' : 'Remove photo'}
              </button>
            </div>
          ) : (
            <div className="space-y-2 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>{language === 'bn' ? 'ছবি আপলোড করুন' : 'Upload a photo'}</span>
                  <input
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG up to 5MB
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RegistrationForm = () => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const totalSteps = 5;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.email && formData.phone && formData.passport && formData.photo;
      case 2:
        return formData.sex && formData.age && formData.workingAbroad !== undefined;
      case 3:
        return formData.education;
      case 4:
        return formData.currentJob && (!formData.workingAbroad || formData.countries?.length > 0);
      case 5:
        return formData.skills?.length > 0;
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      console.log('Form submitted:', formData);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ContactInfo formData={formData} onChange={handleChange} />;
      case 2:
        return <PersonalInfo formData={formData} onChange={handleChange} />;
      case 3:
        return <Education formData={formData} onChange={handleChange} />;
      case 4:
        return <JobInfo formData={formData} onChange={handleChange} />;
      case 5:
        return <Skills formData={formData} onChange={handleChange} />;
      default:
        return null;
    }
  };

  const stepTitles = {
    1: language === 'bn' ? 'যোগাযোগ এবং পরিচয়' : 'Contact & Identification',
    2: language === 'bn' ? 'ব্যক্তিগত তথ্য' : 'Personal Information',
    3: language === 'bn' ? 'শিক্ষা' : 'Education',
    4: language === 'bn' ? 'কর্মসংস্থান' : 'Employment',
    5: language === 'bn' ? 'দক্ষতা' : 'Skills'
  };

  const buttonText = {
    next: language === 'bn' ? 'পরবর্তী' : 'Next',
    back: language === 'bn' ? 'পিছনে' : 'Back',
    submit: language === 'bn' ? 'জমা দিন' : 'Submit'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-teal-500 px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {stepTitles[currentStep]}
              </h2>
             
            </div>
          </div>

          {/* Progress bar */}
          <div className="px-6 pt-4">
            <div className="flex mb-4">
              {[...Array(totalSteps)].map((_, index) => (
                <div key={index} className="flex-1">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-6">
              <span>{language === 'bn' ? 'ধাপ' : 'Step'} {currentStep} / {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
          </div>

          {/* Form content */}
          <div className="px-6 py-6">
            {renderStep()}
          </div>

          {/* Footer with buttons */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              {currentStep > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {buttonText.back}
                </button>
              ) : (
                <div /> // Empty div to maintain spacing
              )}
              
              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  disabled={!validateCurrentStep()}
                  className={`flex items-center px-6 py-2 rounded-lg text-sm font-medium text-white
                    ${validateCurrentStep() 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-300 cursor-not-allowed'
                    } transition-colors duration-200`}
                >
                  {buttonText.next}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!validateCurrentStep()}
                  className={`flex items-center px-6 py-2 rounded-lg text-sm font-medium text-white
                    ${validateCurrentStep()
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-300 cursor-not-allowed'
                    } transition-colors duration-200`}
                >
                  {buttonText.submit}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;