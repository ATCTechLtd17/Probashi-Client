import PropTypes from 'prop-types'

function ScheduleRow({ time, destination, platform, status }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'on time': return 'text-green-600'
      case 'delayed': return 'text-yellow-600'
      case 'cancelled': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <tr className="border-b">
      <td className="py-3 px-4">{time}</td>
      <td className="py-3 px-4">{destination}</td>
      <td className="py-3 px-4">{platform}</td>
      <td className={`py-3 px-4 font-medium ${getStatusColor(status)}`}>
        {status}
      </td>
    </tr>
  )
}

ScheduleRow.propTypes = {
  time: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

function ScheduleTable({ schedules }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left">Time</th>
            <th className="py-3 px-4 text-left">Destination</th>
            <th className="py-3 px-4 text-left">Platform</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <ScheduleRow key={index} {...schedule} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

ScheduleTable.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
}

export default ScheduleTable