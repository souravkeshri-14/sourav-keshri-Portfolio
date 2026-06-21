/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// @ts-ignore
let _filename = '';
try {
  // @ts-ignore
  _filename = __filename;
} catch {
  _filename = fileURLToPath(import.meta.url);
}

// @ts-ignore
let _dirname = '';
try {
  // @ts-ignore
  _dirname = __dirname;
} catch {
  _dirname = path.dirname(_filename);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Set up lazy-loaded Gemini AI client
  let aiClient: GoogleGenAI | null = null;

  function getGeminiClient() {
    if (aiClient) return aiClient;
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
    return aiClient;
  }

  // API end points must come FIRST
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'active',
      timestamp: new Date().toISOString(),
      owner: 'Sourav Keshri',
      aiConnected: getGeminiClient() !== null,
    });
  });

  // Chat with AI Portfolio Assistant (Persona: Sourav Keshri's Agent Bot)
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      if (!userMessage) {
        return res.status(400).json({ error: 'userMessage parameter is required.' });
      }

      const systemInstruction = `
        You are SK-Bot, the official intelligent AI Persona of Sourav Kumar Keshri (an Electronics and Communication Engineering student and developer).
        Your purpose is to answer inquiries from prospective clients, recruiters, and technical leads visiting Sourav's website. Show extreme poise, technical depth, and engaging professional energy.
        
        CRITICAL INFORMATION ABOUT SOURAV:
        - University: B.I.T. Sindri, Dhanbad, Jharkhand. (Under Jharkhand University of Technology - JUT). Class of 2024-2028 batch.
        - Primary Title: Electronics & Communication Engineering Undergraduate | Python & Web Developer.
        - Career & Practical Journey:
          * Drone Bootcamp Participant at IIT (ISM) Dhanbad (June 2025): Deployed UAV electronics, flight controllers, GPS transmitters, and calibrated compass orientation parameters for a Pixhawk S500 Hexacopter.
          * Machine Learning Intern at Codtech IT Solutions: Deployed dataset-preprocessing frameworks, regression classifiers, and accuracy matrix analytics tools in Python.
          * Python Programming Intern at CodeSoft: Fabricated Data Structures, Algorithms (DSA) toolsets, and file IO streams.
          * Event Operations Intern at QR Celebration PVT. Ltd.
        - Core Technical Skills: Basic Python, Data Structures & Algorithms (DSA), Basic website development, HTML5/CSS3, JavaScript basics, MySQL (DBMS), UAV assembly, embedded sensors, Pixhawk S500 calibration, and Machine Learning models using Scikit-Learn, NumPy, and Pandas.
        - Achievements & Merits: 
          * Participated in BIT BY BIT Hackathon at IIIT Bhagalpur (Enyugma 2026), advancing to Round 2 (offline finals).
          * Student Ambassador Program: Awarded Certificate of Excellence for leadership, communication, and impact (Feb 2026).
          * Active Member of Sports Club at BIT Sindri.
        - Personality: Curious, hard-working, persevering, managerial-led, collaborative, and deeply analytical.
        - Location: Dhanbad, Jharkhand, India. Open to interns, remote software developer opportunities, or engineering consultation.

        CONVERSATIONAL GUIDELINES:
        1. Speak in the first person on behalf of Sourav's virtual persona ("I am currently a B.Tech ECE student...", "At my Drone Bootcamp at IIT ISM...").
        2. Keep your responses highly constructive, professional, and crisp. Deliver answers in 2-3 short, highly structured paragraphs or clean bullet lists. Do not write monolithic walls of text.
        3. Keep the total word count under 150 words per response.
        4. Focus answers strictly on Sourav's technical background, projects, leadership values, and work availability. If a user asks about recipe instructions, weather, general news, or unrelated sports, politely guide them back.
      `;

      const client = getGeminiClient();

      if (!client) {
        // Safe, smart simulated responses to avoid breaking UI when API key is missing.
        // Provides beautiful context-aware mock answers!
        console.log('Gemini API key is not configured. Utilizing high-fidelity AI simulation fallback.');
        const text = userMessage.toLowerCase();
        let reply = "I'm Sourav's virtual advisor guide! I can confirm he built this elegant portfolio using React, motion, and Express proxy channels. How can I help you regarding his qualifications or drone projects today?";
        
        if (text.includes('project') || text.includes('portfolio') || text.includes('built')) {
          reply = "Sourav has built several key projects, including his **UAV Hexacopter & Sensors System** using the Pixhawk S500 flight deck (designed at IIT ISM Dhanbad's Bootcamp), and a **Supervised Machine Learning Systems** model toolkit using Python, Scikit-Learn, NumPy, and Pandas. Check out the Projects section below!";
        } else if (text.includes('skill') || text.includes('tech') || text.includes('language') || text.includes('stack')) {
          reply = "Sourav's primary technology suite includes **Python, Data Structures & Algorithms, Basic Website Development (HTML/CSS & React)**, and **DBMS using MySQL**. He also specializes in **UAV Drone Integration, Sensors & GPS Calibration**, and **Machine Learning models** with Scikit-Learn!";
        } else if (text.includes('experience') || text.includes('intern') || text.includes('work') || text.includes('company') || text.includes('resume')) {
          reply = "Sourav has completed internships as a **Machine Learning Intern at Codtech IT Solutions** (predictive modeling with Python) and a **Python Programming Intern at CodeSoft** (constructing DSA scripts). He also participated in a hands-on **Drone Bootcamp at IIT ISM Dhanbad** and operated as an Event Intern. Explore his Experience Timeline!";
        } else if (text.includes('contact') || text.includes('hire') || text.includes('email') || text.includes('reach') || text.includes('phone')) {
          reply = "You can get in touch with Sourav instantly! Either send a dispatch using the secure form in the **Contact** section, or email him at **sourav.eceug24@bitsindri.ac.in**. His contact number is **+91 9905965120**.";
        } else if (text.includes('achieve') || text.includes('award') || text.includes('certif') || text.includes('hackathon')) {
          reply = "Sourav participated in the **BIT BY BIT Hackathon at IIIT Bhagalpur (Enyugma 2026)** and successfully reached the Round 2 offline finals! He was also awarded the **Student Ambassador Certificate of Excellence** (Feb 2026) for exceptional leadership, and is a committed Sports Club member.";
        } else if (text.includes('edu') || text.includes('college') || text.includes('gpa') || text.includes('school')) {
          reply = "Sourav is pursuing his **B.Tech in Electronics and Communication Engineering (2024 - 2028)** at **B.I.T. Sindri, Dhanbad** (Jharkhand University of Technology) with a first semester GPA of **7.15 CGPA**. He completed Class XII with **84%** and Class X with **80.4%** at DAV Public School Ara Kuju Ramgarh.";
        }

        return res.json({
          text: reply,
          simulated: true,
          notice: 'This is a simulated AI persona helper. Provide a GEMINI_API_KEY in the environment settings to activate real LLM responses!',
        });
      }

      // Convert dialog history to Gemini's expected contents format if provided,
      // or simply run generateContent with the systemInstruction
      const contentsList: any[] = [];
      
      if (messages && Array.isArray(messages)) {
        // Gather prior messages (max 6 to prevent token inflation)
        const recentHistory = messages.slice(-5);
        recentHistory.forEach((m: any) => {
          if (m.role === 'user' || m.role === 'model') {
            contentsList.push({
              role: m.role,
              parts: [{ text: m.text }],
            });
          }
        });
      }
      
      // Append the latest user message
      contentsList.push({
        role: 'user',
        parts: [{ text: userMessage }],
      });

      const response = await client.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contentsList,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({
        text: response.text || "I apologize, but I couldn't formulate a response. Let me know if you would like me to discuss other tech stacks of Sourav!",
        simulated: false,
      });

    } catch (error: any) {
      console.error('Error in /api/chat route:', error);
      res.status(500).json({
        error: 'An error occurred during AI content generation.',
        details: error.message || error,
      });
    }
  });

  // Client static assets serving or live development server logic
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Fullstack Server] Active and running on port ${PORT}`);
    console.log(`[Env Check] GEMINI_API_KEY is ${process.env.GEMINI_API_KEY ? 'Present' : 'Missing'}`);
  });
}

startServer();
