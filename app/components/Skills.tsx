'use client';

import { motion, Variants } from 'framer-motion';
import { skillCategories } from '../data';
import TiltCard from './TiltCard';

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 glow-element bg-indigo-500/10 dark:bg-indigo-500/5 translate-x-1/2" />
      <div className="absolute bottom-1/3 left-0 glow-element bg-purple-500/10 dark:bg-purple-500/5 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-glow"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[4px] rounded-full bg-gradient-to-r from-brand-start to-brand-end"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-center"
          >
            A breakdown of my technical capabilities and proficiency across various domains of software development.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="w-full"
            >
              <TiltCard>
                <div className="glass hype-card p-8 rounded-3xl border border-card-border transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white border-b border-card-border pb-3">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-sm font-medium">
                          <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-accent-primary">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Track */}
                        <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          {/* Active Progress Bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-brand-start via-brand-mid to-brand-end"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
