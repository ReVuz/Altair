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
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Ready to Submit!
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Click Here
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        {/* Contact Information Section */}
        <div className="flex flex-col gap-4 mb-8" id="contact">
          <h5 className="font-bold text-[20px] text-white">Contact Information</h5>
          <div className="grid md:grid-cols-3 gap-4 text-white opacity-80 text-[14px]">
            <div className="flex flex-col">
              <span>Harika Manthena</span>
              <a href="tel:6309298466" className="hover:text-blue-400">6309298466</a>
              <a href="mailto:hmanthena@altair.com" className="hover:text-blue-400">hmanthena@altair.com</a>
            </div>
            <div className="flex flex-col">
              <span>Guru Charan Kotthuru</span>
              <a href="tel:9392394354" className="hover:text-blue-400">9392394354</a>
              <a href="mailto:guruc@altair.com" className="hover:text-blue-400">guruc@altair.com</a>
            </div>
            <div className="flex flex-col">
              <span>Ramesha BS</span>
              <a href="tel:9177770258" className="hover:text-blue-400">9177770258</a>
              <a href="mailto:rambs@altair.com" className="hover:text-blue-400">rambs@altair.com</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            ALTAIR
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2025 Altair. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
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
