'use client';

import React, { useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';
import { motion } from 'framer-motion';

const WinnersPopup = ({ onClose }) => {
  const jsConfettiRef = useRef(null);

  const triggerConfetti = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti({
        confettiColors: [
          '#8B5CF6', '#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#6366F1',
        ],
        emojis: ['⚡️', '✨', '💫', '🥳', '🎉'],
        emojiSize: 50,
        confettiNumber: 100,
      });
    }
  };

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
    triggerConfetti();

    // Cleanup function
    return () => {
      // Optional: any cleanup needed for JSConfetti
    };
  }, []);

  const winners = [
    {
      position: 'First Prize',
      name: 'NILADRI CHAKRABORTY',
      institute: 'Thapar Institute of Engineering & Technology',
    },
    {
      position: 'Second Prize',
      name: 'SUDHEER KUMAR GINNI',
      institute: 'Lendi Institute of Engineering and Technology (LIET)',
    },
    {
      position: 'Third Prize',
      name: 'Ved Rahangdale',
      institute: 'Vishwakarma Institute Of Technology',
    },
    {
      position: 'Consolation Prize: INR 1,000',
      name: 'ALLU. Himavathi',
      institute: 'Lendi Institute of Engineering and Technology (LIET)',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-lg rounded-2xl p-6 md:p-10 max-w-3xl w-full mx-4 relative overflow-hidden shadow-2xl"
      >
        {/* Gradient Background Blur */}
        <div className="absolute inset-0 gradient-01 opacity-30 z-0" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-300 hover:text-white text-2xl md:text-3xl font-extrabold z-10 transition-colors"
          aria-label="Close popup"
        >
          x
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-10 relative z-10 text-violet-400">
          🏆 Winners 🏆
        </h2>

        {/* Winners List */}
        <div className="space-y-6 md:space-y-8 relative z-10">
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <h3 className="font-bold text-xl md:text-2xl text-cyan-400">{winner.position}</h3>
              <p className="text-lg md:text-xl font-semibold text-blue-300 mt-2">{winner.name}</p>
              <p className="text-base md:text-lg text-gray-300 mt-1">{winner.institute}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WinnersPopup;
