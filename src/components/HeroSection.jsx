import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAppStore, FaGooglePlay, FaUser } from 'react-icons/fa';

const slides = [
  {
    title: "Integrated Government Services",
    subtitle: "Effortless Emigration Clearance, Pre-Departure Orientation, and BMET Registration at your fingertips.",
    stats: {
      aspiringMigrants: "2.8 M",
      femaleMigrants: "200 K"
    },
    buttonText: "Request for Portal",
    image: "/api/placeholder/800/600"
  },
  {
    title: "Recruitment Re-imagined",
    subtitle: "Recruit top talent from Bangladesh with our all-in-one platform",
    features: [
      "Ap Verified Candidate",
      "Request Candidate",
      "Talent Pool Search",
      "Job Management"
    ],
    buttonText: "Login/Sign up to recruitment portal",
    image: "/api/placeholder/800/600"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-r from-emerald-400 to-teal-600">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full"
        >
          <div className="container mx-auto px-4 py-12 h-full">
            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
              <div className="text-white">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <button className="flex items-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <FaUser />
                    <span>{slides[currentSlide].buttonText}</span>
                  </button>

                  <div className="flex space-x-4 mt-4">
                    <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      <FaAppStore className="text-2xl" />
                      <span>App Store</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      <FaGooglePlay className="text-2xl" />
                      <span>Google Play</span>
                    </button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative h-full hidden md:block"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-2xl">
                    <motion.img
                      src={slides[currentSlide].image}
                      alt="Platform Preview"
                      className="w-full h-auto rounded-lg shadow-2xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    />
                    
                    {currentSlide === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg"
                      >
                        <div className="flex space-x-8">
                          <div className="text-teal-600">
                            <p className="text-sm">Aspiring Migrants</p>
                            <p className="text-2xl font-bold">{slides[0].stats.aspiringMigrants}</p>
                          </div>
                          <div className="text-teal-600">
                            <p className="text-sm">Female Migrants</p>
                            <p className="text-2xl font-bold">{slides[0].stats.femaleMigrants}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentSlide === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg"
                      >
                        <div className="space-y-2">
                          {slides[1].features.map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className="flex items-center space-x-2 text-teal-600"
                            >
                              <div className="w-2 h-2 bg-teal-600 rounded-full" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;