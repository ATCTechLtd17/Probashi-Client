import React from 'react';
import { FaPassport, FaBriefcase, FaIdCard, FaPlane, FaFileAlt } from 'react-icons/fa';
import ProcessStep from './ProcessStep';

const ProcessSection = () => {
  const steps = [
    { title: "Apply for jobs", icon: FaBriefcase },
    { title: "BMET registration", icon: FaIdCard },
    { title: "PDO", icon: FaFileAlt },
    { title: "Medical clearance", icon: FaFileAlt },
    { title: "Airport", icon: FaPlane }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Journey of Migrant Process</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-light/30" />
          <div className="relative grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;