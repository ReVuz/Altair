'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings} relative`} id="explore">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
      >
        {/* Title Section with improved responsive styling */}
        <div className="w-full px-4 sm:px-6 lg:px-8"> {/* Added padding container */}
          <TypingText
            title="| The Challenge"
            textStyles="text-center text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-5 text-white"
          />
          <TitleText
            title={(
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col p-8 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105 mb-8">
                  <span className=" sm:text-xl text-xl md:text-2xl lg:text-3xl text-center text-white font-semibold">
                    Use Altair Inspire to tackle an open-ended engineering problem
                  </span>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-2 sm:mt-3">
                  Focus areas include:
                </span>
              </div>
            )}
            textStyles="text-center text-white max-w-[90%] mx-auto lg:max-w-[80%]"
          />
        </div>

        {/* Explore Cards */}
        <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
