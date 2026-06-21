/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  logoType: 'google' | 'meta' | 'stripe' | 'startup' | 'ai';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string;
  category: 'frontend' | 'backend' | 'databases' | 'devops' | 'ai_ml';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'AI / Intelligent Agent' | 'SaaS Pipeline' | 'Fullstack Platform';
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  glowColor: string;
  metric: {
    label: string;
    value: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'award' | 'certification' | 'competition';
  description: string;
}

export interface Hobby {
  id: string;
  name: string;
  iconName: string;
  description: string;
  tag: string;
}

export interface EducationItem {
  id: string;
  level: string;
  period: string;
  board: string;
  institute: string;
  score: string;
}

export interface PersonalDetails {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  address: string;
  registrationNo: string;
  batch: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
