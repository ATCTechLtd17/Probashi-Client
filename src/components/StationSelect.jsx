import PropTypes from 'prop-types'

const stations = [
  'Uttara North',
  'Uttara Center',
  'Uttara South',
  'Pallabi',
  'Mirpur 11',
  'Mirpur 10',
  'Kazipara',
  'Shewrapara',
  'Agargaon',
  'Bijoy Sarani',
  'Farmgate',
  'Karwan Bazar',
  'Shahbag',
  'Dhaka University',
  'Bangladesh Secretariat',
  'Motijheel',
]

function StationSelect({ label, value, onChange, exclude }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
      >
        <option value="">Select Station</option>
        {stations
          .filter(station => station !== exclude)
          .map(station => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
      </select>
    </div>
  )
}

StationSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  exclude: PropTypes.string,
}

export default StationSelect