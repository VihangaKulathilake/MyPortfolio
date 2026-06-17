'use client';

import { useRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MagneticProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  range?: number;
  strength?: number;
}

export default function Magnetic({ children, range = 50, strength = 0.35, className = '', ...props }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Check if within magnetic range
    const distance = Math.sqrt(x * x + y * y);
    if (distance < range) {
      setPosition({ x: x * strength, y: y * strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

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
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
