import React from 'react';

const skills = [
  'Nurse', 'Driver', 'Cleaner', 'Hotel Staff', 'Technician',
  'Cook', 'Security Guard', 'Electrician', 'Plumber', 'Carpenter',
  'Mason', 'Painter', 'Mechanic'
];

const Skills = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => {
              const currentSkills = formData.skills || [];
              const newSkills = currentSkills.includes(skill)
                ? currentSkills.filter(s => s !== skill)
                : [...currentSkills, skill];
              onChange('skills', newSkills);
            }}
            className={`btn btn-sm ${
              (formData.skills || []).includes(skill)
                ? 'btn-primary'
                : 'btn-outline'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;