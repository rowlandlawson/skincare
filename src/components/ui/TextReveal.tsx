import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string | React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  byWord?: boolean;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.8,
  stagger = 0.04,
  byWord = false,
}: TextRevealProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: duration,
      }
    },
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  if (typeof text !== 'string') {
    // If it's react nodes, just wrap and animate the whole thing
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className={className}
      >
        <motion.span variants={defaultVariants} className="inline-block">
          {text}
        </motion.span>
      </motion.div>
    );
  }

  const items = byWord ? text.split(' ') : text.split('');

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      className={cn('inline-block perspective-800', className)}
    >
      {items.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={defaultVariants}
          className={cn(
            'inline-block',
            !byWord && char === ' ' ? 'w-[0.25em]' : '',
            byWord ? 'mr-2' : ''
          )}
        >
          {char === ' ' && !byWord ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
