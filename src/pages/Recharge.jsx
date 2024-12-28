import { useState } from 'react'

function Recharge() {
  const [cardNumber, setCardNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle recharge submission
    console.log({ cardNumber, amount, paymentMethod })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Recharge Your Card</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Number
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount (৳)
          </label>
          <input
            type="number"
            min="100"
            max="10000"
            step="50"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="bkash">bKash</option>
            <option value="nagad">Nagad</option>
            <option value="rocket">Rocket</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!cardNumber || !amount || !paymentMethod}
        >
          Recharge Now
        </button>
      </form>

      <div className="mt-8 bg-gray-50 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Important Notes:</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Minimum recharge amount: ৳100</li>
          <li>Maximum recharge amount: ৳10,000</li>
          <li>Recharge amount must be in multiples of ৳50</li>
          <li>Card balance will be updated instantly after successful payment</li>
        </ul>
      </div>
    </div>
  )
}

export default Recharge