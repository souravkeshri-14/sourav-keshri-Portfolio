/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineItem, Skill, Project, Achievement, Hobby, EducationItem, PersonalDetails } from './types';
// @ts-ignore
import profileAvatar from './assets/images/sourav_pro_pic.jpeg';

export const portfolioOwner = {
  name: 'Sourav Kumar Keshri',
  title: 'Electronics & Communication Engineer | Software Developer',
  tagline: 'A dedicated ECE student at B.I.T. Sindri with a strong foundation in Python, database systems, machine learning, and basic web technologies. Experienced in UAV robotics and systems integration.',
  company: 'B.I.T. Sindri',
  location: 'Dhanbad, Jharkhand, India',
  email: 'sourav.eceug24@bitsindri.ac.in',
  phone: '+91 9905965120',
  linkedin: 'https://www.linkedin.com/in/sourav-kumar-keshri/',
  github: 'https://github.com/souravkeshri-14',
  resumeUrl: 'https://drive.google.com/file/d/1_3TaQMZvuNOGTvh3f5Ng6EEeSLwbc9mu/view?usp=drivesdk',
  avatarUrl: profileAvatar,
};

export const personalDetailsData: PersonalDetails = {
  fatherName: 'Raju Prasad Keshri',
  fatherOccupation: 'Business Man',
  motherName: 'Shanta Devi',
  motherOccupation: 'House Wife',
  address: 'VILL:- KB Gate, PO:- KUJU, PS:- MANDU DIST:- RAMGARH, JHARKHAND',
  registrationNo: '24030460062',
  batch: '2024 - 2028',
};

export const educationData: EducationItem[] = [
  {
    id: 'edu1',
    level: 'B.Tech - Electronics and Communication Engineering',
    period: '2024 - 2028 (Expected)',
    board: 'JUT (Jharkhand University of Technology)',
    institute: 'B.I.T. Sindri, Dhanbad, Jharkhand',
    score: '7.15 CGPA (First Semester)',
  },
  {
    id: 'edu2',
    level: 'Senior Secondary (Class XII)',
    period: '2023 Passing',
    board: 'CBSE',
    institute: 'DAV Public School Ara Kuju Ramgarh, Jharkhand',
    score: '84.0%',
  },
  {
    id: 'edu3',
    level: 'Secondary School (Class X)',
    period: '2021 Passing',
    board: 'CBSE',
    institute: 'DAV Public School Ara Kuju Ramgarh, Jharkhand',
    score: '80.4%',
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 'exp1',
    role: 'Drone Bootcamp Participant',
    company: 'IIT (ISM) Dhanbad',
    period: 'June 2025',
    description: 'Participated in an intensive hands-on bootcamp focused on UAV systems, drone hardware, and sensor calibration.',
    achievements: [
      'Gained deep practical experience in drone electronics, ESCs, brush motor configurations, sensors, GPS module pairing, and communication transmitters.',
      'Collaborated within a multidisciplinary team to design, assemble, wire, and successfully test-fly a high-performance hexacopter using the Pixhawk S500 platform.',
      'Developed essential skills in spatial system integration, real-time telemetry debugging, and logical troubleshooting under field parameters.'
    ],
    skills: ['UAV Systems', 'Sensors', 'Pixhawk S500', 'Telemetry', 'GPS Navigation'],
    logoType: 'ai'
  },
  {
    id: 'exp2',
    role: 'Machine Learning Intern',
    company: 'Codtech IT Solutions Private Limited',
    period: '4 Weeks',
    description: 'Designed and evaluated analytical predictive machine learning models using core Python algorithms.',
    achievements: [
      'Authored supervised regression and classification models using Python scientific packages (Scikit-Learn, Pandas, NumPy).',
      'Assessed accuracy metrics and precision benchmarks to fine-tune prediction outputs on designated datasets.',
      'Presented detailed analytical summaries covering training dynamics, dataset feature extraction, and model convergence.'
    ],
    skills: ['Python', 'Machine Learning', 'Scikit-Learn', 'Feature Engineering', 'Data Analytics'],
    logoType: 'startup'
  },
  {
    id: 'exp3',
    role: 'Python Programming Intern',
    company: 'CodeSoft',
    period: '4 Weeks',
    description: 'Explored application logic, modular coding principles, and advanced scripting in Python.',
    achievements: [
      'Engineered dynamic Python applications implementing clean object-oriented concepts and customized functional models.',
      'Constructed algorithmic solutions using native Data Structures and Algorithms (DSA) to optimize computational runtimes.',
      'Integrated text-based terminal interfaces and file-stream handlers executing secure local operations.'
    ],
    skills: ['Python OOP', 'Data Structures', 'Algorithms', 'Scripting', 'File Stream I/O'],
    logoType: 'startup'
  },
  {
    id: 'exp4',
    role: 'Event Operations Intern',
    company: 'QR Celebration PVT. Ltd.',
    period: 'Internship Duration',
    description: 'Supported corporate and social event operations, facilitating logistics, program scheduling, and management tasks.',
    achievements: [
      'Coordinated program activities with external vendors, helping secure timely execution pathways.',
      'Ensured high efficiency of event operational logistics, satisfying diverse crowd expectations.',
      'Exhibited high resourcefulness and operational responsibility under dynamic layout conditions.'
    ],
    skills: ['Management Scale', 'Communication', 'Logistics Operations', 'Event Coordination'],
    logoType: 'startup'
  }
];

