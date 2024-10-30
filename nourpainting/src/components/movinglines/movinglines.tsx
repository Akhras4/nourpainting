import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './movinglines.sass'; 

const MovingLines: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const { top, height } = targetRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && top > -height) {
          const progress = Math.min(Math.max((windowHeight - top) / (windowHeight + height), 0), 1);
          setScrollProgress(progress);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = [
    'OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK',
    'OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK',
    'OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK',
  ];

  return (
    <div className="container"
    >
      <div ref={targetRef} className="target">
        {lines.map((text, index) => (
          <div key={index} className="line-wrapper">
            <motion.div
              className="line"
              initial={{ x: 0 }}
              animate={{
                x: (index % 2 === 0 ? 1 : -1) * scrollProgress * (200 + index * 50),
              }}
              transition={{ type: 'tween', ease: 'easeOut' }}
              style={{
                opacity:(index % 2 === 0 ? (Math.max(scrollProgress) + 0.3) : (Math.max(scrollProgress) - 0.3)),
                color:(index % 2 === 0 ? "black" : "#00fff0")
            }}
            >
              {text}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingLines;
