import PropTypes from 'prop-types'

const BASE_FARE = 20
const PER_STATION_FARE = 5

function calculateFare(from, to, stations) {
  if (!from || !to) return 0
  
  const fromIndex = stations.indexOf(from)
  const toIndex = stations.indexOf(to)
  const stationCount = Math.abs(fromIndex - toIndex)
  
  return BASE_FARE + (stationCount * PER_STATION_FARE)
}

function FareCalculator({ fromStation, toStation }) {
  const stations = [
    'Uttara North', 'Uttara Center', 'Uttara South', 'Pallabi',
    'Mirpur 11', 'Mirpur 10', 'Kazipara', 'Shewrapara',
    'Agargaon', 'Bijoy Sarani', 'Farmgate', 'Karwan Bazar',
    'Shahbag', 'Dhaka University', 'Bangladesh Secretariat', 'Motijheel'
  ]

  const fare = calculateFare(fromStation, toStation, stations)

  return fare > 0 ? (
    <div className="mt-4 p-4 bg-gray-50 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Fare Details</h3>
      <div className="text-gray-600">
        <p>Base Fare: ৳{BASE_FARE}</p>
        <p>Distance Fare: ৳{fare - BASE_FARE}</p>
        <p className="text-xl font-bold text-primary mt-2">
          Total Fare: ৳{fare}
        </p>
      </div>
    </div>
  ) : null
}

FareCalculator.propTypes = {
  fromStation: PropTypes.string.isRequired,
  toStation: PropTypes.string.isRequired,
}

export default FareCalculator