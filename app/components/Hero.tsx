'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { contactInfo } from '../data';

const roles = [
  'Full Stack Developer',
  'Next.js Developer',
  'Spring Boot Developer',
  'Problem Solver'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];
    
    // Determine typing speed
    const typeSpeed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (!isDeleting) {
        // Add character
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Remove character
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      timer = setTimeout(handleType, typeSpeed);
    };

    timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Animated Gradient Globs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-element bg-[#00f2fe]/20 dark:bg-[#00f2fe]/10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-element bg-[#f355da]/20 dark:bg-[#f355da]/10 [animation-delay:4s]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        >
          {/* Badge */}
          <motion.div
            variants={childVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/5 text-[#00f2fe] font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe]/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2fe]"></span>
            </span>
            Available for Opportunities
          </motion.div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <motion.h1
              variants={childVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-glow"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] bg-clip-text text-transparent">
                Vihanga
              </span>
            </motion.h1>
            
            <motion.h2
              variants={childVariants}
              className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 h-[40px] flex items-center justify-center lg:justify-start"
            >
              <span className="text-slate-800 dark:text-white font-mono">{currentText}</span>
              <span className="animate-pulse ml-1 inline-block h-6 w-[3px] bg-[#00f2fe]" />
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-normal"
          >
            I am a passionate software engineer specializing in building high-performance, robust, and visually stunning web applications. With expertise in Next.js, Spring Boot, and cloud architecture, I turn complex problems into clean, user-friendly digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] hover:opacity-95 text-slate-950 font-bold transition-all duration-300 shadow-lg shadow-[#00f2fe]/20 hover:shadow-[#f355da]/30 hover:-translate-y-0.5 group cursor-pointer"
            >
              View My Work
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center h-12 px-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold text-slate-800 dark:text-white transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center h-12 px-6 rounded-xl border border-dashed border-[#00f2fe]/50 bg-[#00f2fe]/5 hover:bg-[#00f2fe]/10 text-[#00f2fe] font-semibold transition-all duration-300 hover:border-[#00f2fe] cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Shortcut Links */}
          <motion.div
            variants={childVariants}
            className="flex items-center gap-6 mt-4"
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] aspect-square rounded-3xl overflow-hidden shadow-2xl p-1.5 bg-gradient-to-tr from-[#00f2fe] via-[#4facfe] to-[#f355da]">
            <div className="w-full h-full rounded-[20px] bg-slate-900 overflow-hidden relative">
              <Image
                src="/images/HRI_1584.jpg"
                alt="Vihanga Profile Image"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
