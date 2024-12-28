import { motion } from 'framer-motion'
import { TrainFront, ClockFill, CreditCard2Front, GeoAlt } from 'react-bootstrap-icons'

const features = [
  {
    icon: TrainFront,
    title: 'Real-Time Tracking',
    description: 'Track your train location in real-time for precise journey planning'
  },
  {
    icon: ClockFill,
    title: 'Quick Booking',
    description: 'Book your tickets in seconds with our streamlined process'
  },
  {
    icon: CreditCard2Front,
    title: 'Easy Payments',
    description: 'Multiple payment options including cards and mobile banking'
  },
  {
    icon: GeoAlt,
    title: 'Interactive Map',
    description: 'View our route map and plan your journey efficiently'
  }
]

function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the most advanced transit system with features designed for your convenience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features