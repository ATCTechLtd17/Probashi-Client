import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const PersonalDetails = ({ data, updateData }) => {
  const { language } = useLanguage();
  const labels = {
    fullName: language === 'bn' ? 'পূর্ণ নাম' : 'Full Name',
    email: language === 'bn' ? 'ইমেইল' : 'Email',
    phone: language === 'bn' ? 'ফোন' : 'Phone',
    passport:language==='bn'? 'পাসপোর্ট নম্বর' : 'Passport Number',
    address: language === 'bn' ? 'ঠিকানা' : 'Address',
    summary: language === 'bn' ? 'সারসংক্ষেপ' : 'Professional Summary'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">{language === 'bn' ? 'ব্যক্তিগত তথ্য' : 'Personal Details'}</h2>
      
      {Object.entries(labels).map(([field, label]) => (
        <div key={field}>
          <label className="label">{label}</label>
          {field === 'summary' ? (
            <textarea
              name={field}
              value={data[field] || ''}
              onChange={handleChange}
              className="textarea textarea-bordered w-full h-32"
            />
          ) : (
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={data[field] || ''}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonalDetails;