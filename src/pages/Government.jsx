import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ number, title, href }) => (
  <a 
    href={href}
    className="flex items-center gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
  >
    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
      {number}
    </div>
    <span className="text-emerald-600 font-medium">{title}</span>
  </a>
);

const GovernmentServices = () => {
  const services = [
    {
      title: "Swift and Secure Emigration Clearance",
      href: "#emigration-clearance"
    },
    {
      title: "Instantly Book PDO",
      href: "#pdo"
    },
    {
      title: "Register to BMET",
      href: "#bmet"
    },
    {
      title: "Get Trained",
      href: "#training"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Government Services
          </h1>
          
          <p className="text-gray-600 leading-relaxed">
            The digitisation of government services such as migrant registration, 
            pre-departure orientation, and emigration clearance has revolutionized 
            migration by eliminating paperwork, accelerating timelines, and reducing 
            costs for both migrants and the government. This has led to a significant 
            surge in overall applications.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
            Explore
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-2">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                number={index + 1}
                title={service.title}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentServices;