'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures, startingFeatures2 } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10 overflow-hidden`}>
    {/* First Section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`
        ${styles.innerWidth} 
        mx-auto 
        flex flex-col lg:flex-row 
        gap-8 sm:gap-12 lg:gap-16
        px-4 sm:px-6 lg:px-8
      `}
    >
      {/* Planet Image */}
      <motion.div
        variants={planetVariants('left')}
        className={`
          flex-1 
          ${styles.flexCenter}
          order-2 lg:order-1
        `}
      >
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
          <img
            src="/planet-14.png"
            alt="Get-Started"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* How to Participate Content */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="
          flex-1
          flex flex-col justify-center
          order-1 lg:order-2
          px-4 sm:px-6 lg:px-8
        "
      >
        <TypingText
          title="| How to Participate"
          textStyles="
            text-2xl sm:text-3xl lg:text-4xl
            font-extrabold mb-3 sm:mb-4 lg:mb-5
          "
        />
        <TitleText
          title={<>Choose Your Model</>}
          textStyles="text-xl sm:text-2xl lg:text-3xl"
        />
        <div className="
          mt-6 sm:mt-8 lg:mt-10
          flex flex-col
          max-w-[370px] lg:max-w-[450px]
          gap-4 sm:gap-6 lg:gap-8
        "
        >
          {startingFeatures.map((features, index) => (
            <StartSteps
              key={index}
              number={index + 1}
              text={features}
              className="text-base sm:text-lg lg:text-xl"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>

    {/* Second Section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`
        ${styles.innerWidth} 
        mx-auto 
        flex flex-col lg:flex-row 
        gap-8 sm:gap-12 lg:gap-16
        mt-12 sm:mt-16 lg:mt-20
        px-4 sm:px-6 lg:px-8
      `}
    >
      {/* Resources Content */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="
          flex-1
          flex flex-col justify-center
          px-4 sm:px-6 lg:px-8
        "
      >
        <TypingText
          title="| Resources Provided"
          textStyles="
            text-2xl sm:text-3xl lg:text-4xl
            font-extrabold mb-3 sm:mb-4 lg:mb-5
          "
        />
        <div className="
          mt-6 sm:mt-8 lg:mt-10
          flex flex-col
          max-w-[370px] lg:max-w-[450px]
          gap-4 sm:gap-6 lg:gap-8
        "
        >
          {startingFeatures2.map((feature, index) => (
            <StartSteps
              key={index}
              number={index + 1}
              text={feature}
              className="text-base sm:text-lg lg:text-xl"
            />
          ))}
        </div>
      </motion.div>

      {/* Link Image */}
      <motion.div
        variants={planetVariants('right')}
        className={`
          flex-1 
          ${styles.flexCenter}
          relative 
          min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]
        `}
      >
        <div className="
          relative
          w-full h-full
          max-w-[500px]
          mx-auto
          p-4
        "
        >
          <img
            src="/link.jpg"
            alt="Resources"
            className="
              w-full h-full
              object-contain
              rounded-lg
            "
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
