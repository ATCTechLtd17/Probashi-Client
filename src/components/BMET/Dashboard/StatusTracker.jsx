import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const StatusTracker = ({ steps }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'not-started':
        return <AlertCircle className="w-6 h-6 text-gray-300" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Registration Progress</h3>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            {getStatusIcon(step.status)}
            <div>
              <h4 className="font-medium">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
              {step.date && (
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(step.date).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusTracker;