import { motion, Target } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: FadeInProps) => {
  let initial: Target = { opacity: 0 };
  
  if (direction === 'up') {
    initial = { ...initial, y: 40 };
  } else if (direction === 'down') {
    initial = { ...initial, y: -40 };
  } else if (direction === 'left') {
    initial = { ...initial, x: 40 };
  } else if (direction === 'right') {
    initial = { ...initial, x: -40 };
  }

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
