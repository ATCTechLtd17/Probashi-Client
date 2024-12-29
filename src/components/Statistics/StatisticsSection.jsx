import React, { useEffect, useRef, useState } from 'react';

// Custom hook for scroll-based animations
const useScrollAnimation = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// Custom hook for number animation
const useCountAnimation = (end, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart(progress));
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);
  
  return count;
};

// Easing function for smoother animation
const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

const StatCard = ({ number, text, index }) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-50px'
  });

  const parsedNumber = typeof number === 'string' && number.includes('+') 
    ? parseInt(number.replace(/[^0-9]/g, ''))
    : parseInt(number);
  
  const animatedNumber = useCountAnimation(parsedNumber, 2500, isVisible);
  
  return (
    <div 
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`
        bg-white p-8 rounded-xl
        border border-sky-100
        shadow-lg hover:shadow-xl
        transform transition-all duration-500
        hover:-translate-y-1
        group
        relative
        overflow-hidden
      `}>
        <div className="relative z-10">
          <h3 className={`
            text-3xl sm:text-4xl font-bold mb-3 
            bg-gradient-to-r from-sky-600 to-sky-400 
            bg-clip-text text-transparent
            transition-transform duration-500
            ${isVisible ? 'translate-y-0' : 'translate-y-4'}
          `}>
            {typeof number === 'string' && number.includes('+')
              ? `${animatedNumber.toLocaleString()}+`
              : animatedNumber.toLocaleString()}
          </h3>
          <p className={`
            text-gray-600 text-lg
            transition-all duration-500 delay-100
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            {text}
          </p>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({
    threshold: 0.2
  });

  const stats = [
    { number: "7 million+", text: "Unique services taken from our platform" },
    { number: "5 million", text: "Aspiring migrants on our database" },
    { number: "12 days", text: "Quicker to migrate using our platform" },
    { number: "2,500+", text: "Employers use our platform worldwide" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-sky-50/30">
      <div className="container mx-auto px-4">
        <div className={`
          max-w-3xl mx-auto text-center mb-16
          transition-all duration-700
          ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Who we are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Probashi is a comprehensive digital platform designed to bring transparency,
            reduce migration costs, and speed up migration processes through convenient
            online services available right at your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              {...stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;