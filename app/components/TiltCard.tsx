'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion';

interface TiltCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number;
}

export default function TiltCard({ children, className = '', maxRotate = 12, ...props }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for normalized cursor positions (-0.5 to 0.5)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for rotation
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [maxRotate, -maxRotate]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxRotate, maxRotate]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate relative mouse position (0 to 1)
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      {...props}
      onMouseMove={(e) => {
        handleMouseMove(e);
        props.onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        props.onMouseLeave?.(e);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        ...props.style,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`perspective-[1000px] ${className}`}
    >
      {children}
    </motion.div>
  );
}
