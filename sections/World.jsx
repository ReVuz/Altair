'use client';
import React from 'react';

const PrizeSection = () => {
  const prizes = [
    { 
      position: "First", 
      amount: 10000, 
      scale: "h-[500px] w-[500px] md:h-[600px] md:w-[600px]", // Largest
      textSize: "text-5xl md:text-7xl",
      delay: "delay-200",
      image: "/prize.png"
    },
    { 
      position: "Second", 
      amount: 5000, 
      scale: "h-[300px] w-[300px] md:h-[500px] md:w-[500px]", // Medium
      textSize: "text-3xl md:text-5xl",
      delay: "delay-100",
      image: "prize.png"
    },
    { 
      position: "Third", 
      amount: 2500, 
      scale: "h-[300px] w-[300px] md:h-[500px] md:w-[500px]", // Medium
      textSize: "text-3xl md:text-5xl",
      delay: "delay-300",
      image: "/prize.png"
    }
  ];

  return (
    <div className="w-full py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16 md:mb-24 animate-fadeIn">
          Prize Pool
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8 relative">
          {/* Third Prize - Left */}
          <div className="md:self-end z-10 md:translate-y-6 order-3 md:order-1 animate-fadeInUp delay-300">
            <div className="flex flex-col items-center group">
              <img 
                src={prizes[2].image}
                alt="Third Prize Trophy"
                className={`${prizes[2].scale} object-contain mb-6 transform 
                  group-hover:-translate-y-4 transition-all duration-300 rounded-lg dark-blue-shadow`}
              />
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Third Prize
              </h3>
              <div className={`${prizes[2].textSize} font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-white to-blue-200`}>
                ₹2,500
              </div>
            </div>
          </div>

          {/* First Prize - Center */}
          <div className="md:-translate-y-4 order-1 md:order-2 z-10 animate-fadeInUp delay-200">
            <div className="flex flex-col items-center group">
              <img 
                src={prizes[0].image}
                alt="First Prize Trophy"
                className={`${prizes[0].scale} object-contain mb-8 transform 
                  group-hover:-translate-y-4 transition-all duration-300 rounded-lg dark-blue-shadow`}
              />
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                First Prize
              </h3>
              <div className={`${prizes[0].textSize} font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-white to-blue-200`}>
                ₹10,000
              </div>
            </div>
          </div>

          {/* Second Prize - Right */}
          <div className="md:self-end z-10 md:translate-y-4 order-2 md:order-3 animate-fadeInUp delay-100">
            <div className="flex flex-col items-center group">
              <img 
                src={prizes[1].image}
                alt="Second Prize Trophy"
                className={`${prizes[1].scale} object-contain mb-6 transform 
                  group-hover:-translate-y-4 transition-all duration-300 rounded-lg dark-blue-shadow`}
              />
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Second Prize
              </h3>
              <div className={`${prizes[1].textSize} font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-white to-blue-200`}>
                ₹5,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeSection;
