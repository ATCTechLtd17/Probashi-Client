import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function Station({ name, isSelected, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className={`cursor-pointer ${
        isSelected 
          ? 'bg-primary text-white' 
          : 'bg-white text-primary hover:bg-gray-50'
      } rounded-full px-4 py-2 shadow-md text-sm font-medium`}
    >
      {name}
    </motion.div>
  )
}

Station.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Station