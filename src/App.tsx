/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// Subcomponents import
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import ProjectsTable from './components/ProjectsTable';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import ContactForm from './components/ContactForm';
import AIPersonaWidget from './components/AIPersonaWidget';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Monitor center screen viewport position to highlight active navbar section elements
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'achievements', 'hobbies', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -40% 0px', // Dominant reading section focal scale
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-x-hidden antialiased font-sans flex flex-col justify-between">
      
      {/* 60fps Ambient interactive dots particle background */}
      <ParticleBackground />

      {/* Slide-out smart AI chatbot assistant */}
      <AIPersonaWidget />

      {/* Sticky top headers */}
      <Navbar onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      {/* Entire main layout wrappers */}
      <main className="flex-grow flex flex-col select-none relative z-10">
        
        {/* Sections listing */}
        <Hero onScrollToSection={handleScrollToSection} />
        
        <About />
        
        <ExperienceTimeline />
        
        <SkillsGrid />
        
        <ProjectsTable />
        
        <Achievements />
        
        <Hobbies />
        
        <ContactForm />

      </main>

      {/* Footer details */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
