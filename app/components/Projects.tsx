'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiFolder, FiStar, FiGitBranch, FiInfo } from 'react-icons/fi';
import { projects, Project } from '../projects';
import { useGithubRepos } from '../hooks/useGithubRepos';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsList = useMemo(
    () => projects.map((p) => ({ owner: p.owner, repoName: p.repoName })),
    []
  );
  const { getRepoDetails } = useGithubRepos(projectsList);

  // Filter projects by type
  const featuredProjects = projects.filter((p) => p.featured);
  const groupProjects = projects.filter((p) => !p.featured);

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openModal = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation(); // Avoid triggering card click
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* ================= FEATURED PROJECTS SECTION ================= */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-glow"
          >
            Featured Projects
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
            Main individual software applications demonstrating core expertise in full-stack engineering, security, and systems design.
          </motion.p>
        </div>

        {/* Large Featured Project Cards Stack */}
        <div className="flex flex-col gap-12 mb-28">
          {featuredProjects.map((project, index) => {
            const githubDetails = getRepoDetails(project.owner, project.repoName, project.githubUrl);
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={project.id}
                onClick={() => handleCardClick(githubDetails.url)}
                className="glass hype-card rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row h-full cursor-pointer group"
              >
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto lg:w-1/2 min-h-[300px] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-sm font-semibold text-slate-800 dark:text-white shadow-lg backdrop-blur-xs flex items-center gap-2">
                      <FiGithub className="w-4 h-4" />
                      View Repository
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-black text-slate-800 dark:text-white group-hover:text-[#00f2fe] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {/* GitHub Details indicator (stars) */}
                      {githubDetails.stars !== undefined && (
                        <div className="flex items-center gap-1 text-amber-500 font-mono text-sm font-semibold">
                          <FiStar className="w-4 h-4 fill-amber-500" />
                          <span>{githubDetails.stars}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-[#00f2fe]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={githubDetails.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-semibold text-sm transition-all duration-300"
                    >
                      <FiGithub className="w-4 h-4" />
                      GitHub Repo
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] hover:opacity-95 text-slate-950 font-bold text-sm transition-all duration-300 shadow-md"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <button
                      onClick={(e) => openModal(e, project)}
                      className="flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition-all duration-300 cursor-pointer ml-auto"
                      title="Read Details"
                    >
                      <FiInfo className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* ================= GROUP PROJECTS SECTION ================= */}
        <div id="group-projects" className="flex flex-col items-center text-center mb-16 pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-glow"
          >
            Group & Academic Projects
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
            Collaborative team initiatives and research assignments developed during academic coursework.
          </motion.p>
        </div>

        {/* Small Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groupProjects.map((project, index) => {
            const githubDetails = getRepoDetails(project.owner, project.repoName, project.githubUrl);

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={project.id}
                onClick={() => handleCardClick(githubDetails.url)}
                className="glass hype-card p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between gap-4 cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-[#00f2fe] group-hover:scale-110 transition-transform duration-300">
                      <FiFolder className="w-5 h-5" />
                    </div>
                    
                    {/* Stars indicator if available */}
                    {githubDetails.stars !== undefined && (
                      <div className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                        <FiStar className="w-3.5 h-3.5 fill-slate-400" />
                        <span>{githubDetails.stars}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-[#00f2fe] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-500 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-indigo-500 dark:text-[#00f2fe] flex items-center gap-1 group-hover:underline">
                    Repo Link
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative bg-white dark:bg-slate-900 max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 z-10 max-h-[90vh] flex flex-col"
              >
                {/* Header Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:text-[#00f2fe] transition-colors duration-300 shadow-md cursor-pointer"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Modal Scroll Area */}
                <div className="overflow-y-auto flex-1">
                  {/* Banner Image */}
                  {selectedProject.image && (
                    <div className="relative h-64 sm:h-80 w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-8 flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
                        {selectedProject.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-[#00f2fe]/10 dark:bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-slate-800 dark:text-white">Project Overview</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {selectedProject.detailedDescription}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href={getRepoDetails(selectedProject.owner, selectedProject.repoName, selectedProject.githubUrl).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-semibold text-sm transition-all duration-300 shadow-sm"
                      >
                        <FiGithub className="w-4 h-4" />
                        Source Code
                      </a>
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#f355da] hover:opacity-95 text-slate-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-[#00f2fe]/10"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
