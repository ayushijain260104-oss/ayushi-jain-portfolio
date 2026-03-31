import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface FallingTextProps {
  text: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  wordClassName?: string;
}

export default function FallingText({
  text,
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  className = '',
  wordClassName = '',
}: FallingTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      rotate: -10,
      scale: 1.2,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className={`inline-block ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
