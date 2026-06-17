'use client';

import { motion, Variants } from 'framer-motion';
import { FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';
import Experience from './Experience';
import TiltCard from './TiltCard';

const stats = [
  { label: 'Projects Completed', value: '12+', icon: FiBriefcase, color: 'from-blue-500 to-indigo-500' },
  { label: 'Technologies Learned', value: '15+', icon: FiAward, color: 'from-purple-500 to-pink-500' },
  { label: 'Years of Learning', value: '3+', icon: FiBookOpen, color: 'from-pink-500 to-rose-500' },
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[4px] rounded-full bg-gradient-to-r from-brand-start to-brand-end"
          />
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Biography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <TiltCard>
                <div className="glass hype-card p-8 rounded-3xl border border-card-border h-full">
                  <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white flex items-center gap-2">
                    Who I Am
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Hello! I&apos;m Vihanga, a Software Engineering honors student and full-stack developer with a drive to create elegant, scalable, and responsive applications. My software engineering journey is built on a passion for continuous learning and architectural excellence.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I enjoy bridging the gap between back-end robustness and front-end interactivity. Using technologies like Next.js, Spring Boot, and Docker, I aim to construct clean architectures that guarantee top-tier user experiences.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TiltCard>
                <div className="glass hype-card p-8 rounded-3xl border border-card-border h-full">
                  <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                    Education & Goals
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">
                        B.Sc. (Hons) in Software Engineering
                      </h4>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">University of Kelaniya • 2023 - 2026</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Specialized in software design, database optimizations, and system integrations.</p>
                    </div>
                    <div className="pt-2 border-t border-card-border">
                      <h4 className="font-semibold text-slate-800 dark:text-white">Career Vision</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        To work in highly collaborative product environments, architecting SaaS solutions that address real-world business challenges. I aspire to deepen my expertise in cloud-native infrastructure, system scaling, and AI integrations.
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>

          {/* Stats Cards Section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.1 }}
                  className="w-full"
                >
                  <TiltCard>
                    <div className="glass hype-card flex items-center p-6 rounded-3xl border border-card-border h-full w-full">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mr-6 shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-3xl font-black tracking-tight text-slate-800 dark:text-white">
                          {stat.value}
                        </span>
                        <span className="block text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Experience Timeline Integration */}
        <div className="mt-24 pt-16 border-t border-card-border">
          <Experience />
        </div>

      </div>
    </section>
  );
}
