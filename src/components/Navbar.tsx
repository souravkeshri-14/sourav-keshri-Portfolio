/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Download, Cpu, Sparkles } from 'lucide-react';
import { portfolioOwner } from '../data';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollToSection, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom interactive CV simulator states
  const [cvCompiling, setCvCompiling] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);
  const [compileStep, setCompileStep] = useState('');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCVDownloadSimulate = () => {
    if (cvCompiling) return;
    setCvCompiling(true);
    setCompileProgress(10);
    setCompileStep('Initializing Neural Compilation...');

    const steps = [
      { prg: 25, msg: 'Loading candidate metadata: Sourav Keshri...' },
      { prg: 45, msg: 'Resolving Full-Stack & AI platform vectors...' },
      { prg: 65, msg: 'Binding experience benchmarks (NeuralForge, QuantumSaaS)...' },
      { prg: 85, msg: 'Injecting verified credentials (AWS, GCP Cloud)...' },
      { prg: 95, msg: 'Finalizing formatting & compiling PDF nodes...' },
      { prg: 100, msg: 'Ready! Launching document viewport.' },
    ];

    let currentStepIndex = 0;
    const interval = setInterval(() => {
      if (currentStepIndex < steps.length) {
        setCompileProgress(steps[currentStepIndex].prg);
        setCompileStep(steps[currentStepIndex].msg);
        currentStepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCvCompiling(false);
          // Standard print view fallback / interactive clean layout pop-out
          const win = window.open('', '_blank');
          if (win) {
            win.document.write(`
              <html>
                <head>
                  <title>Resume - Sourav Keshri</title>
                  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                  <style>
                    body { background-color: #0b0f19; color: #f3f4f6; font-family: system-ui, sans-serif; }
                  </style>
                </head>
                <body class="p-8 max-w-4xl mx-auto">
                  <div class="border-b-2 border-purple-500 pb-4 mb-6">
                    <h1 class="text-4xl font-bold text-white tracking-wide">SOURAV KUMAR KESHRI</h1>
                    <p class="text-xl text-purple-400 font-medium">Electronics & Communication Engineering</p>
                    <p class="text-gray-400 mt-2">Email: sourav.eceug24@bitsindri.ac.in | Phone: +91 9905965120 | Location: Dhanbad, Jharkhand, India</p>
                  </div>
                  
                  <div class="mb-6">
                    <h2 class="text-2xl font-semibold text-white mb-2">OBJECTIVE</h2>
                    <p class="text-gray-300">A dedicated ECE student eager to learn, grow, and contribute through teamwork, innovation, and continuous skill development.</p>
                  </div>
                  
                  <div class="mb-6">
                    <h2 class="text-2xl font-semibold text-white mb-2">EDUCATION</h2>
                    <div class="mb-3">
                      <div class="flex justify-between font-medium">
                        <span class="text-purple-300">B.Tech in Electronics and Communication Engineering</span>
                        <span class="text-gray-400">2024 - 2028 (Expected)</span>
                      </div>
                      <p class="text-sm text-gray-400">B.I.T. Sindri, Dhanbad (JUT) | 7.15 CGPA (First Semester)</p>
                    </div>
                    <div class="mb-3">
                      <div class="flex justify-between font-medium">
                        <span class="text-purple-300">Senior Secondary School (Class XII) - CBSE</span>
                        <span class="text-gray-400">2023 Passing</span>
                      </div>
                      <p class="text-sm text-gray-400">DAV Public School Ara Kuju Ramgarh | 84.0%</p>
                    </div>
                    <div class="mb-3">
                      <div class="flex justify-between font-medium">
                        <span class="text-purple-300">Secondary School (Class X) - CBSE</span>
                        <span class="text-gray-400">2021 Passing</span>
                      </div>
                      <p class="text-sm text-gray-400">DAV Public School Ara Kuju Ramgarh | 80.4%</p>
                    </div>
                  </div>

                  <div class="mb-6">
                    <h2 class="text-2xl font-semibold text-white mb-3">PRACTICAL TRAINING & INTERNSHIPS</h2>
                    <div class="mb-4">
                      <div class="flex justify-between font-medium">
                        <span class="text-purple-300">Drone Bootcamp Participant - IIT (ISM) Dhanbad</span>
                        <span class="text-gray-400">June 2025</span>
                      </div>
                      <p class="text-sm text-gray-400">Assembled and calibrated Pixhawk S500 Hexacopter. Hands-on experience with drone sensors, GPS modules, and real-time telemetry streaming.</p>
                    </div>
                    <div class="mb-4">
                      <div class="flex justify-between font-medium">
                        <span class="text-purple-300">Machine Learning Intern - Codtech IT Solutions</span>
                        <span class="text-gray-400">4 Weeks</span>
                      </div>
                      <p class="text-sm text-gray-400">Designed and verified supervised machine learning models. Preprocessed dataset parameters using Python, NumPy, Pandas, and Scikit-Learn.</p>
                    </div>
                    <div class="mb-4">
                      <div class="flex justify-between font-medium">
                        <span class="text-purple-300">Python Programming Intern - CodeSoft</span>
                        <span class="text-gray-400">4 Weeks</span>
                      </div>
                      <p class="text-sm text-gray-400">Authored native object-oriented applications, custom sorting structures, and algorithm solutions.</p>
                    </div>
                  </div>

                  <div class="mb-6">
                    <h2 class="text-2xl font-semibold text-white mb-2">TECHNICAL STACK</h2>
                    <p class="text-gray-300"><strong>Programming Languages:</strong> Python, C/C++ Basics</p>
                    <p class="text-gray-300"><strong>Web Technologies:</strong> HTML5, CSS3, Basics of Javascript & React.js</p>
                    <p class="text-gray-300"><strong>Database Systems:</strong> MySQL (DBMS Queries)</p>
                    <p class="text-gray-300"><strong>Robotics & ML:</strong> UAV Assembly, Telemetry Systems, Sensor calibration, Scikit-Learn, NumPy, Pandas</p>
                  </div>

                  <div class="mb-6">
                    <h2 class="text-2xl font-semibold text-white mb-2">ACHIEVEMENTS</h2>
                    <p class="text-gray-300">• Advanced to Round 2 (offline finals) in **BIT BY BIT Hackathon** at IIIT Bhagalpur (Enyugma 2026).</p>
                    <p class="text-gray-300">• Awarded **Certificate of Excellence** in Student Ambassador Program (Feb 2026).</p>
                  </div>

                  <div class="mt-8 text-center text-xs text-gray-500">
                    Compiled automatically via Sourav's Dynamic Resume Core. © 2026.
                  </div>
                  <script>window.print();</script>
                </body>
              </html>
            `);
            win.document.close();
          }
        }, 800);
      }
    }, 450);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050816]/90 backdrop-blur-md shadow-lg border-b border-[#1f293d]/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onScrollToSection('hero')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity" />
              <Terminal className="w-5 h-5 text-white relative z-10 transition-transform group-hover:scale-110" />
            </div>
            <div className="text-left">
              <span className="text-white font-display font-medium tracking-wide text-lg block">
                {portfolioOwner.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase -mt-0.5 flex items-center gap-1.5 transition-all duration-300 drop-shadow-[0_0_3px_rgba(34,211,238,0.45)] hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] hover:text-cyan-300">
                <span className="animate-pulse inline-block text-cyan-400 select-none text-[12px] leading-none shrink-0" style={{ transform: 'translateY(-0.5px)' }}>◉</span>
                ML_ENGINEER_IN_PROGRESS
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className={`relative font-display text-sm tracking-wide font-medium cursor-pointer py-1 transition-colors hover:text-white ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="cv-download-btn"
              onClick={handleCVDownloadSimulate}
              disabled={cvCompiling}
              className="px-4 py-2 text-xs font-mono tracking-wider font-semibold text-white shadow-md relative rounded-md border border-purple-500/30 bg-purple-950/20 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 flex items-center gap-2 pointer-events-auto cursor-pointer select-none hover:shadow-[0_0_15px_rgba(139,92,246,0.35)]"
            >
              {cvCompiling ? (
                <>
                  <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                  COMPILING_PDF
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  COMPILE_CV
                </>
              )}
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Floating Interactive Compilation Panel */}
      <AnimatePresence>
        {cvCompiling && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ zIndex: 100 }}
            className="fixed bottom-6 right-6 p-5 w-80 max-w-full rounded-xl glassmorphism border-purple-500/30 text-start overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 h-[3px] bg-cyan-400 transition-all duration-300" style={{ width: `${compileProgress}%` }} />
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#a855f7] flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                Resume Compiler v2.6
              </span>
              <span className="text-xs font-mono text-cyan-400 font-bold">{compileProgress}%</span>
            </div>
            <p className="text-xs font-mono text-gray-300 bg-[#070b19] p-2.5 rounded border border-[#1f293d] mt-1 break-words">
              {compileStep}
            </p>
            <div className="h-1.5 w-full bg-[#0a1024] rounded-full overflow-hidden mt-3">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-[#8b5cf6] transition-all duration-300" style={{ width: `${compileProgress}%` }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#050816] border-b border-[#1f293d] shadow-2xl py-6 px-6 lg:hidden flex flex-col gap-4 text-start"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToSection(item.id);
                }}
                className={`py-2 text-display text-base font-medium tracking-wide border-b border-gray-900 text-left transition-all ${
                  activeSection === item.id ? 'text-cyan-400 pl-2' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCVDownloadSimulate();
              }}
              className="mt-4 px-4 py-3 text-center text-sm font-mono tracking-wider font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(139,92,246,0.3)]"
            >
              <Download className="w-4 h-4" />
              COMPILE & EXPORT CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
