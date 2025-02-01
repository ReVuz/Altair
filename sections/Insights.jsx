'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <TypingText title="| what to Submit" textStyles="mb-4 text-3xl font-bold" />
        <TitleText title="Submit Your Work" />
      </div>

      {/* Main Insights Grid */}
      <div className="flex flex-col gap-14">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>

      {/* Submission Instructions Section */}
      <div className="mt-28">
        <TitleText
          title="Submission Instructions"
          textStyles="text-left mb-10"
        />

        <div className="flex flex-col gap-14">
          <InsightCard
            key="submission-instruction-1"
            imgUrl="/planet-06.png"
            title={<span className="text-4xl">Zip your files and rename the archive as <span className="text-3xl font-semibold"> "YouCollege_YourName.zip"</span></span>}
            reverse
            index={5}
          />

          <InsightCard
            key="submission-instruction-2"
            imgUrl="/planet-06.png"
            title={<span className="text-4xl">Upload your zipped file [here]</span>}
            reverse
            index={6}
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default Insights;
