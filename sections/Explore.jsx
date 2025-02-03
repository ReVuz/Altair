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
        {/* Title */}
        <TypingText title="| The Challenge" textStyles="text-center text-2xl md:text-3xl font-extrabold mb-5 text-white" />
        <TitleText title={<>Use Altair Inspire to tackle an open-ended engineering problem <br className="md:block hidden" /> Focus areas include:</>} textStyles="text-center text-white" />

        {/* Explore Cards */}
        <div className="mt-12 flex flex-col lg:flex-row min-h-[70vh] gap-5">
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
