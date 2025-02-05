'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[60vh] lg:h-[70vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onHoverStart={() => handleClick(id)}
    onTouchStart={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />

    {active !== id ? (
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] drop-shadow-[0_2px_2px_rgba(0,0,0,1)] font-bold"
      >
        {title}
      </motion.h3>
    ) : (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 lg:p-8 sm:p-4 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
      >
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] sm:text-center ml-2 text-white">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
);

export default ExploreCard;
