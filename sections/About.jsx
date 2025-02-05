'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <div className="flex items-center justify-center gap-3 relative select-none">
        <img
          src="/sae_logo.png"
          alt="SAE LOGO"
          className="lg:h-[90px] h-[90px] md:h-[100px] w-auto lg:-mt-6 -mt-4 ml-2"
        />
        <TypingText
          title="X"
          textStyles="text-center font-medium text-3xl mb-5 font-extrabold"
        />
        <img
          src="/Altair_logo.png"
          alt="Altair"
          className="h-[35px] w-auto -mt-6 ml-2"
        />
      </div>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold"> SAE CUSAT </span>in collaboration with Altair Inspire, presents an exciting optimization contest  designed to challenge students in the fields of structural design, simulation, and optimization. This competition provides participants with hands-on experience using Altair Inspire, a powerful simulation-driven design tool, to analyze and optimize engineering components.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
