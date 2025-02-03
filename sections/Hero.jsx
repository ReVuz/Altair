'use client';

import { motion, useMotionTemplate, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue('0%');
  const controls = useAnimation();
  const rotateX = useTransform(mouseY, [0, 800], isMobile ? [0, 0] : [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1600], isMobile ? [0, 0] : [-15, 15]);
  const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, white ${radius}, transparent)`;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchMove = (e) => {
    if (isMobile) {
      const bounds = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.touches[0].clientX - bounds.left);
      mouseY.set(e.touches[0].clientY - bounds.top);
      radius.set('30%');
      controls.start({ rotate: 2, scale: 1.02 });
    }
  };

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-4 py-8 lg:py-24`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col items-center`}
        onMouseMove={(e) => {
          if (!isMobile) {
            const bounds = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - bounds.left);
            mouseY.set(e.clientY - bounds.top);
            radius.set('30%');
          }
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          radius.set('0%');
          controls.start({ rotate: 0, scale: 1 });
        }}
        onMouseLeave={() => !isMobile && radius.set('0%')}
      >
        {/* Holographic Text Section */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-12 w-full">
          <motion.div
            className="perspective-[2000px] cursor-crosshair"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            animate={controls}
          >
            <motion.h1
              className={`${styles.heroHeading} text-center 
                bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 sm:p-8
                shadow-[0_0_30px_rgba(255,255,255,0.1)] text-4xl sm:text-5xl lg:text-6xl`}
              style={{ maskImage }}
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                className="inline-block hover:[transform:translateZ(20px)]"
                transition={{ type: 'spring' }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/Altair_logo.png"
                  alt="Altair"
                  className="h-[80px] sm:h-[100px] lg:h-[120px] inline-block w-auto"
                />
              </motion.span>
              <motion.span
                className="inline-block hover:[transform:translateZ(-20px)] mr-2" // Added margin-right
                transition={{ type: 'spring' }}
                whileTap={{ scale: 0.9 }}
              >
                Optimization
              </motion.span>
              {' '}
              <motion.span
                className="inline-block hover:[transform:translateZ(-20px)]"
                transition={{ type: 'spring' }}
                whileTap={{ scale: 0.9 }}
              >
                Contest
              </motion.span>
              <motion.span
                className="inline-block hover:[transform:translateZ(-20px)]"
                transition={{ type: 'spring' }}
                whileTap={{ scale: 0.9 }}
              >
                2025
              </motion.span>
            </motion.h1>
          </motion.div>

        </div>

        {/* Dynamic Image Section */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full mt-8 lg:mt-16 px-2 sm:px-4 lg:px-0"
        >
          <motion.div
            className="relative overflow-hidden rounded-tl-[40px] sm:rounded-tl-[70px] lg:rounded-tl-[140px]
            border-2 border-white/10 hover:border-white/20"
            whileHover={{
              scale: isMobile ? 1 : 1.005,
              boxShadow: '0 0 40px rgba(255,255,255,0.1)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/cover.png"
              alt="Altair Optimization Contest Cover"
              className="w-full h-[200px] xs:h-[250px] sm:h-[350px] lg:h-[500px] object-cover transition-all"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
