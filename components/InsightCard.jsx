'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ index, imgUrl, title, subtitle, reverse }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className={`flex ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col gap-4 w-full min-h-[200px]`}
  >
    <div className="md:w-[270px] w-full flex-shrink-0">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-[250px] rounded-[32px] object-cover"
      />
    </div>
    <div className="w-full flex items-start">
      <div className={`flex-1 ${reverse ? 'md:mr-[62px]' : 'md:ml-[62px]'} flex flex-col`}>
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white break-words">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white whitespace-pre-line">
          {subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
