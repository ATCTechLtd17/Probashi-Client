import React from 'react';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/Statistics/StatisticsSection';
import ServicesSection from '../components/Services/ServicesSection';
import ProcessSection from '../components/Process/ProcessSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <ProcessSection />
    </>
  );
};

export default Home;