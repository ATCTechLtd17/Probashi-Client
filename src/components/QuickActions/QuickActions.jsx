import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { quickActions } from './quickActionsList'

function QuickActions() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 -mt-16 relative z-20">
      {quickActions.map((action, index) => (
        <motion.div
          key={action.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.2 }}
        >
          <Link to={action.link}>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <div className="flex items-center text-primary font-medium">
                Get Started <ArrowRightCircle className="ml-2" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default QuickActions