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
        <TypingText title="| Submission instructions" textStyles=" font-medium text-2xl mb-5" />
        <TitleText title="What to Submit" />
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
          title="How to Submit"
          textStyles="text-left mb-10"
        />

        <div className="flex flex-col gap-14">
          <InsightCard
            key="submission-instruction-1"
            imgUrl="/planet-06.png"
            title={<span className="text-4xl">Zip your files and rename the archive as <span className="text-3xl font-semibold"> "YouCollege_YourName.zip"</span></span>}
            subtitle={<>Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum</>}
            reverse
            index={5}
          />

          <InsightCard
            key="submission-instruction-2"
            imgUrl="/planet-06.png"
            title={<span className="text-4xl">Upload your zipped file</span>}
            subtitle={<>Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum</>}
            reverse
            index={6}
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default Insights;
