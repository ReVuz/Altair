'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10 py-12 lg:py-24 w-full min-h-screen`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }} // Changed once to true to persist content
      className={`${styles.innerWidth} mx-auto flex flex-col px-4 lg:px-0 w-full`}
    >
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-16">
        <TypingText
          title="| Submission instructions"
          textStyles="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-3 sm:mb-5"
        />
        <TitleText
          title="What to Submit"
          textStyles="text-4xl sm:text-5xl lg:text-6xl font-bold" // Increased text size
        />
      </div>

      {/* Main Insights Grid */}
      <motion.div
        className="flex flex-col gap-8 sm:gap-14 w-full"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
            className="w-full min-h-[250px] sm:min-h-[300px]"
          />
        ))}
      </motion.div>

      {/* Submission Instructions Section */}
      <motion.div
        className="mt-16 sm:mt-28"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.5 },
          },
        }}
      >
        <TitleText
          title="How to Submit"
          textStyles="text-left mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl font-bold"
        />

        <div className="flex flex-col gap-8 sm:gap-14">
          <InsightCard
            key="submission-instruction-1"
            imgUrl="/planet-07.png"
            title={(
              <span className="text-2xl sm:text-3xl lg:text-4xl">
                Zip your files and rename the archive as{' '}
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                  "CUSAT_YourName.zip"
                </span>
              </span>
            )}
            subtitle={<>Package all submission components (certification, .stmod file, report, and video link) into one archive. Follow naming conventions for efficient judge tracking and verification</>}
            reverse
            index={5}
          />

          <InsightCard
            key="submission-instruction-2"
            imgUrl="/planet-11.webp"
            title={<span className="text-2xl sm:text-3xl lg:text-4xl">Upload your zipped file</span>}
            subtitle={<>Upload your optimized solution package through the official contest portal. Ensure all files are accessible and meet technical requirements before final submission</>}
            reverse
            index={6}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
