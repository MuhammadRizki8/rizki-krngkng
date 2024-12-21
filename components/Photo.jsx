'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Photo = () => {
  // Parallax effect based on mouse movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full relative flex justify-center items-center">
      {/* Container for Parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' } }}
        whileHover={{ scale: 1.05 }}
        className="relative"
        style={{ transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` }}
      >
        {/* Image with Zoom and Shadow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6, ease: 'easeInOut' } }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]  rounded-full shadow-[0_0_60px_rgba(43,108,176,0.5)]"
        >
          {/* <Image src="/assets/profile-pic.png" priority quality={100} fill alt="rizki" className="object-contain rounded-full" /> */}
        </motion.div>

        {/* Animated Circle */}
        <motion.svg
          className="absolute top-0 left-0 w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.6 } }}
          style={{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#2b6cb0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0', pathLength: 0 }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
              pathLength: 1,
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.svg>
      </motion.div>

      {/* Floating Particles */}
      <motion.div className="absolute w-full h-full" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
        {/* Top Left Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-16 left-60 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 left-72 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>

        {/* Center Particles */}
        <div className="absolute top-1/2 left-12 w-3 h-3 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-3/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>

        {/* Bottom Right Particles */}
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-32 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-5 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </motion.div>
    </div>
  );
};

export default Photo;
