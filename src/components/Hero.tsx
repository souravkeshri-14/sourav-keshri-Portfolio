/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, HeartHandshake, Shield, Sparkles, Network } from 'lucide-react';
import { portfolioOwner } from '../data';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [titlesIndex, setTitlesIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'ECE Undergraduate',
    'B.I.T. Sindri Student',
    'Python & Web Developer',
    'Machine Learning Intern',
    'Drone Design Enthusiast',
  ];

  // Simulated Typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = titles[titlesIndex];
    const speed = isDeleting ? 40 : 120;

    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentFullText.slice(0, typedText.length + 1));
        if (typedText === currentFullText) {
          // Pause at completion
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setTypedText(currentFullText.slice(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setTitlesIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titlesIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden cyber-grid text-start"
    >
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-purple-700/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full filter blur-[110px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full items-center">
        {/* Left Column Text details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-mono tracking-wider text-purple-300 mb-6 max-w-max"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
            SYSTEM_INTEGRITY_VERIFIED_2026
          </motion.div>

          {/* Intro Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent text-glow font-extrabold">{portfolioOwner.name}</span>
          </motion.h1>

          {/* Typing Display */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="h-10 sm:h-12 flex items-center mt-3 mb-6"
          >
            <p className="font-mono text-lg sm:text-2xl font-semibold tracking-wide text-cyan-400 flex items-center">
              <span className="text-gray-400 mr-2">&gt;</span>
              {typedText}
              <span className="inline-block w-2.5 h-6 ml-2 bg-purple-500 animate-pulse" />
            </p>
          </motion.div>

          {/* Tagline description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
          >
            {portfolioOwner.tagline}
          </motion.p>

          {/* Metrics highlights inside hero cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-8 max-w-md"
          >
            <div className="glassmorphism p-3.5 rounded-lg text-center border-purple-900/40">
              <span className="block font-display text-xl sm:text-2xl font-bold text-white tracking-tight">7.15</span>
              <span className="block font-mono text-[10px] tracking-wider text-gray-400 uppercase">First Sem CGPA</span>
            </div>
            <div className="glassmorphism p-3.5 rounded-lg text-center border-purple-900/40">
              <span className="block font-display text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight">4+</span>
              <span className="block font-mono text-[10px] tracking-wider text-gray-400 uppercase">Internships & boot</span>
            </div>
            <div className="glassmorphism p-3.5 rounded-lg text-center border-purple-900/40">
              <span className="block font-display text-xl sm:text-2xl font-bold text-purple-400 tracking-tight">S500</span>
              <span className="block font-mono text-[10px] tracking-wider text-gray-400 uppercase">UAV Platform</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              id="cta-work"
              onClick={() => onScrollToSection('projects')}
              className="px-6 py-3.5 text-sm font-display tracking-wider font-semibold text-white bg-gradient-to-r from-cyan-500 hover:from-cyan-400 to-[#8b5cf6] hover:to-[#a855f7] rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/10 flex items-center gap-2 transition-all transform hover:-translate-y-[2px] cursor-pointer"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="cta-connect"
              onClick={() => onScrollToSection('contact')}
              className="px-6 py-3.5 text-sm font-display tracking-wider font-semibold text-gray-300 hover:text-white bg-[#0e172a] hover:bg-[#1a2436] rounded-lg border border-gray-800 hover:border-purple-500/30 transition-all transform hover:-translate-y-[2px] flex items-center gap-2 cursor-pointer"
            >
              Connect With Me
            </button>
          </motion.div>
        </div>

        {/* Right Column Cyber Sphere Visuals */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-80 h-80 sm:w-96 sm:h-96 rounded-full relative flex items-center justify-center animate-float-slow"
          >
            {/* Outer Spinning Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-spin" style={{ animationDuration: '30s' }} />
            {/* Second Spinning Ring */}
            <div className="absolute inset-4 rounded-full border border-[#8b5cf6]/20 border-t-2 border-r-2 border-t-purple-500 border-r-cyan-400 animate-spin" style={{ animationDuration: '12s' }} />
            {/* Third Counter-Spinning Ring */}
            <div className="absolute inset-10 rounded-full border border-gray-800 border-b-2 border-l-2 border-b-cyan-500 border-l-purple-500 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />

            {/* Core Neural Visual Nodes using HTML/SVGs */}
            <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[#0f172a] to-[#1e1b4b] flex items-center justify-center shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#8b5cf6]/10 mix-blend-color-dodge filter blur-[15px] animate-pulse" />
              <Network className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-500 relative z-10" />
              <div className="absolute inset-0 scanline pointer-events-none opacity-40" />
            </div>

            {/* Drifting Modular Technology Floating Badges - Absolute positions around core */}
            {/* Node 1: React */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 glassmorphism border-cyan-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-xs text-cyan-300 font-bold tracking-tight">Python / DSA</span>
            </motion.div>

            {/* Node 2: TypeScript */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-10 -translate-y-1/2 glassmorphism border-purple-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span className="font-mono text-xs text-purple-300 font-bold tracking-tight">HTML / React</span>
            </motion.div>

            {/* Node 3: Express / Node */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glassmorphism border-emerald-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-xs text-emerald-300 font-bold tracking-tight">DBMS / MySQL</span>
            </motion.div>

            {/* Node 4: LLMs / Gemini */}
            <motion.div
              animate={{ y: [0, 7, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1.5 }}
              className="absolute top-1/2 -left-10 -translate-y-1/2 glassmorphism border-violet-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              <span className="font-mono text-xs text-violet-300 font-bold tracking-tight">UAV & ML</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
