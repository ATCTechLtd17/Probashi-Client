import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Education = ({ data, updateData }) => {
  const { language } = useLanguage();
  
  const addEducation = () => {
    updateData([...data, { 
      degree: '', 
      institution: '', 
      year: '', 
      grade: '' 
    }]);
  };

  const updateEducation = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  const removeEducation = (index) => {
    updateData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        {language === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Education'}
      </h2>

      {data.map((edu, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-end">
            <button 
              onClick={() => removeEducation(index)}
              className="btn btn-ghost btn-sm text-red-500"
            >
              <FaTrash />
            </button>
          </div>
          
          <input
            placeholder={language === 'bn' ? 'ডিগ্রি' : 'Degree'}
            value={edu.degree}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
            className="input input-bordered w-full"
          />
          
          <input
            placeholder={language === 'bn' ? 'প্রতিষ্ঠান' : 'Institution'}
            value={edu.institution}
            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
            className="input input-bordered w-full"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder={language === 'bn' ? 'বছর' : 'Year'}
              value={edu.year}
              onChange={(e) => updateEducation(index, 'year', e.target.value)}
              className="input input-bordered"
            />
            <input
              placeholder={language === 'bn' ? 'গ্রেড' : 'Grade'}
              value={edu.grade}
              onChange={(e) => updateEducation(index, 'grade', e.target.value)}
              className="input input-bordered"
            />
          </div>
        </div>
      ))}

      <button onClick={addEducation} className="btn btn-outline btn-block">
        <FaPlus className="mr-2" />
        {language === 'bn' ? 'শিক্ষা যোগ করুন' : 'Add Education'}
      </button>
    </div>
  );
};

export default Education;