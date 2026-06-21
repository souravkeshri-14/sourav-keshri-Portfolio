/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, Sword, Camera, Compass, Sparkles, Heart } from 'lucide-react';
import { hobbiesData } from '../data';

export default function Hobbies() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      case 'Sword':
        return <Sword className="w-6 h-6 text-rose-400" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-purple-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="hobbies" className="py-24 max-w-7xl mx-auto px-6 relative text-start">
      {/* Decorative pulse blur */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Grid heading */}
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-2 mb-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <Heart className="w-4 h-4 text-cyan-400 animate-pulse" />
          SYSTEM_HUMAN_PARAMETERS
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
          Hobbies & <span className="bg-gradient-to-r from-cyan-400 to-[#8b5cf6] bg-clip-text text-transparent">Interests</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
      </div>

      {/* Hobbies list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbiesData.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="p-6 rounded-xl glassmorphism glassmorphism-hover border-purple-950/20 text-start flex flex-col justify-between overflow-hidden relative group shadow-md"
          >
            <div>
              {/* Icon anchor */}
              <div className="w-12 h-12 rounded-lg bg-[#0e172a] border border-gray-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getIcon(hobby.iconName)}
              </div>

              <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors tracking-wide mb-2">
                {hobby.name}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                {hobby.description}
              </p>
            </div>

            {/* Tag block */}
            <div className="mt-auto">
              <span className="inline-block px-2.5 py-1 text-[9px] font-mono tracking-wider font-semibold text-purple-300 bg-purple-950/20 border border-purple-500/10 rounded">
                {hobby.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
