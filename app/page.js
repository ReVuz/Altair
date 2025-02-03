'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const styles = {
  loadingScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Added gradient background starting from #202c44
    background: 'linear-gradient(135deg, #202c44 0%, #141c2f 100%)',
  },
  solid: {
    position: 'relative',
    // Increased size to 400px
    width: '400px',
    height: '400px',
    animation: 'spin 16s infinite linear',
    transformStyle: 'preserve-3d',
  },
  side: {
    position: 'absolute',
    left: 0,
    bottom: '50%',
    borderBottom: '346.4px solid black',
    borderLeft: '200px solid transparent',
    borderRight: '200px solid transparent',
    transformOrigin: '50% 0%',
    boxShadow: '0 0 25px rgba(32, 44, 68, 0.9)', // Increased neon glow intensity
    transition: 'all 0.3s ease',
  },
};

const sideTransforms = [
  // Top faces - lighter shades
  { transform: 'translateY(-37px) rotateY(72deg) rotateX(52.62deg)',
    color: 'rgba(64, 89, 136, 0.9)' }, // Much lighter
  { transform: 'translateY(-37px) rotateY(144deg) rotateX(52.62deg)',
    color: 'rgba(51, 71, 108, 0.9)' },
  { transform: 'translateY(-37px) rotateY(216deg) rotateX(52.62deg)',
    color: 'rgba(58, 80, 122, 0.9)' },
  { transform: 'translateY(-37px) rotateY(288deg) rotateX(52.62deg)',
    color: 'rgba(45, 62, 95, 0.9)' },
  { transform: 'translateY(-37px) rotateY(360deg) rotateX(52.62deg)',
    color: 'rgba(54, 75, 114, 0.9)' },

  // Middle section - darker shades
  { transform: 'translateY(723.6px) rotateY(468deg) rotateX(127.38deg)',
    color: 'rgba(25, 34, 52, 0.9)' }, // Darker
  { transform: 'translateY(723.6px) rotateY(540deg) rotateX(127.38deg)',
    color: 'rgba(19, 26, 40, 0.9)' }, // Even darker
  { transform: 'translateY(723.6px) rotateY(612deg) rotateX(127.38deg)',
    color: 'rgba(28, 39, 59, 0.9)' },
  { transform: 'translateY(723.6px) rotateY(684deg) rotateX(127.38deg)',
    color: 'rgba(22, 30, 46, 0.9)' },
  { transform: 'translateY(723.6px) rotateY(756deg) rotateX(127.38deg)',
    color: 'rgba(16, 22, 34, 0.9)' },

  // Additional faces - mixed shades
  { transform: 'translateY(173.2px) rotateY(828deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(61, 84, 128, 0.9)' }, // Lighter
  { transform: 'translateY(173.2px) rotateY(900deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(25, 34, 52, 0.9)' }, // Darker
  { transform: 'translateY(173.2px) rotateY(972deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(48, 66, 101, 0.9)' },
  { transform: 'translateY(173.2px) rotateY(1044deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(19, 26, 40, 0.9)' },
  { transform: 'translateY(173.2px) rotateY(1116deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(54, 75, 114, 0.9)' },

  // Bottom faces - alternating shades
  { transform: 'translateY(513.4px) rotateY(1152deg) rotateZ(180deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(16, 22, 34, 0.9)' }, // Darkest
  { transform: 'translateY(513.4px) rotateY(1224deg) rotateZ(180deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(64, 89, 136, 0.9)' }, // Lightest
  { transform: 'translateY(513.4px) rotateY(1296deg) rotateZ(180deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(22, 30, 46, 0.9)' },
  { transform: 'translateY(513.4px) rotateY(1368deg) rotateZ(180deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(58, 80, 122, 0.9)' },
  { transform: 'translateY(513.4px) rotateY(1440deg) rotateZ(180deg) translateZ(340.2px) rotateX(-10.81deg)',
    color: 'rgba(25, 34, 52, 0.9)' },
];
const keyframesStyle = `
  @keyframes spin {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(720deg) rotateZ(1080deg);
    }
  }

  @keyframes disappear {
    0% {
      opacity: 100%;
      transform: translateY(0%);
    }
    50% {
      background-color: transparent;
      opacity: 0%;
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes reappear {
    0% {
      opacity: 0%;
      transform: translateY(100%);
      background-color: transparent;
    }
    50% {
      opacity: 100%;
    }
    100% {
      background-color: #d8e0d8;
      transform: translateY(0%);
    }
  }
`;

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = keyframesStyle;
    document.head.appendChild(styleSheet);

    router.push('/altair-contest');

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [router]);

  return (
    <div style={styles.loadingScreen}>
      <div style={styles.solid}>
        {sideTransforms.map((sideStyle, index) => (
          <div
            key={index}
            style={{
              ...styles.side,
              transform: sideStyle.transform,
              borderBottomColor: sideStyle.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
