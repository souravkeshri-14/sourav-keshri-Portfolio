/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Trophy, Award, Medal, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { achievementsData } from '../data';

export default function Achievements() {
  const getIcon = (type: 'award' | 'certification' | 'competition') => {
    switch (type) {
      case 'competition':
        return <Trophy className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />;
      case 'certification':
        return <Award className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'award':
        return <Medal className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="achievements" className="py-24 max-w-7xl mx-auto px-6 relative text-start">
      {/* Decorative pulse blur */}
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Grid heading */}
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-2 mb-2 font-mono text-purple-400 text-xs tracking-widest uppercase">
          <Medal className="w-4 h-4 text-purple-400 animate-bounce" />
          SYSTEM_VERIFICATION_CREDENTIALS
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
          Achievements & <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">Awards</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mt-3" />
      </div>

      {/* Achievement grid cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {achievementsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="p-6 rounded-xl glassmorphism glassmorphism-hover border-purple-950/20 flex gap-5 items-start relative overflow-hidden group shadow-lg"
          >
            {/* Visual Icon Container */}
            <div className="w-12 h-12 rounded-lg bg-slate-900 border border-purple-950/45 flex items-center justify-center shrink-0 shadow-inner group-hover:border-purple-500/30 transition-colors">
              {getIcon(item.type)}
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-1 flex-grow">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-bold">
                {item.type} // {item.date}
              </span>
              <h3 className="font-display font-semibold text-lg hover:text-cyan-400 transition-colors tracking-wide text-white leading-tight">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-purple-300 font-medium">
                {item.issuer}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed mt-2.5">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
