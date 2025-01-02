import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
          <User className="w-10 h-10 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{profile.fullName}</h2>
          <p className="text-gray-600">BMET ID: {profile.bmetId}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-500" />
          <span>{profile.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-500" />
          <span>{profile.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-500" />
          <span>{profile.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;