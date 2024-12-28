import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              MRT Ticketing
            </Link>
          </div>
          <div className="flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/book-ticket">Book Ticket</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/recharge">Recharge</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar