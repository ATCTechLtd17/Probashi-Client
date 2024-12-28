import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaIdCard, FaFileAlt, FaPlane } from 'react-icons/fa';

// ProcessStep component with animations
const ProcessStep = ({ title, icon: Icon, index }) => {
  return (
    <motion.div 
      className="flex flex-col items-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="text-2xl text-sky-600" />
      </motion.div>
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </motion.div>
    </motion.div>
  );
};

// Main ProcessSection component
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
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Journey of Migrant Process
        </motion.h2>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 right-0 transform -translate-y-1/2">
            <motion.div 
              className="h-0.5 bg-sky-200 w-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
          
          {/* Animated Progress Line */}
          <div className="absolute top-8 left-0 right-0 transform -translate-y-1/2">
            <motion.div 
              className="h-0.5 bg-sky-500 w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <ProcessStep 
                key={index} 
                {...step} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;