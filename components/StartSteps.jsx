import React from 'react';
import parse from 'html-react-parser';
import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <p
      className="flex-1 ml-[30px] leading-[32px] mt-[8px] font-normal sm:text-[25px] text-[15px] text-center text-secondary-white"
    >
      {parse(text)}
    </p>
  </div>
);

export default StartSteps;
