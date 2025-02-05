'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className="w-full dark:bg-neutral-950 font-sans px-3 sm:px-4 md:px-6"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto py-8 sm:py-12 md:py-16">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-10xl md:text-5xl font-bold text-white">
            Registration Timeline
          </h2>
          <p className="text-neutral-300 text-m sm:text-base max-w-prose">
            Registration is now open from February 5th until March 17th, 2025,
            giving participants a six-week window to join this transformative
            engineering challenge. Secure your spot in this innovative
            competition where theoretical knowledge meets practical simulation
            expertise using industry-leading Altair tools.
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto pb-8 sm:pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row pt-6 sm:pt-12 gap-3
              sm:gap-4 md:gap-6"
          >
            <div className="sticky flex flex-col sm:flex-row items-start
              sm:items-center top-16 sm:top-24 self-start w-full
              max-w-xs sm:max-w-sm"
            >
              {/* Timeline dot */}
<motion.div className="relative">
  <motion.div
    className={`absolute left-0 sm:left-2 h-6 w-6 sm:h-8 
      sm:w-8 rounded-full bg-white dark:bg-black flex 
      items-center justify-center`}
    style={{
      scale: useTransform(
        scrollYProgress,
        [(index - 0.5) / data.length, index / data.length],
        [1, 1.2]
      )
    }}
  >
    <motion.div
      className="h-0 w-0 sm:h-3 sm:w-3 rounded-full border border-neutral-300 dark:border-neutral-700"
      style={{
        backgroundColor: useTransform(
          scrollYProgress,
          [(index - 0.5) / data.length, index / data.length],
          ['rgb(229, 231, 235)', 'rgb(59, 130, 246)']
        )
      }}
    />
  </motion.div>
</motion.div>

              {/* Content */}
              <div className="pl-12 sm:pl-16 space-y-2">
                <h3 className="text-base sm:text-xl md:text-2xl
                  font-bold text-white"
                >
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-sm">
                  {formatDate(item.date)}
                </p>
                <p className="text-neutral-400 text-sm max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-3 sm:left-4 top-0 overflow-hidden
            w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent via-neutral-200 dark:via-neutral-700
            to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,
            black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t
              from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
