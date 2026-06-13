'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiSpringboot, SiNodedotjs, SiPhp } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[92vh] flex items-center lg:items-end justify-center pt-20 pb-0 overflow-hidden select-none"
    >
      {/* Cinematic Mouse Tracking Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          background: isHovered
            ? `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 254, 0.14), rgba(243, 85, 218, 0.07) 35%, transparent 70%)`
            : `radial-gradient(800px circle at 50% 50%, rgba(0, 242, 254, 0.08), rgba(243, 85, 218, 0.04) 35%, transparent 70%)`,
        }}
      />

      {/* Grid Backdrop with fade mask */}
      <div className="absolute inset-0 hype-grid opacity-20 dark:opacity-35 grid-mask pointer-events-none z-0" />

      {/* Animated Ambient Light Globs (adds depth) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-element bg-[#00f2fe]/20 dark:bg-[#00f2fe]/10 z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-element bg-[#f355da]/20 dark:bg-[#f355da]/10 [animation-delay:4s] z-0" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center lg:items-end">
        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-fade-in lg:self-center lg:py-16"
        >
          {/* Badge */}
          <motion.div
            variants={childVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/5 text-[#00f2fe] dark:text-[#00f2fe] font-mono text-xs font-bold uppercase tracking-wider shadow-sm shadow-[#00f2fe]/10 backdrop-blur-xs"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe]/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f2fe]"></span>
            </span>
            Available for Opportunities
          </motion.div>

          {/* Title */}
          <div className="flex flex-col gap-3">
            <motion.h1
              variants={childVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight cinematic-glow leading-none text-slate-900 dark:text-white"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
                Vihanga
              </span>
            </motion.h1>

            <motion.h2
              variants={childVariants}
              className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 h-[40px] flex items-center justify-center lg:justify-start font-mono"
            >
              <span className="text-slate-900 dark:text-white">{currentText}</span>
              <span className="animate-pulse ml-1 inline-block h-6 w-[2px] bg-[#00f2fe]" />
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-normal"
          >
            I am a passionate software engineer specializing in building high-performance, robust, and visually stunning web applications. With expertise in Next.js, Spring Boot, Node.js, PHP, and Java, I turn complex problems into clean, user-friendly digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] hover:brightness-110 text-slate-950 font-black transition-all duration-300 shadow-md shadow-[#00f2fe]/15 hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
            >
              View My Work
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center h-12 px-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:bg-slate-50 dark:hover:bg-slate-900 font-bold text-slate-800 dark:text-white transition-all duration-300 hover:border-[#f355da]/60 dark:hover:border-[#f355da]/60 hover:shadow-[0_0_20px_rgba(243,85,218,0.2)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Shortcut Links */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap items-center gap-6 mt-2 w-full"
          >
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-115 hover:rotate-3 hover:shadow-[0_0_15px_rgba(0,242,254,0.25)] cursor-pointer"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-115 hover:rotate-3 hover:shadow-[0_0_15px_rgba(0,242,254,0.25)] cursor-pointer"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-115 hover:rotate-3 hover:shadow-[0_0_15px_rgba(0,242,254,0.25)] cursor-pointer"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>

            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#00f2fe] dark:hover:text-[#00f2fe] transition-colors duration-300 border-b border-dashed border-slate-400 dark:border-slate-600 hover:border-[#00f2fe] pb-0.5"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Tech Stack Row */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 w-full"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
              Tech Stack |
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-805 bg-slate-100/50 dark:bg-slate-900/30 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:border-[#61DAFB] hover:bg-[#61DAFB]/5 hover:text-[#61DAFB] hover:shadow-[0_0_15px_rgba(97,218,251,0.25)]">
                <SiReact className="w-4 h-4 text-[#61DAFB] animate-[spin_12s_linear_infinite]" /> React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-805 bg-slate-100/50 dark:bg-slate-900/30 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:border-slate-900 dark:hover:border-white hover:bg-slate-900/5 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <SiNextdotjs className="w-4 h-4 text-slate-950 dark:text-white" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-805 bg-slate-100/50 dark:bg-slate-900/30 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:border-[#6DB33F] hover:bg-[#6DB33F]/5 hover:text-[#6DB33F] hover:shadow-[0_0_15px_rgba(109,179,63,0.25)]">
                <SiSpringboot className="w-4 h-4 text-[#6DB33F]" /> Spring Boot
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-805 bg-slate-100/50 dark:bg-slate-900/30 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:border-[#68A063] hover:bg-[#68A063]/5 hover:text-[#68A063] hover:shadow-[0_0_15px_rgba(104,160,99,0.25)]">
                <SiNodedotjs className="w-4 h-4 text-[#68A063]" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-805 bg-slate-100/50 dark:bg-slate-900/30 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:border-[#777BB4] hover:bg-[#777BB4]/5 hover:text-[#777BB4] hover:shadow-[0_0_15px_rgba(119,123,180,0.25)]">
                <SiPhp className="w-4 h-4 text-[#777BB4]" /> PHP
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-805 bg-slate-100/50 dark:bg-slate-900/30 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:border-[#007396] hover:bg-[#007396]/5 hover:text-[#007396] hover:shadow-[0_0_15px_rgba(0,115,150,0.25)]">
                <FaJava className="w-4 h-4 text-[#007396]" /> Java
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
          className="lg:col-span-6 flex justify-center items-end relative lg:self-end w-full"
        >
          {/* Profile Image container */}
          <motion.div
            animate={{
              y: [0, -16, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[480px] sm:max-w-[640px] lg:max-w-[800px] xl:max-w-[960px] aspect-[3/4] group"
          >
            <Image
              src="/images/img1.png"
              alt="Vihanga Profile Image"
              fill
              priority
              className="object-contain object-bottom transition-all duration-700 ease-out group-hover:scale-[1.03] translate-y-8 lg:translate-y-12 drop-shadow-[0_0_20px_rgba(0,242,254,0.4)] drop-shadow-[0_0_40px_rgba(243,85,218,0.25)] group-hover:drop-shadow-[0_0_35px_rgba(0,242,254,0.65)] group-hover:drop-shadow-[0_0_70px_rgba(243,85,218,0.5)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

