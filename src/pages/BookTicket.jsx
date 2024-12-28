import { useState } from 'react'
import StationSelect from '../components/StationSelect'
import TimeSelect from '../components/TimeSelect'
import FareCalculator from '../components/FareCalculator'

function BookTicket() {
  const [fromStation, setFromStation] = useState('')
  const [toStation, setToStation] = useState('')
  const [time, setTime] = useState('')
  const [passengers, setPassengers] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    console.log({ fromStation, toStation, time, passengers })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Book Your Ticket</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <StationSelect
          label="From Station"
          value={fromStation}
          onChange={setFromStation}
          exclude={toStation}
        />
        
        <StationSelect
          label="To Station"
          value={toStation}
          onChange={setToStation}
          exclude={fromStation}
        />
        
        <TimeSelect value={time} onChange={setTime} />
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Passengers
          </label>
          <input
            type="number"
            min="1"
            max="4"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        <FareCalculator fromStation={fromStation} toStation={toStation} />
        
        <button
          type="submit"
          disabled={!fromStation || !toStation || !time}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        >
          Book Now
        </button>
      </form>
    </div>
  )
}

export default BookTicket