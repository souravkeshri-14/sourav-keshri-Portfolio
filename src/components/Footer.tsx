/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUp, Terminal, Cpu } from 'lucide-react';
import { portfolioOwner } from '../data';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030610] border-t border-gray-950 py-10 relative text-start z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left trademark details */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white">
            <Terminal className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="font-display font-bold text-white block text-sm">
              {portfolioOwner.name}
            </span>
            <span className="font-mono text-[9px] text-purple-400 block tracking-widest uppercase">
              ELITE_STATION_SECURED_2026
            </span>
          </div>
        </div>

        {/* Muted intellectual labels */}
        <p className="font-mono text-[10px] text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()} Designed & Developed by {portfolioOwner.name} • Passionate About AI, ML & Innovation. All Rights Reserved.
        </p>

        {/* Back to top anchor */}
        <button
          onClick={handleScrollTop}
          id="scroll-to-top-btn"
          className="p-3 rounded-lg bg-slate-900 border border-purple-500/10 text-cyan-400 hover:text-white hover:bg-gradient-to-tr hover:from-cyan-500 hover:to-purple-500 hover:border-transparent cursor-pointer transition-all duration-300 shadow-md group"
          title="Return to Core Hub"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
