/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, Compass, HeartHandshake, ChevronRight, User, MapPin, GraduationCap, Calendar, Hash } from 'lucide-react';
import { portfolioOwner, educationData, personalDetailsData } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'personal'>('bio');

  const strengths = [
    {
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      title: 'Practical UAV Interfacing',
      desc: 'Hands-on experience with flight telemetry setup, sensor integrations, and Pixhawk S500 autopilot systems.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-purple-400" />,
      title: 'Aspirant Engineering Mind',
      desc: 'Pursuing a rigorous ECE B.Tech at B.I.T. Sindri, leveraging structural math, circuit sciences, and programming.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: 'Leadership & Operation',
      desc: 'Spearheaded operational networking drives as a Student Ambassador and coordinated sports structures at BIT.',
    },
    {
      icon: <User className="w-5 h-5 text-orange-400" />,
      title: 'Machine Learning Training',
      desc: 'Configuring Python supervised classifiers, data preprocessing steps, and analytical dataset models.',
    },
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 relative text-start">
      {/* Visual glowing layout backdrop */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Title block */}
      <div className="flex flex-col mb-12">
        <div className="flex items-center gap-2 mb-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <ChevronRight className="w-4 h-4 text-cyan-400 animate-pulse" />
          SYSTEM_METRICS_PROFILE
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
          About <span className="bg-gradient-to-r from-cyan-400 to-[#8b5cf6] bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column options & details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Tabs header */}
          <div className="flex border-b border-gray-800 gap-2 sm:gap-4 pb-0.5">
            <button
              id="tab-bio"
              onClick={() => setActiveTab('bio')}
              className={`pb-3 px-2 text-sm font-display tracking-wider font-semibold cursor-pointer relative transition-colors ${
                activeTab === 'bio' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              Professional Bio
              {activeTab === 'bio' && (
                <motion.div layoutId="aboutActiveTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
            <button
              id="tab-education"
              onClick={() => setActiveTab('education')}
              className={`pb-3 px-2 text-sm font-display tracking-wider font-semibold cursor-pointer relative transition-colors ${
                activeTab === 'education' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              Academic Qualifications
              {activeTab === 'education' && (
                <motion.div layoutId="aboutActiveTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500" />
              )}
            </button>
            <button
              id="tab-personal"
              onClick={() => setActiveTab('personal')}
              className={`pb-3 px-2 text-sm font-display tracking-wider font-semibold cursor-pointer relative transition-colors ${
                activeTab === 'personal' ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              Personal Details
              {activeTab === 'personal' && (
                <motion.div layoutId="aboutActiveTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400" />
              )}
            </button>
          </div>

          {/* Tab Content 1: Bio */}
          {activeTab === 'bio' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 mt-2"
            >
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-wide">
                Bridging Hardware Dynamics & Intelligent Software Algorithms.
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                I am an Electronics and Communication Engineering undergraduate at <strong>B.I.T. Sindri</strong>, who is deeply passionate about developing intelligent, efficient programs. My academic background and hands-on projects train me to work effectively across both hardware and software systems.
              </p>
              <p className="text-gray-300 leading-relaxed text-base">
                Whether deploying and tuning autonomous <strong>UAV Hexacopters (Pixhawk S500)</strong> at IIT ISM Dhanbad, preprocessing statistical dataset indices for machine learning frameworks, or implementing optimized algorithm scripts in Python, I am dedicated to clean code, systematic troubleshooting, and persistent growth.
              </p>

              {/* Strengths card items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {strengths.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg glassmorphism border-purple-950/20 text-start group hover:border-[#8b5cf6]/35 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-md bg-[#0e172a] border border-gray-800 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-display font-semibold text-white text-base tracking-wide mb-1.5">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab Content 2: Education */}
          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 mt-2"
            >
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-wide flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                Academic Qualifications
              </h3>
              <div className="flex flex-col gap-4">
                {educationData.map((edu, idx) => (
                  <div
                    key={edu.id}
                    className="p-5 rounded-xl border border-gray-800 bg-[#070b19]/60 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300 text-start"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/[0.01] rounded-full filter blur-xl pointer-events-none" />
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                          {edu.level}
                        </h4>
                        <p className="text-sm text-cyan-400 font-mono mt-0.5">{edu.institute}</p>
                      </div>
                      <span className="px-3 py-1 font-mono text-xs bg-purple-950/40 border border-purple-500/20 text-purple-300 rounded-full flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-900 flex justify-between items-center flex-wrap gap-2 text-sm">
                      <span className="text-gray-400 text-xs tracking-wider uppercase font-mono">
                        Affiliation: {edu.board}
                      </span>
                      <span className="font-mono text-emerald-400 font-bold bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-500/10 text-xs">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab Content 3: Personal Details */}
          {activeTab === 'personal' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 mt-2 animate-fade-in"
            >
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-wide">
                Undergraduate Identity & Background
              </h3>
              <div className="p-6 rounded-xl border border-gray-800 bg-[#070b19]/60 backdrop-blur-md relative text-start">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/[0.01] rounded-full filter blur-2xl pointer-events-none" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  
                  <div className="flex flex-col border-b border-gray-900 pb-2.5">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-0.5">Full Name</span>
                    <span className="text-sm font-semibold text-white tracking-wide">{portfolioOwner.name}</span>
                  </div>

                  <div className="flex flex-col border-b border-gray-900 pb-2.5">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-0.5">Registration Number</span>
                    <span className="text-sm font-mono text-cyan-400 font-semibold">{personalDetailsData.registrationNo}</span>
                  </div>

                  <div className="flex flex-col border-b border-gray-900 pb-2.5">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-0.5">Father's Name</span>
                    <span className="text-sm font-semibold text-white tracking-wide">{personalDetailsData.fatherName} <span className="text-xs text-gray-400">({personalDetailsData.fatherOccupation})</span></span>
                  </div>

                  <div className="flex flex-col border-b border-gray-900 pb-2.5">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-0.5">Mother's Name</span>
                    <span className="text-sm font-semibold text-white tracking-wide">{personalDetailsData.motherName} <span className="text-xs text-gray-400">({personalDetailsData.motherOccupation})</span></span>
                  </div>

                  <div className="flex flex-col border-b border-gray-900 pb-2.5">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-0.5">Academic Batch</span>
                    <span className="text-sm font-semibold text-purple-300 font-mono">{personalDetailsData.batch}</span>
                  </div>

                  <div className="flex flex-col border-b border-gray-900 pb-2.5">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-0.5">Institute</span>
                    <span className="text-sm font-semibold text-white">{portfolioOwner.company}</span>
                  </div>

                  <div className="flex flex-col md:col-span-2 pb-1.5">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mb-1">Permanent Address</span>
                    <span className="text-xs text-gray-300 leading-relaxed flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      {personalDetailsData.address}
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Right column: High-Tech Profile Portrait Display */}
        <div className="lg:col-span-5 flex justify-center py-6 px-4 lg:px-4 sticky top-24">
          <div className="relative w-80 h-96 sm:w-85 sm:h-[450px] flex items-center justify-center">
            
            {/* Holographic background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-[#8b5cf6]/5 to-transparent rounded-2xl filter blur-xl animate-pulse" />

            {/* Scientific vector grid border lines */}
            <div className="absolute -inset-1 rounded-2xl border border-dashed border-cyan-500/10 animate-spin" style={{ animationDuration: '60s' }} />
            <div className="absolute -inset-3 rounded-2xl border border-purple-500/5 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }} />

            {/* Cybernetic Tech Frame containing profile picture */}
            <div className="absolute inset-0 rounded-2xl bg-[#030712] border border-gray-800/80 overflow-hidden shadow-2xl flex flex-col p-4 group hover:border-[#8b5cf6]/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.18),_0_0_35px_rgba(139,92,246,0.18)] transition-all duration-500">
              
              {/* Scanline sweep */}
              <div className="absolute inset-0 scanline opacity-20 pointer-events-none z-10" />

              {/* Photo viewport */}
              <div className="relative w-full h-[80%] rounded-2xl overflow-hidden border border-gray-900 bg-slate-950 flex items-center justify-center">
                
                {/* Image element with real-time placeholder handling */}
                <img
                  src={portfolioOwner.avatarUrl}
                  alt={portfolioOwner.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[50%_14%] group-hover:scale-[1.03] transition-transform duration-500 ease-out relative z-20"
                  onError={(e) => {
                    // Fallback to high-tech SVG if image has path errors or loading delays
                    console.log("Avatar image failed to load, presenting integrated fallback");
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('#fallback-vector');
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                />

                {/* High tech modular SVG fallback with initials */}
                <div id="fallback-vector" className="hidden absolute inset-0 flex flex-col items-center justify-center bg-[#070d1e] z-10 text-center p-6 border border-cyan-500/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-dashed border-cyan-500/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-pulse">
                    <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">SK</span>
                  </div>
                  <span className="font-mono text-xs text-gray-300 font-bold uppercase tracking-widest">{portfolioOwner.name}</span>
                  <span className="font-mono text-[9px] text-[#8b5cf6] tracking-wider uppercase mt-1">SYS_FALLBACK_ACTIVE</span>
                </div>

                {/* Focus indicator bracket corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-30" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-30" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 z-30" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 z-30" />

                {/* System coordinate telemetry overlays */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/75 border border-gray-800 font-mono text-[8px] tracking-widest text-cyan-400 z-30">
                  AUTO_FOCUS: ACTIVE
                </div>

                <div className="absolute bottom-3 left-4 font-mono text-[8px] tracking-wider text-gray-400 z-30 bg-black/60 px-2 py-1 rounded">
                  SYS_REG: {personalDetailsData.registrationNo}
                </div>
              </div>

              {/* Bio signature header under photo */}
              <div className="mt-4 flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="font-display font-bold text-white tracking-wide text-sm">{portfolioOwner.name}</span>
                  <span className="font-mono text-[9px] tracking-wider text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping inline-block" />
                    ONLINE_NODE
                  </span>
                </div>
                <p className="font-mono text-[10px] text-gray-400 mt-1 leading-relaxed">
                  B.Tech ECE Undergraduate • batch {personalDetailsData.batch}
                </p>
                <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-gray-900/60 font-mono text-[9px]">
                  <span className="text-cyan-400">CLASS_OF_2028</span>
                  <span className="text-purple-400 font-medium">B.I.T. Sindri</span>
                </div>
              </div>

            </div>

            {/* Drift badges around image bounds */}
            <div className="absolute -top-3 -left-4 glassmorphism border-emerald-500/30 font-mono text-[9px] text-emerald-300 px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ECE_BRANCH
            </div>
            <div className="absolute bottom-2 -right-4 glassmorphism border-purple-500/30 font-mono text-[9px] text-purple-300 px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-30">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              BIT BY BIT '26_FNL
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
