import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import RegistrationPurpose from '../components/BMET/RegistrationPurpose';
import PassportInfo from '../components/BMET/PassportInfo';

const BMETRegistration = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handlePurposeSelect = (purpose) => {
    setFormData({ ...formData, purpose });
    setStep(1);
  };

  const handlePassportInfoChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <RegistrationPurpose onSelect={handlePurposeSelect} />;
      case 1:
        return (
          <PassportInfo 
            formData={formData} 
            onChange={handlePassportInfoChange} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
          )}

          {renderStep()}

          {step === 1 && (
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="btn btn-primary w-full"
              >
                Submit Registration
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BMETRegistration;