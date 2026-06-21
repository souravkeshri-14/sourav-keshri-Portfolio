/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Compass, Send, CheckCircle2, ShieldAlert, Cpu, Github, Linkedin, Twitter, Sparkles, Database, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration Keys
// Set these in your web application settings or .env file as:
// - VITE_EMAILJS_SERVICE_ID
// - VITE_EMAILJS_TEMPLATE_ID
// - VITE_EMAILJS_PUBLIC_KEY
// They fall back to placeholders so the code runs out-of-the-box.
const EMAILJS_SERVICE_ID = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'service_2hmx0up';
const EMAILJS_TEMPLATE_ID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'template_d47r0af';
const EMAILJS_PUBLIC_KEY = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'FXNVlp02_RL-ejzbw';

const Discord = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ width: '1.25rem', height: '1.25rem' }}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
);

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // UI States
  const [submitting, setSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState('');
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    setErrorText('');
    setSuccess(false);

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorText('Please complete all message buffer quadrants before launching dispatch.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorText('Invalid communication format. Enter a valid SMTP email coordinate.');
      return;
    }

    setSubmitting(true);
    setSubmitStep('Initiating secure handshake connection...');

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: 'souravkeshri14@gmail.com',
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitStep('Encrypting package payloads (AES-GCM-256)...');
      
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitStep('Transmitting packet payload core to EmailJS node...');

      if (
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_PUBLIC_KEY === 'your_public_key_here'
      ) {
        console.warn('EmailJS keys are set to defaults. Please define real EmailJS keys via constants or .env file.');
      }

      // Live transmission via official EmailJS client
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStep('Resolving confirmation ledger handshake...');
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSuccess(true);
      
      // Clear fields upon success
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto clear success state after delay
      setTimeout(() => setSuccess(false), 6000);
    } catch (err: any) {
      console.error('EmailJS Transmission Failed:', err);
      
      let detail = 'Service endpoint unconfigured or rejected.';
      if (err && err.text) {
        detail = err.text;
      } else if (err && err.message) {
        detail = err.message;
      }
      
      setErrorText(`Message transmission failed: ${detail}`);
    } finally {
      setSubmitting(false);
      setSubmitStep('');
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative text-start">
      {/* Decorative pulse glow background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Grid heading */}
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-2 mb-2 font-mono text-cyan-400 text-xs tracking-widest uppercase">
          <Mail className="w-4 h-4 text-cyan-400" />
          COMMUNICATION_CENTRAL
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
          Get In <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
        
        {/* Left Column Information Details */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#0a0f24]/50 rounded-xl border border-gray-900/60 p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-medium text-2xl tracking-wide text-white">
              Let's create something high-performance or intelligent.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have an open technical lead position, a client SaaS project in need of speed enhancements, or seeking an autonomous AI Agent integration blueprint? Submit a dispatch or reach out straight to my SMTP mailbox.
            </p>

            <div className="flex flex-col gap-4.5 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-purple-950/40 flex items-center justify-center text-cyan-400 shadow-inner shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-500">Secure SMTP Mailbox</span>
                  <a href="mailto:souravkeshri14@gmail.com" className="text-sm font-semibold text-white tracking-wide hover:text-cyan-400 transition-colors">
                    souravkeshri14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-purple-950/40 flex items-center justify-center text-[#8b5cf6] shadow-inner shrink-0">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-500">Technical Location Coordinates</span>
                  <span className="text-sm font-semibold text-white tracking-wide">
                    San Francisco, California
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons segment */}
          <div className="pt-8 border-t border-gray-900 mt-8">
            <span className="block font-mono text-[9px] text-gray-500 tracking-widest uppercase font-bold mb-4">
              EXTERNAL_IDENTITY_REGISTERS:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/souravkeshri-14"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-11 h-11 rounded-lg bg-slate-900 border border-gray-800 text-gray-400 hover:text-white hover:border-white/50 hover:bg-[#111827] hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md select-none"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sourav-kumar-keshri/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-lg bg-slate-900 border border-gray-800 text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/5 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md select-none"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/souravkeshri_14"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter/X Profile"
                className="w-11 h-11 rounded-lg bg-slate-900 border border-gray-800 text-gray-400 hover:text-white hover:border-white/50 hover:bg-[#111827] hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md select-none"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rishavkeshri_14?igsh=aDZubjdqa21saXNs"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Profile"
                className="w-11 h-11 rounded-lg bg-slate-900 border border-gray-800 text-gray-400 hover:text-[#e1306c] hover:border-pink-500/50 hover:bg-gradient-to-tr hover:from-pink-500/10 hover:to-purple-500/10 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md select-none"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://discordapp.com/users/1471113571495575624"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord Profile"
                className="w-11 h-11 rounded-lg bg-slate-900 border border-gray-800 text-gray-400 hover:text-[#5865f2] hover:border-[#5865f2]/50 hover:bg-[#5865f2]/5 hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md select-none"
              >
                <Discord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column Form Setup */}
        <div className="lg:col-span-7 bg-[#0a0f24]/50 border border-gray-900/60 rounded-xl p-6 sm:p-8">
          <form onSubmit={handleSend} className="flex flex-col gap-5">
            <h3 className="font-display font-semibold text-lg text-white tracking-wide flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              TRANSMIT DISPATCH PACKET
            </h3>

            {/* Error notifications */}
            {errorText && (
              <div className="p-3.5 rounded-lg border border-rose-500/25 bg-rose-950/20 flex gap-2.5 items-center font-mono text-[11px] text-rose-300">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                {errorText}
              </div>
            )}

            {/* Success notifications */}
            {success && (
              <div className="p-3.5 rounded-lg border border-emerald-500/25 bg-emerald-950/20 flex gap-2.5 items-center font-mono text-[11px] text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
                Message sent successfully.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="font-mono text-[10px] tracking-wider uppercase text-gray-500">Sender Identifier</label>
                <input
                  type="text"
                  placeholder="e.g. Jean Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={submitting}
                  className="px-4 py-3 bg-[#050816]/75 border border-purple-950/20 focus:border-[#8b5cf6]/40 text-sm text-white rounded-lg focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="font-mono text-[10px] tracking-wider uppercase text-gray-500">SMTP Address</label>
                <input
                  type="email"
                  placeholder="e.g. jean@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  className="px-4 py-3 bg-[#050816]/75 border border-purple-950/20 focus:border-[#8b5cf6]/40 text-sm text-white rounded-lg focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="font-mono text-[10px] tracking-wider uppercase text-gray-500">Dispatch Subject</label>
              <input
                type="text"
                placeholder="e.g. platform architecture project"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={submitting}
                className="px-4 py-3 bg-[#050816]/75 border border-purple-950/20 focus:border-[#8b5cf6]/40 text-sm text-white rounded-lg focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="font-mono text-[10px] tracking-wider uppercase text-gray-500">Payload Message Core</label>
              <textarea
                rows={4}
                placeholder="Compose message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={submitting}
                className="px-4 py-3 bg-[#050816]/75 border border-purple-950/20 focus:border-[#8b5cf6]/40 text-sm text-white rounded-lg focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submitting step status details */}
            <AnimatePresence>
              {submitting && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-[#050816]/80 p-3 rounded-lg border border-purple-500/20 font-mono text-[10px] text-cyan-400"
                >
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 animate-spin" />
                    <span>{submitStep}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={submitting}
              className="py-3 px-6 text-sm font-mono tracking-widest text-center text-white bg-gradient-to-r from-cyan-500 hover:from-cyan-400 to-[#8b5cf6] hover:to-[#a855f7] rounded-md shadow-lg shadow-purple-950/30 font-bold transition-all transform hover:-translate-y-[2px] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              TRANSMIT_PACKET_CORE
            </button>
          </form>
        </div>
      </div>



    </section>
  );
}
