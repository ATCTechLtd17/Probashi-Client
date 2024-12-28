import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { stations } from '../../constants/stations'
import Station from './Station'

function RouteMap({ selectedStation, onStationSelect }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-6">MRT Route Map</h3>
      <div className="relative">
        {/* Route Line */}
        <div className="absolute left-4 top-6 bottom-6 w-1 bg-primary" />
        
        {/* Stations */}
        <div className="space-y-4 relative">
          {stations.map((station, index) => (
            <motion.div
              key={station}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className={`w-3 h-3 rounded-full ${
                selectedStation === station ? 'bg-primary' : 'bg-gray-400'
              }`} />
              <Station
                name={station}
                isSelected={selectedStation === station}
                onClick={() => onStationSelect(station)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

RouteMap.propTypes = {
  selectedStation: PropTypes.string.isRequired,
  onStationSelect: PropTypes.func.isRequired
}

export default RouteMap