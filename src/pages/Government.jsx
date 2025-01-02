import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="inline-block">
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

const ServiceCard = ({ number, title, href, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.a
      ref={ref}
      href={href}
      className="flex items-center gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {number}
      </motion.div>
      <span className="text-emerald-600 font-medium">{title}</span>
    </motion.a>
  );
};

const Government = () => {
  const services = [
    {
      title: "Swift and Secure Emigration Clearance",
      href: "#emigration-clearance",
    },
    {
      title: "Instantly Book PDO",
      href: "#pdo",
    },
    {
      title: "Register to BMET",
      href: "#bmet",
    },
    {
      title: "Get Trained",
      href: "#training",
    },
  ];

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={contentRef}
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={
            isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            <TypewriterText text="Government Services" />
          </h1>

          <p className="text-gray-600 leading-relaxed">
            <TypewriterText
              text="The digitisation of government services such as migrant registration, 
              pre-departure orientation, and emigration clearance has revolutionized 
              migration by eliminating paperwork, accelerating timelines, and reducing 
              costs for both migrants and the government. This has led to a significant 
              surge in overall applications."
              delay={1}
            />
          </p>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                number={index + 1}
                title={service.title}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Government;
