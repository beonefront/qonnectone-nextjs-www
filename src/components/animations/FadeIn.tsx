'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useLocale } from 'next-intl';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = ''
}: FadeInProps) {
  const locale = useLocale();

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 20 };
      case 'down':
        return { opacity: 0, y: -20 };
      case 'left':
        return { opacity: 0, x: 20 };
      case 'right':
        return { opacity: 0, x: -20 };
      default:
        return { opacity: 0, y: 20 };
    }
  };

  const getAnimateTransform = () => {
    switch (direction) {
      case 'up':
        return { opacity: 1, y: 0 };
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
        return { opacity: 1, x: 0 };
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      key={`fadein-${locale}`}
      initial={getInitialTransform()}
      whileInView={getAnimateTransform()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
