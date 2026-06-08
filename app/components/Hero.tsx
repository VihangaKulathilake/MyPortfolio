'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiSpringboot } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
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
      className="relative min-h-[92vh] flex items-center justify-center py-20 overflow-hidden select-none"
    >
      {/* Cinematic Mouse Tracking Spotlight (Active in Dark Mode, Soft in Light Mode) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: isHovered
            ? `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 254, 0.12), rgba(243, 85, 218, 0.06) 40%, transparent 70%)`
            : `radial-gradient(700px circle at 50% 50%, rgba(0, 242, 254, 0.08), rgba(243, 85, 218, 0.04) 40%, transparent 70%)`,
        }}
      />

      {/* Grid Backdrop with fade mask */}
      <div className="absolute inset-0 hype-grid opacity-20 dark:opacity-35 grid-mask pointer-events-none z-0" />

      {/* Animated Ambient Light Globs (adds depth) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-element bg-[#00f2fe]/20 dark:bg-[#00f2fe]/10 z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-element bg-[#f355da]/20 dark:bg-[#f355da]/10 [animation-delay:4s] z-0" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-fade-in"
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
              className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 h-[40px] flex items-center justify-center lg:justify-start"
            >
              <span className="text-slate-850 dark:text-white font-mono bg-slate-900/5 dark:bg-white/5 px-3 py-1 rounded-lg border border-slate-900/5 dark:border-white/5">{currentText}</span>
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
              className="flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] hover:brightness-110 text-slate-950 font-bold transition-all duration-300 shadow-lg shadow-[#00f2fe]/20 hover:shadow-[#f355da]/30 hover:-translate-y-0.5 group cursor-pointer"
            >
              View My Work
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center h-12 px-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold text-slate-800 dark:text-white transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 cursor-pointer shadow-sm"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center h-12 px-6 rounded-xl border border-dashed border-[#00f2fe]/50 bg-[#00f2fe]/5 hover:bg-[#00f2fe]/10 text-[#00f2fe] font-semibold transition-all duration-300 hover:border-[#00f2fe] hover:-translate-y-0.5 cursor-pointer"
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
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs hover:border-[#00f2fe] dark:hover:border-[#00f2fe] hover:text-[#00f2fe] dark:hover:text-[#00f2fe] text-slate-600 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
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
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Rotating aura background */}
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-tr from-[#00f2fe] via-[#4facfe] to-[#f355da] opacity-25 blur-2xl dark:opacity-35 animate-pulse pointer-events-none" />

          {/* Profile Image card wrapper */}
          <div className="relative w-[280px] sm:w-[330px] aspect-[3/4] rounded-3xl p-[2px] bg-gradient-to-tr from-[#00f2fe] via-[#4facfe] to-[#f355da] shadow-2xl shadow-[#00f2fe]/10 dark:shadow-[#f355da]/15 group">
            {/* Soft inner glow */}
            <div className="w-full h-full rounded-[26px] bg-slate-950 overflow-hidden relative">
              {/* Glass reflections */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10" />
              
              <Image
                src="/images/img1.jpeg"
                alt="Vihanga Profile Image"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle decorative target overlay crosshairs on corners for cinematic visual style */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/40 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/40 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none" />
          </div>

          {/* Floating Tech Badges */}
          {/* React */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            className="absolute top-[-15px] left-[15px] sm:left-[-10px] glass p-3.5 rounded-2xl shadow-xl flex items-center justify-center border border-white/10 dark:border-[#00f2fe]/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md z-20 group hover:scale-110 transition-transform duration-300"
            title="React"
          >
            <SiReact className="w-6 h-6 text-[#61DAFB] animate-[spin_12s_linear_infinite]" />
          </motion.div>

          {/* Next.js */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-[40px] right-[-15px] sm:right-[-20px] glass p-3.5 rounded-2xl shadow-xl flex items-center justify-center border border-white/10 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md z-20 group hover:scale-110 transition-transform duration-300"
            title="Next.js"
          >
            <SiNextdotjs className="w-6 h-6 text-slate-950 dark:text-white" />
          </motion.div>

          {/* Spring Boot */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute bottom-[20px] left-[-20px] sm:left-[-25px] glass p-3.5 rounded-2xl shadow-xl flex items-center justify-center border border-white/10 dark:border-[#6DB33F]/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md z-20 group hover:scale-110 transition-transform duration-300"
            title="Spring Boot"
          >
            <SiSpringboot className="w-6 h-6 text-[#6DB33F]" />
          </motion.div>

          {/* AWS */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
            className="absolute bottom-[-10px] right-[15px] sm:right-[-10px] glass p-3.5 rounded-2xl shadow-xl flex items-center justify-center border border-white/10 dark:border-[#FF9900]/20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md z-20 group hover:scale-110 transition-transform duration-300"
            title="AWS Certified"
          >
            <FaAws className="w-6 h-6 text-[#FF9900]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

