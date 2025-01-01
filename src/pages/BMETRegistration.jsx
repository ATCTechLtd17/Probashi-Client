import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ClipboardCheck, GraduationCap, Users, CreditCard } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-emerald-600 text-white p-4 rounded-lg flex items-center gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div 
      className="bg-emerald-500 p-2 rounded-lg"
      whileHover={{ rotate: 5 }}
    >
      <Icon className="w-5 h-5" />
    </motion.div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-xs text-emerald-100">{description}</p>
    </div>
  </motion.div>
);

const SuggestionCard = () => (
  <motion.div 
    className="bg-white rounded-lg p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-center justify-between mb-4">
      <h4 className="font-medium">Book a consultation service for your</h4>
      <motion.button 
        className="text-emerald-600 text-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All
      </motion.button>
    </div>
    <h3 className="text-lg font-semibold text-emerald-600 mb-2">Abroad Journey</h3>
    <motion.img 
      src="/api/placeholder/320/160" 
      alt="Consultation Service" 
      className="w-full h-32 object-cover rounded-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    />
  </motion.div>
);

const MobilePreview = () => (
  <motion.div 
    className="relative w-[380px] h-[600px] bg-white rounded-[40px] shadow-xl border-8 border-gray-900 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Status Bar */}
    <motion.div 
      className="px-6 py-2 flex justify-between items-center text-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <span>19:27</span>
      <div className="flex items-center gap-1">
        <motion.div 
          className="w-4 h-4"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📶
        </motion.div>
        <div className="w-4 h-4">🔋</div>
      </div>
    </motion.div>

    {/* Header */}
    <div className="p-6">
      <motion.div 
        className="flex items-center gap-2 mb-6"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div whileHover={{ x: -2 }}>
          <ChevronLeft className="w-5 h-5" />
        </motion.div>
        <h3 className="text-lg font-semibold">Government Service</h3>
      </motion.div>
      
      <motion.h4 
        className="font-medium mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Government Service
      </motion.h4>
      
      {/* Service Options */}
      <motion.div 
        className="space-y-3"
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
        <ServiceCard 
          icon={ClipboardCheck}
          title="BMET Registration"
          description="Click the button"
        />
        <ServiceCard 
          icon={GraduationCap}
          title="Government Training"
          description="Click the button"
        />
        <ServiceCard 
          icon={Users}
          title="PDO (Pre Departure Orientation)"
          description="Click the button"
        />
        <ServiceCard 
          icon={CreditCard}
          title="BMET Clearance (Smart Card)"
          description="Click the button"
        />
      </motion.div>

      {/* Suggested Section */}
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Suggested for you</h4>
          <motion.button 
            className="text-emerald-600 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </div>
        <SuggestionCard />
      </motion.div>
    </div>
  </motion.div>
);

const BMETRegistration = () => {
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
            Register to BMET
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            To be eligible to work abroad, you must first complete BMET registration. 
            Avoid queues and travel, and register through the Ami Probashi app in 
            under 5 minutes. All you need is a valid passport!
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
            <MobilePreview />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BMETRegistration;