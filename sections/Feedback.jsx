'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Feedback = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const fadeIn = {
    opacity: 1,
    transform: 'translateY(0)',
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: '2rem',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
    },
    visible: fadeIn,
    title: {
      fontSize: 'clamp(5rem, 4vw, 2.5rem)',
      color: '#fff',
      marginBottom: '1rem',
      fontWeight: '300',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      opacity: 0.9,
      transform: 'translateY(20px)',
      transition: 'all 0.6s ease 0.2s',
    },
    counterContainer: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'baseline',
    },
    counter: {
      background: 'linear-gradient(45deg, #e6dada 0%, #274046 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontSize: 'clamp(3rem, 12vw, 6rem)',
      fontWeight: '700',
      fontFamily: '"Arial Black", sans-serif',
      letterSpacing: '-2px',
      lineHeight: 1,
      marginRight: '0.2em',
    },
    plus: {
      position: 'absolute',
      top: '-5%',
      right: '-9%',
      color: 'rgba(255,255,255,0.7)',
      fontSize: 'clamp(3rem, 8vw, 4rem)',
      fontWeight: '300',
      textShadow: '0 2px 8px rgba(0,123,255,0.4)',
      transform: 'translateY(-30%)',
    },
    sparkles: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    },
    sparkle: {
      position: 'absolute',
      background: 'rgba(255,255,255,0.4)',
      borderRadius: '50%',
      animation: 'sparkle 1.5s infinite',
    },
  };

  // Generate random sparkle positions
  styles.sparkles = {
    ...styles.sparkles,
    ...Array.from({ length: 12 }).reduce((acc, _, i) => ({
      [`& > div:nth-of-type(${i + 1})`]: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 4}px`,
        height: `${Math.random() * 6 + 4}px`,
      },
    })),
  };

  return (
    <div style={{ ...styles.container, ...(inView && styles.visible) }} ref={ref}>
      <h2 style={styles.title}>People Registered</h2>
      <div style={styles.counterContainer}>
        <div style={styles.counter}>
          {inView && <CountUp end={1000} duration={3} />}
        </div>
        <span style={styles.plus}>+</span>
      </div>
      <div style={styles.sparkles}>
        {[...Array(12)].map((_, i) => <div key={i} style={styles.sparkle} />)}
      </div>
    </div>
  );
};

export default Feedback;
