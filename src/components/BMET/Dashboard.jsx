import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '../../components/BMET/Dashboard/Sidebar';

import StatusTracker from '../../components/BMET/Dashboard/StatusTracker';
import ProfileCard from './Dashboard/Profilecard';

const Dashboard = () => {
  const location = useLocation();
  const mockProfile = {
    fullName: "John Doe",
    bmetId: "BMET-2024-001",
    email: "john@example.com",
    phone: "+880 1234567890",
    address: "Dhaka, Bangladesh"
  };

  const mockSteps = [
    {
      title: "BMET Registration",
      description: "Initial registration completed",
      status: "completed",
      date: "2024-01-15"
    },
    {
      title: "Medical Test",
      description: "Schedule your medical examination",
      status: "pending"
    },
    {
      title: "Training Registration",
      description: "Register for required training programs",
      status: "not-started"
    },
    {
      title: "Manpower Approval",
      description: "Submit documents for approval",
      status: "not-started"
    },
    {
      title: "Certificate Issuance",
      description: "Final certificate generation",
      status: "not-started"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activePage={location.pathname} />
      
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProfileCard profile={mockProfile} />
            
            <div className="mt-8 grid gap-6">
              {/* Add other dashboard components here */}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <StatusTracker steps={mockSteps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;