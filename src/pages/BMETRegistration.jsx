import React from 'react';
import { ArrowRight, ChevronLeft, ClipboardCheck, GraduationCap, Users, CreditCard } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-emerald-600 text-white p-4 rounded-lg flex items-center gap-3">
    <div className="bg-emerald-500 p-2 rounded-lg">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-xs text-emerald-100">{description}</p>
    </div>
  </div>
);

const SuggestionCard = () => (
  <div className="bg-white rounded-lg p-4">
    <div className="flex items-center justify-between mb-4">
      <h4 className="font-medium">Book a consultation service for your</h4>
      <button className="text-emerald-600 text-sm">View All</button>
    </div>
    <h3 className="text-lg font-semibold text-emerald-600 mb-2">Abroad Journey</h3>
    <img 
      src="/api/placeholder/320/160" 
      alt="Consultation Service" 
      className="w-full h-32 object-cover rounded-lg"
    />
  </div>
);

const MobilePreview = () => (
  <div className="relative w-[380px] h-[600px] bg-white rounded-[40px] shadow-xl border-8 border-gray-900 overflow-hidden">
    {/* Status Bar */}
    <div className="px-6 py-2 flex justify-between items-center text-xs">
      <span>19:27</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4">📶</div>
        <div className="w-4 h-4">🔋</div>
      </div>
    </div>

    {/* Header */}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <ChevronLeft className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Government Service</h3>
      </div>
      
      <h4 className="font-medium mb-4">Government Service</h4>
      
      {/* Service Options */}
      <div className="space-y-3">
        <ServiceCard 
          icon={ClipboardCheck}
          title="BMET Registration"
          description="Click the button"
        />
        <ServiceCard 
          icon={GraduationCap}
          title="Government Training"
          description="Click the button"
        />
        <ServiceCard 
          icon={Users}
          title="PDO (Pre Departure Orientation)"
          description="Click the button"
        />
        <ServiceCard 
          icon={CreditCard}
          title="BMET Clearance (Smart Card)"
          description="Click the button"
        />
      </div>

      {/* Suggested Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Suggested for you</h4>
          <button className="text-emerald-600 text-sm">View All</button>
        </div>
        <SuggestionCard />
      </div>
    </div>
  </div>
);

const BMETRegistration = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Register to BMET
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            To be eligible to work abroad, you must first complete BMET registration. 
            Avoid queues and travel, and register through the Ami Probashi app in 
            under 5 minutes. All you need is a valid passport!
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
            Apply
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-100 rounded-full opacity-50" />
          <div className="relative">
            <MobilePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMETRegistration;