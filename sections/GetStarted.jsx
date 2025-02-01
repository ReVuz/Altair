'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures, startingFeatures2 } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Original Section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/get-started.png"
          alt="Get-Started"
          className="w-[90%] h-[90%] object-content"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How to Participate " textStyles="text-2xl font-bold" />
        <TitleText title={<> Choose Your Model </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((features, index) => (
            <StartSteps key={index} number={index + 1} text={features} />
          ))}
        </div>
      </motion.div>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 mt-20`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Resources  Provided  " textStyles="text-2xl font-bold" />
        <TitleText title={<>Essential Links</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures2.map((feature, index) => (
            <StartSteps key={index} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`${styles.flexCenter} flex-1 relative w-full h-[500px] lg:h-auto min-h-[300px]`}
      >
        <img
          src="/get-started.png"
          alt="Get-Started"
          className="w-auto h-auto max-w-full max-h-full object-contain p-4"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
