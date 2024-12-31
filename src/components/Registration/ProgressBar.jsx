import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`step-item ${i + 1 <= currentStep ? 'step-primary' : ''}`}
          >
            Step {i + 1}
          </div>
        ))}
      </div>
      <progress
        className="progress progress-primary w-full"
        value={currentStep}
        max={totalSteps}
      ></progress>
    </div>
  );
};

export default ProgressBar;