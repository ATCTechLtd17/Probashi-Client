import React, { useEffect, useRef, useState } from 'react';
import { FaBuilding, FaGraduationCap, FaPassport, FaPlaneDeparture } from 'react-icons/fa';

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

const ServiceCard = ({ title, description, icon: Icon, index }) => {
  const [ref, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0' 
          : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'} translate-y-20`
      }`}
    >
      <div className="bg- p-6 rounded-lg shadow-lg h-full transform transition-transform hover:-translate-y-2 duration-300">
        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="text-2xl text-sky-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [headerRef, isHeaderVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

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
        <h2 
          ref={headerRef}
          className={`text-3xl font-bold mb-12 transform transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          For Migrant Workers
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;