import React from 'react';
import StatCard from './StatCard';

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who we are</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Ami Probashi is a comprehensive digital platform designed to bring transparency, reduce migration costs, and speed up migration processes through convenient online services available right at your doorstep.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number="7 million+" text="Unique services taken from our platform" />
          <StatCard number="5 million" text="Aspiring migrants on our database" />
          <StatCard number="12 days" text="quicker to migrate using our platform" />
          <StatCard number="2,500+" text="Employers use our platform" />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;