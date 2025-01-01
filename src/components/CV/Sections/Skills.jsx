import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaPlus, FaTrash } from 'react-icons/fa';

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const Skills = ({ data, updateData }) => {
  const { language } = useLanguage();

  const addCategory = () => {
    updateData([...data, {
      category: '',
      skills: []
    }]);
  };

  const addSkill = (categoryIndex) => {
    const newData = [...data];
    newData[categoryIndex].skills.push({
      name: '',
      level: 'Intermediate'
    });
    updateData(newData);
  };

  const updateCategory = (index, value) => {
    const newData = [...data];
    newData[index].category = value;
    updateData(newData);
  };

  const updateSkill = (categoryIndex, skillIndex, field, value) => {
    const newData = [...data];
    newData[categoryIndex].skills[skillIndex] = {
      ...newData[categoryIndex].skills[skillIndex],
      [field]: value
    };
    updateData(newData);
  };

  const removeCategory = (index) => {
    updateData(data.filter((_, i) => i !== index));
  };

  const removeSkill = (categoryIndex, skillIndex) => {
    const newData = [...data];
    newData[categoryIndex].skills = newData[categoryIndex].skills.filter((_, i) => i !== skillIndex);
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        {language === 'bn' ? 'দক্ষতা' : 'Skills'}
      </h2>

      {data.map((category, categoryIndex) => (
        <div key={categoryIndex} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <input
              placeholder={language === 'bn' ? 'দক্ষতার ক্যাটাগরি' : 'Skill Category'}
              value={category.category}
              onChange={(e) => updateCategory(categoryIndex, e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <button
              onClick={() => removeCategory(categoryIndex)}
              className="btn btn-ghost btn-sm text-red-500"
            >
              <FaTrash />
            </button>
          </div>

          <div className="space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex gap-2">
                <input
                  placeholder={language === 'bn' ? 'দক্ষতা' : 'Skill'}
                  value={skill.name}
                  onChange={(e) => updateSkill(categoryIndex, skillIndex, 'name', e.target.value)}
                  className="input input-bordered flex-1"
                />
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(categoryIndex, skillIndex, 'level', e.target.value)}
                  className="select select-bordered w-40"
                >
                  {skillLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <button
                  onClick={() => removeSkill(categoryIndex, skillIndex)}
                  className="btn btn-ghost btn-sm text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              onClick={() => addSkill(categoryIndex)}
              className="btn btn-outline btn-sm"
            >
              <FaPlus className="mr-2" />
              {language === 'bn' ? 'দক্ষতা যোগ করুন' : 'Add Skill'}
            </button>
          </div>
        </div>
      ))}

      <button onClick={addCategory} className="btn btn-outline btn-block">
        <FaPlus className="mr-2" />
        {language === 'bn' ? 'নতুন ক্যাটাগরি' : 'New Category'}
      </button>
    </div>
  );
};

export default Skills;