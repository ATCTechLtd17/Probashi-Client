import React from 'react';

const jobs = [
  'Driver', 'Laborer', 'Technician', 'Nurse', 'Teacher', 'Engineer'
];

const countries = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'Singapore', 'Malaysia', 'South Korea', 'Japan'
];

const JobInfo = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Present Job Information</h2>
      
      <div className="space-y-4">
        <div>
          <label className="label">Current Job</label>
          <select 
            className="select select-bordered w-full"
            value={formData.currentJob || ''}
            onChange={(e) => onChange('currentJob', e.target.value)}
          >
            <option value="">Select a job</option>
            {jobs.map((job) => (
              <option key={job} value={job}>{job}</option>
            ))}
          </select>
        </div>

        {formData.workingAbroad && (
          <div>
            <label className="label">Countries of Work</label>
            <div className="grid grid-cols-2 gap-2">
              {countries.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => {
                    const currentCountries = formData.countries || [];
                    const newCountries = currentCountries.includes(country)
                      ? currentCountries.filter(c => c !== country)
                      : [...currentCountries, country];
                    onChange('countries', newCountries);
                  }}
                  className={`btn btn-sm ${
                    (formData.countries || []).includes(country)
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobInfo;