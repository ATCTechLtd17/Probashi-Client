import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, MapPin } from 'lucide-react';

const ApplicationCard = () => (
  <motion.div 
    className="w-[380px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div 
      className="p-6 space-y-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {/* Header */}
      <motion.div 
        className="flex justify-between items-center"
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <h3 className="text-lg font-semibold">Application Details</h3>
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <motion.button 
              key={i}
              className="w-1 h-1 bg-gray-300 rounded-full"
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </div>
      </motion.div>

      {/* User Details */}
      <motion.div 
        className="flex gap-4 items-center"
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <motion.div 
          className="w-12 h-12 rounded-full bg-gray-200"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <div>
          <div className="flex items-center gap-3">
            <p className="font-semibold">Alok Das</p>
            <motion.span 
              className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Processing
            </motion.span>
          </div>
          <p className="text-sm text-gray-600">Passport No: B23658458635</p>
        </div>
      </motion.div>

      {/* Application ID */}
      <motion.div 
        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ backgroundColor: '#f3f4f6' }}
      >
        <p className="text-sm text-gray-600">
          Application ID: B23658458725485
        </p>
        <motion.button 
          className="text-blue-600"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <Copy size={16} />
        </motion.button>
      </motion.div>

      {/* Status Message */}
      <motion.p 
        className="text-sm text-emerald-600"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        48 hours passed since your submitted your application. Please contact with the BMET/ Demo office where you submitted your application to get application update
      </motion.p>

      {/* BMET Office */}
      <motion.div 
        className="space-y-2"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <h4 className="font-semibold">BMET office</h4>
        <motion.div 
          className="flex items-start gap-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <MapPin className="text-emerald-600 mt-1" size={16} />
          <p className="text-sm text-gray-600">
            8 km away | 49 Barutha Main Road, Gazipur
          </p>
        </motion.div>
        {/* Map Placeholder */}
        <motion.div 
          className="w-full h-32 bg-gray-100 rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.p 
        className="text-sm font-medium"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        Application tracking
      </motion.p>
    </motion.div>
  </motion.div>
);

const EmigrationClearance = () => {
  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Swift and Secure Emigration Clearance
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Emigration clearance is a mandatory process where the government verifies 
            your documents and employment details. Apply online for emigration clearance 
            through the Ami Probashi app, avoiding middlemen and hidden fees. Track your 
            application and every step and instantaneously receive your verifiable 
            QR-code emigration card.
          </motion.p>

          <motion.button 
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Apply
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-100 rounded-full opacity-50"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ApplicationCard />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmigrationClearance;