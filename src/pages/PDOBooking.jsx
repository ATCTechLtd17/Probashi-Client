import React from 'react';
import { ArrowRight, Circle, CheckCircle2 } from 'lucide-react';

const StepItem = ({ text, isCompleted = false }) => (
  <div className="flex items-start gap-3 text-gray-600">
    {isCompleted ? (
      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
    ) : (
      <Circle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
    )}
    <p className="text-sm">{text}</p>
  </div>
);

const MobilePreview = () => (
  <div className="relative w-[380px] h-[600px] bg-white rounded-[40px] shadow-xl border-8 border-gray-900 overflow-hidden">
    {/* Header */}
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Pre-departure Orientation (PDO)</h3>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-gray-300 rounded-full"/>
          <div className="w-1 h-1 bg-gray-300 rounded-full"/>
          <div className="w-1 h-1 bg-gray-300 rounded-full"/>
        </div>
      </div>
      <p className="text-sm text-gray-600">Enroll for mandatory Pre-departure Orientation (PDO) training</p>
    </div>

    {/* Illustration */}
    <div className="w-full h-40 bg-cyan-100 flex items-center justify-center mb-6">
      <img 
        src="/api/placeholder/320/160" 
        alt="PDO Training Illustration" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Steps */}
    <div className="px-6 space-y-4">
      <StepItem text="Book your PDO session through Ami Probashi" isCompleted />
      <StepItem text="Select your desired Date, Time, and Technical Training Center (TTC)" />
      <StepItem text="You will receive a QR Code based enrollment card after payment" />
      <StepItem text="Go to your session and scan your enrollment card at the TTC to mark your attendance" />
      <StepItem text="Receive QR Code based certificate after completing training successfully" />
      <StepItem text="Get ready to fly!" />
    </div>

    {/* Start Button */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-medium">
        Start
      </button>
    </div>
  </div>
);

const PDOBooking = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-100 rounded-full opacity-50" />
          <div className="relative">
            <MobilePreview />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Instantly Book PDO
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Pre-departure orientation prepares you for life in a foreign country. 
            Select from 120 Technical training centers nationwide and book and 
            enroll for PDO classes instantly through the Ami Probashi app. After 
            finishing your course, get your QR-code certificate sent directly to 
            your phone.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
            Apply
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDOBooking;