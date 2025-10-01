import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  className = '',
  style = {},
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration,
            delay,
            ease: 'easeOut'
          }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};