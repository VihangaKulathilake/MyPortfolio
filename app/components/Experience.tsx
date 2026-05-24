'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiAward, FiCheck } from 'react-icons/fi';
import { timelineItems, TimelineItem } from '../data';

// Helper to render type icons
const getTypeIcon = (type: TimelineItem['type']) => {
  switch (type) {
    case 'education':
      return <FiBookOpen className="w-5 h-5" />;
    case 'internship':
      return <FiBriefcase className="w-5 h-5" />;
    case 'certification':
      return <FiAward className="w-5 h-5" />;
    case 'achievement':
      return <FiCheck className="w-5 h-5" />;
    default:
      return <FiCheck className="w-5 h-5" />;
  }
};

// Helper to render color theme classes for type icons
const getTypeStyles = (type: TimelineItem['type']) => {
  switch (type) {
    case 'education':
      return 'bg-blue-500 text-white shadow-blue-500/20';
    case 'internship':
      return 'bg-emerald-500 text-white shadow-emerald-500/20';
    case 'certification':
      return 'bg-amber-500 text-white shadow-amber-500/20';
    case 'achievement':
      return 'bg-purple-500 text-white shadow-purple-500/20';
    default:
      return 'bg-indigo-500 text-white shadow-indigo-500/20';
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 glow-element bg-indigo-500/10 dark:bg-indigo-500/5 -translate-x-1/2" />

      <div className="mx-auto max-w-4xl px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-glow"
          >
            My Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[4px] rounded-full bg-gradient-to-r from-[#00f2fe] to-[#f355da]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-center"
          >
            A timeline of my academic milestones, work experience, certifications, and notable accomplishments.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-[#00f2fe]/20 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {timelineItems.map((item, index) => {
            return (
              <div key={item.id} className="relative">
                {/* Timeline Icon Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className={`absolute -left-[50px] md:-left-[58px] top-1.5 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg ${getTypeStyles(
                    item.type
                  )}`}
                >
                  {getTypeIcon(item.type)}
                </motion.div>

                {/* Timeline Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
                  whileHover={{ scale: 1.01 }}
                  className="glass hype-card p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 dark:border-slate-800 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 capitalize">
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-xl border border-[#00f2fe]/20 self-start sm:self-center">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
