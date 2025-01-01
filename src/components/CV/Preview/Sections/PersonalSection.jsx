import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const PersonalSection = ({ data }) => {
  const { language } = useLanguage();

  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.fullName}</h1>
      <div className="text-gray-600 space-y-1">
        {data.email && <p>Email: {data.email}</p>}
        {data.phone && <p>Phone: {data.phone}</p>}
        {data.passport && <p>Passport: {data.passport}</p>}
        {data.address && <p>Address: {data.address}</p>}
      </div>
      {data.summary && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {language === 'bn' ? 'পেশাগত সারসংক্ষেপ' : 'Professional Summary'}
          </h2>
          <p className="text-gray-700">{data.summary}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalSection;