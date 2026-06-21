/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Award, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { timelineData } from '../data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 relative text-start">
      {/* Background radial highlight */}
      <div className="absolute top-[20%] right-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Grid heading */}
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-2 mb-2 font-mono text-purple-400 text-xs tracking-widest uppercase">
          <Zap className="w-4 h-4 text-purple-400 animate-bounce" />
          CHRONOLOGY_TRACK_RECORD
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
          Experience <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">Timeline</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mt-3" />
      </div>

      {/* Interactive Vertical Timeline Wrapper */}
      <div className="relative mt-12 pl-6 sm:pl-12 border-l border-purple-500/20 max-w-4xl mx-auto">
        
        {timelineData.map((exp, pIndex) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: pIndex * 0.15 }}
            className="mb-14 relative"
          >
            {/* Pulsing Timeline Anchor Circle Node */}
            <div className="absolute -left-[30px] sm:-left-[54px] top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#050816] border border-purple-500 flex items-center justify-center relative z-20 shadow-md">
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse" />
              {/* Outer halo */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-125 animate-ping" style={{ animationDuration: '4s' }} />
            </div>

            {/* Main Job Card */}
            <div className="p-6 sm:p-8 rounded-xl glassmorphism glassmorphism-hover border-purple-950/20 shadow-xl relative overflow-hidden group">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-transparent pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100" />
              
              {/* Header details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-gray-900">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-sm text-purple-400 font-semibold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-purple-500/10 font-mono text-xs text-gray-400 max-w-max self-start sm:self-auto shadow-inner">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </div>
              </div>

              {/* Task short summary */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements listing */}
              <div className="flex flex-col gap-3.5 mb-6">
                <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase font-semibold block flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-400" />
                  PROVEN_MILESTONES:
                </span>
                
                <ul className="flex flex-col gap-3">
                  {exp.achievements.map((ach, aIndex) => (
                    <li key={aIndex} className="flex gap-3 text-start">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-400 leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges utilized here */}
              <div className="flex flex-wrap gap-2 mt-4 p-3 rounded-lg bg-[#070b19]/60 border border-purple-900/15">
                {exp.skills.map((bStack) => (
                  <span
                    key={bStack}
                    className="px-2.5 py-1 text-[10px] font-mono tracking-wider font-semibold text-cyan-300 bg-cyan-950/25 border border-cyan-500/25 rounded-md"
                  >
                    #{bStack}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