export const skillsData: Skill[] = [
  // Frontend
  { name: 'Basic Website Development', level: 75, iconName: 'Atom', category: 'frontend' },
  { name: 'HTML5 & CSS3', level: 85, iconName: 'FileCode2', category: 'frontend' },
  { name: 'React.js', level: 60, iconName: 'Sparkles', category: 'frontend' },
  { name: 'Tailwind CSS', level: 70, iconName: 'Tv', category: 'frontend' },
  
  // Backend & Languages
  { name: 'Basic Python Programming', level: 82, iconName: 'Server', category: 'backend' },
  { name: 'Data Structures & Algorithms', level: 78, iconName: 'Compass', category: 'backend' },
  { name: 'C / C++ Basics', level: 65, iconName: 'Cpu', category: 'backend' },
  { name: 'Object-Oriented Coding (OOP)', level: 75, iconName: 'Network', category: 'backend' },

  // Databases
  { name: 'DBMS Basics', level: 80, iconName: 'Database', category: 'databases' },
  { name: 'MySQL / SQL Queries', level: 78, iconName: 'Layers', category: 'databases' },
  { name: 'Relational Database Schema', level: 72, iconName: 'Zap', category: 'databases' },

  // IoT & Embedded / DevOps
  { name: 'UAV System Integration', level: 85, iconName: 'Cloud', category: 'devops' },
  { name: 'Sensors & GPS Calibration', level: 80, iconName: 'Package', category: 'devops' },
  { name: 'Pixhawk S500 / Flight Decks', level: 82, iconName: 'Globe', category: 'devops' },
  { name: 'Git & Github Basics', level: 75, iconName: 'Workflow', category: 'devops' },

  // AI & ML
  { name: 'Supervised ML Models', level: 80, iconName: 'BrainCircuit', category: 'ai_ml' },
  { name: 'Scikit-Learn Framework', level: 75, iconName: 'Workflow', category: 'ai_ml' },
  { name: 'Data Preprocessing', level: 78, iconName: 'SearchCode', category: 'ai_ml' },
  { name: 'NumPy & Pandas Analytics', level: 80, iconName: 'Code', category: 'ai_ml' },
];

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'UAV Hexacopter & Sensors System',
    subtitle: 'IIT ISM Drone Bootcamp Project',
    description: 'Designed, wired, and flight-tested an autonomous hexacopter using the Pixhawk S500 autopilot controller and telemetry GPS systems.',
    longDescription: 'As a Drone Bootcamp Participant at IIT ISM Dhanbad, successfully carried out the structural integration of a standard Pixhawk S500. This project included calibrating high-frequency internal sensors, compass orientation modules, and brushless motors through ESC signals. Deployed radio transmission parameters for real-time telemetry streaming to visualize altitudes, attitude indicators, and battery voltage.',
    category: 'AI / Intelligent Agent',
    techStack: ['Pixhawk S500', 'ESC Autopilot', 'Sensors Calibration', 'Telemetry Systems', 'GPS Navigation'],
    githubUrl: 'https://github.com/souravkeshri',
    liveUrl: '#',
    glowColor: 'from-[#8B5CF6] to-[#A855F7]',
    metric: { label: 'Bootcamp Duration', value: '1 Week' },
  },
  {
    id: 'proj2',
    title: 'Supervised Machine Learning Systems',
    subtitle: 'Codtech IT Solutions Internship Project',
    description: 'Developed and trained predictive statistical classifiers and regresors using standard Python scientific modules.',
    longDescription: 'Worked inside Python environments applying Scikit-Learn pipelines over targeted datasets. Developed detailed scripts to clean null indices, isolate features via NumPy and Pandas, and validate analytical outcomes. Analyzed performance graphs including confusion matrices, precision curves, and standard R-squared matrices to optimize neural models.',
    category: 'SaaS Pipeline',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Cleaning', 'Supervised Learning'],
    githubUrl: 'https://github.com/souravkeshri',
    liveUrl: '#',
    glowColor: 'from-[#3B82F6] to-[#06B6D4]',
    metric: { label: 'Models Built', value: 'Regression/Classify' },
  },
  {
    id: 'proj3',
    title: 'Python DSA & Logic Toolset',
    subtitle: 'CodeSoft Programming Projects',
    description: 'Created OOP script suites and algorithmic solutions resolving structured string, search, and list problems.',
    longDescription: 'Engineered clean Python modules showcasing foundational Data Structures & Algorithms (DSA). Implemented native sorting, searching algorithms, custom stack/queue arrays, and tree transversals. Embedded clean terminal utilities with file stream serialization, maintaining secure data persistence across sessions.',
    category: 'Fullstack Platform',
    techStack: ['Python 3', 'OOP design', 'Algorithms', 'DSA Execution', 'File I/O Stream'],
    githubUrl: 'https://github.com/souravkeshri',
    liveUrl: '#',
    glowColor: 'from-[#06B6D4] to-[#22C55E]',
    metric: { label: 'Internship Duration', value: '4 Weeks' },
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'ach1',
    title: 'BIT BY BIT Hackathon Participant',
    issuer: 'IIIT Bhagalpur (Enyugma 2026)',
    date: '2026',
    type: 'competition',
    description: 'Participated in the BIT BY BIT Hackathon at IIIT Bhagalpur, representing BIT Sindri, and successfully advanced to Round 2 (offline finals).'
  },
  {
    id: 'ach2',
    title: 'Student Ambassador Certificate of Excellence',
    issuer: 'Student Ambassador Program',
    date: 'Feb 2026',
    type: 'certification',
    description: 'Awarded Certificate of Excellence for outstanding leadership, communication, and impactful contribution during the Student Ambassador Program.'
  },
  {
    id: 'ach3',
    title: 'Sports Club Committee Member',
    issuer: 'BIT Sindri Sports Administration',
    date: '2024 - Present',
    type: 'award',
    description: 'Appointed and serving as an active member of the Sports Club at BIT Sindri, coordinating volleyball events and organizing college tournaments.'
  }
];

export const hobbiesData: Hobby[] = [
  {
    id: 'h1',
    name: 'Adventure Activities',
    iconName: 'Compass',
    description: 'Exploring heights, participating in campings, and engaging in high-energy adrenaline challenges to build resilience.',
    tag: 'Courage & Focus'
  },
  {
    id: 'h2',
    name: 'Exploring New Places',
    iconName: 'Compass',
    description: 'Traveling to fresh geographic terrains, understanding local culture, historical landmarks, and and broadening perspectives.',
    tag: 'Curiosity & Drive'
  },
  {
    id: 'h3',
    name: 'Playing Volleyball',
    iconName: 'Sword',
    description: 'Competing on court, formulating fast counter strategies, and fostering high-performance athletic team alignments.',
    tag: 'Team Dynamics'
  },
  {
    id: 'h4',
    name: 'Swimming',
    iconName: 'Camera',
    description: 'Coordinating high muscular stamina, persistent stroke tempos, and breathing locks for superb cardiovascular recovery.',
    tag: 'Physical Endurance'
  }
];
