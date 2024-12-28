import React from 'react';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Empowering Migrant Workers
            </h1>
            <p className="text-xl mb-8">
              Bridging the gap between aspiring migrant workers and opportunities abroad
            </p>
            <div className="space-y-4">
              <div className="space-x-4">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Download QR-Code Clearance Card
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary">
                  Verify BMET Smart Card
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <FaAppStore className="text-2xl" />
                  <span>App Store</span>
                </button>
                <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <FaGooglePlay className="text-2xl" />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/placeholder-app.png" 
              alt="Mobile App Preview" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;