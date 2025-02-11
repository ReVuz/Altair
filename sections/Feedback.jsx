'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Feedback = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`
        flex flex-col items-center justify-center
        min-h-[40vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh]
        px-4 py-8 sm:p-8 md:p-12 lg:p-16
        relative overflow-hidden
        transition-all duration-800 ease-in-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      ref={ref}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          text-white
          mb-4 sm:mb-6 md:mb-8
          font-light tracking-wider uppercase
          text-center
          text-shadow-lg
          opacity-90
          px-4
          transition-all duration-600
        "
      >
        People Registered
      </motion.h2>

      {/* Counter Container */}
      <div className="flex items-start justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-start"
        >
          {/* Counter Number */}
          <div
            className="
              bg-gradient-to-r from-[#e6dada] to-[#274046]
              text-transparent bg-clip-text
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-bold
              font-['Arial Black', sans-serif]
              tracking-tighter
              leading-none
            "
          >
            {inView && <CountUp end={25} duration={3} />}
          </div>

          {/* Plus Sign */}
          <span
            className="
              text-white/70
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-light
              ml-1
              leading-none
              mt-1
            "
          >
            +
          </span>
        </motion.div>
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute bg-white/40 rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.min(Math.random() * 6 + 2, 6)}px`,
              height: `${Math.min(Math.random() * 6 + 2, 6)}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Feedback;
