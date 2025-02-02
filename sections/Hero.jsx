'use client';

import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue('0%');
  const rotateX = useTransform(mouseY, [0, 800], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1600], [-15, 15]);
  const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, white ${radius}, transparent)`;

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
        onMouseMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - bounds.left);
          mouseY.set(e.clientY - bounds.top);
          radius.set('30%');
        }}
        onMouseLeave={() => radius.set('0%')}
      >
        {/* Holographic Text Section */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
          <motion.div
            className="perspective-[2000px] cursor-crosshair"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.h1
              className={`${styles.heroHeading} text-center 
                bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8
                shadow-[0_0_30px_rgba(255,255,255,0.1)]`}
              style={{ maskImage }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                className="inline-block mr-4 hover:[transform:translateZ(20px)]"
                transition={{ type: 'spring' }}
              >
                Altair
              </motion.span>
              <motion.span
                className="inline-block hover:[transform:translateZ(-20px)]"
                transition={{ type: 'spring' }}
              >
                Optimization
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
            >
              <h1 className={`${styles.heroHeading} hover:text-white/80`}>
                Contest
              </h1>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: 'spring' }}
              />
            </motion.div>

            <motion.div
              className="h-32 w-[2px] bg-gradient-to-b from-transparent via-white/50 to-transparent"
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
            >
              <h1 className={`${styles.heroHeading} hover:text-white/80`}>
                2025
              </h1>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: 'spring' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Dynamic Image Section */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full mt-16 2xl:pl-[280px]"
        >
          <motion.div
            className="relative overflow-hidden rounded-tl-[140px]
            border-2 border-white/10 hover:border-white/20"
            whileHover={{
              scale: 1.005,
              boxShadow: '0 0 40px rgba(255,255,255,0.1)',
            }}
          >
            <img
              src="/cover.png"
              alt="Altair Optimization Contest Cover"
              className="w-full sm:h-[500px] h-[350px] object-cover
               transition-all"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
