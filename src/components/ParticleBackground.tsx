/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Density calculation based on screen dimensions
    let particleCount = 65;
    const maxLinkDistance = 120;
    const mouseLinkDistance = 170;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Scale count appropriately for mobile screens
      if (window.innerWidth < 768) {
        particleCount = 30;
      } else {
        particleCount = 75;
      }
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4, // Soft drift speed
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // Listen to resize and pointer events
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    handleResize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const mouse = mouseRef.current;

      // Update positions and render dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce or wrap edges
        if (p.x < 0 || p.x > w) p.vx = -p.vx;
        if (p.y < 0 || p.y > h) p.vy = -p.vy;

        // Clip constraints just in case
        if (p.x < 0) p.x = 0;
        if (p.x > w) p.x = w;
        if (p.y < 0) p.y = 0;
        if (p.y > h) p.y = h;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.4)'; // Transparent Purple Accent
        ctx.fill();

        // Connect lines between nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < maxLinkDistance) {
            const opacity = (1 - dist / maxLinkDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`; // Violet glow lines
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Magnetic link to cursor
        if (mouse.x !== null && mouse.y !== null) {
          const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mDist < mouseLinkDistance) {
            const mOpacity = (1 - mDist / mouseLinkDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Dynamic cyan-to-violet hover link
            ctx.strokeStyle = `rgba(6, 182, 212, ${mOpacity})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();

            // Magnet attraction force
            const force = (mouseLinkDistance - mDist) / mouseLinkDistance * 0.04;
            p.x += (mouse.x - p.x) * force;
            p.y += (mouse.y - p.y) * force;
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-ambient"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050816]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
