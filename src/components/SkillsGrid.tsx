/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Atom, Server, Database, Cloud, BrainCircuit, Terminal } from 'lucide-react';
import { skillsData } from '../data';

export default function SkillsGrid() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'databases' | 'devops' | 'ai_ml'>('all');

  const categories = [
    { id: 'all', label: 'All Skillsets', icon: <Terminal className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Atom className="w-4 h-4 text-cyan-400" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4 text-purple-400" /> },
    { id: 'databases', label: 'Data Stores', icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { id: 'devops', label: 'AWS & DevOps', icon: <Cloud className="w-4 h-4 text-blue-400" /> },
    { id: 'ai_ml', label: 'AI & Agents', icon: <BrainCircuit className="w-4 h-4 text-orange-400" /> },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 relative text-start">
      {/* Visual neon background drop */}
      <div className="absolute top-[40%] left-10 w-[250px] h-[250px] bg-cyan-700/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Grid heading */}
      <div className="flex flex-col mb-12">
        <div className="flex items-center gap-2 mb-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          TECHNICAL_STACK_INDEX
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
          My <span className="bg-gradient-to-r from-cyan-400 to-[#8b5cf6] bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
      </div>

      {/* Category selector filters */}
      <div className="flex flex-wrap items-center gap-2.5 mb-11 p-2 rounded-xl bg-[#0a0f24]/80 border border-gray-900/60 w-max max-w-full">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`px-4 py-2 text-xs font-mono font-medium tracking-wide rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
              filter === cat.id
                ? 'bg-[#1e1b4b] text-white border border-purple-500/30 font-bold'
                : 'text-gray-400 hover:text-white hover:bg-slate-900 border border-transparent'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills list layout with animate layout state */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={skill.name}
              className="p-5 rounded-lg glassmorphism border-purple-950/20 text-start relative overflow-hidden group hover:border-[#8b5cf6]/30 transition-all"
            >
              {/* Internal neon marker line */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 to-purple-600 opacity-60 group-hover:opacity-100" />
              
              {/* Information row */}
              <div className="flex justify-between items-center mb-3">
                <span className="font-display text-sm font-semibold tracking-wide text-white">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-cyan-400 font-bold bg-[#070b19] px-2 py-0.5 rounded border border-gray-900">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Tracker Slider Bar */}
              <div className="h-1.5 w-full bg-[#0a1024] rounded-full overflow-hidden mt-2 border border-gray-900/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-[#8b5cf6]"
                />
              </div>

              {/* Skill category marker */}
              <div className="flex items-center gap-1.5 mt-3">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                  CLS_VECT // {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
