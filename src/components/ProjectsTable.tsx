/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, FolderCode, X, SearchCode, Database, Cpu, Zap } from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data';

export default function ProjectsTable() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 relative text-start">
      {/* Visual background highlight */}
      <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-purple-700/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Grid heading */}
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-2 mb-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <FolderCode className="w-4 h-4 text-cyan-400" />
          CASE_STUDIES_SHOWCASE
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
          Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
      </div>

      {/* Responsive Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="rounded-xl glassmorphism border-purple-950/20 text-start flex flex-col justify-between overflow-hidden group hover:border-purple-500/30 transition-all duration-300 shadow-xl"
          >
            {/* Project Terminal Header Art */}
            <div className="h-44 bg-gradient-to-b from-gray-950 to-[#070c1e] p-5 relative overflow-hidden flex flex-col justify-between border-b border-gray-900 border-glow">
              <div className="absolute inset-0 opacity-10 scanline pointer-events-none" />
              {/* Terminal top controls */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="font-mono text-[9px] text-gray-500 tracking-wider font-bold">NODE_STREAM_A3</span>
              </div>

              {/* Central Vector Art Placeholder */}
              <div className="flex justify-center items-center h-20 relative z-10">
                <div className={`p-4 rounded-xl bg-gradient-to-tr ${project.glowColor} opacity-20 filter blur-[15px] absolute w-16 h-16`} />
                {project.id === 'proj1' && <SearchCode className="w-10 h-10 text-cyan-400 relative z-20 animate-pulse" />}
                {project.id === 'proj2' && <Cpu className="w-10 h-10 text-purple-400 relative z-20 animate-pulse" />}
                {project.id === 'proj3' && <Database className="w-10 h-10 text-emerald-400 relative z-20 animate-pulse" />}
              </div>

              {/* Metric Tag badge info */}
              <div className="flex items-center justify-between z-10 mt-auto">
                <span className="font-mono text-[9px] text-[#8b5cf6] tracking-widest font-extrabold uppercase bg-purple-950/30 border border-purple-500/10 px-2 py-0.5 rounded">
                  {project.category}
                </span>
                <span className="font-mono text-[10px] text-cyan-400 font-bold">
                  {project.metric.label}: <span className="text-white">{project.metric.value}</span>
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-display font-bold text-xl tracking-wide text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Badges and buttons wrapper */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5.5 text-[9px] font-mono tracking-wider font-semibold text-gray-400 bg-[#070a16] border border-gray-900 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-[9px] font-mono tracking-wider text-cyan-400 bg-[#070a16] border border-gray-900 rounded font-semibold">
                      +{project.techStack.length - 4} MORE
                    </span>
                  )}
                </div>

                {/* Footer action links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-900">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-1.5 text-xs font-display tracking-widest font-semibold text-white bg-purple-950/20 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 rounded-md border border-purple-500/20 hover:border-transparent cursor-pointer transition-all duration-300"
                  >
                    VIEW SPEC
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-md hover:bg-[#070b19] border border-gray-900 text-gray-400 hover:text-white transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2.5 rounded-md hover:bg-[#070b19] border border-gray-900 text-gray-400 hover:text-white transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Spec Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-2xl rounded-xl glassmorphism border-[#8b5cf6]/30 overflow-hidden shadow-2xl relative text-start flex flex-col"
            >
              {/* Cover Art in Modal */}
              <div className={`h-12 bg-gradient-to-r ${selectedProject.glowColor} flex items-center justify-between px-6`}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">PROJECT CORE MEMORY VIRTUAL</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-md bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Info */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh] flex flex-col gap-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white tracking-tight">{selectedProject.title}</h3>
                  <span className="font-mono text-xs text-cyan-400 font-bold">{selectedProject.subtitle}</span>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-gray-400 font-bold uppercase tracking-widest mb-2 border-b border-gray-900 pb-1">TECHNICAL SUMMARY:</h4>
                  <p className="text-sm text-gray-300 leading-relaxed mb-1">{selectedProject.longDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#050816] border border-purple-500/10 rounded-lg p-3 text-center">
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-500">Key Performance Metric</span>
                    <span className="block text-lg font-display font-medium text-cyan-400 mt-1">{selectedProject.metric.value}</span>
                  </div>
                  <div className="bg-[#050816] border border-purple-500/10 rounded-lg p-3 text-center">
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-500">Architecture Tier</span>
                    <span className="block text-xs font-display font-medium text-purple-400 mt-2 tracking-wide truncate">{selectedProject.category}</span>
                  </div>
                </div>

                {/* Tech stack bullets */}
                <div>
                  <h4 className="font-mono text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3 border-b border-gray-900 pb-1">DEPENDENCIES INDEX:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono tracking-wider text-white bg-[#0a0f24] border border-[#1e1b4b] rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons row */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-900 mt-2">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 text-xs tracking-wider font-mono font-bold text-center text-white bg-[#0e172a] border border-gray-800 hover:bg-[#1a2436] rounded-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    REPOSITORY
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    className="flex-1 py-3 text-xs tracking-wider font-mono font-bold text-center text-black bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 rounded-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    LAUNCH PORTAL
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
