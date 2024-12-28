import { motion } from 'framer-motion'
import { ArrowRightCircle } from 'react-bootstrap-icons'

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary to-secondary min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/metro-bg.jpg')] opacity-20 bg-cover bg-center" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-white relative z-10"
      >
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Welcome to the Future of Transit
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl mb-8 text-gray-100"
          >
            Experience seamless travel with our modern MRT system. Book tickets, check schedules, and manage your transit cards all in one place.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Book Now <ArrowRightCircle />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
              View Schedule
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}