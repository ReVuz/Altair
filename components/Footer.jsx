'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import buttonStyles from './AnimatedButton.module.css';

// Add hover styles using CSS (since inline styles don't support hover)
const cssStyles = `
  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }
  
  .animated-button:hover .arr-1 {
    right: -25%;
  }
  
  .animated-button:hover .arr-2 {
    left: 16px;
  }
  
  .animated-button:hover .text {
    transform: translateX(12px);
  }
  
  .animated-button:hover svg {
    fill: #1f387e;
  }
  
  .animated-button:active {
    transform: scale(0.95);
    box-shadow: 0 0 0 4px greenyellow;
  }
  
  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
`;

const Footer = () => (
  <>
    <style>{cssStyles}</style>
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative bg-gray-800`}
    >
      {/* Enhanced gradient background */}
      <div className="footer-gradient bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 absolute inset-0 opacity-40" />

      <div
        className={`${styles.innerWidth} mx-auto flex flex-col gap-12 relative z-10`}
      >
        <div className="flex items-center justify-between flex-wrap gap-5" id="register">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Register Here
          </h4>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdVKCPMU3TpIA1ZvLnPXarsxiSnkjq6fTqbaup60zy_gg4tTQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className={buttonStyles.animatedButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${buttonStyles.svg} ${buttonStyles.arr2}`}
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className={buttonStyles.text}>CLICK HERE</span>
              <span className={buttonStyles.circle} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${buttonStyles.svg} ${buttonStyles.arr1}`}
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </button>
          </a>
        </div>
        <div className="mb-[50px] h-[2px] bg-white opacity-20" />
        <div className="flex items-center justify-between flex-wrap gap-5" id="submit">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Submit Your Work Here
          </h4>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdVKCPMU3TpIA1ZvLnPXarsxiSnkjq6fTqbaup60zy_gg4tTQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className={buttonStyles.animatedButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${buttonStyles.svg} ${buttonStyles.arr2}`}
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className={buttonStyles.text}>SUBMIT NOW</span>
              <span className={buttonStyles.circle} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${buttonStyles.svg} ${buttonStyles.arr1}`}
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </button>
          </a>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-20" />

          {/* Contact Information Section */}
          <div className="flex flex-col gap-6 mb-8" id="contact">
            <h5 className="font-bold text-[28px] text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Contact Information
            </h5>
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="flex flex-col p-6 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
                <span className="text-xl font-semibold mb-3 text-blue-300">
                  Jithika P Sajan
                </span>
                <a
                  href="tel:9037439200"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-phone-alt mr-2" />
                  +91 9037439200
                </a>
                <a
                  href="mailto:jithikapsinfo@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2" />
                  jithikapsinfo@gmail.com
                </a>
              </div>
              <div className="flex flex-col p-6 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
                <span className="text-xl font-semibold mb-3 text-blue-300">
                  Sandra V M
                </span>
                <a
                  href="tel:7994880625"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-phone-alt mr-2" />
                  +91 7994880625
                </a>
                <a
                  href="mailto:sandravminfo@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2" />
                  sandravminfo@gmail.com
                </a>
              </div>
              <div className="flex flex-col p-6 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-2 mb-3">

                  <span className="text-xl font-semibold text-blue-300">
                    Harika Manthena
                  </span>
                  <img
                    src="/Altair_logo.png"
                    alt="Altair Logo"
                    className="h-[10px] object-contain hover:scale-105 transition-transform duration-300 filter contrast-125 drop-shadow-lg"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                  />
                </div>
                <a
                  href="tel:6309298466"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-phone-alt mr-2" />
                  +91 6309298466
                </a>
                <a
                  href="mailto:hmanthena@altair.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2" />
                  hmanthena@altair.com
                </a>
              </div>

              <div className="flex flex-col p-6 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-2 mb-3">

                  <span className="text-xl font-semibold text-blue-300">
                    Guru Charan
                  </span>
                  <img
                    src="/Altair_logo.png"
                    alt="Altair Logo"
                    className="h-[10px] object-contain hover:scale-105 transition-transform duration-300 filter contrast-125 drop-shadow-lg"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                  />
                </div>
                <a
                  href="tel:9392394354"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-phone-alt mr-2" />
                  +91 9392394354
                </a>
                <a
                  href="mailto:guruc@altair.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2" />
                  guruc@altair.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white border-opacity-20">
            <div className="flex items-center gap-4">
              {/* SAE Logo with increased size */}
              <img
                src="/sae_logo.png"
                alt="SAE Logo"
                className="h-[100px] md:h-[105px] object-contain hover:scale-105 transition-transform duration-300 filter contrast-125 drop-shadow-lg mr-4"
                style={{
                  filter: 'brightness(1.1) contrast(1.1)',
                }}
              />
              {/* Altair Logo */}
              <img
                src="/Altair_logo.png"
                alt="Altair Logo"
                className="h-[30px] object-contain hover:scale-105 transition-transform duration-300 filter contrast-125 drop-shadow-lg"
                style={{
                  filter: 'brightness(1.1) contrast(1.1)',
                }}
              />
            </div>
            <p className="font-normal text-[14px] text-white opacity-70">
              Copyright © 2025 Altair. All rights reserved.
            </p>

            <div className="flex gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="hover:opacity-80 transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    src={social.url}
                    alt={social.name}
                    className="w-[32px] h-[32px] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  </>
);

export default Footer;
