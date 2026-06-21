/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Cpu, Sparkles, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';

export default function AIPersonaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Suggestions chips
  const suggestionPrompts = [
    'What are your primary skills?',
    'Tell me about your AI projects.',
    'Are you looking for contract gigs?',
    'Give me direct contact info.',
  ];

  // Initialize with greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'g1',
          role: 'model',
          text: "Hi there! I'm SK-Bot, Sourav's virtual AI Persona companion. I've indexed his engineering experience at NeuralForge, technical stack dependencies, and portfolio projects at my command. Ask me a question, or select a custom prompt below!",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, [messages]);

  // Scroll to bottom on updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    // Append user message
    const userMsg: ChatMessage = {
      id: 'usr_' + Date.now(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);
    setNotice('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: textToSend,
          messages: messages, // Send history
        }),
      });

      if (!response.ok) {
        throw new Error('Server connection resolved in error.');
      }

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        id: 'bot_' + Date.now(),
        role: 'model',
        text: data.text,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMsg]);
      
      // If server falls back to simulation because API key is missing, show a tiny helpful notice!
      if (data.simulated && data.notice) {
        setNotice('Notice: Bot currently active in simulated sandbox. (Set process.env.GEMINI_API_KEY to activate actual LLM!)');
      }

    } catch (err) {
      console.error('AI chat module error:', err);
      const errorMsg: ChatMessage = {
        id: 'err_' + Date.now(),
        role: 'model',
        text: "I apologize, but I experienced an error syncing with Sourav's cloud memory node. Try refreshing your link or contacting him at souravkeshri14@gmail.com!",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Absolute Launcher button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="ai-bot-floating-btn"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 hover:from-cyan-400 to-[#8b5cf6] hover:to-[#a855f7] flex items-center justify-center text-white shadow-xl shadow-purple-500/25 border border-white/10 hover:shadow-cyan-500/10 hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300 relative group pointer-events-auto"
        >
          {isOpen ? <X className="w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} /> : <MessageSquare className="w-5 h-5" />}
          
          {/* Breathing Aura rings around button */}
          <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-15 scale-125" style={{ animationDuration: '3s' }} />
          
          {/* Tooltip on hover */}
          <span className="absolute left-16 bg-[#040815]/95 px-3 py-1.5 rounded-lg border border-purple-500/20 text-[10px] font-mono tracking-widest text-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
            CHAT_WITH_SK_BOT
          </span>
        </button>
      </div>

      {/* Slide-out tray panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, y: 50, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ zIndex: 100 }}
            className="fixed bottom-24 left-6 w-80 sm:w-96 rounded-2xl glassmorphism border-purple-500/35 overflow-hidden flex flex-col shadow-2xl h-[500px]"
          >
            {/* Thread Header details */}
            <div className="p-4 bg-gradient-to-r from-cyan-950/40 to-purple-950/40 border-b border-gray-950 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/20 flex items-center justify-center relative">
                  <Cpu className="w-4.5 h-4.5 text-cyan-400 animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400 absolute bottom-0 right-0 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-sm text-white tracking-wide">SK-Bot Agent</div>
                  <span className="font-mono text-[9px] text-[#a855f7] tracking-widest uppercase font-semibold">Active_Aether_Core</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse mr-1" />
                <span className="font-mono text-[9px] text-emerald-400">ONLINE</span>
              </div>
            </div>

            {/* Sandbox Notice Banner if present */}
            {notice && (
              <div className="bg-amber-950/30 border-b border-amber-500/20 p-2 flex gap-1.5 items-center font-mono text-[9px] text-amber-300 text-left">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{notice}</span>
              </div>
            )}

            {/* Thread Message Log body */}
            <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4 bg-[#050816]/75">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col max-w-[85%] ${
                    m.role === 'user' ? 'self-end text-right' : 'self-start text-left'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 justify-normal">
                    <span className="font-mono text-[8px] text-gray-500">
                      {m.role === 'model' ? 'SK_INTEL' : 'VISITOR'} // {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div
                    className={`p-3 rounded-xl text-xs leading-relaxed break-words ${
                      m.role === 'user'
                        ? 'bg-purple-950/50 border border-purple-500/20 text-purple-200 rounded-tr-none'
                        : 'bg-slate-900/40 border border-[#1f293d]/50 text-gray-300 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Loader Typing animation */}
              {loading && (
                <div className="flex flex-col max-w-[80%] self-start text-left">
                  <span className="font-mono text-[8px] text-gray-500 mb-1">SK_INTEL // processing...</span>
                  <div className="p-3.5 rounded-xl bg-slate-900/40 border border-gray-900 text-cyan-400 text-xs flex items-center gap-1.5 rounded-tl-none">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span className="font-mono text-[10px] tracking-wider uppercase animate-pulse">generating_vectors</span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Sugestion Quick Chips */}
            <div className="px-4 py-2 bg-[#050816] flex gap-1.5 overflow-x-auto select-none no-scrollbar shrink-0 border-t border-gray-950">
              {suggestionPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => handleSendMessage(p)}
                  className="px-2.5 py-1 text-[10px] font-mono tracking-wider bg-slate-900 hover:bg-[#111827] border border-gray-800 text-gray-400 hover:text-white rounded-md whitespace-nowrap cursor-pointer transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Thread Text Entry form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 bg-slate-950 border-t border-gray-950 flex gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={loading}
                placeholder="Ask SK AI anything..."
                className="flex-grow px-3 py-2 bg-[#050816] border border-gray-900 focus:border-purple-500/30 text-xs text-white rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || loading}
                className="p-2 bg-gradient-to-tr from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-lg cursor-pointer disabled:opacity-40 select-none shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
