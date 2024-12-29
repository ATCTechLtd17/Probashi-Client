import React from 'react';
import { ArrowRight, Copy, MapPin } from 'lucide-react';

const ApplicationCard = () => (
  <div className="w-[380px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Application Details</h3>
        <div className="flex gap-1">
          <button className="w-1 h-1 bg-gray-300 rounded-full"/>
          <button className="w-1 h-1 bg-gray-300 rounded-full"/>
          <button className="w-1 h-1 bg-gray-300 rounded-full"/>
        </div>
      </div>

      {/* User Details */}
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200"/>
        <div>
          <div className="flex items-center gap-3">
            <p className="font-semibold">Alok Das</p>
            <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
              Processing
            </span>
          </div>
          <p className="text-sm text-gray-600">Passport No: B23658458635</p>
        </div>
      </div>

      {/* Application ID */}
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
        <p className="text-sm text-gray-600">
          Application ID: B23658458725485
        </p>
        <button className="text-blue-600">
          <Copy size={16} />
        </button>
      </div>

      {/* Status Message */}
      <p className="text-sm text-emerald-600">
        48 hours passed since your submitted your application. Please contact with the BMET/ Demo office where you submitted your application to get application update
      </p>

      {/* BMET Office */}
      <div className="space-y-2">
        <h4 className="font-semibold">BMET office</h4>
        <div className="flex items-start gap-2">
          <MapPin className="text-emerald-600 mt-1" size={16} />
          <p className="text-sm text-gray-600">
            8 km away | 49 Barutha Main Road, Gazipur
          </p>
        </div>
        {/* Map Placeholder */}
        <div className="w-full h-32 bg-gray-100 rounded-lg" />
      </div>

      <p className="text-sm font-medium">Application tracking</p>
    </div>
  </div>
);

const EmigrationClearance = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Swift and Secure Emigration Clearance
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Emigration clearance is a mandatory process where the government verifies 
            your documents and employment details. Apply online for emigration clearance 
            through the Ami Probashi app, avoiding middlemen and hidden fees. Track your 
            application and every step and instantaneously receive your verifiable 
            QR-code emigration card.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
            Apply
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-100 rounded-full opacity-50" />
          <div className="relative">
            <ApplicationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmigrationClearance;