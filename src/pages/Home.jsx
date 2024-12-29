import React from 'react';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/Statistics/StatisticsSection';
import ServicesSection from '../components/Services/ServicesSection';
import ProcessSection from '../components/Process/ProcessSection';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
};

export default Home;