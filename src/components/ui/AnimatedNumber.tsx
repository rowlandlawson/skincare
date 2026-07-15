import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  className?: string;
  duration?: number;
  format?: (val: number) => string;
  delay?: number;
}

export function AnimatedNumber({
  value,
  className = '',
  duration = 2000,
  format = (val) => Math.round(val).toString(),
  delay = 0,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration,
  });

  const displayValue = useTransform(springValue, (current) => format(current));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        springValue.set(value);
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, springValue, delay]);

  return (
    <motion.span 
      ref={ref}
      className={className} 
      initial={{ opacity: 0, y: 10 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} 
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {hasAnimated ? displayValue : format(0)}
    </motion.span>
  );
}
