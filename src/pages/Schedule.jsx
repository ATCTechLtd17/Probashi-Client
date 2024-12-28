import { useState } from 'react'
import { motion } from 'framer-motion'
import RouteMap from '../components/RouteMap'
import ScheduleTable from '../components/ScheduleTable'

const mockSchedules = [
  { time: '06:00', destination: 'Motijheel', platform: '1', status: 'On Time' },
  { time: '06:30', destination: 'Uttara North', platform: '2', status: 'On Time' },
  { time: '07:00', destination: 'Motijheel', platform: '1', status: 'Delayed' },
  { time: '07:30', destination: 'Uttara North', platform: '2', status: 'On Time' },
  { time: '08:00', destination: 'Motijheel', platform: '1', status: 'On Time' },
]

function Schedule() {
  const [selectedStation, setSelectedStation] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold text-primary mb-8"
      >
        Train Schedule
      </motion.h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <RouteMap
            selectedStation={selectedStation}
            onStationSelect={setSelectedStation}
          />
        </div>

        <div className="md:col-span-2">
          {selectedStation ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4 bg-gray-50 border-b">
                <h2 className="text-xl font-semibold">
                  Upcoming Trains from {selectedStation}
                </h2>
              </div>
              <ScheduleTable schedules={mockSchedules} />
            </motion.div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-600">
              Please select a station from the route map to view the schedule
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Schedule