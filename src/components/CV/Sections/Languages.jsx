import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaPlus, FaTrash } from 'react-icons/fa';

const proficiencyLevels = ['Basic', 'Intermediate', 'Advanced', 'Native'];

const Languages = ({ data, updateData }) => {
  const { language } = useLanguage();

  const addLanguage = () => {
    updateData([...data, {
      name: '',
      proficiency: {
        speaking: 'Intermediate',
        writing: 'Intermediate',
        reading: 'Intermediate'
      }
    }]);
  };

  const updateLanguage = (index, field, value) => {
    const newData = [...data];
    if (field === 'name') {
      newData[index].name = value;
    } else {
      newData[index].proficiency[field] = value;
    }
    updateData(newData);
  };

  const removeLanguage = (index) => {
    updateData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        {language === 'bn' ? 'ভাষা' : 'Languages'}
      </h2>

      {data.map((lang, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <input
              placeholder={language === 'bn' ? 'ভাষার নাম' : 'Language Name'}
              value={lang.name}
              onChange={(e) => updateLanguage(index, 'name', e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <button
              onClick={() => removeLanguage(index)}
              className="btn btn-ghost btn-sm text-red-500"
            >
              <FaTrash />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['speaking', 'writing', 'reading'].map((skill) => (
              <div key={skill}>
                <label className="label">
                  {language === 'bn' 
                    ? skill === 'speaking' 
                      ? 'কথা বলা' 
                      : skill === 'writing' 
                        ? 'লেখা' 
                        : 'পড়া'
                    : skill.charAt(0).toUpperCase() + skill.slice(1)}
                </label>
                <select
                  value={lang.proficiency[skill]}
                  onChange={(e) => updateLanguage(index, skill, e.target.value)}
                  className="select select-bordered w-full"
                >
                  {proficiencyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button onClick={addLanguage} className="btn btn-outline btn-block">
        <FaPlus className="mr-2" />
        {language === 'bn' ? 'ভাষা যোগ করুন' : 'Add Language'}
      </button>
    </div>
  );
};

export default Languages;