import React from 'react';
import { FaBuilding, FaGraduationCap, FaPassport, FaPlaneDeparture } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "BMET registration",
      description: "Get online and instantly register into Bangladesh's migrant database from the comfort of your home through Ami Probashi app.",
      icon: FaPassport
    },
    {
      title: "Pre-departure orientation",
      description: "Enroll into PDO classes, attend via biometric verification and receive your QR-code certificate directly on your phone.",
      icon: FaGraduationCap
    },
    {
      title: "General training",
      description: "Advance your career and enroll into hundreds of skill-based courses offered at over 120 technical training centers across Bangladesh.",
      icon: FaBuilding
    },
    {
      title: "Emigration Clearance",
      description: "Apply for emigration clearance digitally and avoid queues, middlemen and long processing times.",
      icon: FaPlaneDeparture
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">For Migrant Workers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;