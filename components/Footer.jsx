'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-gray-800`}
  >
    <div className="footer-gradient bg-gradient-to-r from-blue-500 to-purple-600 absolute inset-0 opacity-50" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-12 relative z-10`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Ready to Submit!
        </h4>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVKCPMU3TpIA1ZvLnPXarsxiSnkjq6fTqbaup60zy_gg4tTQ/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] hover:bg-[#1b4d6b] rounded-[32px] gap-[12px] transition duration-300">
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Click Here
            </span>
          </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-30" />

        {/* Contact Information Section */}
        <div className="flex flex-col gap-4 mb-8" id="contact">
          <h5 className="font-bold text-[24px] text-white">Contact Information</h5>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white opacity-80 text-[16px]">
            <div className="flex flex-col">
              <span>Jithika P Sajan</span>
              <a href="tel:9037439200" className="hover:text-blue-400">9037439200</a>
              <a href="mailto:jithikapsinfo@gmail.com" className="hover:text-blue-400">jithikapsinfo@gmail.com</a>
            </div>
            <div className="flex flex-col">
              <span>Sandra V M</span>
              <a href="tel:7994880625" className="hover:text-blue-400">7994880625</a>
              <a href="mailto:sandravminfo@gmail.com" className="hover:text-blue-400">sandravminfo@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[28px] text-white">
            ALTAIR
          </h4>
          <p className="font-normal text-[14px] text-white opacity-70">
            Copyright © 2025 Altair. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link} className="hover:opacity-80 transition duration-300">
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[30px] h-[30px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
