import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Experience = ({ data, updateData }) => {
  const { language } = useLanguage();
  
  const addExperience = () => {
    updateData([...data, {
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: []
    }]);
  };

  const updateExperience = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  const removeExperience = (index) => {
    updateData(data.filter((_, i) => i !== index));
  };

  const addAchievement = (index) => {
    const newData = [...data];
    newData[index].achievements = [...(newData[index].achievements || []), ''];
    updateData(newData);
  };

  const updateAchievement = (expIndex, achIndex, value) => {
    const newData = [...data];
    newData[expIndex].achievements[achIndex] = value;
    updateData(newData);
  };

  const removeAchievement = (expIndex, achIndex) => {
    const newData = [...data];
    newData[expIndex].achievements = newData[expIndex].achievements.filter((_, i) => i !== achIndex);
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        {language === 'bn' ? 'কর্ম অভিজ্ঞতা' : 'Work Experience'}
      </h2>

      {data.map((exp, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-end">
            <button 
              onClick={() => removeExperience(index)}
              className="btn btn-ghost btn-sm text-red-500"
            >
              <FaTrash />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder={language === 'bn' ? 'পদবি' : 'Job Title'}
              value={exp.title}
              onChange={(e) => updateExperience(index, 'title', e.target.value)}
              className="input input-bordered w-full"
            />
            
            <input
              placeholder={language === 'bn' ? 'কোম্পানি' : 'Company'}
              value={exp.company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          
          <input
            placeholder={language === 'bn' ? 'অবস্থান' : 'Location'}
            value={exp.location}
            onChange={(e) => updateExperience(index, 'location', e.target.value)}
            className="input input-bordered w-full"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                {language === 'bn' ? 'শুরুর তারিখ' : 'Start Date'}
              </label>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            
            {!exp.current && (
              <div>
                <label className="label">
                  {language === 'bn' ? 'শেষ তারিখ' : 'End Date'}
                </label>
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
            )}
          </div>
          
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">
                {language === 'bn' ? 'বর্তমানে কর্মরত' : 'Currently Working Here'}
              </span>
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          
          <textarea
            placeholder={language === 'bn' ? 'কাজের বিবরণ' : 'Job Description'}
            value={exp.description}
            onChange={(e) => updateExperience(index, 'description', e.target.value)}
            className="textarea textarea-bordered w-full"
            rows="3"
          />
          
          <div className="space-y-2">
            <label className="label">
              {language === 'bn' ? 'অর্জন' : 'Achievements'}
            </label>
            {exp.achievements?.map((achievement, achIndex) => (
              <div key={achIndex} className="flex gap-2">
                <input
                  value={achievement}
                  onChange={(e) => updateAchievement(index, achIndex, e.target.value)}
                  placeholder={language === 'bn' ? 'অর্জন বিবরণ' : 'Achievement description'}
                  className="input input-bordered w-full"
                />
                <button
                  onClick={() => removeAchievement(index, achIndex)}
                  className="btn btn-ghost btn-sm text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              onClick={() => addAchievement(index)}
              className="btn btn-outline btn-sm"
            >
              <FaPlus className="mr-2" />
              {language === 'bn' ? 'অর্জন যোগ করুন' : 'Add Achievement'}
            </button>
          </div>
        </div>
      ))}

      <button onClick={addExperience} className="btn btn-outline btn-block">
        <FaPlus className="mr-2" />
        {language === 'bn' ? 'অভিজ্ঞতা যোগ করুন' : 'Add Experience'}
      </button>
    </div>
  );
};

export default Experience;